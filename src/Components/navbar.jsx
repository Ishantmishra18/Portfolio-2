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

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={` navbar backdrop-blur-l w-screen mix-blend-difference h-[12vh] flex justify-between px-12 items-center z-50 fixed transition-top duration-300 ${showNavbar ? 'top-0' : '-translate-y-[100%]'}`}
    >
      <div className="logo h-full aspect-square">
        <img src="/feature/logo.png" alt="" className='h-full w-full' />
      </div>
    </div>
  );
};

export default Navbar;
