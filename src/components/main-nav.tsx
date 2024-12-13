'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
   { name: 'Home', href: '/', highlight: true },
   { name: 'About Us', href: '/about' },
   { name: 'Services', href: '/services' },
   { name: 'Projects', href: '/projects' },
   { name: 'Faq', href: '/faq' },
   { name: 'Blog', href: '/blog' },
   { name: 'Contact Us', href: '/contact' },
]

function MainNav() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-sm">
         <nav className="container mx-auto px-4 lg:px-6 flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
               <span className="text-[#CCFF00] text-3xl font-bold">/</span>
               <span className="text-white text-xl font-bold">NYX</span>
            </Link>

            {/* Contact and Menu */}
            <div className="flex items-center space-x-8">
               <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">call</span>
                  <a href="tel:+61234546" className="text-[#CCFF00] text-sm">
                     +61 234 546
                  </a>
               </div>
               <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                     <button className="text-white p-2">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                     </button>
                  </SheetTrigger>
                  <SheetContent
                     side="right"
                     className="w-full h-full bg-[#0D1117] border-none p-0"
                  >
                     <div className="flex flex-col h-full">
                        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                           <Link href="/" className="flex items-center space-x-2">
                              <span className="text-[#CCFF00] text-3xl font-bold">/</span>
                              <span className="text-white text-xl font-bold">NYX</span>
                           </Link>
                           <button
                              onClick={() => setIsOpen(false)}
                              className="text-white p-2"
                           >
                              <X className="h-6 w-6" />
                              <span className="sr-only">Close menu</span>
                           </button>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                           <div className="container mx-auto px-4 lg:px-6 space-y-8">
                              {navigation.map((item) => (
                                 <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-4xl md:text-5xl ${item.highlight ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'
                                       } transition-colors block`}
                                 >
                                    {item.name}
                                 </Link>
                              ))}
                           </div>
                        </div>
                        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center">
                           <p className="text-sm text-gray-400">A member of Portentus Group</p>
                           <p className="text-sm text-gray-400 ml-auto">© 2024 Nyx Company Inc.</p>
                        </div>
                     </div>
                  </SheetContent>
               </Sheet>
            </div>
         </nav>
      </header>
   )
}

export default MainNav;

