"use client"
import Image from "next/image";
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Lenis from "@studio-freight/lenis";
export default function Home() {

  


  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  
  
  const arr = new Array(5).fill(0)

  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['start end','end start']
  })


  const y1 = useTransform(scrollYProgress,[0,1],['0%','-20%'])
  const y2 = useTransform(scrollYProgress,[0,1],['0%','-100%'])
  const y3 = useTransform(scrollYProgress,[0,1],['0%','-70%'])
  const y4 = useTransform(scrollYProgress,[0,1],['0%','-120%'])

  return (
    <div ref={targetRef} className="flex min-h-screen flex-col items-center justify-between">

      <div className="w-screen h-screen bg-black"></div>
      {/* <div className="w-screen h-screen bg-[#fff3cd]"></div> */}
      {/* ============================ */}


      <div className="w-screen h-screen overflow-y-hidden flex gap-2 bg-white">

        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{y:y1}}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-2 bg-violet-500 relative`}>
                <Image fill={true} src={"https://images.unsplash.com/photo-1709393361159-b915b32b061a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"} />
              </div>
            })
          }
        </motion.div>
        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{y:y2}}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-2 bg-violet-500 relative`}>
                <Image fill={true} src={"https://images.unsplash.com/photo-1709393361159-b915b32b061a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"} />
              </div>
            })
          }
        </motion.div>
        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{y:y3}}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-2 bg-violet-500 relative`}>
                <Image fill={true} src={"https://images.unsplash.com/photo-1709393361159-b915b32b061a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"} />
              </div>
            })
          }
        </motion.div>
        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{y:y4}}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-2 bg-violet-500 relative`}>
                <Image fill={true} src={"https://images.unsplash.com/photo-1709393361159-b915b32b061a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"} />
              </div>
            })
          }
        </motion.div>

      </div>


      {/* ============================ */}
      {/* <div className="w-screen h-screen bg-[#fff3cd]"></div> */}
<div className="w-screen h-screen bg-black"></div>

    </div>
  );
}
