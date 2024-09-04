import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../button';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.to('.landright img', {
      y: -100,
      scale:1.05,
      scrollTrigger: {
        trigger: '.landright',
        start: 'top top', // When the trigger starts
        end: 'bottom top', // When the trigger ends
        scrub: true,
      },
    });

    // Animate "I create" to the left and "websites" to the right on scroll
    gsap.to('.left h1:nth-of-type(1)', {
      x: -200, 
      filter:'blur(22px)',
      scrollTrigger: {
        trigger: '.landright',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to('.left h1:nth-of-type(2)', {
      x: 200,
     filter:'blur(22px)',
      scrollTrigger: {
        trigger: '.landright',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bg-white w-screen h-screen pt-[18vh] flex flex-col justify-between">
      <div className="flex items-start justify-between px-[5%]">
        <div className="left w-[50%] relative z-30 mix-blend-difference text-white">
          <h1 className="text-[7vw] leading-[10vw] uppercase ml-32 tracking-tighter scale-y-12 mix-blend-difference">
            I create
          </h1>
          <h1 className="text-[7vw] uppercase mt-[-5vw] flex flex-col ml-[21vw] items-start tracking-tighter whitespace-nowrap scale-y-12">
            websites
            <h4 className="text-[2vw] mt-[-7vw] tracking-normal">for you</h4>
          </h1>
        </div>
        <div className="landright w-[40%]">
          <img
            src="/me/main.webp"
            alt=""
            className="relative right-10 object-cover h-[50vh] w-[30vw] z-20 rounded-lg hover:rotate-3 hover:scale-110 duration-200 hover:drop-shadow-2xl shadow-black"
          />
        </div>
      </div>
      <div className="actions w-screen h-[20vh] border-t-[1.5px] border-gray-400 flex justify-around items-center">
        <Button label='download CV' className='h-[8vh]'/>
        <button>hire me!</button>
        <button>send me a message</button>
      </div>
    </div>
  );
};

export default LandingPage;
