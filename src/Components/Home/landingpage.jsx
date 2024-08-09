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
      <div className="left w-[50%]">
        <h4 className='text-[3vw] font-bold uppercase'>Hey I am Ishant</h4>
        <h1 className='text-[8vw] leading-[8vw] uppercase font-bold tracking-tighter'>I create</h1>
        <h1 className='text-[8vw] uppercase font-bold mt-[-3vw] ml-5 flex flex-col items-end tracking-tighter'>websites
          <h4 className='text-[3vw] mt-[-3vw] tracking-normal'>for you</h4>
        </h1>
        
      </div>
      <div className="right w-[35%]">
        <img src="/me/main.webp" alt="" className='object-cover h-[50vh] w-[50vw] rounded-lg'/>
      </div>
      </div>
      <div className="actions w-screen h-[20vh] border-t-2 border-gray-400 flex justify-around items-center">
          <button>view</button>
          <button>less go</button>
          <button>work here</button>
      </div>
    </div>
  )
}

export default landingpage