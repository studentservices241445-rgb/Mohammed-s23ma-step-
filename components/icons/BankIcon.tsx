
import React from 'react';

const BankIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0a5 5 0 01-10 0m10 0H7m10 0v4m-10-4v4m10 4v2m-10-2v2m5-4h.01M12 3v2m0 14V5m0 0H9m3 0h3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M3 18h18" />
  </svg>
);

export default BankIcon;
