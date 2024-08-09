import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skillset = () => {

  useEffect(() => {
    gsap.to('.service1 .skillslund', {
      xPercent: -75, // Move the element to the left by 100%
      scrollTrigger: {
        trigger: '.service1',
        start: 'top top',  // Animation starts when .service1 is at the top of the viewport
        end: 'top -100%',
             // Animation ends when scrolling an additional 100% of the viewport height
        scrub: 2,       // Sync animation with the scroll position
        markers: true,     // Show markers for debuggin
        
      },
    });
  }, []);

  return (
    <div className='service1 h-[100vh] w-screen overflow-x-hidden' id='ser'>
      <h1 className='title'>Skill Set</h1>
      <div className="skillslund w-[250vw] h-[40vh] bg-cyan-800 text-black text-[300px] whitespace-nowrap">
        Hello everyone, how are you guys?
      </div>
    </div>
  );
}

export default Skillset;
