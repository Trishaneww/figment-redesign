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
    <main className="bg-[#1A1A1A] relative z-20">
      <div className="lg:px-24 relative z-20 bg-[#1A1A1A] px-6 pb-10 lg:pb-20 pt-20 lg:pt-44">
        <section className="flex flex-col gap-2">
          <p className="text-3xl lg:text-4xl lg:w-[58%]">
          Welcome to Figment Studios! We're a website development company founded by Trishane Anthony. We specialize in custom websites that help businesses stand out and thrive online.
          </p>
          <div className="flex items-center gap-2 text-lg">
            <div className="bg-slate-50 h-[1.4px] w-[25px]"></div>
            <p>Why Figment Studios?</p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:w-[90%] xl:w-[80%] mb-12">
            <div className="hidden lg:flex"></div>
            <div className="flex flex-col">
              <p className="tracking-widest text-xl font-bold mb-6">DESIGN</p>
              <ul className="flex flex-col ml-6">
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-slate-50 rounded-full h-[8px] w-[8px]"></div>
                  <p>Bespoke web development</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-slate-50 rounded-full h-[8px] w-[8px]"></div>
                  <p>Bespoke web development</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-slate-50 rounded-full h-[8px] w-[8px]"></div>
                  <p>Bespoke web development</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="tracking-widest text-xl font-bold mb-6">
                DEVELOPMENT
              </p>
              <ul className="flex flex-col ml-6">
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-slate-50 rounded-full h-[8px] w-[8px]"></div>
                  <p>Bespoke web development</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-slate-50 rounded-full h-[8px] w-[8px]"></div>
                  <p>Bespoke web development</p>
                </li>
                <li className="flex gap-2 items-center text-lg">
                  <div className="bg-slate-50 rounded-full h-[8px] w-[8px]"></div>
                  <p>Bespoke web development</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
      <div className="space-y-16 lg:space-y-20 bg-[#1A1A1A] py-20 relative z-30">
        {/* <div
          id="section-1"
          className="relative flex items-center justify-center lg:h-[65vh] px-6 lg:px-10"
        >
          <div className="relative flex flex-col gap-4 lg:gap-2 lg:flex-row items-center space-x-5">
            <div>
              <div
                className="absolute -top-6 lg:top-0 -left-4 lg:-left-10 transform z-20"
                style={{ transform: `translateY(${offsets[1]}px)` }}
              >
                <Image
                  src="/assets/images/1.jpg"
                  alt="Background Image"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg max-w-[100px] md:max-w-[150px] lg:max-w-[220px] border-[1.5px] border-gray-500"
                />
              </div>
              <div className="relative z-10">
                <Image
                  src="/assets/images/proj1.png"
                  alt="Foreground Image"
                  width={1000}
                  height={1000}
                  className="rounded-lg shadow-lg border-[1.5px] border-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 relative z-20 w-full lg:max-w-md  lg:p-6  text-slate-50">
              <p>Web Design | Web Development</p>
              <h2 className="text-3xl font-bold text-slate-50 mt-4">
                GrowByte Marketing
              </h2>
              <p className="mt-2 text-gray-50">
                The Energy Humanities is an emerging field of study that uses
                traditional humanities-based approaches to tackle questions
                about climate, energy and culture. Designed and developed this
                in Webflow and set up the CMS to accomodate hundreds of articles
                and generate more clicks.
              </p>
              <div className="flex items-center gap-2 text-slate-50">
                <div className="bg-slate-50 h-[1.4px] w-[25px]"></div>
                <Link href="/">View Live Site</Link>
                <SquareArrowOutUpRight />
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div ref={gallery} className="lg:flex gallery relative z-20 bg-[#1A1A1A]">
        <Column
          images={[
            images[0],
            images[1],
            images[2],
            images[3],
            images[4],
            images[5],
            images[6],
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
            images[6],
            images[7],
            images[8],
            images[9],
            images[10],
            images[11],
            images[6],
            images[7],
            images[8],
            images[9],
            images[10],
            images[11],
          ]}
          y={y2}
        />
          <Column
            images={[
              images[11],
              images[12],
              images[13],
              images[14],
              images[15],
              images[16],
            ]}
            y={y3}
          />
          <Column
            images={[
              images[11],
              images[12],
              images[13],
              images[14],
              images[15],
              images[16],
            ]}
            y={y4}
          />
      </div>
      <div className="flex justify-center relative z-20 bg-[#1A1A1A]">
        <CTA />
      </div>
      <div className="h-[100vh] lg:h-[60vh] flex justify-center text-slate-950 relative z-10 bg-[#1A1A1A]"></div>
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
