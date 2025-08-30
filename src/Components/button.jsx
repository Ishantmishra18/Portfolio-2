import React, { useState } from 'react';

const Button = ({ 
  label = 'Contact', 
  onClick, 
  className = '', 
  variant = 'dark',
  size = 'medium',
  icon = null 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  // Base styles
  const baseStyles = 'cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 ease-out transform-gpu font-medium tracking-wide';
  
  // Size variants
  const sizeStyles = {
    small: 'px-5 py-3 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg'
  };
  
  // Color variants
  const variantStyles = {
    dark: 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 shadow-lg hover:shadow-xl shadow-neutral-900/20 hover:shadow-neutral-900/30',
    light: 'bg-white text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 shadow-lg hover:shadow-xl shadow-neutral-400/20 hover:shadow-neutral-400/30',
    accent: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 active:from-blue-700 active:to-purple-800 shadow-lg hover:shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40'
  };
  
  // Animation state
  const pressedStyle = isPressed ? 'scale-95' : '';
  
  return (
    <div
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${pressedStyle} ${className} group`}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      <span className="whitespace-nowrap uppercase tracking-wider text-sm md:text-base font-medium">
        {label}
      </span>
      
      {icon ? (
        <span className="ml-3 transition-all duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : (
        <div className="ml-3 h-2 w-2 rounded-full bg-current opacity-70 transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:opacity-100"></div>
      )}
    </div>
  );
};

export default Button;