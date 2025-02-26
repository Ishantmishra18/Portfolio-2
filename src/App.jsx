import React,{useEffect} from 'react'
import Nav from './Components/navbar'
import Landing from './Components/Home/landingpage'
import Project from './Components/Home/projects'
import Service from './Components/Home/service'
import Msg from './Components/Home/message'
import Skillset from './Components/Home/skillset'
import Contact from './Components/Home/contact'
import Aboutme from './Components/Home/aboutme'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {



  return (
    <div>
      <Nav />
      <Landing />
      <Aboutme/>
      <Project/>
      
      <Skillset></Skillset>
      <div className="w-screen h-[70vh] chesscont border-t-[1px] overflow-hidden bg-black relative flex flex-col items-center justify-center">
        <img src="/feature/chess.webp" alt="" className='object-cover h-full w-full absolute blur-[3px] opacity-45'/>
        <h2 className='text-white z-20'>Don't rush the Process</h2>
        <h2>Trust the process</h2>
      </div>
      <Contact></Contact>
    </div>

  )
}

export default App