import React from 'react';

const AboutMe = () => {
  return (
    <div className='h-auto w-screen px-[10%] py-16 pb-[30vh] flex flex-col md:flex-row justify-between gap-10 md:gap-40 bg-white'>
      <h1 className='text-[8vw] md:text-[3vw] text-nowrap'>Ishant Mishra</h1>
      <p className='text-[4.5vw] md:text-[1.5vw] text-neutral-700'>
        A creative web designer and developer, I specialize in understanding and transforming visions into visuals. I love UI/UX principles which allow me to craft amazing interfaces. I don't believe that the "first impression is the last," but I do greatly believe that "first impressions are very important."
      </p>
    </div>
  );
};

export default AboutMe;
