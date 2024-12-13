'use client'

import React, { useEffect, useRef } from 'react'
import { ClientCard } from '@/components/client-card';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Container } from 'postcss';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
   const sliderContainerRef = useRef();

   const clients = [
      {
         id: 1,
         image: '/image/client.png',
         title: 'Client Name 1',
         description: 'Description for Client 1'
      },
      {
         id: 2,
         image: '/image/client.png',
         title: 'Client Name 2',
         description: 'Description for Client 2'
      },
      {
         id: 3,
         image: '/image/client.png',
         title: 'Client Name 2',
         description: 'Description for Client 2'
      },
      {
         id: 4,
         image: '/image/client.png',
         title: 'Client Name 2',
         description: 'Description for Client 2'
      },
      {
         id: 5,
         image: '/image/client.png',
         title: 'Client Name 2',
         description: 'Description for Client 2'
      },
      // Add more clients as needed
   ];

   const cardRefs = useRef(clients.map(() => React.createRef()));


   console.log("cardRef", sliderContainerRef.current)

   let windowsObject;
   if (typeof window === undefined) {
      return;
   } else {
      windowsObject = window;
   }

   useEffect(() => {

      // gsap.to(sliderContainerRef.current, {
      //    scrollTrigger: {
      //       trigger: sliderContainerRef.current,
      //       start: "top 20%",
      //       end: "top 20%",
      //       markers: true,
      //    }
      // })
      // let st = ScrollTrigger.create(
      //    {
      //       trigger: sliderContainerRef.current,
      //       pin: true,
      //       // if no scroller is defined, the viewport (window) is used.
      //       start: "top top",//top of the slide element hits top of screen where scroll triggers
      //       end: "bottom top",
      //       markers: true,
      //       x: -500,
      //    },

      // );
      //       let tween = gsap.to(".class", { x: 100 }),
      //   st = ScrollTrigger.create({
      //     trigger: ".trigger",
      //     start: "top center",
      //     end: "+=500",
      //     animation: tween,
      //   });
      // console.log("cardRef", sliderContainerRef.current)
      cardRefs.current.forEach((cardRef, index) => {
         console.log("cardRefs", cardRef.current, windowsObject.innerWidth, cardRef.current.offsetWidth)

         if (!cardRef.current || !sliderContainerRef.current) return;

         const tween = gsap.to(cardRef.current, {
            x: () => -windowsObject.scrollY * clients.length,
            backgroundColor: "red",
         });

         ScrollTrigger.create({
            trigger: sliderContainerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play pause reverse reset",
            markers: true,
            pin: true,
            pinSpacing: true, // Adjust spacing if needed
            animation: tween,
         });
         console.log("cardRef.", cardRef.current.offsetWidth)
      });
   }, [sliderContainerRef, cardRefs])

   // const handleScroll = (event) => {
   //    // const container = event.target;
   //    // let delay = setTimeout(() => {
   //    //    container.scrollBy({
   //    //       left: event.deltaY < 0 ? -30 : 30,
   //    //    })
   //    // }, 500)
   //    // clearTimeout(delay) 

   //    gsap.to('.box', {
   //       scrollTrigger: '.box', // start the animation when ".box" enters the viewport (once)
   //       x: 500
   //    });
   //    console.log(event)
   // };
   return (
      <div>
         <div className='h-[100vh] w-full bg-gray-900'>

         </div>
         <div className='px-4'>
            <h2>title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores recusandae doloremque illum, nihil nobis accusamus? Praesentium assumenda commodi ea, aliquid, at impedit molestiae, ducimus quas blanditiis rerum voluptates. Eum, repellendus!</p>
         </div>
         <div className='relative '>
            <div ref={sliderContainerRef} className='w-full bg-cyan-800 h-[100vh] text-black flex justify-around flex-wrap flex-col gap-2 overflow-x-hidden p-2'>
               {clients.map((client, index) =>
                  <ClientCard cardRefs={cardRefs.current[index]} key={client.id} imageUrl={client.image} title={client.title} description={client.description} heightInViewPort='80vh'>
                  </ClientCard>
               )}
            </div>
         </div>
         <div className='h-[1000px] w-full bg-gray-900'>

         </div>
      </div>
   )
}

export default page