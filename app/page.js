'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

// home
export default function Home() {
  const containerRef = useRef(null)
  
  // 1. Get the raw scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // 2. Wrap it in a Spring for buttery smooth interpolation.
  // This is the magic sauce that stops the "harshness"
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // 3. Map the smooth progress to your background positions
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%'])
  const backgroundY2 = useTransform(smoothProgress, [0, 1], ['0%', '-50%'])
  const backgroundY3 = useTransform(smoothProgress, [0, 1], ['0%', '25%'])

  // home
  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-x-hidden"
    >
      {/* Multiple animated background layers */}
      {/* Added willChange: 'transform' to offload the animation to the GPU (fixes lag) */}
      <motion.div 
        className="fixed inset-0 z-0" 
        style={{ y: backgroundY, willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      </motion.div>

      <motion.div 
        className="fixed inset-0 z-0" 
        style={{ y: backgroundY2, willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgb(6_182_212_/_0.1)_60deg,_transparent_120deg)] animate-spin"
          style={{ animationDuration: '60s' }}
        />
      </motion.div>

      <motion.div 
        className="fixed inset-0 z-0" 
        style={{ y: backgroundY3, willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/5 via-transparent to-transparent" />
      </motion.div>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}