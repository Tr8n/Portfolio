import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import type { PortfolioData } from '../../types/portfolio'

type ExperienceProps = {
  data: PortfolioData
}

export function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <Reveal className="flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Professional History</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Work Experience</h2>
        <div className="mt-4 h-1 w-12 bg-white accent-glow" />
      </Reveal>

      <div className="mt-16 grid gap-6">
        {data.experience.map((item, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{item.role}</h3>
                <p className="mt-1 text-sm font-mono text-[#A1A1A1]">
                  {item.company} <span className="text-[#555]">•</span> {item.location || 'Remote'}
                </p>
              </div>
              <div className="flex items-center">
                <span className="rounded-full border border-[#1F1F1F] bg-[#000000] px-3.5 py-1 text-xs font-mono text-white">
                  {item.period}
                </span>
              </div>
            </div>

            {item.highlights && (
              <ul className="mt-6 space-y-2 text-xs leading-relaxed text-[#A1A1A1] sm:text-sm list-none pl-0">
                {item.highlights.map((point, idx) => (
                  <li key={idx} className="flex gap-2.5">
                    <span className="text-white shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
