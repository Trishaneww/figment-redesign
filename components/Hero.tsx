// import React from "react";
// import "../styles/page.module.scss";
// import Image from "next/image";
// import { hero } from "@/data";
// import { Button } from "./ui/button";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div className="flex flex-col gap-2 items-center justify-center text-[#F5EADF] z-30 bg-[#1A1A1A]">
//       <div className="flex flex-col items-center lg:w-[60%] text-center text-base gap-4 mt-44 px-6 max-w-[900px]">
//         <p className="text-4xl lg:text-[3.5rem] lg:leading-[3.2rem] text-center font-semibold">
//           Stand out online with a custom website built for success.
//         </p>
//         <p className="px-6 text-xl lg:w-[70%] xl:min-w-[700px]">
//           We design and develop custom, high-performing websites tailored to
//           help your business stand out and grow.
//         </p>
//         <div className="mt-4 flex justify-center items-center gap-2">
//           <Link
//             href="/pricing"
//             className="relative w-[150px] h-[50px] rounded-lg border-[1px] border-slate-50 overflow-hidden group z-10"
//           >
//             <Button className="absolute top-0 h-full w-full flex justify-center items-center font-semibold tracking-wide bg-transparent">
//               <p className="z-10 group-hover:text-black duration-700 transition-all text-base lg:text-lg">
//                 View Pricing
//               </p>
//             </Button>
//             <p className="absolute top-0 h-full w-full rounded-lg bg-slate-50 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
//           </Link>
//           <Link href="/contact">
//             <Button className="w-[200px] h-[50px] bg-slate-50 text-slate-950 text-base lg:text-lg">
//               Get a Free Redesign
//             </Button>
//           </Link>
//         </div>
//       </div>
//       <section className="flex gap-2 justify-center items-center overflow-hidden relative mt-20 lg:hidden">
//       {hero.map((src, idx) => (
//           <Image
//             width={1000}
//             height={1000}
//             src="/assets/images/6.jpg"
//             alt="mobile view landing page"
//             className="rounded-xl"
//             priority
//             key={idx}
//           />
//         ))}
//         <div className="absolute inset-y-0 left-0 w-[6rem] lg:w-[40rem] bg-gradient-to-r from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
//         {/* Right Fade Effect */}
//         <div className="absolute inset-y-0 right-0 w-[6rem] lg:w-[40rem] bg-gradient-to-l from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
//       </section>
//       <section className="hidden lg:flex gap-4 justify-center items-center overflow-hidden relative mt-20">
//       {hero.map((src, idx) => (
//           <Image
//             width={1000}
//             height={1000}
//             src="/assets/images/6.jpg"
//             alt="mobile view landing page"
//             className="rounded-xl"
//             priority
//             key={idx}
//           />
//         ))}
//         <div className="absolute inset-y-0 left-0 w-[6rem] lg:w-[40rem] bg-gradient-to-r from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
//         {/* Right Fade Effect */}
//         <div className="absolute inset-y-0 right-0 w-[6rem] lg:w-[40rem] bg-gradient-to-l from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import "../styles/page.module.scss";
import Image from "next/image";
import { hero } from "@/data";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-[#F5EADF] z-30 bg-[#1A1A1A]">
      <div className="flex flex-col items-center lg:w-[60%] text-center text-base gap-4 mt-44 px-6 max-w-[900px]">
        <p className="text-4xl lg:text-[3.5rem] lg:leading-[3.2rem] text-center font-semibold">
          Stand out online with a custom website built for success.
        </p>
        <p className="px-6 text-xl lg:w-[70%] xl:min-w-[700px]">
          We design and develop custom, high-performing websites tailored to
          help your business stand out and grow.
        </p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <Link
            href="/pricing"
            className="relative w-[150px] h-[50px] rounded-lg border-[1px] border-slate-50 overflow-hidden group z-10"
          >
            <Button className="absolute top-0 h-full w-full flex justify-center items-center font-semibold tracking-wide bg-transparent">
              <p className="z-10 group-hover:text-black duration-700 transition-all text-lg">
                View Pricing
              </p>
            </Button>
            <p className="absolute top-0 h-full w-full rounded-lg bg-slate-50 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
          </Link>
          <Link href="/contact">
            <Button className="w-[200px] h-[50px] bg-slate-50 text-slate-950 text-lg">
              Get a Free Redesign
            </Button>
          </Link>
        </div>
      </div>
      <section className="flex gap-6 justify-center items-center overflow-hidden relative mt-20 lg:hidden">
        {hero.map((src, idx) => (
          <Image
            width={1000}
            height={1000}
            src={src}
            alt="mobile view landing page"
            className="rounded-xl"
            priority
            key={idx}
          />
        ))}
        <div className="absolute inset-y-0 left-0 w-[6rem] lg:w-[40rem] bg-gradient-to-r from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
        {/* Right Fade Effect */}
        <div className="absolute inset-y-0 right-0 w-[6rem] lg:w-[40rem] bg-gradient-to-l from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
      </section>
      <section className="hidden lg:flex gap-6 justify-center items-center overflow-hidden relative mt-20">
        {/* {hero.map((src, idx) => (
          <Image
            width={1000}
            height={1000}
            src='/assets/images/6.jpg'
            alt="mobile view landing page"
            className="rounded-xl"
            priority
            key={idx}
          />
        ))} */}
          <Image
            width={1000}
            height={1000}
            src='/assets/images/mobile5.png'
            alt="mobile view landing page"
            className="rounded-xl"
            priority
          />
            <Image
            width={1000}
            height={1000}
            src='/assets/images/mobile5.png'
            alt="mobile view landing page"
            className="rounded-xl"
            priority
          />
         <Image
            width={1000}
            height={1000}
            src='/assets/images/mobile5.png'
            alt="mobile view landing page"
            className="rounded-xl"
            priority
          />
           <Image
            width={1000}
            height={1000}
            src='/assets/images/mobile5.png'
            alt="mobile view landing page"
            className="rounded-xl"
            priority
          />
           <Image
            width={1000}
            height={1000}
            src='/assets/images/mobile5.png'
            alt="mobile view landing page"
            className="rounded-xl"
            priority
          />
        <div className="absolute inset-y-0 left-0 w-[6rem] lg:w-[40rem] bg-gradient-to-r from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
        {/* Right Fade Effect */}
        <div className="absolute inset-y-0 right-0 w-[6rem] lg:w-[40rem] bg-gradient-to-l from-[#1A1A1A] via-[#1a1a1a69] to-transparent"></div>
      </section>
    </div>
  );
};

export default Hero;