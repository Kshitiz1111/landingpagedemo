import Image from 'next/image'

export default function HeroSection() {
   return (
      <div className="relative min-h-screen overflow-hidden">
         {/* Background Image */}
         <div className="absolute top-0 right-0 w-full md:w-[60%] h-full">
            <Image
               src="/image/heroimg.jpg"
               alt="Team collaboration"
               fill
               className="object-cover object-center opacity-50"
               priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1d21] to-transparent" />
         </div>

         {/* Content */}
         <div className="container mx-auto px-4 relative z-10">
            <div className="min-h-screen flex flex-col justify-center max-w-full md:max-w-[400px]">

               <div className='w-full md:w-[50%] relative md:absolute'>
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                     Unlock your business&apos;s full{' '}
                     <span className="text-[#e1ff00]">potential.</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-12 leading-relaxed">
                     We&apos;re a global consultancy that helps the world&apos;s most ambitious
                     change makers define the future.
                  </p>

                  <div>
                     <button className="group bg-[#e1ff00] text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium relative overflow-hidden w-full sm:w-auto">
                        <span className="relative z-10 flex items-center justify-center sm:justify-start">
                           Start collaborate
                           <span className="ml-2 sm:ml-4 relative">
                              <span className="block w-3 sm:w-4 h-0.5 bg-black transition-transform group-hover:rotate-90" />
                              <span className="block w-3 sm:w-4 h-0.5 bg-black absolute top-0 -rotate-90 transition-transform group-hover:rotate-0" />
                           </span>
                        </span>
                        <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

