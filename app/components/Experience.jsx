'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Independent Clients',
      location: 'Remote',
      period: 'June 2025 - Present',
      description: [
        'Design and build custom, responsive web applications for various independent clients.',
        'Focus on delivering clean UI/UX, fast-loading performance, and modern digital experiences.',
        'Manage end-to-end project development, from initial concept to final deployment.',
      ],
      color: 'from-blue-400 to-blue-600',
      shadow: 'hover:shadow-blue-500/10',
    },
    {
      title: 'Web Developer',
      company: 'E-Cell HIT',
      location: 'Haldia, India',
      period: 'May 2025 - Present',
      description: [
        'Develop and maintain digital platforms to support the official Entrepreneurship Cell.',
        'Build web tools that facilitate student-led innovation, startup events, and workshops.',
        'Collaborate within a strong community network to foster technical and entrepreneurial growth.',
      ],
      color: 'from-purple-400 to-purple-600',
      shadow: 'hover:shadow-purple-500/10',
    },
    {
      title: 'Web & Tech Team Member',
      company: 'Google Developer Group',
      location: 'Haldia, India',
      period: 'Jan 2025 - May 2025',
      description: [
        'Co-organized technical web workshops, managing digital coordination for college students.',
        'Gained hands-on experience with real-world tech event workflows and team collaboration.',
        'Helped build a supportive, community-driven environment for emerging developers.',
      ],
      color: 'from-cyan-400 to-cyan-600',
      shadow: 'hover:shadow-cyan-500/10',
    },
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const cardVariants = {
    hidden: (index) => ({ 
      opacity: 0, 
      x: index % 2 === 0 ? -40 : 40 
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[31px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 via-purple-400/50 to-cyan-400/50 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative"
              >
                <div
                  className={`absolute left-[24px] top-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full hidden md:block shadow-[0_0_15px_rgba(0,0,0,0.5)] ring-4 ring-black z-10`}
                />

                <div className={`md:ml-20 bg-gray-900/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-800/60 hover:border-gray-700 transition-all duration-300 group hover:shadow-xl ${exp.shadow} hover:-translate-y-1`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Briefcase size={16} className="text-gray-500" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} className="text-gray-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50 w-fit shrink-0">
                      <Calendar size={14} className="text-blue-400" />
                      <span className="text-sm font-medium whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        variants={bulletVariants}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0 opacity-80`}
                        />
                        <span className="text-sm sm:text-base leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience