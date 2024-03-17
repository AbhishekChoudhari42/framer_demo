"use client"

import React, { useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"

const Overlay = () => {
    const overlayRef = useRef(null)
    const { scrollYProgress } = useScroll({
      target: overlayRef,
      offset: ['start start', 'end start']
    })
    const clipPath = useTransform(scrollYProgress, [0, 0.5], ["inset(0%)", "inset(100%)"])
    const rotate = useTransform(scrollYProgress, [0, 0.5], [0,40])
    const rotateReverse = useTransform(scrollYProgress, [0, 0.5], [0,-40])
    const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1,0])

  return (
    <div ref={overlayRef} className="w-screen h-[150dvh] bg-white relative">
    <div className="sticky stick w-full h-screen top-0 will-change-transform overflow-hidden">
      <div className="bg-white w-screen h-screen absolute top-0 flex justify-center items-center"><motion.h1 style={{opacity}} className="font-bold text-7xl">Scroll</motion.h1></div>
      <motion.div style={{rotate,clipPath}} className="bg-black text-white w-screen h-screen absolute top-0">
        <div className="w-screen h-screen flex justify-center items-center bg-anime">
          <motion.h1 style={{rotate:rotateReverse}} className="font-bold text-7xl">Scroll</motion.h1>
        </div>
      </motion.div>
    </div>
  </div>
  )
}

export default Overlay