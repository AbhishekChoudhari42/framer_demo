"use client"

import React, { useRef } from 'react'
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion"
import { images } from '@/constants'
import Image from 'next/image'

const HorizontalScroll = () => {
    const horizontalScrollRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: horizontalScrollRef,
        offset: ['start start', 'end end']
    })

    const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-200vw'])

    return (
        <div ref={horizontalScrollRef} className='w-screen h-[300vh]'>
            <div className='sticky top-0'>
                <motion.div style={{ x }} className='w-[300vw] h-screen flex flex-shrink-0 items-center '>
                    <div className='w-[100vw] h-screen  flex-shrink-0 p-2 '>
                        <motion.div style={{}} className='w-full h-full relative'>
                            <Image fill={true} src={images[0]} />
                        </motion.div>
                    </div>
                    <div className='w-[100vw] h-screen  flex-shrink-0 p-2 '>
                        <motion.div style={{}} className='w-full h-full relative'>
                            <Image fill={true} src={images[1]} />
                        </motion.div>
                    </div>
                    <div className='w-[100vw] h-screen  flex-shrink-0 p-2 '>
                        <motion.div style={{}} className='w-full h-full relative'>
                            <Image fill={true} src={images[2]} />
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default HorizontalScroll