"use client";
import Navbar from "@/components/Navbar";
import ParallaxSection from "@/components/work";
import Image from "next/image";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Work = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * -0.2);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="flex flex-col bg-[#1A1A1A] text-[#F5EADF]">
      <Navbar />
      <section className="h-[100vh] flex items-center justify-center text-[#F5EADF] bg-[#1A1A1A] relative z-30">
        <div
          className="relative flex flex-col gap-2 justify-center items-center z-10 -mt-24 text-base lg:text-lg transform translate"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <p className="">OUR PORTFOLIO</p>
          <p className="text-4xl lg:text-8xl font-light">
            SELECTED <span className="font-extrabold">WORK</span>
          </p>
          <p>Unique Designs. Great Performance</p>
        </div>
        <Image
          width={500}
          height={500}
          src="/assets/images/arrow1.png"
          className="absolute top-0 inset-0 flex self-center place-self-center"
          alt="Downwards arrow"
        />
      </section>

      <section className="bg-[#242424] relative z-20">
        <div className="space-y-16 lg:space-y-20 bg-[#1A1A1A] py-20 relative z-30">
          <ParallaxSection />
        </div>
        <div className="flex justify-center relative z-20 bg-[#1A1A1A]">
          <CTA />
        </div>
        <div className="h-[110vh] lg:h-[80vh] flex justify-center text-slate-950 relative z-10 bg-[#1A1A1A]"></div>
        <Footer />
      </section>
    </div>
  );
};

export default Work;
