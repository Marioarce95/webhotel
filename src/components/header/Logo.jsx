import React from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        className="h-8"
      >
        <path
          d="M16 4L28 28H4L16 4Z"
          fill="#2A3B47"
          stroke="#FF7212"
          strokeWidth="2"
        />
        <path
          d="M16 12L22 24H10L16 12Z"
          fill="#FF7212"
        />
      </svg>
    </div>
  );
};

export default Logo;