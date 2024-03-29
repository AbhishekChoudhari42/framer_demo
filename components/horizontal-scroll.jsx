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
                <div className='w-[100vw] h-[100dvh] sticky top-0 overflow-hidden will-change-transform'>
                <motion.div style={{ x }} className='w-[300vw] h-screen flex items-center'>
                    
                    <div key={'pos1'} className='w-screen h-screen  flex-shrink-0 flex items-center justify-center'>
                        <motion.div style={{}} className='w-[80%] h-full relative '>
                            <Image fill={true} src={images[0]} />
                        </motion.div>
                    </div>
                    
                    <div key={'pos2'} className='w-screen h-screen  flex-shrink-0 flex items-center justify-center'>
                        <motion.div style={{}} className='w-[80%] h-full relative '>
                            <Image fill={true} src={images[1]} />
                        </motion.div>
                    </div>

                    <div key={'pos3'} className='w-screen h-screen  flex-shrink-0 flex items-center justify-center'>
                        <motion.div style={{}} className='w-[80%] h-full relative '>
                            <Image fill={true} src={images[2]} />
                        </motion.div>
                    </div>
                
                </motion.div>
                </div>
        </div>
    )
}

export default HorizontalScroll