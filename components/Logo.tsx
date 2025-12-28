
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-16 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="أكاديمية عايد - Ayed Academy" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = 'none';
          // Fallback text if image is missing
          if (e.currentTarget.parentElement) {
             e.currentTarget.parentElement.innerText = "أكاديمية عايد";
             e.currentTarget.parentElement.className = "text-xl font-bold text-slate-900";
          }
        }}
      />
    </div>
  );
};

export default Logo;
