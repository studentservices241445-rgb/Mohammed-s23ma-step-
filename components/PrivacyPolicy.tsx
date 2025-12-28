
import React, { useEffect } from 'react';
import Logo from './Logo';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans" dir="rtl">
      {/* Simple Header for Privacy Page */}
      <header className="bg-white shadow-sm border-b border-slate-100 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div onClick={onBack} className="cursor-pointer">
            <Logo className="h-12 md:h-16" />
          </div>
          <button 
            onClick={onBack}
            className="text-teal-600 font-bold hover:text-teal-700 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            العودة للرئيسية
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">
            سياسة الخصوصية
          </h1>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">1. مقدمة</h2>
              <p>
                في "أكاديمية عايد"، نحن نولي أهمية قصوى لخصوصية بياناتك. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للمعلومات الشخصية التي تقدمها لنا عند استخدام موقعنا الإلكتروني أو التسجيل في دوراتنا لاختبار STEP.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">2. المعلومات التي نجمعها</h2>
              <p className="mb-2">لغرض إتمام عملية التسجيل وتقديم الخدمة التعليمية، قد نطلب منك المعلومات التالية:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>الاسم الكامل (لإصدار الشهادات والتواصل).</li>
                <li>رقم الهاتف والبريد الإلكتروني (لإرسال التحديثات والتواصل).</li>
                <li>اسم المستخدم في تطبيق تيليجرام (لإضافتك إلى القنوات والمجموعات الخاصة بالدورة).</li>
                <li>إيصالات الدفع البنكي (للتحقق من عملية الدفع).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">3. كيف نستخدم معلوماتك</h2>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li><strong>إدارة الحساب:</strong> لإنشاء حسابك ومنحك حق الوصول للمواد التعليمية.</li>
                <li><strong>التواصل:</strong> للرد على استفساراتك عبر البوت أو الدعم الفني.</li>
                <li><strong>التحسين:</strong> لتحليل آراء الطلاب وتطوير محتوى الدورات.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">4. الدفع والأمان المالي</h2>
              <p>
                نحن لا نقوم بتخزين أي بيانات لبطاقات الائتمان على خوادمنا. تتم عمليات الدفع إما عن طريق:
              </p>
              <ul className="list-disc list-inside space-y-1 mr-4 mt-2">
                <li><strong>التحويل البنكي المباشر:</strong> يتم التحقق من الإيصال يدوياً وبسرية تامة.</li>
                <li><strong>نجوم تيليجرام (Telegram Stars):</strong> تتم العملية بالكامل داخل بيئة تطبيق تيليجرام الآمنة والمشفرة.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">5. مشاركة البيانات</h2>
              <p>
                نحن لا نبيع أو نتاجر ببياناتك الشخصية مع أي أطراف ثالثة. تتم مشاركة البيانات فقط في الحدود الضيقة جداً اللازمة لتقديم الخدمة (مثلاً: استخدام معرف تيليجرام الخاص بك لإضافتك للقناة عبر البوت الآلي).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">6. حقوق الملكية الفكرية</h2>
              <p>
                جميع المواد التعليمية، الفيديوهات، والملفات المقدمة في الأكاديمية هي حقوق حصرية لأكاديمية عايد. التسجيل في الدورة يمنحك ترخيصاً شخصياً للاستخدام، ويمنع منعاً باتاً نشرها أو مشاركتها مع الآخرين، ويعرض المخالف للمساءلة القانونية.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-teal-700 mb-3">7. اتصل بنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
              </p>
              <div className="mt-2 flex flex-col gap-2 text-sm">
                <a href="mailto:support@ayed.academy" className="text-teal-600 hover:underline">support@ayed.academy</a>
                <a href="https://t.me/AyedStepBot" className="text-teal-600 hover:underline">بوت الدعم الفني على تيليجرام</a>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
             <button 
                onClick={onBack}
                className="bg-slate-800 text-white font-bold py-3 px-8 rounded-xl hover:bg-slate-900 transition-colors shadow-md"
              >
                الموافقة والعودة للموقع
              </button>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} أكاديمية عايد. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
