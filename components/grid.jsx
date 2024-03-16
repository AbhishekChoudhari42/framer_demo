"use client"
import { images } from '@/constants'
import React, { useEffect, useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
const grid = () => {
  return (
    <div className="w-screen h-screen overflow-y-hidden  flex gap-8 bg-white">

        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{ y: y1 }}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random() * 1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[i]} />
              </div>
            })
          }
        </motion.div>


        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{ y: y2 }}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random() * 1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[(i + 2) % 5]} />
              </div>
            })
          }
        </motion.div>


        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{ y: y3 }}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random() * 1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[(i + 3) % 5]} />
              </div>
            })
          }
        </motion.div>

        <motion.div
          className="h-screen gap-2 w-[25%] relative cards"
          style={{ y: y4 }}
        >
          {
            arr.map((e, i) => {
              return <div key={(i + Math.random() * 1000)} className={`w-full h-[500px] mb-8 card bg-neutral-300 relative`}>
                <Image fill={true} src={images[i]} />
              </div>
            })
          }
        </motion.div>

      </div>
  )
}

export default grid