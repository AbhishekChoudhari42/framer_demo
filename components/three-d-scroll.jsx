import React, { useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
import { images } from '@/constants'
import Image from 'next/image'

const ThreeDScroll = () => {

    const horizontalScrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: horizontalScrollRef,
        offset: ['start start', 'end end']
    })

    const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-200vw'])

    let arr = new Array(9).fill(0)

    arr = arr.map((el,index)=>{
        return {    translateZ : useTransform(scrollYProgress, [(index*0.1),(index*0.1)+0.1], [-2,0]),
                    opacity: useTransform(scrollYProgress, [(index*0.1),(index*0.1)+0.1], [0.5,1]),
                    scale: useTransform(scrollYProgress, [(index*0.1),(index*0.1)+0.1], [0,4])
                }
    })

    return (
        <div ref={horizontalScrollRef} className='h-[1100vh] w-full bg-white relative'>
            {
                arr.map((el)=>{
                   const r = Math.floor(Math.random()*255);
                   const g = Math.floor(Math.random()*255);
                   const b = Math.floor(Math.random()*255);
                   return <motion.div style={{opacity:el.opacity,scale:el.scale,perspective:0,backgroundColor:`rgb(${r},${g},${b})`}} className='w-[100px] h-[100px] sticky top-[50vh] left-[50%] translate-x-[100px]'>
                        
                          </motion.div>
                })
            }
        </div>
    )
}

export default ThreeDScroll