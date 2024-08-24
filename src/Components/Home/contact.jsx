import React from 'react'

const contact = () => {
  return (
    <div className='w-screen h-[70vh] bg-gray-60 p-6 flex items-center relative bg-white'>
      <div className="img h-[40vh] absolute right-[30vw] bottom-10 ">
        <img src="/me/connect.webp" alt="" className='h-full object-cover rounded-lg'/>
      </div>
      <div className="right w-[60vw] h-full p-6">
          <form action="text" className='flex flex-col h-full w-[60%] gap-10 outline-none rounded-2xl text-2xl p-4'>
              <input type="text" className='h-[7vh] rounded-2xl text-2xl p-4  formcont' placeholder='Enter your Name'/>
              <input type="text" className='h-[7vh] rounded-2xl text-2xl p-4 formcont' placeholder='Enter your mail'/>
              <textarea name="" id="" cols="30" className='h-[20vh] rounded-2xl text-2xl p-4 formcont' placeholder='Enter you message'></textarea>
              <input type="submit" className='h-[10vh] bg-neutral-800 text-white rounded-lg' />
          </form>
      </div>
      <div className="left h-full w-[60vw] p-6 text-[7vw] flex flex-col items-end tracking-tighter leading-[120px] uppercase text-white"> <h2 className='mix-blend-difference z-10 '>Lets <span className='relative left-32'>Connect :{")"}</span></h2>
      <div className="social h-[10vh] w-auto mt-10 flex justify-end gap-8 p-2">
        <div className="h-full aspect-square rounded-full bg-black"></div>
        <div className="h-full aspect-square rounded-full bg-black"></div>
        <div className="h-full aspect-square rounded-full bg-black"></div>
        </div></div>
    </div>
  )
}

export default contact