import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="relative w-[92%] lg:w-[80%] flex flex-col gap-2 items-center justify-center border-[1px] border-slate-50 rounded-2xl h-[290px] lg:h-[320px] top-32 bg-[#242424] ">
    <p className="">LETS TALK</p>
    <p className="text-4xl lg:text-5xl font-bold">Need a website?</p>
    <p>Tell me about your next project.</p>
    <div className="relative w-[260px] h-[55px] rounded-lg border-[1px] border-slate-50 overflow-hidden group z-10 mt-6">
          <Button className="absolute top-0 h-full w-full flex justify-center items-center font-semibold tracking-wide bg-transparent"><p className="z-10 group-hover:text-black duration-700 transition-all">GET A FREE QUOTE</p></Button>
          <Link href="/contact" className="absolute top-0 h-full w-full rounded-lg bg-slate-50 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></Link>
      </div>
  </section>
  )
}

export default CTA