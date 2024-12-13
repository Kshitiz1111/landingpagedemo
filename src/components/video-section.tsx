'use client'

import { Play, Plus } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'

function VideoSection() {
   const [videoOpen, setVideoOpen] = useState(false)

   return (
      <section className="relative min-h-screen bg-[#0D1117]">
         {/* Background Image */}
         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
               backgroundImage: 'url(/placeholder.svg?height=1080&width=1920)'
            }}
         >
            <div className="absolute inset-0 bg-black/50" />
         </div>

         {/* Content */}
         <div className="relative container mx-auto px-4 lg:px-6 min-h-screen flex flex-col">
            {/* Video Text */}
            <div className="pt-24">
               <span className="text-[#CCFF00] text-xl font-medium">Video</span>
            </div>

            {/* Play Button */}
            <div className="flex-1 flex items-center justify-center">
               <button
                  onClick={() => setVideoOpen(true)}
                  className="rounded-full p-4 border-2 border-[#CCFF00] text-[#CCFF00] transition-transform hover:scale-110"
               >
                  <Play className="h-12 w-12" />
                  <span className="sr-only">Play video</span>
               </button>
            </div>

            {/* Text Content */}
            <div className="pb-24">
               <div className="grid lg:grid-cols-2 gap-8 items-end">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                     Helping fast
                     <br />
                     moving innovators
                     <br />
                     <span className="text-[#CCFF00]">scale</span>
                  </h2>
                  <div className="lg:pl-12">
                     <div className="bg-[#0D1117]/80 backdrop-blur-sm p-8 space-y-6">
                        <p className="text-white/80 text-xl">
                           We help leaders realize meaningful growth transformations so that companies can deliver substantial value today and tomorrow.
                        </p>
                        <button className="w-full bg-[#CCFF00] p-4 flex items-center justify-between text-black font-medium hover:bg-[#CCFF00]/90 transition-colors">
                           <span>Know our Team</span>
                           <Plus className="h-5 w-5" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Video Dialog */}
         <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogContent className="max-w-4xl p-0 bg-black">
               <div className="aspect-video">
                  <iframe
                     width="100%"
                     height="100%"
                     src="about:blank" // Replace with your video URL
                     title="Video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  />
               </div>
            </DialogContent>
         </Dialog>
      </section>
   )
}

export default VideoSection;