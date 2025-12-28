
import React from 'react';
import TelegramIcon from './icons/TelegramIcon';

interface FooterProps {
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') return; // Do nothing for empty links
    
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">أكاديمية عايد</h3>
            <p className="text-slate-400">نقدم دورات متخصصة لمساعدتك على اجتياز اختبار STEP بكفاءة وثقة.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-teal-400 transition-colors">الدورات المتاحة</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-teal-400 transition-colors">الأسئلة الشائعة</a></li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onPrivacyClick(); }} 
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <a href="mailto:support@ayed.academy" className="flex items-center hover:text-teal-400 transition-colors">
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  support@ayed.academy
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                 <a href="https://t.me/AyedStepBot" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-teal-400 transition-colors">
                  <TelegramIcon className="w-5 h-5 ml-2" />
                  دعم فني عبر تيليجرام
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} أكاديمية عايد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
