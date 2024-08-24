import { useEffect, useState } from "react";
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = ['GameGuide', 'theMatrix', 'theLastRegret'];
    const [view, setView] = useState(false);

    const handleView = () => {
        setView(!view);
    };

    useEffect(() => {
        gsap.to('.protitle', {
            y: -180,
            scrollTrigger: {
                trigger: '.protitle',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2,
            },
        });
    }, []);

    return (
        <div className='h-auto proPage w-screen rounded-t-[60px] text-white pt-[10vh]'>
            <div className="protitle w-screen h-[40vh] rounded-t-[60px] absolute text-[6vw] text-white bg-neutral-900 flex flex-col items-center">
                <h1 className="uppercase">projects</h1>
            </div>
            {projects.map((val, key) => (
                <div
                    key={key}
                    className={`pro h-auto py-10 w-screen relative px-[4%] flex bg-neutral-900 flex-col bg-cover  ${key === 0 ? 'rounded-t-[60px]' : ''} ${key%2===0?'items-start':'items-end'}`}
                >
                  <div className="overlay absolute inset-0 bg-black blur-2xl opacity-80 rounded-t-[60px]"></div>
                    <div className={`proname pointer-events-none sticky top-[50%]  text-[6vw] z-30 ${key%2===0?'left-[80vw]':'right-[80vw]'}`}>{val}</div>
                    <div className="procont flex flex-col items-center bg-neutral-700 bg-opacity-25 backdrop-blur-lg pt-10 rounded-xl w-[70vw]">
                        <div className={`viewpro absolute h-[7vw] aspect-square bg-purple-700 rounded-full grid place-content-center ${view ? 'opacity-100' : 'opacity-0'}`}>View</div>
                        
                        <div className="imgcont w-[100%] overflow-hidden relative" onMouseEnter={handleView} onMouseLeave={handleView}>
                            <div className="github z-20 h-[5vw] w-[5vw] grid  absolute bottom-4 left-16 bg-neutral-800 cursor-pointer shadow-neutral-900 shadow-lg p-1 rounded-full hover:scale-[1.05] duration-200">
                            <FaGithub className="h-full w-full"/>
                            </div>
                            <img src={`/pro/${key + 1}.png`} alt="" className='w-full rounded-x hover:scale-[1.05] z-10 duration-200' />
                        </div>
                        <div className="prodown w-[100%] h-auto bg-purple-80 py-5 flex flex-col items-start">
                            <h1 className="text-xl text-neutral-700 mt-2 px-10 uppercase">About Project</h1>
                            <p className="text-neutral-400 text-[1.5vw] mt-1 px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam illo enim dolorem tempora at odit voluptas quae iusto adipisci aliquid, sequi, consectetur iste eius est fugit velit vitae. Ducimus, cupiditate.</p>
                            <div className="prodes mt-10 border-t-2 border-neutral-800 px-10 pt-10 flex w-full justify-start gap-32">
                                <div className="techstack py-2  rounded-2xl text-[1.5vw] text-neutral-400"><span className="text-neutral-700 text-xl mr-4">TECH STACK:</span>
                                    html css js gsap express
                                </div>
                                <div className="role">
                                <div className="techstack py-2  rounded-2xl text-[1.5vw] text-neutral-400"><span className="text-neutral-700 text-xl mr-4">ROLE:</span>
                                    Front-end Deveopler 
                                </div>
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
