import React from 'react'
import Nav from './Components/navbar'
import Landing from './Components/Home/landingpage'
import Project from './Components/Home/projects'
import Service from './Components/Home/service'

const App = () => {
  return (
    <div>
      <Nav />
      <Landing />
      
      <Service/>
    </div>

  )
}

export default App