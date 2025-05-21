import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub } from "react-icons/fa6";
import { TbView360 } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [{
        name:'Fugin',
        subtitle:'Game guide',
        des:"Developed a sleek and immersive game guide using React.js and GSAP, featuring fluid animations and an engaging UI/UX design. each interaction is designed to be smooth and responsive, creating a captivating interface that enhances user engagement and accessibility.",
        github:'https://github.com/Ishantmishra18/WutheringGuide',
        hosted:'https://wuthering-guide-moq2.vercel.app/',
        date:'Jun - Aug 2024',
        techstack:'JavaScript React Gsap Figma',
        role:'Front-End Developer'

    },{
        name:'Travo',
        subtitle:'Home Rent',
        des:"A modern room rental platform built with the MERN stack that allows users to list, search, and book rooms seamlessly. The platform features an intuitive user interface, real-time booking management, and secure user authentication. With fully integrated payment options and responsive design, this application offers a smooth and secure experience for both hosts and guests.",
        github:'https://github.com/Ishantmishra18/Travo',
        hosted:'https://travo-1.onrender.com',
        date:'May 2025 - going...',
        techstack:'ReactJs NodeJs Express MongoDB',
        role:'Full Stack Developer'
    },{
        name:'Buckshot',
        subtitle:'multiplayer game',
        des:"Developed a real-time multiplayer game inspired by 'Buckshot Roulette' using Node.js, Socket.io, and React. The game includes real-time player interactions, and randomized gameplay mechanics, with a responsive UI built using tailwindCSS. This project demonstrates skills in full-stack development and real-time web applications.",
        github:'https://github.com/Ishantmishra18/buckShot',
        hosted:'https://buckshot-1-frontend.onrender.com',
        date:'2nd Dec - 28th Dec 2024...',
        techstack:'ReactJs NodeJs Express Socket.io',
        role:'Full Stack Developer'
    } 
]



useEffect(() => {
  // Animation for .protitle
  gsap.to('.protitle', {
    y: -180,
    scrollTrigger: {
      trigger: '.protitle',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  });

  // Animation for .mobileview with faster scroll effect
  const elements = document.querySelectorAll('.mobileview');

  elements.forEach((el, i) => {
    gsap.to(el, {
      y: -100, // or tweak this value per element if needed
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',   // when top of element hits 80% of viewport
        end: 'bottom top',  // ends when bottom of element reaches top of viewport
        scrub: 1.2,         // makes it move slightly faster
      },
    });
  });
}, []);


    return (
        <div className='h-auto pb-32 bg-neutral-900 proPage w-screen md:rounded-t-[60px] rounded-t-xl text-white pt-[10vh]'>
            <div className="protitle w-screen h-[40vh] md:rounded-t-[60px] rounded-t-xl absolute text-[9vw] md:text-[6vw] md:mt-2 mt-10 text-white bg-neutral-900 flex flex-col items-center">
                <h1 className="uppercase font1">projects</h1>
            </div>
            {projects.map((val, key) => (
                <div
                    key={key}
                    className={`maincont h-auto py-10 w-screen relative px-[4%] flex flex-col md:${key % 2 === 0 ? 'items-start' : 'items-end'} `}
                >
                    <div className={`proname pointer-events-none md:sticky top-[30%] text-[8vw] md:text-[6vw] gap-3 z-30 flex md:flex-col ${key%2===0?'left-[80vw] items-end':'right-[80vw] items-start['}`}>
                        <h2 className='uppercase font1'>{val.name}</h2>
                        <h2 className='text-[6vw] md:text-[4vw] md:mt-[-3vh] text-neutral-300'>{val.subtitle}</h2>
                        <h2 className="date text-[4vw] md:text-[1.4vw] text-neutral-600 md:mt-[-3vh] mt-[-1vh] hidden md:block">{val.date}</h2>
                    </div>
                    <div className="procont flex flex-col items-center bg-neutral-800 backdrop-blur-lg pt-10 rounded-xl w-[96vw] md:w-[70vw]">
                       
                        <div className="imgcont w-full md:h-[70vh] h-[30vh] relative bg-black">
                            <div className={`mobileview absolute w-[18vw] px-1 pt-1 pb-3 h-[74vh] md:block hidden bg-zinc-800 -top-[10vh] rounded-2xl z-20 ${key%2==0?'-left-[3%]':'-right-[3%]'}`}>
                                <img src={`/pro/${key+1}/mobile.png`} alt="" className='object-cover h-full w-full rounded-2xl shadow-xl' />

                            </div>
                            <div className="absolute h-[20%] w-auto z-30 bottom-0 left-0 flex items-end p-3 gap-2">
                                <a href={val.github} target="_blank" className="gitcont h-full aspect-square rounded-full p-1 bg-neutral-800 hover:translate-y-2 duration-300 cursor-pointer">
                                    <FaGithub className='h-full w-full'/>
                                </a>
                                <a href={val.hosted} target="_blank" className={`px-6 shadow-xl py-1 gap-5 flex items-center rounded-full bg-neutral-800/85 backdrop-blur-md ${val.hosted===''?'hidden':''} hover:translate-y-2 duration-300 cursor-pointer`}>
                                    <TbView360 className='h-12 text-2xl'/>
                                    <h2 className=' whitespace-nowrap'>Visit Site</h2>
                                </a>
                            </div>
                        
                            <img src={`/pro/${key + 1}/screen.png`} alt="" className='w-full h-full md:object-cover object-contain z-10 duration-200' />
                        </div>
                        <div className="prodown w-[100%] h-auto bg-purple-80 py-5 flex flex-col items-start">
                            <h1 className="text-[14px] md:text-xl text-neutral-700 mt-2 px-4 md:px-10 uppercase">About Project</h1>
                            <p className="text-[4vw] md:text-[1.5vw] text-neutral-400 mt-1 px-4 md:px-10">{val.des}</p>
                            <div className="prodes md:mt-10 mt-4 md:pt-10 pt-4 border-t-2 border-neutral-800 px-4 md:px-10  flex flex-col md:flex-row w-full justify-start md:justify-start gap-4 md:gap-32">
                                <div className="techstack py-2 rounded-2xl text-[4vw] md:text-[1.5vw] text-neutral-400">
                                    <span className="text-neutral-700 text-[14px] md:text-xl mr-2 md:mr-4">TECH STACK:</span>
                                    {val.techstack}
                                </div>
                                <div className="role py-2 rounded-2xl text-[4vw] md:text-[1.5vw] text-neutral-400">
                                    <span className="text-neutral-700 text-[14px] md:text-xl mr-2 md:mr-4">ROLE:</span>
                                    {val.role}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
