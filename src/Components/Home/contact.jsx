import React, { useEffect } from 'react';
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../button';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  

  return (
    <div className=' select-none contactpage overflow-x-hidden w-screen h-auto md:h-[70vh] py-[6vh] bg-gray-60 p-6 flex flex-col md:flex-row items-center relative bg-white'>
      <div className="absolute bottom-2 right-4 md:bottom-0 md:right-10 text-center md:text-left">
        <h1 className='uppercase text-[2vw] md:text-[1vw] text-neutral-600'>designed by me</h1>
        <h1 className='uppercase text-[2vw] md:text-[1vw] text-neutral-600'>developed by me</h1>
      </div>
      <div className="right w-full md:w-[60vw] h-full p-6 flex justify-center md:justify-end">
        <div className="contimg h-full overflow-x-hidden bg-slate-400 rounded-2xl">
          <img src="/me/connect.webp" alt="" className='h-full md:w-[40vw] object-cover object-top rounded-lg shadow-lg shadow-neutral-500' />
        </div>
      </div>
      <div className="h-full w-full md:w-[60vw] p-6 flex flex-col items-center md:items-end relative md:right-40 uppercase text-white">
        <h2 className='mix-blend-difference z-10 tracking-tighter leading-[12vw] md:leading-[120px] text-[12vw] md:text-[7vw] text-center md:text-right'>
          <h1 className='uptext'>Lets</h1>
          <h2 className='relative downtext block md:inline md:left-20'>Connect :{")"}</h2>
        </h2>
        <div className="contactlink h-auto w-full flex flex-col md:flex-row justify-center md:justify-end items-center pt-6 md:pt-12 gap-8 md:gap-16">
          <div className="social flex gap-8">
            <a href="https://x.com/IshantXmishra18" target="_blank" className="md:h-12  h-8 aspect-square rounded-full relative cursor-pointer flex flex-col items-center">
              <FaTwitter className='h-full w-full text-black' />
              <h1 className='whitespace-nowrap text-[3vw] md:text-base'>Twitter</h1>
            </a>
            <a href="https://github.com/Ishantmishra18" target="_blank" className="md:h-12 h-8 aspect-square rounded-full relative cursor-pointer flex flex-col items-center">
              <FaGithub className='h-full w-full text-black' />
              <h1 className='whitespace-nowrap text-[3vw] md:text-base'>GitHub</h1>
            </a>
            <a href="https://www.instagram.com/ishantmishra18/" target="_blank" className="md:h-12 h-8 aspect-square rounded-full relative cursor-pointer flex flex-col items-center">
              <FaInstagram className='h-full w-full text-black' />
              <h1 className='whitespace-nowrap text-[3vw] md:text-base'>Instagram</h1>
            </a>
          </div>
          <Button className="text-[3vw] md:text-base" label='Hire Me' />
        </div>
      </div>
    </div>
  );
}

export default Contact;
