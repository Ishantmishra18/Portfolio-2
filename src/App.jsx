import React,{useEffect} from 'react'
import Nav from './Components/navbar'
import Landing from './Components/Home/landingpage'
import Project from './Components/Home/projects'
import Service from './Components/Home/service'
import Skillset from './Components/Home/skillset'
import Contact from './Components/Home/contact'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {



  return (
    <div>
      <Nav />
      <Landing />
      <Project/>
      <Service/>
      <Skillset />
      <Contact></Contact>
    </div>

  )
}

export default App