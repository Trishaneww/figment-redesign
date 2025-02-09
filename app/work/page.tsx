"use client";
import Navbar from "@/components/Navbar";
import ParallaxSection from "@/components/work";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Work = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const [offsets, setOffsets] = useState(Array(4).fill(0));

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
          className="relative flex flex-col gap-2 justify-center items-center z-10 -mt-24 text-base transform translate"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <p className="text-indigo-300">FIGMENT STUDIOS</p>
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
        <div className="h-[100vh] lg:h-[60vh] flex justify-center text-slate-950 relative z-10 bg-[#1A1A1A]"></div>
        <Footer />
      </section>
    </div>
  );
};

export default Work;
