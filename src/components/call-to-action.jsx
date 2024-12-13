import { Button } from "@/components/ui/button"

function CTASection() {
   return (
      <section className="bg-[#1a1d21] text-white py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
               <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-0 max-w-2xl">
                  Unlock your business's full{' '}
                  <span className="text-[#e8f500]">potential. Now.</span>
               </h2>
               <Button className="bg-[#e8f500] text-black hover:bg-[#e8f500] transition-colors duration-300 text-lg py-3 px-6 rounded-none">
                  Start collaborate
                  <span className="ml-2">+</span>
               </Button>
            </div>
         </div>
         {/* Abstract shapes */}
         <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
            {/* <div className="absolute bottom-0 right-0 w-full h-full bg-[#e8f500] transform -skew-x-12 origin-bottom-right"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[#2a2d31] transform -skew-x-12 origin-bottom-right translate-y-1/4"></div> */}
         </div>
      </section>
   )
}

export default CTASection;
