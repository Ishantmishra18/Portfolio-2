import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`backdrop-blur-lg w-screen h-[12vh] flex justify-between px-12 items-center z-50 fixed transition-top duration-300 ${showNavbar ? 'top-0' : '-translate-y-[100%]'}`}
    >
      <div className="logo flex">
        <img src="" alt="" />
      </div>
      <div className="right flex gap-10 items-center">
        <div className="text-white">About Me</div>
        <div className="text-white"> Projects</div>
        <div className="text-white">Contact Me</div>
      </div>
    </div>
  );
};

export default Navbar;
