"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { images } from '@/constants'
import Image from 'next/image'
const Card = (props) => {

    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    })
    
    const scale = useTransform(scrollYProgress, [0, 0.6], [1.4, 1])
    const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0])

    return (
        <div ref={targetRef} className='imgcard relative w-[400px] h-[400px] bg-red-500 overflow-hidden top-8' style={{scale}}>
            <motion.div className='w-full h-full' style={{scale,rotate}}>
                <Image fill={true} src={props.src} />
            </motion.div>
        </div>
    )
}

export default Card