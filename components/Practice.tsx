"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Image data (5 rows of 4 images, each with a speed factor)
const images = [
  [
    { src: "/assets/images/hero3.png", speed: 0.5 },
    { src: "/assets/images/hero2.png", speed: 0.1 },
    { src: "/assets/images/proj5.png", speed: 0.1 },
    { src: "/assets/images/proj28.png", speed: 0.1 },
    { src: "/assets/images/proj24.png", speed: 0.1 },
    { src: "/assets/images/proj5.png", speed: 0.1 },
    { src: "/assets/images/hero4.png", speed: 0.1 },
    { src: "/assets/images/proj6.png", speed: 0.1 },
    { src: "/assets/images/proj14.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
  ],
  [
    { src: "/assets/images/proj1.png", speed: 0.9 },
    { src: "/assets/images/proj27.png", speed: 0.05 },
    { src: "/assets/images/proj25.png", speed: 0.05 },
    { src: "/assets/images/proj13.png", speed: 0.05 },
    { src: "/assets/images/proj19.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
    
  ],
  [
    { src: "/assets/images/hero3.png", speed: 0.5 },
    { src: "/assets/images/hero2.png", speed: 0.1 },
    { src: "/assets/images/proj5.png", speed: 0.1 },
    { src: "/assets/images/proj3.png", speed: 0.1 },
    { src: "/assets/images/6.jpg", speed: 0.1 },
    { src: "/assets/images/hero1.png", speed: 0.1 },
    { src: "/assets/images/proj12.png", speed: 0.1 },
    { src: "/assets/images/proj10.png", speed: 0.1 },
    { src: "/assets/images/hero5.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
  ],
  [
    { src: "/assets/images/proj8.png", speed: 0.9 },
    { src: "/assets/images/proj26.png", speed: 0.05 },
    { src: "/assets/images/proj9.png", speed: 0.05 },
    { src: "/assets/images/proj11.png", speed: 0.05 },
    { src: "/assets/images/proj23.png", speed: 0.1 },
    { src: "/assets/images/proj4.png", speed: 0.1 },
    { src: "/assets/images/proj23.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
    { src: "/assets/images/proj8.png", speed: 0.1 },
  ],
];

// Floating images (absolute, randomly placed)
const floatingImages = [
  { src: "/assets/images/mobile7.png", speed: -0.05, top: "5%", left: "25%" },
  { src: "/assets/images/mobile7.png", speed: -0.05, top: "20%", left: "60%" },
  { src: "/assets/images/mobile7.png", speed: -0.05, top: "5%", left: "40%" },
  { src: "/assets/images/mobile7.png", speed: -0.05, top: "12%", left: "70%" },
  { src: "/assets/images/mobile7.png", speed: -0.05, top: "5%", left: "85%" },
];

const LaptopGallery = () => {
  // Using useRef for image and floating image elements
  const imageRefs = useRef<(HTMLDivElement | null)[][]>(
    Array.from({ length: 5 }, () => Array(4).fill(null))
  );
  const floatingRefs = useRef<(HTMLDivElement | null)[]>(Array(5).fill(null));

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false; // To throttle the scroll event

    const updateParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Move grid images
          imageRefs.current.forEach((column, colIndex) => {
            column.forEach((img, rowIndex) => {
              if (img) {
                const speed = images[colIndex][rowIndex].speed;
                img.style.transform = `translateY(${scrollY * speed}px)`;
              }
            });
          });

          // Move floating images
          floatingRefs.current.forEach((img, index) => {
            if (img) {
              const speed = floatingImages[index].speed;
              img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            }
          });

          lastScrollY = scrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    const handleScroll = () => {
      updateParallax();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[100vh] lg:h-[270vh] bg-[#1A1A1A]">
      <div className="gap-6 flex justify-center">
        {images.map((column, colIndex) => (
          <div key={colIndex} className={`flex flex-col gap-12 will-change-transform ${colIndex % 2 === 0 ? `-mt-[2000px]` : '-mt-[2000px]'}`} ref={(el) => { imageRefs.current[colIndex][0] = el; }}>
            {column.map(({ src }, rowIndex) => (
                <Image src={src} key={rowIndex}
                 alt={`Parallax ${colIndex}-${rowIndex}`} width={1000} height={1000} className="relative rounded-lg shadow-lg overflow-hidden will-change-transform border-[2px] border-gray-500" priority />
           
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopGallery;
