"use client";
import { useEffect, useRef, useState } from "react";
import "../styles/global.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { DollarSign, Home, Instagram, Linkedin, Send } from "lucide-react";
import CTA from "./CTA";
import emailjs from "@emailjs/browser";
import { useToast } from "./hooks/use-toast";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import MobileGallery from "./MobileGallery";
import LaptopGallery from "./Practice";

interface ColumnProps {
  images: string[];
  y: any;
}

export default function Linksubpage() {
  const [error, setError] = useState("");

  const { toast } = useToast();

  const sendEmail = (e: any) => {
    e.preventDefault();

    try {
      if (e.target.email.value === "") {
        setError("Email is required");
      } else {
        emailjs.sendForm(
          "service_luvg8op",
          "template_oirz684",
          e.target,
          "1MxDwCSvQF6Leln4f"
        );
        e.target.reset();
        setError("");

        toast({
          title: "Email Sent",
          description: "We will get back to you shortly",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <div className="lg:px-24 relative flex flex-col items-center z-20 bg-[#1A1A1A] px-6 pb-10 lg:pb-20 pt-20 lg:pt-44 text-slate-50">
        <Image
          width={200}
          height={200}
          src="/assets/images/logo2.png"
          alt="figment studios logo"
        />
        <p className="text-2xl font-extrabold">FIGMENT STUDIOS</p>
        <p>We build amazing websites</p>

        <div className="flex flex-col gap-2 w-full items-center mt-6">
          <Link
            href="/"
            className="w-full flex justify-center items-center"
            aria-label="Link leads to home website"
          >
            <Button className="w-full max-w-[400px] h-[50px] text-slate-50 border-[1px] border-gray-500 bg-[#242424]">
              <Home />
              Studio Website
            </Button>
          </Link>

          <Link
            href="/pricing"
            className="w-full flex justify-center items-center"
            aria-label="Link leads to pricing page"
          >
            <Button className="w-full max-w-[400px] h-[50px] text-slate-50 border-[1px] border-gray-500 bg-[#242424]">
              <DollarSign />
              Website Pricing
            </Button>
          </Link>

          <Link
            href="/contact"
            className="w-full flex justify-center items-center"
            aria-label="Link leads to contact page"
          >
            <Button className="w-full max-w-[400px] h-[50px] text-slate-50 border-[1px] border-gray-500 bg-[#242424]">
              <Send />
              Get a Free Quote Today
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/tw11/"
            target="_blank"
            className="w-full flex justify-center items-center"
            aria-label="Link leads to our founder, Trishanes Linkedin"
          >
            <Button className="w-full max-w-[400px] h-[50px] text-slate-50 border-[1px] border-gray-500 bg-[#242424]">
              <Linkedin />
              Linkedin
            </Button>
          </Link>

          <Link
            href="https://www.instagram.com/figmentstudios.ca"
            target="_blank"
            className="w-full flex justify-center items-center"
            aria-label="Link leads to instagram page"
          >
            <Button className="w-full max-w-[400px] h-[50px] text-slate-50 border-[1px] border-gray-500 bg-[#242424]">
              <Instagram />
              Instagram
            </Button>
          </Link>
        </div>

        <form
          onSubmit={sendEmail}
          className="flex flex-col border-[1px] border-gray-500 w-full max-w-[400px] mt-6 rounded-lg px-6 py-4"
        >
          <div className="flex flex-col items-center text-center gap-2">
            <p className="text-2xl font-semibold w-[70%]">
              Lots more Coming Soon 🚀
            </p>
            <p>Sign up now to be updated when we drop something new.</p>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col items-start gap-1">
              <p>Full Name</p>
              <Input
                type="text"
                placeholder="Name"
                name="full_name"
                className="w-full h-[50px] p-2 lg:placeholder:text-base placeholder:text-slate-50 focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]"
              />
            </div>

            <div className="flex flex-col items-start gap-1">
              <p>Email</p>
              <Input
                type="text"
                placeholder="Email"
                name="email"
                className="w-full h-[50px] p-2 lg:placeholder:text-base placeholder:text-slate-50 focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="text-base w-full h-[50px] mt-6  bg-slate-50 text-slate-950"
          >
            Submit
          </Button>
        </form>
      </div>

      <div className="space-y-16 lg:space-y-20 bg-[#1A1A1A] py-20 relative z-30"></div>

      <div className="hidden lg:flex relative z-20 bg-[#1A1A1A]">
        <LaptopGallery />
      </div>

      <div className="lg:hidden relative z-20 bg-[#1A1A1A]">
        <MobileGallery />
      </div>

      <div className="flex justify-center relative z-20 bg-[#1A1A1A] text-slate-50">
        <CTA />
      </div>
      <div className="h-[100vh] lg:h-[60vh] flex justify-center text-slate-50 relative z-10 bg-[#1A1A1A]"></div>
      <Footer />
    </main>
  );
}


