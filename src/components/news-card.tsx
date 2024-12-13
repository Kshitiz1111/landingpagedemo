import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
   category: string
   date: string
   title: string
   description: string
   imageUrl: string
   href: string
}

function NewsCard({
   category,
   date,
   title,
   description,
   imageUrl,
   href
}: NewsCardProps) {
   return (
      <Link href={href} className="block group">
         <article className="space-y-4">
            <div className="relative aspect-[16/9] overflow-hidden">
               <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
               />
            </div>
            <div className="space-y-4">
               <div className="flex items-center justify-between">
                  <span className="text-[#CCFF00] text-sm font-medium">{category}</span>
                  <time className="text-gray-400 text-sm">{date}</time>
               </div>
               <h3 className="text-2xl font-bold text-black group-hover:text-[#CCFF00] transition-colors">
                  {title}
               </h3>
               <p className="text-gray-600">
                  {description}
               </p>
            </div>
         </article>
      </Link>
   )
}

export default NewsCard;