import Image from 'next/image'
import { Plus } from 'lucide-react'

interface TeamMemberProps {
   name: string
   role: string
   location: string
   imageUrl: string
}

function TeamMemberCard({ name, role, location, imageUrl }: TeamMemberProps) {
   return (
      <div className="space-y-4">
         <div className="relative aspect-[4/3] w-full">
            <Image
               src={imageUrl}
               alt={name}
               fill
               className="object-cover"
            />
            {/* Geometric Lines Overlay */}
            <div className="absolute inset-0 bg-[#2A2F35]/20 backdrop-blur-sm">
               <div className="absolute inset-0" style={{
                  background: `
              linear-gradient(to bottom right, transparent calc(50% - 1px), #CCFF00 calc(50% - 1px), #CCFF00 calc(50% + 1px), transparent calc(50% + 1px)),
              linear-gradient(to bottom left, transparent calc(50% - 1px), #CCFF00 calc(50% - 1px), #CCFF00 calc(50% + 1px), transparent calc(50% + 1px))
            `
               }} />
            </div>
         </div>
         <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-gray-400">{role}, {location}</p>
            <button className="w-full bg-transparent border border-white text-white p-4 flex items-center justify-between group hover:bg-white hover:text-black transition-colors">
               <span className="font-medium">LinkedIn profile</span>
               <Plus className="h-5 w-5" />
            </button>
         </div>
      </div>
   )
}

export default TeamMemberCard;
