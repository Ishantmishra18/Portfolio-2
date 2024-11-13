import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../button';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.to('.landright img', {
      y: -100,
      scale: 1.05,
      scrollTrigger: {
        trigger: '.landright',
        start: 'top top', // When the trigger starts
        end: 'bottom top', // When the trigger ends
        scrub: true,
      },
    });

    // Animate "I create" to the left and "websites" to the right on scroll
    gsap.to('.textup', {
      x: -200,
      filter: 'blur(22px)',
      scrollTrigger: {
        trigger: '.landright',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.textdown', {
      x: 200,
      filter: 'blur(22px)',
      scrollTrigger: {
        trigger: '.landright',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  // Function to handle downloading the CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/files/resume.pdf';  // Path to your CV file
    link.download = 'Ishant_Mishra_CV.pdf';  // File name for the download
    link.click();
  };

  // Function to handle sending a message (opens Gmail)
  const handleSendMessage = () => {
    window.location.href = 'mailto:ishant8mishra@gmail.com';  // Opens Gmail with pre-filled email
  };

  return (
    <div className="select-none bg-white overflow-x-hidden w-screen h-screen md:pt-[18vh] pt-[10vh] md:pb-0 pb-[6vh] flex flex-col justify-between">
      <div className="landcont flex flex-col md:flex-row items-start justify-between px-[5%]">
        <div className="landleft w-auto relative z-30 mix-blend-difference text-white">
          <h1 className="textup text-[14vw] md:text-[7vw] leading-[15vw] md:leading-[10vw] uppercase ml-4 md:ml-32 tracking-tighter scale-y-12 mix-blend-difference whitespace-nowrap">
            I create
          </h1>
          <h1 className="textdown text-[14vw] md:text-[7vw] uppercase mt-[-4vw] flex flex-col ml-[18vw] md:ml-[21vw] items-start tracking-tighter whitespace-nowrap scale-y-12">
            websites
            <h4 className="text-[4.5vw] md:text-[2vw] mt-[-6vw] md:mt-[-3vw] tracking-normal">for you</h4>
          </h1>
        </div>
        <div className="landright w-full md:w-[40%] flex justify-center md:justify-end">
          <img
            src="/me/main.webp"
            alt=""
            className="relative right-0 md:right-3 object-cover h-[40vh] md:h-[50vh] w-[80vw] md:w-[30vw] z-20 rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="actions w-screen h-[20vh] border-t-[1.5px] border-gray-400 flex flex-col md:flex-row pt-2 justify-around items-center gap-4 md:gap-0">
        <Button label="download CV" className="h-[6vh] md:h-[8vh]" onClick={handleDownloadCV} />
        <button className="text-[5vw] md:text-base" onClick={handleSendMessage}>hire me!</button>
        <button className="text-[5vw] md:text-base" onClick={handleSendMessage}>send me a message</button>
      </div>
    </div>
  );
};

export default LandingPage;
