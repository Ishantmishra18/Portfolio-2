import { useEffect, useState } from "react"
import React from 'react'


const projects = () => {
    const projects=['GameGuide']
    const [view , setView]=useState(false)

    const handleview=()=>{
      setView(true)
    }

    const handleview2=()=>{
      setView(false)
    }

  return (
    <div className='h-auto w-screen '>
        {projects.map((val, key)=>(
                <div className="pro h-[140vh] w-screen rounded-t-[60px] bg-cyan-900 relative px-[5%] flex flex-col items-start">
                  <div className="protitle sticky top-[50%] left-[10%] text-[80px]">{val}</div>
                  <div className="procont flex flex-col items-center bg-cyan-950" onMouseEnter={handleview} onMouseLeave={handleview2}>
                    <div className={`viewpro absolute h-[7vw] aspect-square bg-purple-700 rounded-full grid place-content-center ${view?'opacity-100':'opacity-0'}`}>View</div>
                      <div className="imgcont w-[70%] ">
                            <img src="/pro/1.png" alt="" className='w-full '/>
                      </div>
                      
                      </div>
                </div>
     ))}
    </div>
  )
}

export default projects