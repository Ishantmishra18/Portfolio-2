import React from 'react'
import Navbar from '../Components/navbar'

const me = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="flex justify-between p-10 items-center h-screen w-screen">
        <div className="imgcont h-[60vh] w-[30vw]">
            <img src="" alt="" className='w-full h-full object-cover' />
        </div>
        <div className="intro w-[60vw]">
            <h1>hi I am Ishant Mishra</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur, fugit, quam asperiores voluptatum neque corrupti ea reiciendis iusto facere tenetur labore provident rerum dolorum. Dolore quod doloribus, hic esse doloremque numquam repudiandae, minima ex quae quasi fugiat velit, error veritatis dicta ratione voluptas vel!</p>
        </div>
        </div>  
    </>
  )
}

export default me