'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Terminal, Layout, Server, Wrench } from "lucide-react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Languages & Core",
      icon: Terminal,
      skills: ["JavaScript/TypeScript", "Python", "Java", "C/C++", "Data Structures"],
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-400",
      bgColor: "bg-gray-900/40",
      borderColor: "border-blue-500/20",
      hoverBorder: "hover:border-blue-500/50",
      glow: "hover:shadow-blue-500/20",
      pillBg: "bg-blue-500/10",
      pillBorder: "border-blue-500/20",
      pillText: "text-blue-300",
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "Next.js", "TailwindCSS", "Material-UI", "ShadCN"],
      color: "from-cyan-400 to-cyan-600",
      iconColor: "text-cyan-400",
      bgColor: "bg-gray-900/40",
      borderColor: "border-cyan-500/20",
      hoverBorder: "hover:border-cyan-500/50",
      glow: "hover:shadow-cyan-500/20",
      pillBg: "bg-cyan-500/10",
      pillBorder: "border-cyan-500/20",
      pillText: "text-cyan-300",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
      color: "from-teal-400 to-teal-600",
      iconColor: "text-teal-400",
      bgColor: "bg-gray-900/40",
      borderColor: "border-teal-500/20",
      hoverBorder: "hover:border-teal-500/50",
      glow: "hover:shadow-teal-500/20",
      pillBg: "bg-teal-500/10",
      pillBorder: "border-teal-500/20",
      pillText: "text-teal-300",
    },
    {
      title: "Tools & Other",
      icon: Wrench,
      skills: ["Git", "RESTful APIs", "GraphQL", "AWS Basic", "Tech Leadership"],
      color: "from-slate-400 to-slate-600",
      iconColor: "text-slate-400",
      bgColor: "bg-gray-900/40",
      borderColor: "border-slate-500/20",
      hoverBorder: "hover:border-slate-500/50",
      glow: "hover:shadow-slate-500/20",
      pillBg: "bg-slate-500/10",
      pillBorder: "border-slate-500/20",
      pillText: "text-slate-300",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* 2 columns on tablet, 4 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className={`${category.bgColor} backdrop-blur-md p-6 sm:p-8 rounded-2xl border ${category.borderColor} ${category.hoverBorder} transition-all duration-300 group hover:shadow-xl ${category.glow}`}
            >
              {/* Card Header with Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg ${category.pillBg} ${category.pillBorder} border`}>
                  <category.icon size={20} className={category.iconColor} />
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Pill-style Skills List */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border backdrop-blur-sm cursor-default transition-colors
                      ${category.pillBg} ${category.pillBorder} ${category.pillText}
                      hover:bg-opacity-20 hover:text-white`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating background elements for visual consistency */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          className="absolute top-1/3 left-10 w-2 h-2 bg-blue-400/20 rounded-full blur-[1px]"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
          className="absolute bottom-1/3 right-10 w-1.5 h-1.5 bg-cyan-400/20 rounded-full blur-[1px]"
        />
      </div>
    </section>
  )
}

export default Skills