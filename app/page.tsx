import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Home from '@/components/Parallax'
import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col bg-[#1A1A1A] text-slate-50">
        <Navbar />
        <Hero />
        <Home />
    </div>
  )
}

export default page