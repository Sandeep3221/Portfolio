'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'

const Hero = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'], { clamp: true })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], { clamp: true })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8], { clamp: true })

  // Pre-generate particle positions at module level (no useState, no useEffect, no re-renders)
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${(i * 7.3 + 13) % 100}%`,
      top: `${(i * 11.7 + 7) % 100}%`,
      duration: `${10 + (i % 5) * 3}s`,
      delay: `${(i % 4) * -2.5}s`,
      moveX: `${((i % 3) - 1) * 80}px`,
      moveY: `${-80 - (i % 4) * 40}px`,
    })),
  [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm"
        >
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Sandeep Adhikari
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Full-Stack Developer & Problem Solver
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/Sandeep3221', label: 'GitHub', newTab: true },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sandeep-adhikari-76b778311', label: 'LinkedIn', newTab: true },
            { icon: Mail, href: 'mailto:kashyapadhikari09@gmail.com', label: 'Email', newTab: false },
            { icon: Download, href: '/resume.pdf', label: 'Resume', download: true },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              {...(social.download ? { download: 'Sandeep_Adhikari_Resume.pdf' } : {})}
              {...(social.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
            >
              <social.icon size={24} className="text-gray-300 hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gray-600/50 rounded-full text-gray-300 hover:border-blue-400/50 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-gray-500 font-medium">
          <span>Student developer based in</span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm text-gray-300">
            <MapPin size={14} className="text-teal-400" />
            <span>Kalimpong</span>
          </div>
          <span>• Open to opportunities</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>

      {/* CSS-animated particles — runs entirely on compositor thread */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-particle"
            style={{
              left: p.left,
              top: p.top,
              '--particle-x': p.moveX,
              '--particle-y': p.moveY,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* CSS-animated rotating circles — no Framer Motion overhead */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400/10 rounded-full animate-spin-slow"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-cyan-400/10 rounded-full animate-spin-reverse"
        />
      </div>
    </section>
  )
}

export default Hero