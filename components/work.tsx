'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { work } from '@/data';

export default function ParallaxSections() {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="space-y-16 lg:space-y-20 bg-[#1A1A1A] text-slate-50 py-20 lg:px-12">
      {work.map((work, index) => (
        <div key={index} id={`section-${index}`} className="relative flex items-center justify-center lg:h-[65vh] px-6 lg:px-10">
          <div className="relative flex flex-col gap-4 lg:gap-2 lg:flex-row items-center space-x-5">
            <div>
              <div className="absolute -top-6 lg:top-0 -left-4 lg:-left-10 transform z-20" style={{ transform: `translateY(${offsets[index]}px)` }}>
                <Image src={work.src1} alt="Background Image" width={300} height={400} className="rounded-lg shadow-lg max-w-[100px] md:max-w-[150px] lg:max-w-[180px]" />
              </div>

              <div className="relative z-10">
                <Image src={work.src2}  alt="Foreground Image" width={1000} height={1000} className="rounded-lg shadow-lg border-[1.5px] border-gray-500" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 relative z-20 w-full lg:max-w-md  lg:p-6  text-slate-50">
              <p>Web Design | Web Development</p>
              <h2 className="text-3xl font-bold text-slate-50 mt-4">GrowByte Marketing</h2>
              <p className="mt-2 text-gray-50">The Energy Humanities is an emerging field of study that uses traditional humanities-based approaches to tackle questions about climate, energy and culture. Designed and developed this in Webflow and set up the CMS to accomodate hundreds of articles and generate more clicks.</p>
              <div className="flex items-center gap-2 text-slate-50">
                <div className="bg-slate-50 h-[1.4px] w-[25px]"></div>
                <Link href='/'>View Live Site</Link>
                <SquareArrowOutUpRight />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}