import React from 'react'

const contact = () => {
  return (
    <div className='w-screen h-[60vh] bg-gray-60 p-6 flex items-center'>
      <div className="right w-[60vw] h-full p-6">
          <form action="text" className='flex flex-col h-full w-[60%] gap-10 outline-none rounded-2xl text-2xl p-4'>
              <input type="text" className='h-[10vh] rounded-2xl text-2xl p-4  formcont' placeholder='Enter your Name'/>
              <input type="text" className='h-[10vh] rounded-2xl text-2xl p-4 formcont' placeholder='Enter your mail'/>
              <textarea name="" id="" cols="30" className='h-[20vh] rounded-2xl text-2xl p-4 formcont' placeholder='Enter you message'></textarea>
          </form>
      </div>
      <div className="left h-full w-[60vw] p-6 text-[8vw] tracking-tighter leading-[120px] uppercase">Lets Connect :{")"}</div>
    </div>
  )
}

export default contact