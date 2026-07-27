import { motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import type { PortfolioData } from '../../types/portfolio'

type AboutProps = {
  data: PortfolioData
}

export function About({ data }: AboutProps) {
  const highlights = [
    'Production Backend Systems',
    'Generative AI Integrations',
    'Redis Caching & Caching Layers',
    'REST APIs & Speed Optimization',
    'JWT & RBAC Security Flows',
    'Performance Engineering',
    'System Design & Architecture',
    'Practical Problem Solving',
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <div className="grid gap-12 md:grid-cols-12">
        {/* Left Column: Heading */}
        <Reveal className="md:col-span-5 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">About Me</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Engineering robust systems.
          </h2>
          <div className="mt-4 h-1 w-12 bg-white accent-glow" />
        </Reveal>

        {/* Right Column: Paragraph and focus grid */}
        <Reveal className="md:col-span-7 flex flex-col justify-center space-y-8" delay={0.1}>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white font-mono">Professional Summary</h3>
            <p className="mt-4 text-base leading-7 text-[#A1A1A1] sm:text-lg">
              {data.about}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white font-mono">Core Focus Areas</h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 rounded-2xl border border-[#1F1F1F] bg-[#0A0A0A] p-4 text-sm text-[#A1A1A1] transition duration-200 hover:border-neutral-400 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-white shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-mono">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
