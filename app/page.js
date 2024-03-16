"use client"
import Image from "next/image";
import React, { useEffect, useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
import Lenis from "@studio-freight/lenis";
import { images } from "@/constants";
import Card from "@/components/card";
import Overlay from "@/components/overlay";
import HorizontalScroll from "@/components/horizontal-scroll";
import ThreeDScroll from "@/components/three-d-scroll";

export default function Home() {




  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])



  const arr = new Array(5).fill(0)

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })


  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '-120%'])

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])

  const backgroundColor = useTransform(scrollYProgress, [0.58, 0.6], ['#fff', '#000'])

  const ty1 = useTransform(scrollYProgress, [0.27, 0.5], [0, -200])
  const ty2 = useTransform(scrollYProgress, [0.27, 0.5], [0, 100])
  const ty3 = useTransform(scrollYProgress, [0.27, 0.5], [0, 400])
  const tx1 = useTransform(scrollYProgress, [0.27, 0.5], [0, -200])
  const tx3 = useTransform(scrollYProgress, [0.27, 0.5], [0, 400])



  return (
    <div ref={targetRef} className="flex min-h-screen flex-col items-center justify-between">

      <Overlay />


      {/* <div className="w-screen h-screen bg-black"></div> */}
      <div className="w-screen h-screen bg-[#fff] flex justify-center items-center overflow-hidden">
        <div className="flex text-8xl max-sm:text-2xl font-extrabold text-neutral-900">
          <motion.h1 style={{ x: tx1 }}>JUST</motion.h1>
          <motion.h1 style={{}} className="txt">SCROLL</motion.h1>
          <motion.h1 style={{ x: tx3 }} className="txt">IT!!!</motion.h1>
        </div>
      </div>
      {/* ============================ */}


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


      {/* ============================ */}
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


      <div className="w-screen h-[100px] bg-[#fff] p-4"></div>

      <motion.div className="w-screen flex justify-center items-center flex-col gap-8 bg-ease" style={{ backgroundColor }}>
        {
          arr.map((el, i) => {
            return <Card src={images[i]} />
          })
        }
      </motion.div>
      <HorizontalScroll />
      <ThreeDScroll />
      <div className="w-screen h-screen bg-[#000]"></div>

    </div>
  );
}
