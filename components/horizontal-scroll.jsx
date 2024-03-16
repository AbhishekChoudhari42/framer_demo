"use client"

import React, { useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
import { images } from '@/constants'
import Image from 'next/image'

const HorizontalScroll = () => {
    const overlayRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: overlayRef,
        offset: ['start start', 'end end']
    })
    const clipPath = useTransform(scrollYProgress, [0, 0.5], ["inset(0%)", "inset(100%)"])
    const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 40])
    const rotateReverse = useTransform(scrollYProgress, [0, 0.5], [0, -40])
    const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-200vw'])
    const scale1 = useTransform(scrollYProgress, [0, 0.3], [1,1.2])
    const scale2 = useTransform(scrollYProgress, [0.33, 0.6], [1,1.2])
    const scale3 = useTransform(scrollYProgress, [0.63, 1], [1,1.2])

    return (
        <div ref={overlayRef} className='w-screen h-[300vh]'>
            <div className='sticky top-0'>
                <motion.div style={{ x }} className='w-[300vw] h-screen flex flex-shrink-0 items-center '>
                    <div className='w-[100vw] h-screen  flex-shrink-0 p-2 overflow-hidden'>
                        <motion.div style={{scale:scale1}} className='w-full h-full relative'>
                            <Image fill={true} src={images[0]} />
                        </motion.div>
                    </div>
                    <div className='w-[100vw] h-screen  flex-shrink-0 p-2 overflow-hidden'>
                        <motion.div style={{scale:scale2}} className='w-full h-full relative'>
                            <Image fill={true} src={images[1]} />
                        </motion.div>
                    </div>
                    <div className='w-[100vw] h-screen  flex-shrink-0 p-2 overflow-hidden'>
                        <motion.div style={{scale:scale3}} className='w-full h-full relative'>
                            <Image fill={true} src={images[2]} />
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default HorizontalScroll