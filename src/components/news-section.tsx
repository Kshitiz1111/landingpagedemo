'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import NewsCard from './news-card'

const newsItems = [
   {
      category: 'Updates',
      date: 'Jan 30',
      title: 'The Power of Collaboration: Fostering Teamwork in Corporate Culture',
      description: 'The External Advisory Group, which will assemble this month to review progress...',
      imageUrl: '/image/news.jpg',
      href: '/news/collaboration'
   },
   {
      category: 'Taxes',
      date: 'Jan 30',
      title: 'Building Resilience: Adapting to Change in Corporate Dynamics',
      description: 'The External Advisory Group, which will assemble this month to review progress...',
      imageUrl: '/image/news.jpg',
      href: '/news/resilience'
   },
   {
      category: 'Updates',
      date: 'Jan 30',
      title: 'Maximizing Efficiency: Streamlining Corporate Operations',
      description: 'The External Advisory Group, which will assemble this month to review progress...',
      imageUrl: '/image/news.jpg',
      href: '/news/efficiency'
   },
   {
      category: 'Innovation',
      date: 'Jan 30',
      title: 'Digital Transformation: Embracing New Technologies',
      description: 'The External Advisory Group, which will assemble this month to review progress...',
      imageUrl: '/image/news.jpg',
      href: '/news/digital'
   }
]

function NewsSection() {
   const [currentIndex, setCurrentIndex] = useState(0)

   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex + 1 >= newsItems.length ? 0 : prevIndex + 1
      )
   }

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex - 1 < 0 ? newsItems.length - 1 : prevIndex - 1
      )
   }

   return (
      <section className="py-24 bg-gray-400 ">
         <div className="container mx-auto px-4 lg:px-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-16 ml-20">
               <div className="space-y-4">
                  <span className="text-[#e8f500] text-xl font-medium">News</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                     Latest
                     <br />
                     <span className="text-[#e8f500]">News</span>
                  </h2>
               </div>
               <button className=" p-4 flex items-center gap-2 group text-black bg-[#e8f500] hover:bg-white transition-colors">
                  <span className="font-medium">More News</span>
                  <Plus className="h-5 w-5" />
               </button>
            </div>

            {/* News Slider */}
            <div className="relative">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ml-20">
                  {[...newsItems.slice(currentIndex), ...newsItems.slice(0, currentIndex)]
                     .slice(0, 3)
                     .map((news, index) => (
                        <NewsCard key={`${news.title}-${index}`} {...news} />
                     ))}
               </div>

               {/* Navigation Buttons */}
               <div className="absolute top-[10%] w-full flex justify-between gap-4 mt-8">
                  <button
                     onClick={prevSlide}
                     className="p-4 rounded-full bg-[#e8f500] text-black hover:bg-[#e8f500]/90 transition-colors"
                     aria-label="Previous slide"
                  >
                     <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                     onClick={nextSlide}
                     className="p-4 rounded-full bg-[#e8f500] text-black hover:bg-[#e8f500]/90 transition-colors"
                     aria-label="Next slide"
                  >
                     <ChevronRight className="h-6 w-6" />
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default NewsSection;
