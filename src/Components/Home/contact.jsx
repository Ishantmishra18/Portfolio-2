import React ,{useEffect} from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../button';

gsap.registerPlugin(ScrollTrigger);

const contact = () => {
  useEffect(() => {
    // Animate the image from a blurred state to a clear state on scroll
    gsap.fromTo(
      '.contimg',
      { x: 100, scale: 0.6 , filter:'blur(5px)', rotate:'6deg'
       }, // Start state: blurred, shifted, and scaled
      { filter: 'blur(0px)', x: 0, scale: 1, rotate:'0deg', // End state: clear, original position, and scale
        scrollTrigger: {
          trigger: '.contactpage',
          start: 'top 60%', // When the trigger starts
          end: '20% 40%', // When the trigger ends
          scrub: true,
        },
      }
    );
  
    // Animate "I create" text from a blurred state to a clear state on scroll
    gsap.fromTo(
      '.uptext',
      { filter: 'blur(22px)', x: -200 }, // Start state: blurred and shifted left
      { filter: 'blur(0px)', x: 0, // End state: clear and at original position
        scrollTrigger: {
          trigger: '.contactpage',
          start: 'top 60%',
          end: '20% 60%',
          scrub: true,
        },
      }
    );
  
    // Animate "websites" text from a blurred state to a clear state on scroll
    gsap.fromTo(
      '.downtext',
      { filter: 'blur(22px)', x: 200 }, // Start state: blurred and shifted right
      { filter: 'blur(0px)', x: 0, // End state: clear and at original position
        scrollTrigger: {
          trigger: '.contactpage',
          start: 'top 60%',
          end: '20% 60%',
          scrub: true,
        },
      }
    );
  }, []);
  
  return (
    <div className='contactpage w-screen h-[70vh] my-[6vh] bg-gray-60 p-6 flex items-center relative bg-white'>
      <div className="absolute -bottom-4 right-10">
        <h1 className='uppercase text-[1vw] t text-neutral-600'>designed by me</h1>
        <h1 className='uppercase text-[1vw] t  text-neutral-600'>developed by me</h1>
      </div>
      <div className="right w-[60vw] h-full p-6">
      <div className="contimg h-full">
        <img src="/me/connect.webp" alt="" className='h-full w-[40vw]  object-cover object rounded-lg shadow-lg shadow-neutral-500'/>
      </div>
      </div>
      <div className=" h-full w-[60vw] p-6  flex flex-col items-end  relative right-40 uppercase text-white"> <h2 className='mix-blend-difference z-10 tracking-tighter leading-[120px] text-[7vw]'><span className='uptext'>Lets </span> <span className='relative downtext left-20'>Connect :{")"}</span></h2>
      <div className="contactlink h-auto w-auto flex pt-12 items-center gap-16">
      <div className="social flex gap-8">
          <div className="h-10 aspect-square rounded-full relative cursor-pointer">
          <FaXTwitter className='h-full w-full text-black'/>
          <h1 className='whitespace-nowrap'>Twitter</h1>
          </div>
          <div className="h-10 aspect-square rounded-full relative cursor-pointer">
          <FaGithub className='h-full w-full text-black'/>
          <h1 className='whitespace-nowrap'>git-hub</h1>
          </div>
          <div className="h-10 aspect-square rounded-full relative cursor-pointer">
          <FaInstagram className='h-full w-full text-black'/>
          <h1 className=' whitespace-nowrap'>instagram</h1>
          </div>
        </div>
        
          <Button></Button>
        
      </div>
          

        </div>
    </div>
  )
}

export default contact