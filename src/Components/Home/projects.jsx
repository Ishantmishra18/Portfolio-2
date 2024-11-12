import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
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
        <div className='h-auto pb-32 bg-neutral-900 proPage w-screen md:rounded-t-[60px] rounded-t-xl text-white pt-[10vh]'>
            <div className="protitle w-screen h-[40vh] md:rounded-t-[60px] rounded-t-xl absolute text-[9vw] md:text-[6vw] md:mt-2 mt-10 text-white bg-neutral-900 flex flex-col items-center">
                <h1 className="uppercase">projects</h1>
            </div>
            {projects.map((val, key) => (
                <div
                    key={key}
                    className={`pro h-auto py-10 w-screen relative px-[4%] flex flex-col md:${key % 2 === 0 ? 'items-start' : 'items-end'} items-center`}
                >

                    <div className={`proname pointer-events-none md:sticky block top-[50%] text-[8vw] md:text-[6vw] z-30 flex flex-col ${key%2===0?'left-[80vw] items-end':'right-[80vw] items-start'}`}>
                        <h2>{val}</h2>
                        <h2 className="date text-[4vw] md:text-[1.2vw] text-neutral-600 md:mt-[-3vh] mt-[-1vh]">2020 Aug</h2>
                    </div>
                    <div className="procont overflow-x-hidden flex flex-col items-center bg-neutral-700 bg-opacity-25 backdrop-blur-lg pt-10 rounded-xl w-[96vw] md:w-[70vw]">
                        <div className={`viewpro absolute h-[10vw] md:h-[7vw] aspect-square rounded-full grid place-content-center ${view ? 'opacity-100' : 'opacity-0'}`}>View</div>
                        <div className="imgcont w-full md:h-[70vh] h-[40vh] overflow-hidden relative" onMouseEnter={handleView} onMouseLeave={handleView}>
                            <div className="github z-20 h-[10vw] md:h-[5vw] w-[10vw] md:w-[5vw] grid absolute bottom-4 left-4 md:left-16 bg-neutral-800 cursor-pointer shadow-neutral-900 shadow-lg p-1 rounded-full hover:scale-[1.05] duration-200">
                                <FaGithub className="h-full w-full" />
                            </div>
                            <img src={`/pro/${key + 1}.png`} alt="" className='w-full h-full object-cover hover:scale-[1.01] z-10 duration-200' />
                        </div>
                        <div className="prodown w-[100%] h-auto bg-purple-80 py-5 flex flex-col items-start">
                            <h1 className="text-[14px] md:text-xl text-neutral-700 mt-2 px-4 md:px-10 uppercase">About Project</h1>
                            <p className="text-[4vw] md:text-[1.5vw] text-neutral-400 mt-1 px-4 md:px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam illo enim dolorem tempora at odit voluptas quae iusto adipisci aliquid, sequi, consectetur iste eius est fugit velit vitae. Ducimus, cupiditate.</p>
                            <div className="prodes md:mt-10 mt-4 md:pt-10 pt-4 border-t-2 border-neutral-800 px-4 md:px-10  flex flex-col md:flex-row w-full justify-start md:justify-start gap-4 md:gap-32">
                                <div className="techstack py-2 rounded-2xl text-[4vw] md:text-[1.5vw] text-neutral-400">
                                    <span className="text-neutral-700 text-[14px] md:text-xl mr-2 md:mr-4">TECH STACK:</span>
                                    html css js gsap express
                                </div>
                                <div className="role py-2 rounded-2xl text-[4vw] md:text-[1.5vw] text-neutral-400">
                                    <span className="text-neutral-700 text-[14px] md:text-xl mr-2 md:mr-4">ROLE:</span>
                                    Front-end Developer
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
