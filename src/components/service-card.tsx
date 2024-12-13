import Image from 'next/image'
import { Plus } from 'lucide-react'

interface ServiceCardProps {
   title: string
   description: string
   imageUrl: string
   buttonText: string
   highlight?: boolean
}

function ServiceCard({
   title,
   description,
   imageUrl,
   buttonText,
   highlight = false
}: ServiceCardProps) {
   return (
      <div className="bg-gray-400 group">
         <div className="p-8 space-y-6">
            <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
               <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
               />
            </div>
            <div className="space-y-4 text-center text-black ">
               <h3 className="text-2xl font-semibold text-black">{title}</h3>
               <p className="text-black">{description}</p>
            </div>
         </div>
         <button
            className={`w-full p-4 flex items-center justify-between transition-colors ${highlight
               ? 'bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90'
               : 'bg-transparent text-white hover:bg-white/5'
               }`}
         >
            <span className="font-medium text-black">{buttonText}</span>
            <Plus className="h-5 w-5 text-black" />
         </button>
      </div>
   )
}

export default ServiceCard;
