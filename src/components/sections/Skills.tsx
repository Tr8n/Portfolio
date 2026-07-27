import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import type { PortfolioData } from '../../types/portfolio'

type SkillsProps = {
  data: PortfolioData
}

export function Skills({ data }: SkillsProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <Reveal className="flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Skills & Tools</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Stack</h2>
        <div className="mt-4 h-1 w-12 bg-white accent-glow" />
      </Reveal>

      <motion.div
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-5%' }}
      >
        {Object.entries(data.techStack).map(([category, skills]) => (
          <motion.div key={category} variants={cardVariants}>
            <Card className="h-full flex flex-col">
              <h3 className="text-lg font-bold text-white font-mono tracking-tight pb-3 border-b border-[#1F1F1F] mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#1F1F1F] bg-[#000000] px-2.5 py-1 text-[11px] font-mono text-[#A1A1A1] transition duration-200 hover:border-white hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
