'use client'

import { motion } from 'framer-motion'
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
  const stats = [
    { label: 'Experience', value: '1+ Yr', icon: Code2 },
    { label: 'HIT CGPA', value: '8.3', icon: GraduationCap },
    { label: 'Projects', value: '2+', icon: Trophy },
    { label: 'Leadership', value: '2+ Roles', icon: Users },
  ]

  const softSkills = [
    {
      title: 'Critical Thinking',
      desc: 'Breaking down complex problems into actionable, practical solutions.',
      icon: Brain,
    },
    {
      title: 'Decision Making',
      desc: 'Making data-driven choices while balancing technical trade-offs.',
      icon: Lightbulb,
    },
    {
      title: 'Team Collaboration',
      desc: 'Mentoring peers and aligning proactively with cross-functional teams.',
      icon: Users,
    },
    {
      title: 'Security Mindset',
      desc: 'Implementing safe defaults and validating inputs from day one.',
      icon: ShieldCheck,
    },
    {
      title: 'Ownership',
      desc: 'Managing the entire lifecycle from architecture to deployment.',
      icon: Target,
    },
    {
      title: 'Communication',
      desc: 'Translating technical complexity into simple, understandable terms.',
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
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
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
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="space-y-8 bg-gray-900/20 p-6 md:p-8 rounded-2xl border border-gray-800/50"
          >
            <h3 className="text-xl font-bold text-white mb-2">Soft Skills & Practices</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "transform, opacity" }}
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col space-y-6"
          >
            <div className="bg-gray-900/30 p-6 md:p-8 rounded-2xl border border-gray-800/50 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Terminal size={24} className="text-blue-400" />
                My Journey
              </h3>
              
              <div className="space-y-4 relative z-10">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I'm a Full-Stack Developer passionate about clean code and modern web architecture. I'm currently pursuing my B.Tech in CS at Haldia Institute of Technology (8.3 CGPA).
                </p>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I specialize in building intuitive frontends with React/Next.js and robust backend systems with Node.js. Beyond the screen, I actively lead tech communities and organize college hackathons.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ willChange: "transform, opacity" }}
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

        <div className="mt-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.7 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900/40 border border-gray-800 rounded-full text-xs md:text-sm font-medium text-gray-300 hover:border-blue-400/50 hover:text-white transition-all duration-300"
            >
              <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
              <span className="text-center">{badge}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: "transform" }}
          className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: "transform" }}
          className="absolute bottom-1/4 right-10 w-1 h-1 bg-cyan-400/20 rounded-full"
        />
      </div>
    </section>
  )
}

export default About