"use client"
// import gsap from 'gsap';
// import Image from 'next/image'
// import React, { useRef } from 'react'

const page = () => {
   // const fred = useRef<HTMLImageElement | null>(null);
   // const fred1 = useRef<HTMLImageElement | null>(null);
   // const fred2 = useRef<HTMLImageElement | null>(null);
   // const freds = useRef<Array<HTMLImageElement>>();

   // function handleAnimation1(type: string) {
   //    if (type === "anim") {
   //       gsap.to(fred.current, { x: 500, duration: 3 })
   //    } if (type === "reset") {
   //       gsap.to(fred.current, { x: 0, duration: 3 })//from 700px latest initial resting point 
   //    }
   // }
   // function handleAnimation2(type: string) {
   //    if (type === "anim") {
   //       gsap.fromTo(fred1.current, { x: 900, }, { x: 500, duration: 3 })
   //    } if (type === "reset") {
   //       gsap.to(fred1.current, { x: 900, duration: 1, ease: "back.out" })
   //    }
   // }
   // function handleAnimation3(type: string) {
   //    if (type === "anim") {
   //       gsap.fromTo(fred2.current, { x: 900, }, { x: 500, duration: 3, repeat: 1, yoyo: true })
   //    } if (type === "reset") {
   //       gsap.to(fred2.current, { x: 0, duration: 1, ease: "back.out" })
   //    }
   // }
   // function handleAnimation4(type: string) {
   // if (type === "anim") {
   //    gsap.to(freds?.current?.children, { x: 300, duration: 1, stagger: 0.1 })
   // } if (type === "reset") {
   //    gsap.to(freds?.current?.children, { x: 0, duration: 1, stagger: 0.1 })
   //    //in stager propety we can also pass object as a value
   //    //{each: 0.2, from:"center"} which will start the animation from center 
   //    //{each: 0.2, from:"edges"} which will start the animation from edges 
   // }
   // }
   // console.log(freds)

   return (
      <div className='relative p-4 bg-blue-500 w-full h-screen'>
         {/* <div className='cursor-pointer absolute top-0 right-0 p-4 bg-green-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation1("anim")}
         >click to animate</div>
         <div className='cursor-pointer absolute top-[60px] right-0 p-4 bg-gray-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation1("reset")}
         >reverse</div>
         <div className='cursor-pointer absolute top-[125px] right-0 p-4 bg-green-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation2("anim")}
         >click to animate 2</div>
         <div className='cursor-pointer absolute top-[185px] right-0 p-4 bg-gray-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation2("reset")}
         >reset 2</div>
         <div className='cursor-pointer absolute top-[250px] right-0 p-4 bg-green-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation3("anim")}
         >click to repeat animate 1</div>
         <div className='cursor-pointer absolute top-[315px] right-0 p-4 bg-gray-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation3("reset")}
         >reset 2</div> */}

         {/* <div className='cursor-pointer absolute top-[380px] right-0 p-4 bg-green-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation4("anim")}
         >click to stagger animation</div>
         <div className='cursor-pointer absolute top-[445px] right-0 p-4 bg-gray-400 shadow-md hover:shadow-none '
            onClick={() => handleAnimation4("reset")}
         >reset 2</div> */}
         {/* <Image ref={fred} alt='fred character' src={"/assets/fred.svg"} width={40} height={40} />
         <Image ref={fred1} alt='fred character' src={"/assets/fred.svg"} width={40} height={40} />
         <Image ref={fred2} alt='fred character' src={"/assets/fred.svg"} width={40} height={40} /> */}
         <div >
            {/* <div ref={freds}> */}
            {/* <Image alt='fred character' src={"/assets/fred.svg"} width={40} height={40} />
            <Image alt='fred character' src={"/assets/fred-red.svg"} width={40} height={40} />
            <Image alt='fred character' src={"/assets/fred-pink.svg"} width={40} height={40} />
            <Image alt='fred character' src={"/assets/fred-purple.svg"} width={40} height={40} />
            <Image alt='fred character' src={"/assets/fred-orange.svg"} width={40} height={40} />
            <Image alt='fred character' src={"/assets/fred-blue.svg"} width={40} height={40} /> */}

         </div>
         {/* <div className='absolute bottom-2 left-2'>
            <p><strong>note:</strong>
               <li>In GSAP, "tween" stands for "in-between" and refers to the core animation function that creates smooth transitions between different states of a property, essentially animating an element from one value to another over a specified duration;</li>
               <li>for best performance animate css transforms and opacity(x,y,scale,skew,rotate...) <strong>because it helps utilizing hardware acceleration</strong></li>
               <li>gsap is great at 3D</li>
               <li><strong>reading curves:</strong>
                  steep curve = fast rate of change
                  meaning flater curve shower the change

                  in=slower=flater curve at start
                  out=slower=flater curve at end
                  inOut=slower=flater curve at start and end, steeper at middle
               </li>
               <li>to stop animation at initial load we can add paused: true in object where we add animate properties </li>
               <li>inbuild function in tween instance .play(), .pause(), .reverse(), .restart()</li>
            </p>
         </div> */}
      </div>
   )
}

export default page