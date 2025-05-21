import React from 'react';

const AboutMe = () => {
  return (
    <div className='h-auto w-screen px-[10%] py-16 pb-[30vh] flex flex-col md:flex-row justify-between gap-10 md:gap-40 bg-white'>
      <h1 className='text-[8vw] md:text-[3vw] text-nowrap'>Ishant Mishra</h1>
      <p className='text-[4.5vw] md:text-[1.5vw] text-neutral-700'>
        I’m a creative Full Stack Web Designer and Developer who bridges design with robust development. With a strong passion for UI/UX principles, I craft stunning, user-centric interfaces — but my skills go far beyond the visuals. From intuitive frontends to scalable backends, I thrive on transforming ideas into fully functional, polished web experiences. I don’t believe 'first impression is the last,' but I do believe it’s crucial — and I make sure every detail counts.
      </p>
    </div>
  );
};

export default AboutMe;
