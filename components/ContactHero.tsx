"use client"
import { Check } from 'lucide-react'
import React from 'react'
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from './hooks/use-toast'
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

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
                <section className="">
                    
                </section>
            </div>
            <p className="text-3xl lg:text-4xl font-semibold">Get a taste of Figment with a free hero redesign.</p>
            <p className="text-lg">Get a free test run before you commit to working with us on a full-scale redesign. We'll give you the free, personalized insights you need to boost your hero's conversion rate.</p>
            <ul className="flex flex-col text-lg gap-2">
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>Fully designed, custom mobile and desktop mockups</p>
                </li>
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>Annotated design changes</p>
                </li>
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>Clear, concise and persuasive copywriting</p>
                </li>
                <li className="flex gap-2 items-center text-base lg:text-lg">
                    <div className="flex justify-center items-center bg-green-500 min-w-[20px] min-h-[20px] rounded-full text-black"><Check size={15}/></div>
                    <p>3 business day delivery by email</p>
                </li>
            </ul>
        </section>

        <form onSubmit={sendEmail} className="w-full max-w-[600px] lg:max-h-[940px] flex flex-col gap-2 rounded-2xl px-4 lg:px-10 py-6 pt-6 border-[1px] border-gray-500 text-white">  
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
            <Button type="submit" className="w-full h-[55px] mt-6 text-lg bg-slate-50 text-slate-950">Request Free Hero Design</Button>
        </form>

        

    </div>
  )
}
export default ContactHero