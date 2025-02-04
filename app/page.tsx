import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Home from '@/components/Parallax'
import React from 'react'



const page = () => {
  return (
    <div className="flex flex-col">
        <Hero />
        <Home />
        <Footer />
    </div>
  )
}

export default page