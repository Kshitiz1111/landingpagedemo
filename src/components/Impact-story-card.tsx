import { Plus } from 'lucide-react'
import Link from 'next/link'

interface ImpactStoryProps {
  title: string
  description: string
  href: string
}

function ImpactStoryCard({ title, description, href }: ImpactStoryProps) {
  return (
    <Link
      href={href}
      className="block bg-[#2A2F35] p-8 space-y-6 group hover:bg-[#2A2F35]/80 transition-colors"
    >
      <div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="inline-flex items-center justify-center rounded-full border border-white/20 p-4 text-white group-hover:border-[#e8f500] group-hover:text-[#e8f500] transition-colors">
        <Plus className="h-6 w-6" />
      </div>
    </Link>
  )
}

export default ImpactStoryCard;

