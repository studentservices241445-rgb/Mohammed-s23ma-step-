
import React, { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#', text: 'الرئيسية' },
    { href: '#courses', text: 'الدورات' },
    { href: '#resources', text: 'التجميعات والنماذج' },
    { href: '#testimonials', text: 'آراء الطلاب' },
    { href: '#faq', text: 'الأسئلة الشائعة' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-40 border-b border-slate-100">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:opacity-90 transition-opacity block">
          <Logo className="h-16 md:h-20" />
        </a>
        
        <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <a 
              key={link.text} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 font-medium hover:text-teal-600 transition-colors relative group"
            >
              {link.text}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4 space-x-reverse">
           <button
            onClick={onRegisterClick}
            className="hidden lg:block bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold py-2.5 px-6 rounded-full hover:shadow-lg hover:to-teal-600 transition-all duration-300 hover:-translate-y-0.5"
          >
            سجّل الآن
          </button>
          <button className="lg:hidden text-slate-700 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      
       {/* Mobile Menu */}
       {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0 z-50 animate-fade-in-down">
          <nav className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.text} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 font-medium hover:text-teal-600 w-full text-center py-2 hover:bg-slate-50 transition-colors"
              >
                {link.text}
              </a>
            ))}
            <button
              onClick={() => { onRegisterClick(); setIsMenuOpen(false); }}
              className="bg-teal-600 text-white font-bold py-3 px-10 rounded-full hover:bg-teal-700 transition-colors shadow-md mt-2"
            >
              سجّل الآن
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
