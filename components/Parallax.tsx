"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/global.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { images } from "@/data";
import CTA from "./CTA";
import Footer from "./Footer";

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
      <div className="lg:px-24 relative z-20 bg-[#1A1A1A] px-6 pb-10 lg:pb-20 pt-20 lg:pt-44">
        <section className="flex flex-col gap-2 text-[#F5EADF]">
          <p className="text-3xl lg:text-4xl lg:w-[58%]">
          Welcome to Figment Studios! We&apos;re a website development company founded by Trishane Anthony. We specialize in custom websites that help businesses stand out and thrive online.
          </p>
          <div className="flex items-center gap-2 text-lg group">
            <div className="bg-slate-50 h-[1.4px] w-[25px]  group-hover:w-[40px] duration-300"></div>
            <p>Why Figment Studios?</p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:w-[90%] xl:w-[80%] mb-12 text-[#F5EADF]">
            <div className="hidden lg:flex"></div>
            <div className="flex flex-col">
              <p className="tracking-widest text-xl font-bold mb-6">DESIGN</p>
              <ul className="flex flex-col ml-6">
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>Unique aesthetics, tailored for your project</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>User experiences that keep visitors hooked</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>Strategic layouts for maximum conversions</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
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
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>Custom-built features that fit your needs</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>SEO & conversion-ready, from the start</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>Lightning-fast performance, every time</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-[#F5EADF] rounded-full h-[8px] w-[8px]"></div>
                  <p>Optimized, high-conversion eCommerce solutions</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
      <div className="space-y-16 lg:space-y-20 bg-[#1A1A1A] py-20 relative z-30">
     
      </div>

      <div ref={gallery} className="lg:flex gallery relative z-20 bg-[#1A1A1A]">
        <Column
          images={[
            images[0],
            images[1],
            images[2],
            images[23],
            images[4],
            images[5],
            images[20],
            images[7],
            images[8],
            images[9],
            images[10],
            images[11],
          ]}
          y={y}
        />
        <Column
          images={[
            images[12],
            images[13],
            images[14],
            images[15],
            images[16],
            images[17],
            images[18],
            images[13],
            images[25],
            images[21],
            images[22],
            images[23],
          ]}
          y={y2}
        />
          <Column
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[10],
              images[7],
              images[12],
              images[2],
              images[8],
              images[9],
              images[10],
              images[11],
            ]}
            y={y3}
          />
          <Column
            images={[
              images[0],
              images[1],
              images[2],
              images[2],
              images[8],
              images[11],
              images[9],
              images[22],
              images[8],
              images[9],
              images[10],
              images[11],
            ]}
            y={y4}
          />
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
