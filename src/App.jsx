import React from 'react'
import Home from './Pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './Pages/projects'
import Me from './Pages/me'

const App = () => {
  return (
        <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </Router>
  )
}

export default App