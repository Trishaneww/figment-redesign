'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import { images } from '@/data';

interface ColumnProps {
    images: string[];
    y: any; 
  }

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6])

  useEffect( () => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }
    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className="bg-slate-50 z-20">
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
        <Column images={[images[12], images[13], images[14]]} y={y5}/>
      </div>
      <div className={styles.spacer}>HELLO WORLD</div>
    </main>
  )
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src:any, i:any) => {
          return (
          <div key={i}>
            <Image 
              src={src}
              alt='image'
              className="border-[2px] border-red-800 rounded-xl"
              width={1000}
              height={1000}
            />
          </div>
        )})
      }
    </motion.div>
  )
}
