import { Plus } from 'lucide-react'
// import Image from 'next/image'
import TeamCard from './team-member-card';

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
                  <TeamCard
                     name="John Trakpor"
                     title="Senior Partner"
                     location="Lapland"
                     imageUrl="/image/team1.png"
                     linkedinUrl="https://linkedin.com"
                  />
               </div>
            </div>
         </div>
      </section >
   )
}

export default TeamSection;