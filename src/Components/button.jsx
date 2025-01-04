import React from 'react';

const Button = ({ label = 'Contact', onClick, className, variant = 'dark' }) => {
  const buttonStyles =
    variant === 'dark'
      ? 'bg-neutral-950 text-white shadow-neutral-300'
      : 'bg-white text-black shadow-neutral-500';

  return (
    <div
      className={`px-8 py-6 h-[6vh] md:h-[6vh] cursor-pointer rounded-full shadow-lg flex gap-8 items-center group duration-300 ${buttonStyles} ${className}`}
      onClick={onClick}
    >
      <h1 className='uppercase whitespace-nowrap'>{label}</h1>
      <div className="h-[0.5vw] aspect-square bg-neutral-300 rounded-full group-hover:h-[2.2vw] duration-300 md:h-[0.8rem] md:group-hover:h-[1.5rem]"></div>
    </div>
  );
};

export default Button;
