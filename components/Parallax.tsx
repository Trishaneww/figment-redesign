"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/global.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import CTA from "./CTA";
import Footer from "./Footer";
import ParallaxSections from "./Practice";
import MobileGallery from "./MobileGallery";

interface ColumnProps {
  images: string[];
  y: any;
}

export default function Home() {
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
  // const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);

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

  useEffect(() => {
    const handleScroll = () => {
      const newOffsets = Array(4)
        .fill(0)
        .map((_, index) => {
          const section = document.getElementById(`section-${index}`);
          if (section) {
            const rect = section.getBoundingClientRect();
            return rect.top * 0.2; // Adjust speed
          }
          return 0;
        });
      setOffsets(newOffsets);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#1A1A1A] relative z-20" id="services">
      <div className="relative z-20 bg-[#1A1A1A] px-6 pb-10 lg:pb-20 pt-20 lg:pt-44">
        <section className="flex flex-col gap-2 text-[#F5EADF]">
          <p className="text-3xl lg:text-4xl lg:w-[58%] lg:px-24">
          Welcome to Figment Studios! We&apos;re a website development company founded by Trishane Anthony. We specialize in custom websites that help businesses stand out and thrive online.
          </p>
          <div className="flex items-center gap-2 text-lg group lg:px-24">
            <div className="bg-slate-50 h-[1.4px] w-[25px]  group-hover:w-[40px] duration-300"></div>
            <p>Why Figment Studios?</p>
          </div>
          <section className="grid grid-cols-1 lg:flex gap-8 mt-12 lg:w-full xl:w-full mb-12 text-[#F5EADF]">
            <div className="hidden lg:flex  lg:w-[200px] xl:w-[300px]"></div>
            <div className="flex flex-col">
              <p className="tracking-widest text-xl font-bold mb-6">DESIGN</p>
              <ul className="flex flex-col ml-6">
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>Unique aesthetics, tailored for your project</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>User experiences that keep visitors hooked</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>Strategic layouts for maximum conversions</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>Mobile-first, pixel-perfect designs</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="tracking-widest text-xl font-bold mb-6">
                DEVELOPMENT
              </p>
              <ul className="flex flex-col ml-6">
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>Custom-built features that fit your needs</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>SEO & conversion-ready, from the start</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>Lightning-fast performance, every time</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full min-h-[8px] min-w-[8px]"></div>
                  <p>Optimized, high-conversion eCommerce solutions</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
      <div className="space-y-16 lg:space-y-20 bg-[#1A1A1A] py-20 relative z-30">
     
      </div>

      <div className="hidden lg:flex relative z-20 bg-[#1A1A1A]">
        <ParallaxSections />
      </div>

      <div className="lg:hidden relative z-20 bg-[#1A1A1A]">
        <MobileGallery />
      </div>
      
      <div className="flex justify-center relative z-20 bg-[#1A1A1A]">
        <CTA />
      </div>
      <div className="h-[110vh] lg:h-[80vh] flex justify-center text-slate-950 relative z-10 bg-[#1A1A1A]"></div>
      <Footer />
    </main>
  );
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src: any, i: any) => {
        return (
          <div key={i}>
            <Image
              src={src}
              alt="image"
              className="border-[2px] border-gray-500 rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
