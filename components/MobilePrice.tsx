import React from 'react'
import '../styles/global.scss';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { GiCheckMark } from 'react-icons/gi';
import { pricingChart } from '@/data';
import { GoDash } from "react-icons/go";
const titles = ['Business Elite', 'Business', 'Core', 'Lite']


const MobilePrice = () => {
  return (
    <div>
        <div className="flex flex-col justify-center gap-6 w-full px-6 md:hidden py-20">
            <p className='border-b-[1px] border-gray-200 text-2xl pb-4'>Compare features</p>
        <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
                    <AccordionItem value={`item-1`} className="border-none rounded-2xl w-full">
                    <AccordionTrigger className="text-lg text-left w-full">Project Managment</AccordionTrigger>
                        <AccordionContent className="text-lg mt-2">
                            {pricingChart.slice(0,5).map((column) => (
                                        <section className="flex flex-col w-full text-base" key={column.id}>
                                        <div className="h-[30px] w-full justify-start mt-6">
                                            <p>{column.name}</p>
                                        </div>
                                        {column.values.map((value, idx) => (
                                            <div className="h-[70px] w-full rowBorder justify-between text-gray-400" key={idx}>
                                                <p>{titles[idx]}</p>
                                                {value === true ? 
                                                <div className="w-[26px] h-[22px] flex justify-center items-center text-green-500 rounded-full">
                                                    <GiCheckMark size={16}/>
                                                </div>
                                                :  
                                                <div className="w-[25px] h-[25px] flex justify-center items-center text-gray-400 rounded-full">
                                                 <GoDash size={50}/>
                                                </div>}
                                            </div>
                                        ))}
                                        </section>
                                    ))}
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value={`item-2`} className="border-none rounded-2xl w-full">
                    <AccordionTrigger className="text-lg text-left w-full">Website Features</AccordionTrigger>
                        <AccordionContent className="text-lg mt-2">
                            {pricingChart.slice(5,11).map((column) => (
                                        <section className="flex flex-col w-full text-base" key={column.id}>
                                        <div className="h-[30px] w-full justify-start mt-6">
                                            <p>{column.name}</p>
                                        </div>
                                        {column.values.map((value, idx) => (
                                            <div className="h-[70px] w-full rowBorder justify-between text-gray-400" key={idx}>
                                                <p>{titles[idx]}</p>
                                                {value === true ? 
                                                <div className="w-[26px] h-[22px] flex justify-center items-center text-green-500 rounded-full">
                                                    <GiCheckMark size={16}/>
                                                </div>
                                                :  
                                                <div className="w-[25px] h-[25px] flex justify-center items-center text-gray-400 rounded-full">
                                                 <GoDash size={50}/>
                                                </div>}
                                            </div>
                                        ))}
                                        </section>
                                    ))}
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value={`item-3`} className="border-none rounded-2xl w-full">
                    <AccordionTrigger className="text-lg text-left w-full">Ecommerce</AccordionTrigger>
                        <AccordionContent className="text-lg mt-2">
                            {pricingChart.slice(11,15).map((column) => (
                                        <section className="flex flex-col w-full text-base" key={column.id}>
                                        <div className="h-[30px] w-full justify-start mt-6">
                                            <p>{column.name}</p>
                                        </div>
                                        {column.values.map((value, idx) => (
                                            <div className="h-[70px] w-full rowBorder justify-between text-gray-400" key={idx}>
                                                <p>{titles[idx]}</p>
                                                {value === true ? 
                                                <div className="w-[26px] h-[22px] flex justify-center items-center text-green-500 rounded-full">
                                                    <GiCheckMark size={16}/>
                                                </div>
                                                :  
                                                <div className="w-[25px] h-[25px] flex justify-center items-center text-gray-400 rounded-full">
                                                 <GoDash size={50}/>
                                                </div>}
                                            </div>
                                        ))}
                                        </section>
                                    ))}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value={`item-4`} className="border-none rounded-2xl w-full">
                    <AccordionTrigger className="text-lg text-left w-full">Manager Platform</AccordionTrigger>
                        <AccordionContent className="text-lg mt-2">
                            {pricingChart.slice(15,21).map((column) => (
                                        <section className="flex flex-col w-full text-base" key={column.id}>
                                        <div className="h-[30px] w-full justify-start mt-6">
                                            <p>{column.name}</p>
                                        </div>
                                        {column.values.map((value, idx) => (
                                            <div className="h-[70px] w-full rowBorder justify-between text-gray-400" key={idx}>
                                                <p>{titles[idx]}</p>
                                                {value === true ? 
                                                <div className="w-[26px] h-[22px] flex justify-center items-center text-green-500 rounded-full">
                                                    <GiCheckMark size={16}/>
                                                </div>
                                                :  
                                                <div className="w-[25px] h-[25px] flex justify-center items-center text-gray-400 rounded-full">
                                                 <GoDash size={50}/>
                                                </div>}
                                            </div>
                                        ))}
                                        </section>
                                    ))}
                        </AccordionContent>
                    </AccordionItem>

        </Accordion>
        </div>
    </div>
  )
}

export default MobilePrice