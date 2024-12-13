'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus } from 'lucide-react'

interface Achievement {
   number: number
   description: string
}

const achievements: Achievement[] = [
   {
      number: 200,
      description: 'Successfully increased revenue for 200+ number of clients by 90% through strategic planning and implementation of marketing and sales techniques.'
   },
   {
      number: 16,
      description: 'Provided expert business advice to 13+ number of startups, resulting in successful funding and growth.'
   },
   {
      number: 40,
      description: 'Assisted 40+ number of established businesses in streamlining operations and achieving increased efficiency and productivity.'
   }
]

function AchievementCard({ number, description }: Achievement) {
   const [count, setCount] = useState(0)
   const countRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  const duration = 2000 // 2 seconds
                  const steps = 60
                  const increment = number / steps
                  let current = 0
                  const timer = setInterval(() => {
                     current += increment
                     if (current >= number) {
                        setCount(number)
                        clearInterval(timer)
                     } else {
                        setCount(Math.floor(current))
                     }
                  }, duration / steps)
               }
            })
         },
         { threshold: 0.1 }
      )

      if (countRef.current) {
         observer.observe(countRef.current)
      }

      return () => observer.disconnect()
   }, [number])

   return (
      <div className="bg-[#2A2F35]/90 backdrop-blur-sm p-8 space-y-8">
         <p className="text-white/80">{description}</p>
         <div className="flex items-baseline" ref={countRef}>
            <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
               {count}
            </span>
            <Plus className="h-8 w-8 text-[#CCFF00] ml-2" />
         </div>
      </div>
   )
}

function AchievementsSection() {
   return (
      <section className="relative min-h-screen bg-[#0D1117]">
         {/* Background Image */}
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
               backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)'
            }}
         >
            <div className="absolute inset-0 bg-black/70" />
         </div>

         {/* Content */}
         <div className="relative container mx-auto px-4 lg:px-6 py-24">
            <div className="space-y-24">
               {/* Section Title */}
               <div className="space-y-4">
                  <span className="text-[#CCFF00] text-xl font-medium">Achievements</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                     Achievement
                     <br />
                     <span className="text-[#CCFF00]">in numbers</span>
                  </h2>
               </div>

               {/* Achievement Cards */}
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {achievements.map((achievement) => (
                     <AchievementCard
                        key={achievement.number}
                        {...achievement}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default AchievementsSection;

