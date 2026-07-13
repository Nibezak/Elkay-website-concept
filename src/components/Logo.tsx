import React, { useState } from 'react';

export default function Logo({ isFooter = false }: { isFooter?: boolean }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={isFooter ? "text-[#012E1B] flex items-center justify-center w-full h-full bg-white rounded-[12px] p-2" : "text-[#012E1B] flex items-center p-1"}>
        <svg width="120" height="40" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30V10H30V14H15V18H28V22H15V26H30V30H10Z" fill="currentColor"/>
          <path d="M35 30V10H40V26H55V30H35Z" fill="currentColor"/>
          <path d="M60 30V10H65V18H75L82 30H76L71 20H65V30H60Z" fill="currentColor"/>
          <path d="M85 30L95 10H101L111 30H105L102 24H93L90 30H85ZM95 19L97.5 14L100 19H95Z" fill="currentColor"/>
          <path d="M115 10H121L128 20L135 10H141L131 24V30H125V24L115 10Z" fill="currentColor"/>
        </svg>
      </div>
    );
  }

  return (
    <img 
      src="/elkaylogo.png" 
      alt="Elkay Logo" 
      className={isFooter ? "h-full w-auto object-contain bg-white rounded-[12px] p-2" : "h-[40px] w-auto object-contain p-1"} 
      onError={() => setHasError(true)}
    />
  );
}
