"use client"

import { images } from '@/constants'
import React, { useEffect, useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"

const row = () => {
  return (
    <div className="w-screen h-screen bg-[#fff] p-16 flex justify-between items-center max-sm:hidden gap-16">
    <div className="flex-grow h-full bg-black overflow-hidden">
      <motion.div

        className="w-full h-full bg-red-400 relative"
        style={{ scale }}
      >
        <Image fill={true} src={images[0]} />
      </motion.div>
    </div>
    <div className="flex-grow h-full bg-black overflow-hidden">
      <motion.div

        className="w-full h-full bg-red-400 relative"
        style={{ scale }}
      >
        <Image fill={true} src={images[3]} />
      </motion.div>
    </div>
  </div>
  )
}

export default row