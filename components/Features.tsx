
import React from 'react';
import BookOpenIcon from './icons/BookOpenIcon';
import ClockIcon from './icons/ClockIcon';
import UsersIcon from './icons/UsersIcon';
import StarIcon from './icons/StarIcon';

const features = [
  {
    icon: <BookOpenIcon />,
    title: 'محتوى مُحدّث وشامل',
    description: 'نغطي جميع أقسام اختبار STEP بأحدث المواد التعليمية لعام 2025.',
  },
  {
    icon: <UsersIcon />,
    title: 'شرح مبسط وفعال',
    description: 'أسلوب تدريس يركز على تبسيط المفاهيم المعقدة لضمان استيعابك الكامل.',
  },
  {
    icon: <ClockIcon />,
    title: 'اختبارات تجريبية دورية',
    description: 'اختبر مستواك بشكل مستمر من خلال محاكاة واقعية لبيئة الاختبار الفعلي.',
  },
  {
    icon: <StarIcon />,
    title: 'دعم مباشر عبر تيليجرام',
    description: 'تواصل مباشر مع المدربين والطلاب الآخرين في قناة خاصة للمشتركين.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">لماذا تختار أكاديمية عايد؟</h2>
            <p className="mt-4 text-slate-600">نحن نقدم لك الأدوات والدعم اللازمين لتحقيق النجاح.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="mx-auto bg-teal-100 text-teal-600 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
