import { useEffect, useState } from "react";
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
                        <div className="imgcont w-[85%]" onMouseEnter={handleView} onMouseLeave={handleView}>
                            <img src={`/pro/${key + 1}.png`} alt="" className='w-full rounded-xl' />
                        </div>
                        <div className="prodown w-[85%] h-auto bg-purple-80 py-5 flex flex-col items-start gap-10">
                            <h1 className="text-[3vw] text-white">About Project</h1>
                            <p className="text-white text-[1.2vw]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam illo enim dolorem tempora at odit voluptas quae iusto adipisci aliquid, sequi, consectetur iste eius est fugit velit vitae. Ducimus, cupiditate.</p>
                            <div className="prodes flex w-full justify-between">
                                <div className="techstack px-6 py-2 bg-black rounded-2xl">TECH STACK:
                                    html css js gsap express
                                </div>
                                <div className="github h-full aspect-square bg-black rounded-lg">
                                    {/* GitHub link or icon here */}
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
