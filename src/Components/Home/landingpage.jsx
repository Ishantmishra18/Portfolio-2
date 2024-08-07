import React , {useEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const landingpage = () => {

  useEffect(() => {
    
    gsap.fromTo(".maincont div", {
      y: 40,
      opacity: 0,
      
      
    },{
      opacity:1,
      y:0,
      stagger: 0.2,
      delay:0.5,
      duration: 1.5,
    });
  }, []);

  return (
    <div className='h-screen w-screen flex bg-black pt-[14vh]'>
      <div className="profile absolute h-full w-[60%] bottom-0 right-0">
        <div className="cvdown py-4 px-8 rounded-lg right-4 font-bold cursor-pointer hover:translate-x-2 hover:bg-orange-700 duration-300  z-20 absolute bg-orange-500 top-[20vh]">Download CV</div>
        <img src="./me/main.webp" alt="" className='h-full w-full object-cover grayscal'/>
      </div>
    <div className="maincont flex flex-col justify-end pl-8 z-10">
        <div className="uppercont text-white text-[2vw] uppercase font-semibold leading-8">Ishant Mishra <br /> a Web Developler</div>
        <div className="vertline h-[50vh] w-[1px] bg-white"></div>
        <div className="lowercont text-white text-[4vw] uppercase font-semibold leading-7 mt-5">Who Likes</div>
        <div className="maintext text-white w-screen text-[7vw] uppercase font-semibold">To Design your website</div>
    </div>
    </div>
  )
}

export default landingpage