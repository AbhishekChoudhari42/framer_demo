"use client"
import Image from "next/image";
import React, { useEffect, useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
import Lenis from "@studio-freight/lenis";
import { images } from "@/constants";
import Card from "@/components/card";

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

  const ty1 = useTransform(scrollYProgress, [0.22, 0.5], [0, -200])
  const ty2 = useTransform(scrollYProgress, [0.22, 0.5], [0, 100])
  const ty3 = useTransform(scrollYProgress, [0.22, 0.5], [0, 400])
  const tx1 = useTransform(scrollYProgress, [0.22, 0.5], [0, -200])
  const tx3 = useTransform(scrollYProgress, [0.22, 0.5], [0, 400])

  const clipPath = useTransform(scrollYProgress, [0.11, 0.15], ["inset(0%)", "inset(100%)"])
  const rotate = useTransform(scrollYProgress, [0.11, 0.15], [0,40])
  const rotateReverse = useTransform(scrollYProgress, [0.11, 0.15], [0,-40])

  return (
    <div ref={targetRef} className="flex min-h-screen flex-col items-center justify-between">

      <div className="w-full h-[150vh] bg-black relative">
        <div className="sticky w-screen h-screen top-0">
          <div className="bg-white w-screen h-screen absolute top-0 flex justify-center items-center"><h1 className="font-bold text-7xl">Scroll</h1></div>
          <motion.div style={{ clipPath ,rotate}} className="bg-black text-white w-screen h-screen absolute top-0">
            <div className="w-screen h-screen flex justify-center items-center bg-anime">
              <motion.h1 style={{rotate:rotateReverse}} className="font-bold text-7xl">Scroll</motion.h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="w-screen h-screen bg-black"></div> */}
      <div className="w-screen h-screen bg-[#fff] flex justify-center items-center overflow-hidden">
        <div className="flex text-8xl max-sm:text-2xl font-extrabold text-neutral-900">
          <motion.h1 style={{ y: ty1, x: tx1 }}>JUST</motion.h1>
          <motion.h1 style={{ y: ty2 }} className="txt">SCROLL</motion.h1>
          <motion.h1 style={{ y: ty3, x: tx3 }} className="txt">IT!!!</motion.h1>
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

      <div className="w-screen h-screen bg-[#000]"></div>

    </div>
  );
}
