import React, { useRef, useEffect } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiAdobephotoshop, SiExpress, SiJavascript } from 'react-icons/si';
import { GiFilmSpool } from 'react-icons/gi'; // GSAP icon alternative

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'GSAP', icon: <GiFilmSpool className="text-green-400" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-300" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
];

const Skillset = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;

    const slide = () => {
      if (slider) {
        scrollAmount += scrollStep;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
        }
        slider.scrollTo({
          left: scrollAmount,
          behavior: 'auto',
        });
      }
    };

    let interval = setInterval(slide, 10);

    const handleMouseOver = () => clearInterval(interval);
    const handleMouseOut = () => (interval = setInterval(slide, 10));

    slider.addEventListener('mouseover', handleMouseOver);
    slider.addEventListener('mouseout', handleMouseOut);

    return () => {
      clearInterval(interval);
      slider.removeEventListener('mouseover', handleMouseOver);
      slider.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="bg-neutral-900 p-8 md:py-[14vh] py-[4vh] overflow-hidden relative border-b-2 border-t-2 border-neutral-500">
      <div className="gradient-overlay"></div>
      <div className="bgtext h-full w-full flex justify-center translate-y-12 text-[8vw] absolute uppercase text-neutral-800 font-semibold">
        toolkit
      </div>
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-scroll overflow-y-hidden no-scrollbar whitespace-nowrap"
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-lg bg-neutral-800 backdrop-blur-sm bg-opacity-40 shadow-lg min-w-[100px] min-h-[100px] md:min-w-[150px] md:min-h-[150px] transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            <div className="text-4xl md:text-6xl mb-2 animate-pulse">{skill.icon}</div>
            <h3 className="text-sm md:text-xl text-white font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
