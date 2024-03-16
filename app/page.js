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

      


      {/* ============================ */}



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
