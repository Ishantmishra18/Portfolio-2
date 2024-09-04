import React from 'react';

const Button = ({ label = 'Contact', onClick, className}) => {
  return (
    <div 
      className={`px-8 py-2 h-[10vh] cursor-pointer rounded-full bg-neutral-950 shadow-neutral-300 shadow-lg text-white flex gap-8 items-center group duration-300 ${className}`} 
      onClick={onClick}
    >
      <h1 className='uppercase'>{label}</h1>
      <div className="h-[0.5vw] aspect-square bg-neutral-300 rounded-full group-hover:h-[2.2vw] duration-300"></div>
    </div>
  );
}

export default Button;
