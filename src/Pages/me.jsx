import React from 'react'
import Navbar from '../Components/navbar'
import ArtGallery from '../Components/Me/art'
import Contact from '../Components/Home/contact'
import LandingPage from '../Components/Me/landing'

const me = () => {
  return (
    <>
    <Navbar></Navbar>
        <LandingPage></LandingPage>
        <div className="py-14 text-center font1 text-white bg-black text-[6vw]">some of my hobbies are...</div>
        <ArtGallery></ArtGallery>
        
        <Contact></Contact>
    </>
  )
}

export default me