
import React, { useState, ChangeEvent } from 'react';
import type { Plan, PaymentMethod } from '../types';
import { PaymentMethod as PMEnum } from '../types';
import BankIcon from './icons/BankIcon';
import TelegramIcon from './icons/TelegramIcon';
import StarIcon from './icons/StarIcon';


interface RegistrationModalProps {
  onClose: () => void;
  selectedPlan: Plan | null;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose, selectedPlan }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PMEnum.None);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    telegramUser: '',
  });
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fallback if no plan selected (should rarely happen if triggered correctly)
  const displayPlan = selectedPlan || { 
      title: 'الباقة الشاملة VIP', 
      priceSAR: 500, 
      priceStars: 2500, 
      type: 'course' 
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && formData.fullName && formData.email && formData.telegramUser) {
      setStep(2);
    }
  };
  
  const handleSelectPayment = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setStep(3);
  };
  
  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(4);
    }, 1500);
  };
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-800">التسجيل في الدورة</h2>
                <div className="mt-2 bg-teal-50 border border-teal-100 p-3 rounded-lg inline-block text-right w-full">
                    <p className="text-xs text-slate-500">أنت تطلب:</p>
                    <p className="font-bold text-teal-700">{displayPlan.title}</p>
                    <p className="text-sm font-semibold">{displayPlan.priceSAR} ريال</p>
                </div>
            </div>
            <form className="space-y-4">
              <div>
                  <label className="text-xs font-semibold text-slate-600 mr-1">الاسم الكامل</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full p-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" required />
              </div>
              <div>
                  <label className="text-xs font-semibold text-slate-600 mr-1">البريد الإلكتروني</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" required />
              </div>
              <div>
                  <label className="text-xs font-semibold text-slate-600 mr-1">رقم الجوال</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-3 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" />
              </div>
              <div>
                  <label className="text-xs font-semibold text-slate-600 mr-1">يوزر تيليجرام (مهم لإضافتك للقناة)</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">@</span>
                    <input type="text" name="telegramUser" value={formData.telegramUser} onChange={handleInputChange} className="w-full p-3 pr-8 border border-slate-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" placeholder="username" required />
                  </div>
              </div>
              <button type="button" onClick={handleNextStep} className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors shadow-md">
                متابعة
              </button>
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">اختر طريقة الدفع</h2>
            <div className="space-y-4">
              <button onClick={() => handleSelectPayment(PMEnum.BankTransfer)} className="w-full flex items-center p-4 border-2 border-slate-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all group">
                <div className="bg-slate-100 p-2 rounded-full group-hover:bg-white transition-colors">
                    <BankIcon className="w-6 h-6 text-slate-600 group-hover:text-teal-600" />
                </div>
                <div className="mr-4 text-right">
                    <span className="font-bold text-slate-800 block">تحويل بنكي</span>
                    <span className="text-sm text-slate-500">{displayPlan.priceSAR} ريال سعودي</span>
                </div>
              </button>
              
              <button onClick={() => handleSelectPayment(PMEnum.TelegramStars)} className="w-full flex items-center p-4 border-2 border-slate-200 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all group">
                 <div className="bg-slate-100 p-2 rounded-full group-hover:bg-white transition-colors">
                    <TelegramIcon className="w-6 h-6 text-slate-600 group-hover:text-teal-600" />
                </div>
                <div className="mr-4 text-right">
                    <span className="font-bold text-slate-800 block">نجوم تيليجرام</span>
                    <span className="text-sm text-slate-500">{displayPlan.priceStars} نجمة (تفعيل فوري)</span>
                </div>
              </button>
            </div>
             <button onClick={() => setStep(1)} className="mt-6 w-full text-slate-500 hover:text-slate-800 py-2 text-sm">العودة للبيانات</button>
          </div>
        );
      case 3:
        if (paymentMethod === PMEnum.BankTransfer) {
          return (
            <div>
              <h2 className="text-xl font-bold text-center mb-4">الدفع عبر التحويل البنكي</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-sm text-yellow-800 mb-4 text-center">
                  المبلغ المطلوب: <span className="font-bold">{displayPlan.priceSAR} ريال</span>
              </div>
              
              <div className="bg-slate-100 p-4 rounded-lg text-right space-y-3 mb-6 border border-slate-200 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">البنك:</span>
                    <span className="font-semibold text-slate-800">بنك الإنماء</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">المستفيد:</span>
                    <span className="font-semibold text-slate-800">مؤسسة كريتيفا جلوبال</span>
                </div>
                <div className="pb-1">
                    <span className="text-slate-500 block mb-1">الآيبان (IBAN):</span>
                    <div className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
                        <span className="font-mono text-slate-800 text-xs dir-ltr select-all">SA4905000068206067557000</span>
                        <button className="text-teal-600 text-xs hover:underline">نسخ</button>
                    </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="receipt" className="block text-sm font-medium text-slate-700 mb-2">
                  ارفع إيصال التحويل
                </label>
                <div className="relative border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors">
                     <input type="file" id="receipt" onChange={handleFileChange} accept="image/*,.pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                     {receiptFile ? (
                         <div className="flex flex-col items-center text-green-600">
                             <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                             <p className="text-sm font-medium truncate w-full px-4">{receiptFile.name}</p>
                         </div>
                     ) : (
                         <div className="flex flex-col items-center text-slate-400">
                             <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                             <p className="text-sm">اضغط لرفع الصورة أو اسحب الملف هنا</p>
                         </div>
                     )}
                </div>
              </div>
              <button onClick={handleSubmit} disabled={!receiptFile || isLoading} className="w-full mt-6 bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md">
                {isLoading ? 'جاري التحقق...' : 'تأكيد الطلب وإرسال'}
              </button>
              <button onClick={() => setStep(2)} className="mt-4 w-full text-slate-500 hover:text-slate-800 text-sm">تغيير طريقة الدفع</button>
            </div>
          );
        }
        if (paymentMethod === PMEnum.TelegramStars) {
          return (
             <div>
              <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">الدفع بنجوم تيليجرام <StarIcon className="w-6 h-6 text-amber-500"/></h2>
              <div className="text-center bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                <p className="text-slate-600 mb-2">القيمة المطلوبة</p>
                <p className="text-3xl font-bold text-amber-500 mb-4">{displayPlan.priceStars} ⭐️</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                    سيتم فتح تطبيق تيليجرام لإتمام العملية. بمجرد الدفع، سيقوم البوت بإضافتك تلقائياً للقناة وإرسال المواد.
                </p>
              </div>
              
              <a href="https://t.me/YourBotName" target="_blank" rel="noopener noreferrer" onClick={handleSubmit} className="w-full flex items-center justify-center bg-[#24A1DE] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#208bbf] transition-colors shadow-lg shadow-blue-200">
                 <TelegramIcon className="w-5 h-5 ml-2"/>
                {isLoading ? 'جاري التوجيه...' : 'دفع الآن عبر Telegram'}
              </a>
               <button onClick={() => setStep(2)} className="mt-4 w-full text-slate-500 hover:text-slate-800 text-sm">تغيير طريقة الدفع</button>
            </div>
          );
        }
        return null;
        
      case 4:
        return (
            <div className="text-center py-6">
                <div className="mx-auto bg-green-100 text-green-600 rounded-full h-24 w-24 flex items-center justify-center mb-6 animate-pulse">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-slate-900">تم استلام طلبك بنجاح!</h2>
                <p className="text-teal-600 font-semibold mb-6">رقم الطلب: #STEP-{Math.floor(Math.random() * 10000)}</p>
                
                {paymentMethod === PMEnum.BankTransfer ? (
                    <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
                        <p>شكرًا لتسجيلك يا <strong>{formData.fullName}</strong>.</p>
                        <p className="mt-2">جاري مراجعة إيصال التحويل. ستصلك رسالة عبر تيليجرام لتفعيل الاشتراك خلال ساعات.</p>
                    </div>
                ) : (
                    <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600">
                         <p>تمت العملية بنجاح! تفقد تطبيق تيليجرام الآن، فقد أرسلنا لك رابط الوصول للمواد.</p>
                    </div>
                )}
                
                <button onClick={onClose} className="mt-8 w-full bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-900 transition-colors">
                    العودة للموقع
                </button>
            </div>
        )

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 left-4 text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 rounded-full p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {renderStep()}
      </div>
    </div>
  );
};

export default RegistrationModal;
