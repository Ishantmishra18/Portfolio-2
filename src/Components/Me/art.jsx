import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArtGallery = () => {
  const containerRef = useRef(null);

  const artworks = [
    { id: 1, src: "/me/arts/1.jpg", size: "medium", top: "15%", left: "5%", rotation: -0 },
    { id: 2, src: "/me/arts/2.jpg", size: "small", top: "20%", right: "10%", rotation: 0 },
    { id: 3, src: "/me/arts/3.jpg", size: "large", bottom: "15%", left: "8%", rotation: -0 },
    { id: 4, src: "/me/arts/4.jpg", size: "medium", top: "45%", right: "5%", rotation: 0 },
    { id: 5, src: "/me/arts/5.jpg", size: "small", top: "30%", left: "35%", rotation: 0 },
    { id: 6, src: "/me/arts/6.jpg", size: "large", bottom: "10%", right: "5%", rotation: 0 },
    { id: 7, src: "/me/arts/7.jpg", size: "medium", top: "10%", right: "25%", rotation: 0 },
    { id: 8, src: "/me/arts/8.jpg", size: "small", bottom: "15%", left: "25%", rotation: -0 },
    { id: 9, src: "/me/arts/9.jpg", size: "large", top: "40%", left: "5%", rotation: 0 },
    { id: 10, src: "/me/arts/10.jpg", size: "medium", bottom: "5%", right: "25%", rotation: -0 },
    { id: 11, src: "/me/arts/11.jpg", size: "small", top: "40%", right: "30%", rotation: 0 },
    { id: 12, src: "/me/arts/12.jpg", size: "medium", bottom: "25%", left: "35%", rotation: -0 },
    { id: 13, src: "/me/arts/13.jpg", size: "large", top: "25%", left: "40%", rotation: 0 },
    { id: 14, src: "/me/arts/14.jpg", size: "medium", bottom: "5%", left: "5%", rotation: 0 },
  ];

  useEffect(() => {
    const artImages = containerRef.current.querySelectorAll('.art-image');

    artImages.forEach((image) => {
      const size = image.getAttribute('data-size');
      let yValue = 0;

      if (size === 'small') {
        yValue = -80;
      } else if (size === 'medium') {
        yValue = -460;
      } else {
        yValue = -840;
      }

      gsap.to(image, {
        y: yValue,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[200vh] bg-white p-8 w-full relative overflow-hidden"
    >
      <h1 className="text-[6vw] sticky top-0 font1 text-black mb-8 pt-8">
        My Canvas Corner
      </h1>

      <div className="relative h-full w-full">
        {artworks.map(art => {
          const sizeClass =
            art.size === 'small' ? 'h-32 w-32 md:h-40 md:w-40' :
            art.size === 'medium' ? 'h-48 w-48 md:h-64 md:w-64' :
            'h-56 w-56 md:h-80 md:w-80';

          return (
            <div
              key={art.id}
              className={`art-image absolute rounded-xl shadow-2xl overflow-hidden ${sizeClass}`}
              style={{
                top: art.top,
                left: art.left,
                right: art.right,
                bottom: art.bottom,
                transform: `rotate(${art.rotation}deg)`,
                zIndex: art.size === 'large' ? 30 : art.size === 'medium' ? 20 : 10,
              }}
              data-size={art.size}
            >
              <img
                src={art.src}
                alt={`Artwork ${art.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-500">
                  Art #{art.id}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtGallery;

