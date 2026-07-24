'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Briefcase, Server } from 'lucide-react'
import Image from 'next/image'

// Static animation variants at module level
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageVariants = {
  hidden: (isEven) => ({ opacity: 0, x: isEven ? -40 : 40 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const textVariants = {
  hidden: (isEven) => ({ opacity: 0, x: isEven ? 40 : -40 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
}

const projects = [
  {
    title: 'Load Balancer',
    description: [
      'Built a custom load balancer from scratch using Node.js with Round Robin request distribution.',
      'Implemented automatic health checks and failover to route traffic only to healthy backend servers.',
      'Added server recovery detection for seamless reintegration and improved application availability.',
    ],
    tech: ['Node.js', 'System Design', 'Networking'],
    liveDemo: '',
    github: 'https://github.com/Sandeep3221/LoadBalancer',
    gradient: 'from-slate-400 to-gray-600',
    img: '',
    freelance: false,
  },
  {
    title: 'Kalimpong Homestays',
    description: [
      'Full-stack reservation platform with secure authentication and dynamic routing.',
      'Integrated Razorpay payment gateway for seamless online bookings and payments.',
      'Custom MongoDB search and filtering system for real-time room availability.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
    liveDemo: 'https://homestay-reservation.vercel.app/',
    github: 'https://github.com/Sandeep3221/Homestay_Reservation',
    gradient: 'from-amber-400 to-orange-500',
    img: '/KalimpongHome.png',
    freelance: false,
  },
  {
    title: 'P2P File Transfer',
    description: [
      'Browser-to-browser file sharing powered by WebRTC with no file uploads.',
      'End-to-end encrypted transfer using SHA-256 verification for secure sharing.',
      'Real-time connection setup with WebSockets for fast and seamless transfers.',
    ],
    tech: ['React.js', 'WebRTC', 'WebSocket', 'Node.js', 'Express.js', 'SHA-256'],
    liveDemo: 'https://p2-p-file-transfer-sigma.vercel.app/',
    github: 'https://github.com/Sandeep3221',
    gradient: 'from-emerald-400 to-cyan-500',
    img: '/FileTransfer.png',
    freelance: false,
  },
  {
    title: 'Support AI',
    description: [
      'AI customer support chatbot utilizing a custom knowledge base for accurate answers.',
      'Integrated Scalekit authentication for secure session management.',
      'Real-time chat interface designed to automate support workflows.',
    ],
    tech: ['Next.js', 'Scalekit', 'Gemini AI'],
    liveDemo: 'https://support-ai-orcin.vercel.app/',
    github: 'https://github.com/Sandeep3221/SupportAI',
    gradient: 'from-violet-500 to-fuchsia-500',
    img: '/Supportai.png',
    freelance: false,
  },
  {
    title: 'KeyShift',
    description: [
      'Fast, minimal typing test app with real-time WPM and accuracy tracking.',
      'Visual performance tools to help users analyze typing speed over time.',
      'Built with Zustand for robust state management and optimized for desktop.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    liveDemo: 'https://keyshift-snowy.vercel.app/',
    github: 'https://github.com/Sandeep3221/keyshift',
    gradient: 'from-blue-500 to-cyan-500',
    img: '/Keyshift.png',
    freelance: false,
  },
  {
    title: 'Honeypot',
    description: [
      'Built a real-time honeypot system to detect, log, and analyze suspicious web requests.',
      'Developed a secure MERN dashboard with live attack monitoring, authentication, and analytics.',
      'Implemented IP tracking, geolocation, user-agent analysis, and threat logging for security insights.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Security'],
    liveDemo: 'https://honey-pot-mu.vercel.app/',
    github: 'https://github.com/Sandeep3221/HoneyPot',
    gradient: 'from-red-500 to-rose-600',
    img: '/Honeypot.png',
    freelance: false,
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={isEven}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 items-center`}
              >
                <motion.div
                  variants={imageVariants}
                  custom={isEven}
                  className="w-full md:w-1/2 relative group"
                >
                  <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800/60 bg-gray-900/50 aspect-video flex items-center justify-center">
                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={`${project.title} project screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800/30 group-hover:bg-gray-800/50 transition-colors duration-700">
                        <Server size={56} className="text-gray-600 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-700 mb-2" />
                        <span className="text-sm text-gray-600 font-medium group-hover:text-gray-400 transition-colors duration-700">Backend Architecture</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none" />

                    {project.freelance && (
                      <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md text-yellow-400 text-xs font-bold rounded-full border border-yellow-400/30">
                        <Briefcase size={12} />
                        FREELANCE
                      </span>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  variants={textVariants}
                  custom={isEven}
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
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-gray-400"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2.5 flex-shrink-0 opacity-80`}
                        />
                        <span className="text-base leading-relaxed">
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
                        className={`flex-1 sm:flex-none flex justify-center items-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg transition-all duration-300 whitespace-nowrap`}
                      >
                        <ExternalLink size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span
                        className={`flex-1 sm:flex-none flex justify-center items-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white font-semibold text-sm sm:text-base opacity-50 cursor-not-allowed whitespace-nowrap`}
                        aria-disabled="true"
                      >
                        <ExternalLink size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Live Demo</span>
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none flex justify-center items-center space-x-2 px-4 sm:px-6 py-3 bg-transparent border border-gray-700 hover:border-gray-500 rounded-xl text-gray-300 hover:text-white font-semibold text-sm sm:text-base hover:bg-gray-800/50 transition-all duration-300 whitespace-nowrap"
                    >
                      <Github size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects