import React from 'react'

const projects = () => {
    const projects=['GameGuide','theKiller','theMegaTron']
  return (
    <div className='h-auto w-screen '>
        {projects.map((val, key)=>(
                <div className="pro h-[80vh] w-screen rounded-t-[60px] bg-purple-900"></div>
     ))}
    </div>
  )
}

export default projects