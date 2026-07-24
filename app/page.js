'use client'

import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Static background layers — pure CSS, no JS overhead */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgb(6_182_212_/_0.07)_60deg,_transparent_120deg)] animate-spin-ultra-slow"
        />
      </div>

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}