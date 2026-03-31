'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Briefcase } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Kalimpong Homestays',
      description: [
        'Developed a full-stack reservation platform featuring seamless property discovery, dynamic routing, and secure user authentication.',
        'Implemented advanced search and filtering logic on the Express backend using MongoDB to handle complex booking queries and availability.',
        'Built a highly responsive frontend with React and Tailwind CSS, prioritizing fast load times and an intuitive mobile-first user experience.',
      ],
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Auth'],
      liveDemo: 'https://homestay-reservation.vercel.app/',
      github: 'https://github.com/Sandeep3221/Homestay_Reservation',
      gradient: 'from-amber-400 to-orange-500',
      img: '/Homestay.png',
      freelance: false,
    },
    {
      title: 'Support AI',
      description: [
        'Built an AI-powered customer support chatbot that answers queries using a custom knowledge base for accurate, business-specific responses.',
        'Integrated Scalekit authentication to provide secure user login and session management.',
        'Developed a responsive full-stack web application with a real-time chat interface to automate customer support and improve user experience.',
      ],
      tech: ['Next.js', 'Scalekit', 'Gemini AI'],
      liveDemo: 'https://support-ai-orcin.vercel.app/',
      github: 'https://github.com/Sandeep3221/SupportAI',
      gradient: 'from-violet-500 to-fuchsia-500',
      img: '/Supportai.png',
      freelance: false,
    },
    {
      title: 'Agro AI',
      description: [
        'Built an AI-powered web application capable of accurate crop yield prediction and real-time weather data analysis via FastAPI.',
        'Integrated multilingual support to ensure accessibility and ease of use for diverse rural farming communities.',
        'Optimized frontend rendering performance and cross-browser compatibility utilizing React and Tailwind CSS.',
      ],
      tech: ['React.js', 'Fast API', 'Auth'],
      liveDemo: 'https://agrovision-black.vercel.app/',
      github: 'https://github.com/Sandeep3221/AGRI-CU',
      gradient: 'from-blue-500 to-cyan-500',
      img: '/Agri-AI.png',
      freelance: false,
    },
    {
      title: 'LinkedIn Clone',
      description: [
        'Developed a full-stack social networking platform replicating core professional workflows, including user profiles and post feeds.',
        'Integrated Socket.io to establish low-latency, real-time instant messaging and dynamic  feed updates.',
        'Designed secure user authentication and session management pipelines utilizing JWT and HTTP-only cookies.',
      ],
      tech: ['React.js', 'Express.js', 'MongoDB', 'Socket.io'],
      liveDemo: 'https://linked-in-omega-six.vercel.app/login',
      github: 'https://github.com/Sandeep3221/LinkedIn',
      gradient: 'from-blue-500 to-indigo-500',
      img: '/LinkedIn.png',
      freelance: false,
    },
    {
      title: 'Dr. Marketing',
      description: [
        'Designed and delivered a high-conversion landing page tailored precisely to match the client\'s specific brand identity.',
        'Developed a responsive, modern frontend architecture emphasizing smooth animations and an intuitive user experience.',
        'Integrated EmailJS to facilitate seamless lead generation and route direct client communications instantly.',
      ],
      tech: ['React.js', 'Tailwind CSS', 'EmailJs'],
      liveDemo: 'https://dr-marketing-page.vercel.app/',
      github: 'https://github.com/Sandeep3221/Dr-MarketingPage',
      gradient: 'from-teal-400 to-emerald-500',
      img: '/drmarketing.png',
      freelance: true,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={project.title}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 relative group"
                >
                  {/* FIX APPLIED HERE: Replaced changing aspect ratios with a consistent 'aspect-video' */}
                  <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800/60 bg-gray-900/50 aspect-video flex items-center justify-center">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    
                    {project.freelance && (
                      <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md text-yellow-400 text-xs font-bold rounded-full border border-yellow-400/30">
                        <Briefcase size={12} />
                        FREELANCE
                      </span>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-gray-300 text-xs font-medium tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {project.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3 text-gray-400">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2.5 flex-shrink-0 opacity-80`}
                        />
                        <span className="text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-row gap-3 w-full sm:w-auto">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 sm:flex-none flex justify-center items-center space-x-1.5 sm:space-x-2 px-2 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
                      >
                        <ExternalLink size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className={`flex-1 sm:flex-none flex justify-center items-center space-x-1.5 sm:space-x-2 px-2 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold text-sm sm:text-base opacity-50 cursor-not-allowed whitespace-nowrap`}>
                        <ExternalLink size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Live Demo</span>
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex justify-center items-center space-x-1.5 sm:space-x-2 px-2 sm:px-6 py-3 bg-transparent border border-gray-700 hover:border-gray-500 rounded-xl text-gray-300 hover:text-white font-semibold text-sm sm:text-base hover:bg-gray-800/50 transition-all duration-300 whitespace-nowrap"
                    >
                      <Github size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
