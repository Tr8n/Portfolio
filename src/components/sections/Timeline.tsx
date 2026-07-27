import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'

type TimelineItem = {
  date: string
  title: string
  subtitle?: string
  description?: string
  tags?: string[]
}

const milestones: TimelineItem[] = [
  {
    date: '2022',
    title: 'Started B.Tech',
    subtitle: 'Computer Science (Cyber Security)',
    description: 'Acquired core fundamentals of software engineering, networking, and algorithms at PSIT.',
  },
  {
    date: '2024',
    title: 'Started MERN & CP',
    subtitle: 'Full Stack Dev & Competitive Programming',
    description: 'Built first React client-server platforms and engaged in competitive algorithmic modeling.',
  },
  {
    date: '2025',
    title: 'Backend Internship',
    subtitle: 'SpyderWeb Technologies',
    description: 'Worked on production server architectures, database modeling, authentication systems, and Redis caching layers.',
    tags: ['Express', 'MongoDB', 'JWT', 'Redis'],
  },
  {
    date: '2026',
    title: 'Freelance Gen AI Developer',
    subtitle: 'Turing',
    description: 'Integrated RAG loops, vector memory search interfaces, OpenAI/DeepSeek API endpoints, and system evaluation tasks.',
    tags: ['LLMs', 'RAG', 'LangChain', 'DeepSeek', 'Python'],
  },
  {
    date: 'March 2026',
    title: 'Joined KeyIcon Pvt Ltd',
    subtitle: 'Junior Developer',
    description: 'Focusing on high-volume production REST APIs, secure user flows, memory optimizations, and backend integrations.',
    tags: ['Node.js', 'Express', 'React', 'MongoDB', 'Redis'],
  },
  {
    date: 'Present',
    title: 'Building scalable Full Stack + AI products',
    subtitle: 'Full Stack Engineer & Gen AI Developer',
    description: 'Designing highly reliable software architectures, AI integrations, and developer toolkits.',
  },
]

function TimelineCard({ item, alignRight }: { item: TimelineItem; alignRight?: boolean }) {
  return (
    <Card className={alignRight ? 'text-right' : 'text-left'}>
      <span className="font-mono text-xs text-white bg-neutral-900 border border-[#1F1F1F] rounded-full px-2.5 py-1 inline-block">
        {item.date}
      </span>
      <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
      {item.subtitle && <p className="text-xs font-mono text-[#A1A1A1] mt-0.5">{item.subtitle}</p>}
      <p className="mt-3 text-xs leading-relaxed text-[#A1A1A1]">{item.description}</p>
      {item.tags && (
        <div className={`mt-4 flex flex-wrap gap-1.5 ${alignRight ? 'justify-end' : 'justify-start'}`}>
          {item.tags.map((tag) => (
            <span key={tag} className="rounded bg-[#101010] border border-[#1F1F1F] px-2 py-0.5 font-mono text-[10px] text-white">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  )
}

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto overflow-hidden">
      <Reveal className="flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Milestones</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Chronological Path</h2>
        <div className="mt-4 h-1 w-12 bg-white accent-glow" />
      </Reveal>

      <div className="relative mt-20">
        {/* Vertical line indicator */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neutral-800 via-white to-neutral-800 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {milestones.map((item, idx) => {
            const isLeft = idx % 2 === 0

            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row md:items-center justify-between"
              >
                {/* Left Column (Desktop only) */}
                <div className="hidden md:block w-[45%]">
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-5%' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <TimelineCard item={item} alignRight />
                    </motion.div>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-4 z-10 flex h-2 w-2 -translate-x-[3px] items-center justify-center rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)] md:left-1/2 md:-translate-x-1/2">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-white/30" />
                </div>

                {/* Right Column (Desktop: right side. Mobile: full-width right of dot) */}
                <div className="w-full pl-10 md:pl-0 md:w-[45%]">
                  <div className={isLeft ? 'block md:hidden' : 'block'}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-5%' }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <TimelineCard item={item} />
                    </motion.div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
