'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react"

const ParallaxEffect = ({
  children,
  contentClassName,
  backgroundImageClassName,
  backgroundImageLocation,
  sectionId
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const backgroundImageY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);

  return (
    <section
      id={ sectionId }
      ref={ ref }
      className="relative mx-auto max-w-screen-xl overflow-hidden px-4 py-8 sm:px-6 lg:px-8 md:mb-20"
    >
      {/* Background Image */ }
      <motion.div
        className={ backgroundImageClassName }
        style={ {
          backgroundImage: backgroundImageLocation,
          y: backgroundImageY
        } }
      />

      {/* Content */ }
      <motion.div
        className={ contentClassName }
        style={ { y: contentY } }
      >
        { children }
      </motion.div>
    </section>
  )
}

export default ParallaxEffect