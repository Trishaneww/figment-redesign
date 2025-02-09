import Linksubpage from '@/components/Linkssubpage'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/components/ui/toaster'
import { Contact } from 'lucide-react'
import React from 'react'

const Links = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Linksubpage />
      <Toaster />

    </div>
  )
}

export default Links