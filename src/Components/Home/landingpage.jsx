import React , {useEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const landingpage = () => {

  useEffect(() => {
  
  }, []);

  return (
    <div className="bg-white w-screen h-screen pt-[18vh]  flex flex-col justify-between">
      <div className="flex items-start justify-between px-[5%]">
      <div className="left w-[50%] relative z-10">
      <div className="absolute top-[0vh] left-[10vw] pointer-events-none -rotate-[20deg] -z-10">
          <img src="/feature/stroke.png" alt="" />
        </div>
        <h4 className='text-[2vw] font-bold uppercase text-neutral-600'>Hey I am Ishant</h4>
        <h1 className='text-[7vw] leading-[8vw] uppercase font-bold tracking-tighter scale-y-125 mix-blend-difference'>I create</h1>
        <h1 className='text-[7vw] uppercase font-bold mt-[-3vw] ml-5 flex flex-col items-end  tracking-tighter  scale-y-125'>websites
          <h4 className='text-[2vw] mt-[-7vw] tracking-normal'>for you</h4>
        </h1>
        
      </div>
      <div className="landright w-[35%] relative">
        <img src="/me/main.webp" alt="" className='object-cover h-[50vh] z-20 rounded-lg hover:rotate-3 hover:scale-110 duration-200 hover:drop-shadow-2xl shadow-black'/>
        
      </div>
      </div>
      <div className="actions w-screen h-[20vh] border-t-2 border-gray-400 flex justify-around items-center">
          <button>download cv</button>
          <button>hire me!</button>
          <button>send me a message</button>
      </div>
    </div>
  )
}

export default landingpage