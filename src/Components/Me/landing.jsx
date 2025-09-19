import React from 'react'

const landing = () => {
  return (
    <div className='h-screen w-screen bg-white  flex p-16 pt-36 justify-between'>
        <div className="w-[45vw] h-[75vh]">
            <img src="/me/stand.webp" alt="" className='w-full h-full rounded-lg object-cover' />
        </div>
        <div className="cont w-[40vw]">
            <h2>my name is <span className='text-[6vw] font1'>Ishant Mishra</span></h2>
            <p className='text-[4.5vw] md:text-[1.5vw] text-neutral-700'>A childhood spent practicing martial arts, drawing, and playing chess taught me about discipline, creativity, and strategy. Growing up in an Air Force family, I traveled across India from Jammu to Meghalaya, which gave me a deep appreciation for diverse cultures and perspectives. I love a healthy debate because I'm always curious to see the world through someone else's eyes.</p>
        </div>
    </div>
  )
}

export default landing