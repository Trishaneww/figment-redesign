import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { pricingData } from '@/data';
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
  

const PriceCards = () => {
  return (
    <div className="flex flex-col items-center gap-16 relative z-30 bg-[#1A1A1A]">
        <section className="flex flex-col justify-center items-center gap-4 text-center z-10">
            <p className="text-3xl lg:text-7xl font-semibold">every project is <span className="font-extrabold">unique</span></p>
            <p className="text-base lg:text-lg">The cost of a website depends on your goals and features. Our pricing plans give you a clear idea of what to expect.</p>
        </section>
        <div className="flex flex-wrap items-center gap-4 justify-center ">
            {pricingData.slice(0,2).map((card,idx) => (
                <div className="relative flex flex-col items-center max-w-[330px] h-[400px] bg-[#242424] rounded-2xl border-[1px] border-[#686868] py-4 pt-8 px-6" key={idx}>
                    <p className="font-bold text-4xl">{card.title}</p>
                    <p className="h-[120px] text-center mt-2">{card.desc}</p>
                    <p className="text-3xl font-semibold">{card.price}</p>
                    <Link href="/contact" className="w-full"> <Button className="w-full h-[50px] bg-slate-50 text-slate-950 mt-4 text-base group">Get Started <ChevronRight className="group-hover:ml-1 -ml-1 duration-200" /></Button></Link>
                    <footer className="mt-4">
                        <Link href='#features' className="underline mt-4">See all features</Link>
                    </footer>
                </div>
            ))}
            {pricingData.slice(2,3).map((card,idx) => (
                <div className="relative flex flex-col items-center max-w-[330px] h-[400px] bg-[#242424] rounded-2xl border-[1px] border-[#686868] py-4 pt-8 px-6" key={idx}>
                    <Button className="rounded-full bg-slate-50 text-base -top-4 absolute text-slate-950">Most Popular</Button>
                    <p className="font-bold text-4xl">{card.title}</p>
                    <p className="h-[120px] text-center mt-2">{card.desc}</p>
                    <p className="text-3xl font-semibold">{card.price}</p>
                    <Link href="/contact" className="w-full"><Button className="w-full h-[50px] bg-slate-50 text-slate-950 mt-4 text-base group">Get Started <ChevronRight className="group-hover:ml-1 -ml-1 duration-200" /></Button></Link>
                    <footer className="mt-4">
                        <Link href='#features' className="underline mt-4">See all features</Link>
                    </footer>


                </div>
            ))}
            {pricingData.slice(3,4).map((card,idx) => (
                <div className="flex flex-col items-center max-w-[330px] h-[400px] bg-[#242424] rounded-2xl border-[1px] border-[#686868] py-4 pt-8 px-6" key={idx}>
                    <p className="font-bold text-4xl">{card.title}</p>
                    <p className="h-[120px] text-center mt-2">{card.desc}</p>
                    <p className="text-3xl font-semibold">{card.price}</p>
                    <Link href="/contact" className="w-full"> <Button className="w-full h-[50px] bg-slate-50 text-slate-950 mt-4 text-base group">Get Started <ChevronRight className="group-hover:ml-1 -ml-1 duration-200" /></Button></Link>
                    <footer className="mt-4">
                        <Link href='#features' className="underline mt-4">See all features</Link>
                    </footer>


                </div>
            ))}
        </div>
    </div>
  )
}

export default PriceCards