import React from 'react'


const service = () => {

 

  return (
    <div className='h-[120vh] w-screen flex justify-center items-center relative'>
        <div className="mainphoto h-[80vh] w-[50%] rounded-lg mx-[10vw] relative">
            <img src="./me/stand.webp" alt="" className='h-full w-full object-cover rounded-lg '/>
        </div>
        <div className="sercont h-[30vh] aspect-video bg-purple-500 absolute left-[10vw] top-[10vh]">
          <h1>UI/UX Designer</h1>
        </div>
        <div className="sercont absolute left-[6vw] bottom-[14vh] h-[40vh] aspect-video bg-slate-600">
          <h1>Web Devoleper</h1>
        </div>
        <div className="sercont absolute h-[45vh] aspect-video bg-red-500 top-[12vh] right-[6vw]">
          <h1>Photoshop</h1>
        </div>
        <div className="sercont absolute h-[30vh] aspect-video bg-amber-500 right-[10vw] bottom-[8vh]">
          <h1>Graphic designer</h1>
        </div>
    </div>
  )
}

export default service