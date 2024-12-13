import { Plus } from 'lucide-react'
import ImpactStoryCard from './Impact-story-card'

const impactStories = [
   {
      title: 'Logistics company builds value by consolidating brands',
      description: 'Campaign focused on developing a consistent global portfolio helps create a Top 100 global brand.',
      href: '/case-studies/logistics'
   },
   {
      title: 'Unlocking the full potential in fashion for youth consumers',
      description: 'Fashion brands can forge stronger connections with this segment by pursuing four strategies.',
      href: '/case-studies/fashion'
   }
]

export function ImpactStoriesSection() {
   return (
      <section className="relative py-24 bg-[#0D1117] overflow-hidden">
         {/* Geometric Lines */}
         <div className="absolute inset-0" style={{
            background: `
          linear-gradient(45deg, transparent calc(50% - 1px), rgba(204, 255, 0, 0.1) calc(50% - 1px), rgba(204, 255, 0, 0.1) calc(50% + 1px), transparent calc(50% + 1px))
        `,
            backgroundSize: '100px 100px'
         }} />

         <div className="relative container mx-auto px-4 lg:px-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-16">
               <div className="space-y-4">
                  <span className="text-[#e8f500] text-xl font-medium">Case Studies</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                     Impact
                     <br />
                     <span className="text-[#e8f500]">Stories</span>
                  </h2>
               </div>
               <button className="hover:bg-white p-4 flex items-center gap-2 group bg-[#e8f500] text-black transition-colors">
                  <span className="font-medium">More Projects</span>
                  <Plus className="h-5 w-5" />
               </button>
            </div>

            {/* Impact Stories Grid */}
            <div className="grid md:grid-cols-2 gap-8">
               {impactStories.map((story) => (
                  <ImpactStoryCard
                     key={story.title}
                     {...story}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

