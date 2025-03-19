"use client";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MobilePrice from "@/components/MobilePrice";
import Navbar from "@/components/Navbar";
import Practice from "@/components/Practice";
import PriceCards from "@/components/Pricing";
import PricingChart from "@/components/PricingChart";
import Image from "next/image";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * -0.2);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="flex flex-col bg-[#1A1A1A] text-[#F5EADF] pricing-homepage">
      <Navbar />
      <main className="h-[100vh] flex items-center justify-center text-[#F5EADF] bg-[#1A1A1A] relative z-30">
        <div
          className="relative flex flex-col gap-2 justify-center items-center z-10 -mt-24 text-base lg:text-lg transform translate"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <p className="">PRICING</p>
          <p className="text-4xl lg:text-8xl font-light text-center lg:w-[70%]">
            HOW MUCH DOES A WEBSITE
            <span className="font-extrabold"> COST?</span>
          </p>
          <p>Whatever your budget, we deliver supeior quality.</p>
        </div>
        <Image
          width={500}
          height={500}
          src="/assets/images/arrow1.png"
          className="absolute top-0 inset-0 flex self-center place-self-center"
          alt="Downwards arrow"
        />
      </main>

      <main className="bg-[#1A1A1A] relative z-20 text-[#F5EADF]">
        <div className="lg:px-24 relative z-20 bg-[#1A1A1A] px-6 pb-10 lg:pb-20 lg:pt-20">
          <section className="flex flex-col items-center gap-4">
            <p className="text-3xl md:text-5xl lg:text-7xl font-semibold text-center">
              What is a website <span className="font-extrabold">worth</span> to
              you?
            </p>
            <p className="text-base lg:text-lg">
              Your website is an investment. Let us know your budget, and we’ll
              maximize its impact for you.
            </p>
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
        <PriceCards />
        <div className="relative z-30 bg-[#1A1A1A]">
          <MobilePrice />
        </div>

        <div
          className="flex justify-center w-full relative z-30 bg-[#1A1A1A] overflow-hidden"
          id="features"
        >
          <PricingChart />
        </div>
        <div className="flex justify-center relative z-20 bg-[#1A1A1A]">
          <CTA />
        </div>
        <div className="h-[110vh] lg:h-[80vh] flex justify-center text-slate-950 relative z-10 bg-[#1A1A1A]"></div>
        <Footer />
      </main>
    </div>
  );
};

export default Pricing;
