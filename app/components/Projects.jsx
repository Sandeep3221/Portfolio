'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'DevTinder',
      description:
        'A web app inspired by Tinder where users can accept or reject project collaboration requests, helping developers find teammates efficiently.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      liveDemo: '',
      github: 'https://github.com/Sandeep3221/DevTinder',
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/10',
      img: '/Devtinder.png',
    },
    {
      title: 'Dr. Marketing',
      description:
        'Designed and implemented a clean, responsive UI for Dr Marketing, focusing on intuitive user experience and modern frontend aesthetics.',
      tech: ['React.js', 'Tailwind CSS'],
      liveDemo: 'https://dr-marketing-page.vercel.app/',
      github: 'https://github.com/Sandeep3221/Dr-MarketingPage',
      gradient: 'from-cyan-400 to-cyan-600',
      bgGradient: 'from-cyan-500/10 to-cyan-600/10',
      img: '/drmarketing.png',
    },
    {
      title: 'LinkedIn Clone',
      description:
        'Developed a full-stack LinkedIn clone with real-time features using Socket.io for instant updates, secure authentication with JWT and cookies, and an interactive UI for networking, posts, and connections.',
      tech: ['React.js', 'Express.js', 'MongoDB', 'Socket.io'],
      liveDemo: '',
      github: 'https://github.com/Sandeep3221/LinkedIn',
      gradient: 'from-teal-400 to-teal-600',
      bgGradient: 'from-teal-500/10 to-teal-600/10',
      img: '/LinkedIn.png',
    },
    {
      title: 'Agro AI',
      description:
        'A multilingual, AI-powered web application that helps farmer predict crop yield and view real-time weather insights. Built with responsive React and Tailwind CSS  focusing on accessibility, usability and performance',
      tech: ['React.js', 'Fast API', 'Auth'],
      liveDemo: 'https://agrovision-black.vercel.app/',
      github: 'https://github.com/Sandeep3221/AGRI-CU',
      gradient: 'from-pink-400 to-pink-600',
      bgGradient: 'from-pink-500/10 to-pink-600/10',
      img: '/Agri-AI.png',
    },
    {
      title: 'CryptoCurrency  PriceTracking',
      description:
        'Developed a simple price-tracking application that consumes a cryptocurrency API to fetch and display live market data. This project was built as a learning exercise to strengthen API integration, asynchronous data fetching, and UI data presentation.',
      tech: ['React.js', 'Tailwind CSS'],
      liveDemo: '',
      github: 'https://github.com/Sandeep3221/CryptoCurrency_PriceTracking',
      gradient: 'from-yellow-400 to-yellow-600',
      bgGradient: 'from-yellow-500/10 to-yellow-600/10',
      img: '/Crypto.png',
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-black/50 to-gray-950/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10`}
            >
              <div className="p-6">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-50 object-cover rounded-lg mb-3"
                />

                <div
                  className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}
                />

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50 group-hover:border-gray-600/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveDemo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-700/50 rounded-lg text-gray-300 text-sm font-medium hover:border-blue-400/50 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
