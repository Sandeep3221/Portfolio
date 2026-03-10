'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code2, 
  GraduationCap, 
  Trophy, 
  Users, 
  Brain, 
  Lightbulb, 
  ShieldCheck, 
  Target, 
  MessageSquare, 
  CheckCircle2,
  Terminal 
} from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Condensed stats for a sleeker dashboard look
  const stats = [
    { label: 'Experience', value: '1+ Yr', icon: Code2 },
    { label: 'HIT CGPA', value: '8.3', icon: GraduationCap },
    { label: 'Projects', value: '2+', icon: Trophy },
    { label: 'Leadership', value: '2+ Roles', icon: Users },
  ]

  const softSkills = [
    {
      title: 'Critical Thinking',
      desc: 'I break down problems into steps, validate assumptions, and select practical solutions.',
      icon: Brain,
    },
    {
      title: 'Decision Making',
      desc: 'I make data-driven decisions, considering trade-offs and risks, with a focus on action.',
      icon: Lightbulb,
    },
    {
      title: 'Teamwork & Leadership',
      desc: 'I mentor others, collaborate with design and product teams, and lead through context.',
      icon: Users,
    },
    {
      title: 'Security Mindset',
      desc: 'I apply least privilege principles, manage secrets, validate inputs, and use safe defaults.',
      icon: ShieldCheck,
    },
    {
      title: 'Ownership',
      desc: 'I handle end-to-end delivery, including documentation, testing, monitoring, and iterative improvements.',
      icon: Target,
    },
    {
      title: 'Communication',
      desc: 'I provide clear updates, explain concepts simply, and align proactively with teams.',
      icon: MessageSquare,
    },
  ]

  const badges = [
    "Production-ready APIs",
    "Clean, typed code with tests",
    "Security integrated by default",
    "Cross-team collaboration",
    "End-to-end project ownership"
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Soft Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 bg-gray-900/20 p-6 md:p-8 rounded-2xl border border-gray-800/50"
          >
            <h3 className="text-xl font-bold text-white mb-2">Soft Skills & Practices</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <skill.icon size={18} className="text-blue-400 shrink-0" />
                    <h4 className="font-bold text-gray-100">{skill.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Intro Text & Compact Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            {/* The Intro Card */}
            <div className="bg-gray-900/30 p-6 md:p-8 rounded-2xl border border-gray-800/50 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
              {/* Subtle glowing orb effect in the background */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal size={24} className="text-blue-400" />
                My Journey
              </h3>
              
              <div className="space-y-4 relative z-10">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I'm a Full-Stack Developer learning new things in modern web technologies. Currently pursuing my B.Tech in Computer Science at Haldia Institute of Technology, where I maintain an 8.3/10 CGPA.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  My expertise spans crafting intuitive user interfaces with React and Next.js to building robust backend systems with Node.js and Express. Beyond code, I bring strong leadership experience from organizing college tech events and tournaments.
                </p>
              </div>
            </div>

            {/* The Compact Stats Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-900/40 rounded-xl border border-gray-800/50 hover:border-blue-400/30 hover:bg-gray-800/60 transition-all group"
                >
                  <stat.icon size={20} className="text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider text-center mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900/40 border border-gray-800 rounded-full text-xs md:text-sm font-medium text-gray-300 hover:border-blue-400/50 hover:text-white transition-all duration-300"
            >
              <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
              <span className="text-center">{badge}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          className="absolute bottom-1/4 right-10 w-1 h-1 bg-cyan-400/20 rounded-full"
        />
      </div>
    </section>
  )
}

export default About