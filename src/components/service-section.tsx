import ServiceCard from './service-card'


const services = [
   {
      title: 'Customer Insights',
      description: 'Drives growth by leveraging consumer, buyer and market insights.',
      imageUrl: '/image/service.png',
      buttonText: 'Start collaborate',
      highlight: true
   },
   {
      title: 'Category Solutions',
      description: 'Helps retailers and consumer goods companies develop assortment.',
      imageUrl: '/image/service.png',
      buttonText: 'Know our team'
   },
   {
      title: 'Marketing Solutions',
      description: 'Comprehensively cover the broad spectrum of tactical decisions.',
      imageUrl: '/image/service.png',
      buttonText: 'Our numbers'
   }
]

function ServicesSection() {
   return (
      <section className="py-24 bg-[#0D1117]">
         <div className='px-8 py-4 flex flex-wrap justify-between'>
            <span className='text-[#e1ff00]'>Service</span>
            <div className='w-1/2'>
               <span className='font-bold text-4xl '>Our solutions leverage advanced technology, proprietary data, and deep expertise to help clients in</span>
            </div>
         </div>
         <div className="container mx-auto px-4 lg:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {services.map((service) => (
                  <ServiceCard
                     key={service.title}
                     {...service}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}


export default ServicesSection;
