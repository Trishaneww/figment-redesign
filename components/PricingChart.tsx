import React from 'react'
import '../styles/global.scss';
import { GiCheckMark } from 'react-icons/gi';
import { pricingChart } from '@/data';
import { GoDash } from "react-icons/go";

const PricingChart = () => {
  return (
    <section className="hidden md:flex flex-col w-full min-w-[600px] mx-2 lg:mx-0 lg:w-4/6 mt-40 text-slate-50 text-lg bg-[#1A1A1A] overflow-x-scroll">
        <section className="flex font-bold text-xl">
             <div className="h-[70px]  w-[26%] flex flex-col gap-2  items-start justify-center pl-4">
                <p className="text-lg lg:text-2xl text-center">Compare Features</p>
                
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-lg lg:text-2xl text-center">Business Elite</p>
                
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-lg lg:text-2xl">Business</p>
                
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-lg lg:text-2xl">Core</p>
                
            </div>
            <div className="h-[70px] w-[18.5%] flex flex-col gap-2  items-center justify-center">
                <p className="text-lg lg:text-2xl">Lite</p>
                
            </div>
        </section>

        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Project Managment</p>
        </div>

        {pricingChart.slice(0,5).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value, idx) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center" key={idx}>
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

        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Website Features</p>
        </div>

        {pricingChart.slice(5,11).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value, idx) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center" key={idx}>
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

        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Ecommerce</p>
        </div>

        {pricingChart.slice(11,15).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value, idx) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center" key={idx}>
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center text-green-500 rounded-full">
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

        <div className="flex h-[70px] w-full items-center justify-start px-4 font-bold rowBorder">
            <p>Manager Platform</p>
        </div>

        {pricingChart.slice(15,21).map((column) => (
            <section className="flex" key={column.id}>
            <div className="h-[70px] w-[26%] rowBorder justify-start px-4">
                <p>{column.name}</p>
            </div>
            {column.values.map((value, idx) => (
                <div className="h-[70px] w-[18.5%] rowBorder justify-center" key={idx}>
                    {value === true ? 
                    <div className="w-[22px] h-[22px] flex justify-center items-center text-green-500 rounded-full">
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
    </section>
  )
}

export default PricingChart