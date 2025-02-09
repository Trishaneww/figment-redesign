import ContactHero from '@/components/ContactHero'
import Footer from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import ParallaxSections from '@/components/work'
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#1A1A1A] text-[#F5EADF]">
      <Navbar />
      <ContactHero />
      <ParallaxSections />
      <Footer />
      <Toaster />

    </div>
  )
}

export default Contact