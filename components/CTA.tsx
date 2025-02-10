import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="relative w-[92%] lg:w-[80%] flex flex-col gap-2 items-center justify-center border-[1px] border-slate-50 rounded-2xl px-4  h-[290px] lg:h-[320px] top-32 bg-[#242424] text-center text-[#F5EADF]">
    <p className="text-base lg:text-lg">LETS TALK</p>
    <p className="text-3xl lg:text-5xl font-bold">Need a Website That Stands Out?</p>
    <p className="text-base lg:text-lg">We design custom websites that drive results. Letss bring your vision to life.</p>
    <Link href="/contact" className="relative w-[260px] h-[55px] rounded-lg border-[1px] border-slate-50 overflow-hidden group z-10 mt-6">
          <Button className="absolute top-0 h-full w-full flex justify-center items-center font-semibold tracking-wide bg-transparent"><p className="z-10 group-hover:text-black duration-700 transition-all">GET A FREE QUOTE</p></Button>
          <p className="absolute top-0 h-full w-full rounded-lg bg-slate-50 flex justify-center items-center font-semibold tracking-wide -ml-80 group-hover:ml-0 duration-700 transition-all"></p>
      </Link>
  </section>
  )
}

export default CTA