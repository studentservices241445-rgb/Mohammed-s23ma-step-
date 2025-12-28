
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'محمد الأحمدي',
    avatarUrl: 'https://picsum.photos/seed/101/100/100',
    quote: 'الدورة كانت ممتازة وفاقت توقعاتي. الشرح واضح والتمارين مفيدة جدًا. تمكنت من رفع درجتي 15 نقطة بفضل هذه الدورة.',
  },
  {
    id: 2,
    name: 'فاطمة الزهراني',
    avatarUrl: 'https://picsum.photos/seed/102/100/100',
    quote: 'أفضل استثمار قمت به للاستعداد لاختبار STEP. الدعم المستمر على تيليجرام كان له دور كبير في تحفيزي وفهمي للمادة.',
  },
  {
    id: 3,
    name: 'عبدالله العتيبي',
    avatarUrl: 'https://picsum.photos/seed/103/100/100',
    quote: 'المحتوى مُحدّث ويواكب آخر التغييرات في الاختبار. أنصح بها بشدة لكل من يهدف للحصول على درجة عالية.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800">ماذا يقول طلابنا؟</h2>
          <p className="mt-4 text-slate-600">آراء من وثقوا بنا وحققوا أهدافهم.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                <div className="mr-4">
                  <h4 className="font-bold text-lg text-slate-800">{testimonial.name}</h4>
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
