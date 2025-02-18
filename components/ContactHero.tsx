"use client"
import { Check } from 'lucide-react'
import React from 'react'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from './hooks/use-toast'
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Image from 'next/image';

const ContactHero = () => {
    const [emailError, setEmailError] = useState("")
    const [nameError, setNameError] = useState("")
    
    const { toast } = useToast()
    const sendEmail = (e:any) => {
      e.preventDefault();
  
      try {
        console.log("hi")
        if (e.target.email.value === "" || e.target.full_name.value === "") {
  
            if (e.target.email.value === "") {
              setEmailError("Email is required")
              if (e.target.full_name.value === "") {
                setNameError("Fullname is required")
              }
            } 
   
        } else {
            emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
             e.target.reset()
             setEmailError("")
             setNameError("")
  
            toast({
                title: "Email Sent",
                description: "We will get back to you shortly",
            })
        }
      } catch (err) {
      }
    }

  return (
    <div className="flex flex-col items-center lg:flex-row justify-center lg:items-start gap-12 lg:h-[100vh] py-24 lg:pt-32 px-6 lg:px-12 mt-24">
        <section className="flex flex-col items-start gap-4 max-w-[600px]">
            <div className="flex gap-2 items-center">
                <Image
                    width={80}
                    height={80}
                    src="/assets/images/headshot.png"
                    alt="headline photo" 
                />
                <section className="border-[1px] border-gray-500 bg-[#242424] flex flex-col p-2 px-4 rounded-xl">
                    <p className="text-sm lg:text-base">"The entire process was seamless. They understood our goals and delivered a website that perfectly reflects our brand."</p>
                    <p className="text-sm lg:text-base text-slate-50">- Yohan Wijeyawickrema, CEO @YASolutionsInc</p>
                    
                </section>
            </div>
            <p className="text-3xl lg:text-4xl font-semibold">Unlock Your Websites Potential with a Free Audit</p>
            <p className="text-lg">See how we can improve your site before committing to a full redesign. Get personalized insights to boost performance and conversions—completely free.</p>
            <ul className="flex flex-col text-lg gap-2">
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>Fully designed, custom mobile and desktop mockups</p>
                </li>
                {/* <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>In-depth website performance analysis</p>
                </li> */}
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>SEO & conversion optimization insights</p>
                </li>
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>Engaging & effective copywriting </p>
                </li>
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>3 business day delivery by email</p>
                </li>
            </ul>
        </section>

        <form onSubmit={sendEmail} className="w-full max-w-[600px] lg:max-h-[940px] flex flex-col gap-2 rounded-xl px-4 lg:px-10 py-6 pt-6 border-[1px] border-gray-500 bg-[#242424] text-white">  
            <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-col items-start gap-1">
                    <p>Full Name</p>
                    <Input type="text" placeholder='Name' name="full_name" className="w-full h-[50px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]"/>
                </div>

                <div className="flex flex-col items-start gap-1">
                    <p>Email</p>
                    <Input type="text" placeholder='Email' name="email" className="w-full h-[50px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]"/>
                </div>

                <div className="flex flex-col items-start gap-1">
                    <p>Website Url</p>
                    <Input type="text" placeholder='Name' name="website" className="w-full h-[50px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]"/>
                </div>

                <div className="flex flex-col items-start gap-1">
                    <p>Message</p>
                    <Textarea placeholder="Tell us more about your project" name="phone" className="w-full h-[115px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]" />
                </div>
            </div>
            <Button type="submit" className="w-full h-[55px] mt-6 text-base bg-slate-50 text-slate-950">Request Free Hero Design</Button>
        </form>

        

    </div>
  )
}
export default ContactHero