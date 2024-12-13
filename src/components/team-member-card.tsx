import Link from 'next/link'
import Image from 'next/image'

interface TeamCardProps {
   name: string
   title: string
   location: string
   imageUrl: string
   linkedinUrl: string
}

export default function TeamCard({ name, title, location, imageUrl, linkedinUrl }: TeamCardProps) {
   return (
      <div className="group">
         {/* Image Container */}
         <div className="relative w-full aspect-[4/5] mb-6 bg-[#1a1d21] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-10">
               <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-t border-gray-500 transform -rotate-45 origin-top-left" />
            </div>

            {/* Image */}
            <div className="relative h-full w-full">
               <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  className="object-cover object-center"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d21]/50" />
            </div>
         </div>

         {/* Content */}
         <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white">{name}</h3>
            <div className="text-gray-400">
               {title}, {location}
            </div>
            <Link
               href={linkedinUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center text-white hover:text-[#e1ff00] transition-colors group/link"
            >
               <span className="mr-2">Linkedin profile</span>
               <span className="relative w-4 h-4">
                  <span className="absolute inset-0 flex items-center justify-center">
                     <span className="block w-4 h-0.5 bg-current transition-transform group-hover/link:rotate-90" />
                     <span className="block w-4 h-0.5 bg-current absolute transform -rotate-90 transition-transform group-hover/link:rotate-0" />
                  </span>
               </span>
            </Link>
         </div>
      </div>
   )
}

