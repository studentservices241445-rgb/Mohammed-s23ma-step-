
import React, { useState } from 'react';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'ما هو اختبار STEP؟',
    answer: 'هو اختبار الكفاءة في اللغة الإنجليزية (Standardized Test of English Proficiency)، وهو مصمم لقياس مستوى الكفاءة في اللغة الإنجليزية لدى الأفراد الذين لغتهم الأم ليست الإنجليزية.',
  },
  {
    id: 2,
    question: 'كيف أحصل على نجوم تيليجرام للدفع؟',
    answer: 'يمكنك شراء نجوم تيليجرام مباشرة داخل التطبيق عبر متاجر Apple أو Google، أو من خلال بوت تيليجرام الرسمي @PremiumBot. العملية سهلة وتتم من خلال حسابك.',
  },
  {
    id: 3,
    question: 'متى يتم تفعيل اشتراكي بعد الدفع؟',
    answer: 'إذا قمت بالدفع عبر نجوم تيليجرام، يتم التفعيل فوريًا. أما في حال الدفع عبر التحويل البنكي، فيتم تفعيل اشتراكك خلال 24 ساعة كحد أقصى بعد التحقق من الإيصال.',
  },
  {
    id: 4,
    question: 'هل يمكنني استرداد المبلغ بعد الاشتراك؟',
    answer: 'نظرًا لطبيعة المحتوى الرقمي، لا يمكن استرداد المبلغ بعد تفعيل الاشتراك والوصول إلى مواد الدورة. نرجو التأكد من رغبتك قبل إتمام الدفع.',
  },
];

const AccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="w-full text-right flex justify-between items-center py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-800">{item.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-slate-600">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">أسئلة شائعة</h2>
          <p className="mt-4 text-slate-600">نجيب على استفساراتك الأكثر تكرارًا.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => toggleFAQ(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
