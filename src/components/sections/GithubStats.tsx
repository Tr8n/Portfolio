import { motion } from 'framer-motion'
import { Card } from '../ui/Card'

export function GithubStats() {
  const achievements = [
    { title: 'Pull Shark', desc: 'Opened pull requests that were merged in production.', badgeColor: '#38BDF8' },
    { title: 'YOLO', desc: 'Successfully pushed direct hotfixes to production environments.', badgeColor: '#F43F5E' },
    { title: 'Quickdraw', desc: 'Resolved issues within minutes of discovery.', badgeColor: '#10B981' },
  ]

  const languages = [
    { name: 'TypeScript', percent: 45, color: '#3178C6' },
    { name: 'JavaScript', percent: 30, color: '#F7DF1E' },
    { name: 'Python', percent: 15, color: '#3776AB' },
    { name: 'Java', percent: 10, color: '#b07219' },
  ]

  // Generate 7 rows of contribution boxes to represent a git calendar mockup
  const contributionColumns = Array.from({ length: 48 }, () =>
    Array.from({ length: 7 }, () => {
      const rand = Math.random()
      if (rand < 0.5) return 'bg-[#101010] border-[#1F1F1F]' // Empty
      if (rand < 0.75) return 'bg-neutral-800 border-[#1F1F1F]' // Low
      if (rand < 0.9) return 'bg-neutral-600 border-[#1F1F1F]' // Medium
      return 'bg-white border-[#1F1F1F]' // High
    })
  )

  return (
    <section id="github" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Open Source</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">GitHub Activity</h2>
        <div className="mt-4 h-1 w-12 bg-white accent-glow" />
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-12">
        {/* Contribution Calendar grid widget */}
        <div className="md:col-span-12">
          <Card className="overflow-x-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#1F1F1F] mb-6">
              <span className="font-mono text-xs text-white">Contribution History (Recent Year)</span>
              <span className="text-[10px] font-mono text-[#A1A1A1]">1,400+ contributions this year</span>
            </div>
            
            <div className="flex min-w-[650px] gap-[3px] py-1">
              {contributionColumns.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-[3px]">
                  {col.map((cellClass, cellIdx) => (
                    <div
                      key={cellIdx}
                      className={`h-[9px] w-[9px] rounded-[1.5px] border ${cellClass}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-end gap-2 text-[10px] font-mono text-[#A1A1A1]">
              <span>Less</span>
              <div className="h-[9px] w-[9px] rounded-[1.5px] bg-[#101010] border border-[#1F1F1F]" />
              <div className="h-[9px] w-[9px] rounded-[1.5px] bg-neutral-800 border border-[#1F1F1F]" />
              <div className="h-[9px] w-[9px] rounded-[1.5px] bg-neutral-600 border border-[#1F1F1F]" />
              <div className="h-[9px] w-[9px] rounded-[1.5px] bg-white border border-[#1F1F1F]" />
              <span>More</span>
            </div>
          </Card>
        </div>

        {/* Top Languages Panel */}
        <div className="md:col-span-5">
          <Card className="h-full">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-[#1F1F1F] pb-3 mb-5">
              Top Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-white">{lang.name}</span>
                    <span className="text-[#A1A1A1]">{lang.percent}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#101010] border border-[#1F1F1F] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* GitHub Badges / Achievements Panel */}
        <div className="md:col-span-7">
          <Card className="h-full">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white font-mono border-b border-[#1F1F1F] pb-3 mb-5">
              Verified Badges
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {achievements.map((ach) => (
                <motion.div
                  key={ach.title}
                  className="rounded-lg border border-[#1F1F1F] bg-[#000000] p-4 text-center transition hover:border-white"
                  whileHover={{ y: -2 }}
                >
                  {/* Badge emblem */}
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 border border-[#1F1F1F] mb-3">
                    <svg className="h-5 w-5" fill="none" stroke={ach.badgeColor} strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h4 className="text-xs font-bold text-white font-mono">{ach.title}</h4>
                  <p className="mt-1.5 text-[9px] leading-relaxed text-[#A1A1A1]">{ach.desc}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
