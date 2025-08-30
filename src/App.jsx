import React from 'react'
import Home from './Pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './Pages/projects'

const App = () => {
  return (
        <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App