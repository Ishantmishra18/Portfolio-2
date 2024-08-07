import React from 'react'
import gsap from 'gsap'

const service = () => {


  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="mainphoto h-[70%] w-[50%] rounded-lg mx-[10vw] relative">
            <img src="./me/stand.webp" alt="" className='h-full w-full object-cover rounded-lg '/>
            <div className="service absolute h-[60%] w-[50%] bg-gray-100 rounded-lg z-10 top-[-20%] left-[-40%]"></div>
            <div className="service absolute h-[80%] w-[60%] bg-gray-200 rounded-lg z-10 top-[-16%] right-[-30%]"></div>
            <div className="service absolute h-[80%] w-[70%] bg-gray-300 rounded-lg z-10"></div>
            <div className="service absolute h-[80%] w-[70%] bg-gray-400 rounded-lg z-10"></div>
        </div>
    </div>
  )
}

export default service