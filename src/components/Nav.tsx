"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

   return (
      <nav className="bg-gray-800 text-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
               <div className="text-2xl font-bold">Gsap Animations</div>

               {/* Mobile Menu Button */}
               <button
                  className="sm:hidden block focus:outline-none"
                  onClick={toggleMobileMenu}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                     />
                  </svg>
               </button>

               {/* Links for Larger Screens */}
               <ul className="hidden sm:flex space-x-8">
                  <li className="relative group">
                     <Link href="/" className="hover:text-gray-300">
                        Home
                     </Link>
                  </li>
                  <li className="relative group">
                     <Link href="/horizontal_scroll" className="hover:text-gray-300">
                        horizontal Scroll
                     </Link>
                  </li>
                  <li className="relative group">
                     <Link href="/basic" className="hover:text-gray-300">
                        basic
                     </Link>
                     {/* Dropdown */}
                     <ul className="absolute left-0  bg-gray-700 rounded-md shadow-lg hidden group-hover:block">
                        <li>
                           <Link
                              href="/basic/tween"
                              className="block px-4 py-2 hover:bg-gray-600 rounded-t-md"
                           >
                              Tween
                           </Link>
                        </li>

                     </ul>
                  </li>

               </ul>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
               <ul className="sm:hidden space-y-2">
                  <li>
                     <Link href="#" className="block px-4 py-2 hover:bg-gray-700">
                        Home
                     </Link>
                  </li>
                  <li className="relative">
                     <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 focus:outline-none"
                        onClick={toggleDropdown}
                     >
                        Basic
                     </button>
                     {dropdownOpen && (
                        <ul className="space-y-2 pl-4">
                           <li>
                              <Link
                                 href="/basic/tween"
                                 className="block px-4 py-2 hover:bg-gray-700"
                              >
                                 Tween
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="#"
                                 className="block px-4 py-2 hover:bg-gray-700"
                              >
                                 App Development
                              </Link>
                           </li>
                           <li>
                              <Link
                                 href="#"
                                 className="block px-4 py-2 hover:bg-gray-700"
                              >
                                 Design
                              </Link>
                           </li>
                        </ul>
                     )}
                  </li>
                  <li>
                     <Link href="#" className="block px-4 py-2 hover:bg-gray-700">
                        About
                     </Link>
                  </li>
                  <li>
                     <Link href="#" className="block px-4 py-2 hover:bg-gray-700">
                        Contact
                     </Link>
                  </li>
               </ul>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
