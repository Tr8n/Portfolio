import { motion } from 'framer-motion'
import { ParticleBackground } from '../ui/ParticleBackground'
import { TypingEffect } from '../ui/TypingEffect'
import { Button } from '../ui/Button'
import type { PortfolioData } from '../../types/portfolio'

type HeroProps = {
  data: PortfolioData
  onOpenResume: () => void
}

export function Hero({ data, onOpenResume }: HeroProps) {
  const roles = [
    'Full Stack Engineer',
    'Gen AI Developer',
    'Backend Engineer',
    'MERN Developer',
    'AI Engineer',
  ]

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = projectsSection.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] w-full flex-col justify-center overflow-hidden grid-bg px-4 sm:px-6 md:px-8"
    >
      {/* Interactive canvas animation */}
      <ParticleBackground />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-left">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1] sm:text-sm"
        >
          Welcome to my workspace
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {data.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-xl font-medium tracking-tight text-[#A1A1A1] sm:text-2xl md:text-3xl"
        >
          I am a{' '}
          <span className="text-white">
            <TypingEffect words={roles} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-[#A1A1A1] sm:text-base md:text-lg"
        >
          {data.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button variant="primary" onClick={handleScrollToProjects}>
            View Projects
          </Button>
          <Button variant="secondary" onClick={onOpenResume}>
            Preview Resume
          </Button>
        </motion.div>

        {/* Social connections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex gap-6 text-xs font-mono text-[#A1A1A1]"
        >
          <a
            href={data.contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${data.contact.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            Email
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical mask */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
