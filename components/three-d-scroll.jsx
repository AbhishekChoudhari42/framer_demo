import React, { useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
import { images } from '@/constants'
import Image from 'next/image'

const ThreeDScroll = () => {

    const scrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end end']
    })

    let arr = new Array(9).fill(0)

    arr = arr.map((el,index)=>{
        return {    translateZ : useTransform(scrollYProgress, [(index*0.1),(index*0.1)+0.1], [-2,0]),
                    opacity: useTransform(scrollYProgress, [(index*0.1),(index*0.1)+0.1], [0.5,1]),
                    scale: useTransform(scrollYProgress, [(index*0.1),(index*0.1)+0.1], [0.5,3])
                }
    })

    return (
        <div ref={scrollRef} className='h-[1000dvh] w-screen bg-black'>
            {
                arr.map((el,index)=>{
                   const r = Math.floor(Math.random()*255);
                   const g = Math.floor(Math.random()*255);
                   const b = Math.floor(Math.random()*255);
                   return <div key={index} className='w-screen h-screen flex justify-center items-center will-change-transform sticky stick top-[0px]'>
                                <motion.div style={{opacity:el.opacity,scale:el.scale,backgroundColor:`rgb(${r},${g},${b})`}} className='w-[100px] h-[100px]'>
                                </motion.div>
                           </div>
                        
                })
            }
        </div>
    )
}

export default ThreeDScroll