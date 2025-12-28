
import React from 'react';
import type { Resource } from '../types';
import StarIcon from './icons/StarIcon';

const resourcePlan: Resource = {
  id: 'step-files-only',
  title: 'باقة التجميعات والنماذج',
  description: 'هل تذاكر بنفسك وتحتاج فقط للمصادر الموثوقة؟ هذه الباقة لك.',
  priceSAR: 99,
  priceStars: 500,
  fileCount: 50,
  type: 'resource',
  features: [
    'تجميعات 2024-2025 المحدثة.',
    'نماذج اختبارات سابقة مع الحلول.',
    'ملفات PDF للقواعد والكلمات الهامة.',
    'بدون شرح فيديو وبدون متابعة.',
    'وصول فوري للمكتبة الرقمية.',
  ],
};

interface ResourcesProps {
  onRegisterClick: (resource: Resource) => void;
}

const Resources: React.FC<ResourcesProps> = ({ onRegisterClick }) => {
  return (
    <section id="resources" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transform transition-transform duration-500 hover:shadow-3xl">
            
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1546&q=80" 
                    alt="Study Resources" 
                    className="w-full h-full object-cover transform scale-105"
                />
                {/* Dark Overlay gradient for readability */}
                <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800/80"></div>
                
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                
                {/* Content Side */}
                <div className="lg:w-3/5 text-center lg:text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-full text-sm font-bold mb-8 backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                        </span>
                        خيار اقتصادي للطلاب
                    </div>
                    
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                        تحتاج <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">التجميعات والملفات</span><br/>بدون شرح؟
                    </h2>
                    
                    <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                        {resourcePlan.description} نوفر لك مكتبة متكاملة ومحدثة دورياً لتضمن لك التدريب على أحدث الأسئلة.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 text-left">
                        {resourcePlan.features.map((f, i) => (
                        <div key={i} className="flex items-start lg:justify-start justify-center group">
                            <div className="bg-teal-500/20 p-1.5 rounded-lg ml-3 mt-0.5 group-hover:bg-teal-500/30 transition-colors">
                                <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{f}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Card Side */}
                <div className="lg:w-2/5 w-full">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-all duration-300">
                        
                        {/* Shine effect on hover */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

                        <div className="text-center relative z-10">
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4">استثمار ذكي لمستقبلك</p>
                            
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <span className="text-7xl font-black text-white tracking-tighter drop-shadow-lg">{resourcePlan.priceSAR}</span>
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-2xl font-bold text-teal-400">ريال</span>
                                    <span className="text-sm text-slate-400 line-through decoration-slate-500/50">199 ريال</span>
                                </div>
                            </div>

                             <div className="inline-flex items-center justify-center gap-2 bg-slate-900/50 rounded-xl px-4 py-2 mb-8 border border-white/5 w-full">
                                <span className="text-slate-300 text-sm">متاح الدفع بـ</span>
                                <span className="text-amber-400 font-bold text-xl">{resourcePlan.priceStars}</span>
                                <StarIcon className="w-5 h-5 text-amber-400" />
                                <span className="text-slate-300 text-sm">تيليجرام</span>
                            </div>

                            <button
                                onClick={() => onRegisterClick(resourcePlan)}
                                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-teal-900/50 hover:shadow-teal-900/70 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2 group"
                            >
                                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                اشترِ الملفات الآن
                            </button>
                            
                            <p className="text-xs text-slate-400 mt-5 flex items-center justify-center gap-1.5 opacity-80">
                                <svg className="w-3.5 h-3.5 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                وصول فوري للقروب والقناة الخاصة
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
