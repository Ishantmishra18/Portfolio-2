import React from 'react'

const contact = () => {
  return (
    <div className='w-screen h-[100vh] bg-gray-60 flex items-end'>
      <div className="right w-[60vw] h-[80vh] p-6">
          <form action="text" className='flex flex-col h-full w-[60%] gap-10 outline-none rounded-2xl text-2xl p-4'>
              <input type="text" className='h-[10vh] rounded-2xl text-2xl p-4  formcont'/>
              <input type="text" className='h-[10vh] rounded-2xl text-2xl p-4 formcont' />
              <textarea name="" id="" cols="30" className='h-[20vh] rounded-2xl text-2xl p-4 formcont'></textarea>
          </form>
      </div>
      <div className="left h-[80vh] w-[40vw] p-6 text-[6vw]">Contact Me here :{")"}</div>
    </div>
  )
}

export default contact