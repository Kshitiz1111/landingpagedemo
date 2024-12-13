import { Plus } from 'lucide-react'
import Image from 'next/image'

function TeamSection() {
   return (
      <section className="py-24 bg-[#0D1117]">
         <div className="container mx-auto px-4 lg:px-6">
            {/* Section Title */}
            <div className="mb-16">
               <span className="text-[#CCFF00] text-xl font-medium">Team</span>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Left Column */}
               <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                     Nyx is led globally by
                     <br />
                     our managing partner;
                     <br />
                     <span className="text-[#CCFF00]">
                        our elected board of
                        <br />
                        directors.
                     </span>
                  </h2>
                  <div>
                     <button className="w-full sm:w-auto bg-transparent border border-[#CCFF00] text-white p-4 flex items-center justify-between group hover:bg-[#CCFF00] hover:text-black transition-colors">
                        <span className="font-medium">Our numbers</span>
                        <Plus className="h-5 w-5" />
                     </button>
                  </div>
               </div>

               {/* Right Column */}
               <div className="relative">
                  <div className="relative h-[400px] w-full">
                     <Image
                        src="/image/team1.png"
                        alt="John Trakpoor"
                        fill
                     // className="object-cover"
                     />
                     {/* Geometric Lines Overlay */}
                     <div className="absolute inset-0 bg-gray-300 bottom-0 h-[200px] ">

                     </div>
                  </div>
                  <div className="mt-6 space-y-4">
                     <h3 className="text-2xl font-bold text-white">John Trakpoor</h3>
                     <p className="text-gray-400">Senior Partner, Lapland</p>
                     <button className="w-full sm:w-auto bg-transparent border border-white text-white p-4 flex items-center justify-between group hover:bg-white hover:text-black transition-colors">
                        <span className="font-medium">LinkedIn profile</span>
                        <Plus className="h-5 w-5" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default TeamSection;