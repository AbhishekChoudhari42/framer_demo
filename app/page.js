"use client"
import Image from "next/image";
import React, { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
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


  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Overlay />
      {/* <HorizontalScroll /> */}
      <ThreeDScroll />
    </div>
  );
}
