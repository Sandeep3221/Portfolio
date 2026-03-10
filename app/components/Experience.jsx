'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Freelancer Web Developer',
      company: 'Dr Marketing',
      location: 'Siliguri, India',
      period: 'June 2025 - July 2025',
      description: [
        'Engineered responsive and visually clean frontend interfaces using React.js.',
        'Researched and integrated modern UI technologies to optimize the overall user experience.',
        'Collaborated within an agile team environment to ensure seamless frontend delivery.',
      ],
      color: 'from-blue-400 to-blue-600',
      shadow: 'hover:shadow-blue-500/10',
    },
    {
      title: 'Web & Tech Team Member',
      company: 'Google Developer Group (College Club)',
      location: 'Haldia, India',
      period: 'Jan 2025 - May 2025',
      description: [
        'Co-organized a React.js workshop, managing event coordination and smooth execution for college students.',
        'Acquired hands-on exposure to frontend development concepts and real-world tech event workflows.',
        'Strengthened teamwork, communication, and technical event management skills in a collaborative setting.',
      ],
      color: 'from-cyan-400 to-cyan-600',
      shadow: 'hover:shadow-cyan-500/10',
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
          {/* Timeline line - adjusted positioning for perfect centering with the dots */}
          <div className="absolute left-[31px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 to-cyan-400/50 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot - precisely aligned over the vertical line */}
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
                    
                    {/* Date Badge */}
                    <div className="flex items-center space-x-2 text-gray-300 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700/50 w-fit">
                      <Calendar size={14} className="text-blue-400" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2 + itemIndex * 0.1,
                        }}
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