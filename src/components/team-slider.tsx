'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TeamCard from './team-member-card'

const teamMembers = [
   {
      name: 'Jerome Bell',
      role: 'Managing Partner',
      location: 'Clayten Town',
      imageUrl: '/image/team1.png'
   },
   {
      name: 'Jenny Monata',
      role: 'Worldwide Managing Partner',
      location: 'Northern Territory',
      imageUrl: '/image/team1.png'
   },
   {
      name: 'Isaku Iki',
      role: 'Senior Partner',
      location: 'Yokohama',
      imageUrl: '/image/team1.png'
   },
   {
      name: 'Sarah Chen',
      role: 'Managing Director',
      location: 'Singapore',
      imageUrl: '/image/team1.png'
   },
   {
      name: 'Michael Ross',
      role: 'Senior Partner',
      location: 'New York',
      imageUrl: '/image/team1.png'
   }
]

export function TeamSlider() {
   const [currentIndex, setCurrentIndex] = useState(0)

   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex + 3 >= teamMembers.length ? 0 : prevIndex + 3
      )
   }

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex - 3 < 0 ? Math.max(teamMembers.length - 3, 0) : prevIndex - 3
      )
   }

   return (
      <section className="py-24 bg-[#0D1117]">
         <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {teamMembers.slice(currentIndex, currentIndex + 3).map((member) => (
                  <TeamCard
                     key={member.name}
                     name={member.name}
                     title={member.role}
                     location={member.location}
                     imageUrl={member.imageUrl}
                     linkedinUrl="https://linkedin.com"
                  />
               ))}
            </div>
            <div className="flex justify-end mt-8 space-x-4">
               <button
                  onClick={prevSlide}
                  className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous slide"
               >
                  <ChevronLeft className="h-6 w-6" />
               </button>
               <button
                  onClick={nextSlide}
                  className="p-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                  aria-label="Next slide"
               >
                  <ChevronRight className="h-6 w-6" />
               </button>
            </div>
         </div>
      </section>
   )
}

