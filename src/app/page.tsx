'use client'

import dynamic from 'next/dynamic'

// Dynamic imports for better performance
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false })
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Achievements = dynamic(() => import('@/components/Achievements'), { ssr: false })
const Resume = dynamic(() => import('@/components/Resume'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen bg-primary">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Scroll-linked Canvas */}
      <HeroCanvas />

      {/* Content Sections */}
      <div className="relative z-10">
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Resume />
        <Contact />
      </div>
    </main>
  )
}
