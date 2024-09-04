import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skillset = () => {

  const Skills=['react','js','html','css','gsap','figma','express']

  useEffect(() => {
    // Setup animation
    const animation = gsap.to('.service1 .skills', {
      xPercent: -50,
      scrollTrigger: {
        trigger: '.service1',
        start: 'top top',  // Animation starts when .service1 is at the top of the viewport
        end: 'top -200%',  // Animation ends when scrolling an additional 200% of the viewport height
        scrub: 2,          // Sync animation with the scroll positio     // Show markers for debugging
        pin: true
      },
    });

    // Refresh ScrollTrigger instance on component mount
    ScrollTrigger.refresh();

    // Cleanup function to remove ScrollTrigger instance
    return () => {
      animation.scrollTrigger.kill();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="service1 h-[100vh] bg-black w-screen bg-cover overflow-x-hidden flex flex-col justify-between pb-[10%]" id='ser'>
      <h1 className='title mx-auto'>Skill Set</h1>
      <div className="skills w-[200vw] h-[60vh] bg-neutral-800  text-black text-[160px] flex justify-around items-center px-4">
          <h1 className=' text-nowrap leading-[20vh] text-neutral-400 scale-y-150 font-'>have an Idea?... let's build together</h1>
      </div>
    </div>
  );
}

export default Skillset;
