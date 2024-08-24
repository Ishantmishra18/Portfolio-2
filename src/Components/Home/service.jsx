import React ,{useEffect} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const service = () => {

  useEffect(()=>{
    gsap.fromTo('.sercont', {
        scale:0,
       
  },{
    scale:1,
    duration:0.4,
    delay:0.5,
    stagger:0.1,
    scrollTrigger:{
      trigger:".sertitle",
      start:'top top',
      end:'top center',
      scrub:2
    }
  })
})

  return (
    <div className='servicePage h-[150vh] pb-[10%] pt-[5%] bg-neutral-950 w-screen flex flex-col justify-between items-center relative'>
<div className="sertitle text-white text-[6vw] uppercase">Service I offer</div>
        <div className="mainphoto h-[80vh] w-[50%] rounded-lg mx-[30vw] relative">
            <img src="./me/stand.webp" alt="" className='h-full w-full object-cover rounded-lg '/>

            <div className="sercont h-[30vh] aspect-video bg-purple-500 absolute left-[-10vw] top-[-10vh]">
          <h1>UI/UX Designer</h1>
        </div>
        <div className="sercont absolute left-[-20vw] bottom-[-14vh] h-[40vh] aspect-video bg-slate-600">
          <h1>Web Devoleper</h1>
        </div>
        <div className="sercont absolute h-[45vh] aspect-video bg-red-500 top-[-12vh] right-[-20vw]">
          <h1>Photoshop</h1>
        </div>
        <div className="sercont absolute h-[30vh] aspect-video bg-amber-500 right-[-10vw] bottom-[-8vh]">
          <h1>Graphic designer</h1>
        </div>


        </div>
        
    </div>
  )
}

export default service