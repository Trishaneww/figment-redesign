import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer2 = () => {
  return (
    <div className="z-10 flex flex-col pt-24 pb-12 px-12 overflow-x-hidden items-center bg-[#242424] w-full">
        <div className="flex flex-col gap-12 lg:gap-2 flex-wrap lg:flex-row justify-between lg:w-[80%] border-b-[1px] border-b-gray-200 pb-12">

        <section className="flex flex-col items-start justify-start lg:max-w-[350px] text-slate-50">
                  {/* <Image
                    height={140}
                    width={140}
                    src="/assets/images/logo.png"
                    alt="stephenson media logo" 
                    className="-ml-4 lg:ml-0"
                /> */}
            <p className="text-2xl font-extrabold">WIZW STUDIOS</p>
            <p className="text-base">We design and develop custom, high-performing websites tailored to help your business stand out and grow.</p>
            <Link href="/contact" className="flex items-center gap-1 text-base text-slate-50 group" aria-label="Link leads to contact page">
            <p>Get Started</p>
            <ArrowRight className="group-hover:ml-2 duration-200" />
            </Link>
        </section>
        <section className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 text-slate-50 w-full">
            <div className="flex gap-4">
                    {/* <p>4</p> */}
                    <div className="flex flex-col">
                        <ul className="text-slate-50 text-base flex flex-col gap-2">
                            <li><Link href="/#services" aria-label="navigation link">Services</Link></li>
                            <li><Link href="/work" aria-label="navigation link">Gallery</Link></li>
                            <li><Link href="/pricing" aria-label="navigation link"></Link>Pricing</li>
                            <li><Link href="/#services" aria-label="navigation link">Get a Free Audit</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4">
                    {/* <p>3</p> */}
                    <div className="flex flex-col">
                        <ul className="text-slate-50 text-base flex flex-col gap-2">
                            <li><Link href="mailto:mediabystephenson@gmail.com" target="_blank" aria-label="Link leads to our email">trishane@wizeconsulting.ca</Link></li>
                            <li>(647)-472-4119</li>
                            <li><Link href="/https://www.instagram.com/stephenson.media/" target="_blank" aria-label="View more of our work on instagram">Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <div className="lg:w-[80%] flex gap-2 text-slate-50 text-sm pt-8">
            <p>@2025 WIZE STUDIOS</p>
            <p>ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer2