
import React from 'react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const handleScrollToCourses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-6 border border-teal-100 shadow-sm">
              🚀 الدورة رقم #1 لاجتياز STEP في 2025
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              طريقك الأسرع <br/>
              لتحقيق <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">الدرجة الكاملة</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              انضم إلى آلاف الطلاب الذين حققوا أهدافهم الأكاديمية والمهنية مع أكاديمية عايد. مناهج تفاعلية، تجميعات حصرية، ودعم ذكي يضمن لك التفوق.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={onRegisterClick}
                className="bg-teal-600 text-white font-bold py-4 px-10 rounded-xl text-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-200"
              >
                ابدأ رحلة النجاح
              </button>
              <a
                href="#courses"
                onClick={handleScrollToCourses}
                className="bg-white text-slate-700 border border-slate-200 font-bold py-4 px-10 rounded-xl text-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center"
              >
                استعرض الباقات
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span>4.9/5 تقييم الطلاب</span>
              </div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div>+5000 طالب وطالبة</div>
            </div>
          </div>
          <div className="hidden lg:block order-1 lg:order-2 relative">
             <div className="absolute -inset-4 bg-teal-600/20 rounded-2xl transform rotate-3 blur-lg"></div>
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" alt="طلاب يدرسون" className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] z-10" />
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl z-20 animate-bounce-slow">
               <div className="flex items-center gap-3">
                 <div className="bg-green-100 p-2 rounded-full">
                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                   <p className="font-bold text-slate-800">ضمان ذهبي</p>
                   <p className="text-xs text-slate-500">جودة المحتوى 100%</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
