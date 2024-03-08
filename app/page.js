"use client"
import Image from "next/image";
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Lenis from "@studio-freight/lenis";
import { images } from "@/constants";

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


  const y1 = useTransform(scrollYProgress,[0,1],['0%','50%'])
  const y2 = useTransform(scrollYProgress,[0,1],['0%','-100%'])
  const y3 = useTransform(scrollYProgress,[0,1],['0%','-70%'])
  const y4 = useTransform(scrollYProgress,[0,1],['0%','-120%'])

  const scale = useTransform(scrollYProgress,[0.5,1],[1,1.4])

  return (
    <div ref={targetRef} className="flex min-h-screen flex-col items-center justify-between">

      {/* <div className="w-screen h-screen bg-black"></div> */}
      <div className="w-screen h-screen bg-[#fff]"></div>
      {/* ============================ */}


      <div className="w-screen h-screen overflow-y-hidden  flex gap-8 bg-white">

        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{y:y1}}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[i]} />
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
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[(i+2)%5]} />
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
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[(i+3)%5]} />
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
              return <div key={(i + Math.random()*1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[i]} />
              </div>
            })
          }
        </motion.div>

      </div>


      {/* ============================ */}
      <div className="w-screen h-screen bg-[#fff] p-16 flex justify-between items-center max-sm:flex-col gap-16">
        <div className="flex-grow h-full bg-black overflow-hidden">
          <motion.div 
          
          className="w-full h-full bg-red-400 relative"
          style={{scale}}
          >
              <Image fill={true}  src={images[0]}/>
          </motion.div>
        </div>
        <div className="flex-grow h-full bg-black overflow-hidden">
          <motion.div 
          
          className="w-full h-full bg-red-400 relative"
          style={{scale}}
          >
              <Image fill={true}  src={images[3]}/>
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen bg-[#fff]"></div>


    </div>
  );
}
