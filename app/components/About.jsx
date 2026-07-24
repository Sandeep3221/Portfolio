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
  Terminal,
  Server,
} from 'lucide-react'

const stats = [
  { label: 'Experience', value: 'Intern', icon: Code2 },
  { label: 'HIT CGPA', value: '8.3', icon: GraduationCap },
  { label: 'Projects', value: '4+', icon: Trophy },
  { label: 'Leadership', value: '2+ Roles', icon: Users },
]

const coreSkills = [
  {
    title: 'Backend Development',
    desc: 'Building scalable, efficient, and robust server-side architectures.',
    icon: Server,
  },
  {
    title: 'API Design',
    desc: 'Crafting RESTful, secure, and high-performance communication layers.',
    icon: Code2,
  },
  {
    title: 'Authentication & Security',
    desc: 'Implementing robust authorization, safe defaults, and data protection.',
    icon: ShieldCheck,
  },
  {
    title: 'System Design',
    desc: 'Architecting fundamentals for distributed and highly available systems.',
    icon: Brain,
  },
  {
    title: 'Deployment & DevOps',
    desc: 'Managing pipelines, cloud deployments, and continuous integration.',
    icon: Terminal,
  },
  {
    title: 'Problem Solving',
    desc: 'Applying DSA concepts to overcome complex engineering hurdles.',
    icon: Lightbulb,
  },
]

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
            className="space-y-8 bg-gray-900/20 p-6 md:p-8 rounded-2xl border border-gray-800/50"
          >
            <h3 className="text-xl font-bold text-white mb-2">Core Engineering Skills</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.4 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
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
                  I am a B.Tech CSE student at Haldia Institute of Technology with an 8.3 CGPA, currently working as a Full Stack Web Developer &amp; Operations Executive Intern at SH1ELD Tech.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  I enjoy building scalable web applications, robust backend systems, and exploring distributed architecture. Alongside my cybersecurity projects, I am focused on continuously improving my DSA and problem-solving skills to tackle complex engineering challenges.
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
        
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/20 rounded-full animate-float-slow"
        />
        <div
          className="absolute bottom-1/4 right-10 w-1 h-1 bg-cyan-400/20 rounded-full animate-float-reverse"
        />
      </div>
    </section>
  )
}

export default About