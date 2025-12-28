
import React from 'react';
import type { Course } from '../types';
import StarIcon from './icons/StarIcon';

const courses: Course[] = [
  {
    id: 'step-foundation',
    title: 'دورة التأسيس (STEP)',
    level: 'مبتدئ',
    description: 'ابدأ من الصفر. مخصصة لمن يحتاج تقوية أساسيات القواعد والمفردات قبل الانطلاق في التدريبات.',
    priceSAR: 299,
    priceStars: 1500,
    duration: 'شهر واحد',
    type: 'course',
    features: [
      'شرح مبسط لقواعد اللغة الإنجليزية الأساسية.',
      'تأسيس قوي في المفردات الأكثر تكراراً.',
      'مدخل لفهم أقسام اختبار STEP.',
      '3 اختبارات قصيرة لقياس التقدم.',
    ],
  },
  {
    id: 'step-comprehensive',
    title: 'الباقة الشاملة VIP',
    level: 'جميع المستويات',
    description: 'الدورة الأكثر مبيعاً. تغطية كاملة وشاملة لكل ما تحتاجه من الألف إلى الياء لضمان أعلى درجة.',
    priceSAR: 500,
    priceStars: 2500,
    duration: 'شهرين + متابعة',
    type: 'course',
    features: [
      'شرح تفصيلي واستراتيجيات حل ذكية.',
      'بنك أسئلة ضخم (2000+ سؤال).',
      'بثوث مباشرة أسبوعية مع المدرب.',
      'تصحيح كتابي وتحليل أداء فردي.',
      'ضمان التحديث المستمر لعام 2025.',
    ],
  },
  {
    id: 'step-intensive',
    title: 'المعسكر المكثف',
    level: 'متقدم',
    description: 'لديك اختبار قريب؟ هذا المعسكر مخصص للمراجعة النهائية والتدريب المكثف على التجميعات.',
    priceSAR: 350,
    priceStars: 1750,
    duration: 'أسبوعين مكثفة',
    type: 'course',
    features: [
      'التركيز الكامل على التجميعات الحديثة.',
      'اختبارات محاكية يومية (Simulations).',
      'ملفات "الزبدة" للمراجعة قبل الاختبار.',
      'قروب خاص للمناقشة السريعة.',
    ],
  },
];

interface CoursesProps {
  onRegisterClick: (course: Course) => void;
}

const Courses: React.FC<CoursesProps> = ({ onRegisterClick }) => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">باقات التدريب</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">اختر المسار المناسب لك</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">سواء كنت مبتدئاً أو مستعداً للاختبار، لدينا خطة تناسب مستواك ووقتك.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border ${course.id === 'step-comprehensive' ? 'border-teal-500 shadow-xl scale-105 z-10' : 'border-slate-100 hover:-translate-y-2'}`}>
              
              {course.id === 'step-comprehensive' && (
                <div className="bg-teal-600 text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  الأكثر طلباً 🔥
                </div>
              )}
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${course.level === 'مبتدئ' ? 'bg-blue-100 text-blue-700' : course.level === 'متقدم' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700'}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed min-h-[60px]">
                  {course.description}
                </p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">{course.priceSAR}</span>
                  <span className="text-slate-500 mr-2 text-lg">ريال</span>
                </div>
                 <div className="flex items-center text-amber-500 text-sm font-medium mb-8 bg-amber-50 w-fit px-3 py-1 rounded-lg">
                    <span>أو {course.priceStars}</span>
                    <StarIcon className="w-4 h-4 mr-1" />
                    <span>تيليجرام</span>
                  </div>

                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <svg className="w-5 h-5 text-teal-500 ml-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => onRegisterClick(course)}
                  className={`w-full py-3 rounded-xl font-bold transition-colors ${
                    course.id === 'step-comprehensive' 
                      ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-200' 
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  اختر الباقة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
