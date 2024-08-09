import React from 'react'
import Nav from './Components/navbar'
import Landing from './Components/Home/landingpage'
import Project from './Components/Home/projects'
import Service from './Components/Home/service'
import Skillset from './Components/Home/skillset'

const App = () => {
  return (
    <div>
      <Nav />
      <Landing />
      <Project></Project>
      <Service/>
      <Skillset />
      <div className='h-[100vh]'></div>
    </div>

  )
}

export default App