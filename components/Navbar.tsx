"use client"
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import '../styles/global.scss';
import { Instagram, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { navItems } from '@/data';
import "../styles/global.scss"


const Navbar = () => {
 
  return (
    <div className="fixed top-0 flex w-full justify-center items-center py-5 navbar gap-8 px-4 lg:px-12 border-b-[1px] border-b-gray-500 z-[100] bg-[#1a1a1abb] backdrop-blur-3xl">
      <div className="flex justify-between items-center w-full lg:w-[80%]">
        <div className="flex gap-8 items-center">
          <Link href='/' className={cn(
                "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50"
              )}
              aria-label="homepage link">
                <p className="text-lg lg:text-xl font-extrabold">FIGMENT STUDIOS</p>
          </Link>

          <div className="flex justify-center items-center gap-8">
            {navItems.map((item,idx) => (
              <Link href={item.href} key={idx} className={cn("relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 tracking-wide")} aria-label="navigation link">{item.title}</Link>
            ))}
          </div>
          <Link href="https://www.instagram.com/figmentstudios.ca/" className="text-slate-50" aria-label="instagram link"><Instagram className="hidden lg:flex"/></Link>
        </div>

        <div className="flex gap-8 items-center text-slate-50">
          <Link href='mailto:trishane@figmentstudios.ca' className={cn("relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 tracking-wide")} aria-label="email us link">Contact Us</Link>
          <Link href='/contact' className={cn("relative dark:text-slate-50 items-center hidden lg:flex space-x-1 text-slate-50 tracking-wide")} aria-label="get a free audit">Get a Free Audit</Link>
        </div>





    <nav className="lg:hidden bg-transparent">
      <input type="checkbox" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-[#1a1a1a]">
        <Menu  size={20}/>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container ">
        <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-gray-500 mt-9 flex justify-center items-center rounded-lg border-[1px] border-gray-500 p-2 bg-[#1a1a1a]">
          <X size={20}/>
        
        </label>
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-slate-50 text-base" aria-label="navigation link">Home</Link> 
          <Link href="/work" className="text-slate-50 text-base -mt-4" aria-label="navigation link">Gallery</Link>
          <Link href="/pricing" className="text-slate-50 text-base -mt-4" aria-label="navigation link">Pricing</Link>
          <Link href="/contact" aria-label="navigation link">
            <Button className="w-[200px] h-[50px] bg-slate-50 text-slate-950 text-base lg:text-lg">Get a Free Redesign</Button>
          </Link>
        </div>

      </div>
    </nav>

      </div>
  </div>
  )}

export default Navbar