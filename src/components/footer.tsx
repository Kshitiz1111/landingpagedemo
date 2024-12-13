import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Youtube, PinIcon as Pinterest, InstagramIcon as Tiktok, Linkedin, Instagram } from 'lucide-react'

function Footer() {
   return (
      <footer className="bg-[#1a1d21] text-gray-300 py-16">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
               {/* Newsletter Section */}
               <div className="lg:col-span-2">
                  <h2 className="text-3xl font-light mb-4 leading-relaxed">
                     Stay ahead in a rapidly changing world.
                  </h2>
                  <p className="text-xl font-light mb-8 leading-relaxed">
                     Subscribe to Nyx Insights, our monthly look at the critical issues facing global businesses.
                  </p>
                  <div className="flex gap-4">
                     <Input
                        type="email"
                        placeholder="Email address"
                        className="bg-transparent border-gray-600 text-white"
                     />
                     <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">
                        Submit
                     </Button>
                  </div>
               </div>

               {/* Contact Info */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-[#e8f500] mb-2">Mobile</h3>
                     <p>+61 232 32425</p>
                  </div>
                  <div>
                     <h3 className="text-[#e8f500] mb-2">Email</h3>
                     <p>hi@website.com</p>
                  </div>
                  <div>
                     <h3 className="text-gray-300 mb-2">Office</h3>
                     <div>
                        <p className="mb-1"><span className="text-white">Nyx</span> Headquarters</p>
                        <p>San Francisco, California</p>
                        <p>Usa</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Facebook size={20} />
                     </Link>
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Twitter size={20} />
                     </Link>
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Youtube size={20} />
                     </Link>
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Pinterest size={20} />
                     </Link>
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Tiktok size={20} />
                     </Link>
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Linkedin size={20} />
                     </Link>
                     <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                        <Instagram size={20} />
                     </Link>
                  </div>
               </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
               <div className="space-y-4">
                  <Link href="/" className="text-[#e8f500] block">Home</Link>
                  <Link href="/about-us" className="block hover:text-white">About Us</Link>
                  <Link href="/services" className="block hover:text-white">Services</Link>
                  <Link href="/projects" className="block hover:text-white">Projects</Link>
                  <Link href="/blog" className="block hover:text-white">Blog</Link>
                  <Link href="/faq" className="block hover:text-white">Faq</Link>
                  <Link href="/contact-us" className="block hover:text-white">Contact us</Link>
               </div>
               <div className="space-y-4">
                  <Link href="/404" className="block hover:text-white">404</Link>
                  <Link href="/401" className="block hover:text-white">401</Link>
                  <Link href="/licensing" className="block hover:text-white">Licensing</Link>
                  <Link href="/instructions" className="block hover:text-white">Instructions</Link>
                  <Link href="/style-guide" className="block hover:text-white">Style Guide</Link>
                  <Link href="/changelog" className="block hover:text-white">Changelog</Link>
                  <Link href="/buy" className="text-[#e8f500] block">Buy Template!</Link>
               </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-between pt-8 border-t border-gray-800">
               <div className="flex items-center mb-4 lg:mb-0">
                  <span className="text-[#e8f500] text-4xl font-bold mr-2">/</span>
                  <span className="text-white text-2xl font-bold">NYX</span>
               </div>

               <p className="text-sm text-gray-500 w-full lg:w-auto text-center lg:text-left mt-4 lg:mt-0">
                  A member of Portentus Group
               </p>
               <p className="text-sm text-gray-500 w-full lg:w-auto text-center lg:text-left mt-2 lg:mt-0">
                  © 2022 Nyx Company, Inc.
               </p>
            </div>
         </div>
      </footer>
   )
}

export default Footer;
