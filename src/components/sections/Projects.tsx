import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import type { PortfolioData, ProjectItem } from '../../types/portfolio'

type ProjectsProps = {
  data: PortfolioData
}

// Interactive Project Card with Mouse Tilt Parallax
function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Motion values for tracking cursor positions
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring configurations for smooth tilt
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    x.set(mouseX / width)
    y.set(mouseY / height)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Helper to render customized inline SVG mockups for projects
  const renderMockup = (title: string) => {
    switch (title) {
      case 'LinkUp':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <rect width="400" height="200" rx="10" fill="#0A0A0A" />
            <rect x="20" y="20" width="360" height="35" rx="6" fill="#141414" stroke="#1F1F1F" />
            <text x="35" y="42" fill="#FFFFFF" fontSize="11" fontFamily="monospace">https://linkup.ai/dashboard</text>
            <rect x="20" y="70" width="110" height="110" rx="8" fill="#141414" stroke="#1F1F1F" />
            <circle cx="75" cy="115" r="25" fill="#1A1A1A" stroke="#1F1F1F" />
            <path d="M68 115h14M75 108v14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <rect x="145" y="70" width="235" height="48" rx="8" fill="#141414" stroke="#1F1F1F" />
            <rect x="160" y="85" width="205" height="6" rx="3" fill="#1F1F1F" />
            <rect x="160" y="98" width="140" height="6" rx="3" fill="#1F1F1F" />
            <rect x="145" y="132" width="235" height="48" rx="8" fill="#141414" stroke="#1F1F1F" />
            <rect x="160" y="147" width="170" height="6" rx="3" fill="#1F1F1F" />
            <rect x="160" y="160" width="90" height="6" rx="3" fill="#1F1F1F" />
          </svg>
        )
      case 'TRIM URL Shortener':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <rect width="400" height="200" rx="10" fill="#0A0A0A" />
            <rect x="25" y="45" width="260" height="40" rx="8" fill="#141414" stroke="#1F1F1F" />
            <text x="40" y="69" fill="#A1A1A1" fontSize="11" fontFamily="sans-serif">Paste long URL here...</text>
            <rect x="295" y="45" width="80" height="40" rx="8" fill="#FFFFFF" />
            <text x="317" y="69" fill="#000000" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Shorten</text>
            <rect x="25" y="110" width="350" height="45" rx="8" fill="#141414" stroke="#1F1F1F" />
            <text x="40" y="136" fill="#FFFFFF" fontSize="12" fontFamily="monospace">trim.ly/x78Bf9</text>
            <rect x="300" y="120" width="60" height="25" rx="4" fill="#1A1A1A" stroke="#1F1F1F" />
            <text x="318" y="136" fill="#FFFFFF" fontSize="10" fontFamily="sans-serif">Copy</text>
          </svg>
        )
      case 'Second Brain':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <rect width="400" height="200" rx="10" fill="#0A0A0A" />
            <line x1="200" y1="100" x2="100" y2="60" stroke="#1F1F1F" strokeWidth="2" />
            <line x1="200" y1="100" x2="300" y2="60" stroke="#1F1F1F" strokeWidth="2" />
            <line x1="200" y1="100" x2="150" y2="150" stroke="#1F1F1F" strokeWidth="2" />
            <line x1="200" y1="100" x2="250" y2="150" stroke="#1F1F1F" strokeWidth="2" />
            <circle cx="200" cy="100" r="30" fill="#141414" stroke="#FFFFFF" strokeWidth="2" />
            <text x="182" y="104" fill="#FFFFFF" fontSize="10" fontFamily="monospace">Brain</text>
            <circle cx="100" cy="60" r="22" fill="#141414" stroke="#1F1F1F" />
            <text x="86" y="64" fill="#A1A1A1" fontSize="9" fontFamily="monospace">Notes</text>
            <circle cx="300" cy="60" r="22" fill="#141414" stroke="#1F1F1F" />
            <text x="286" y="64" fill="#A1A1A1" fontSize="9" fontFamily="monospace">Tasks</text>
            <circle cx="150" cy="150" r="22" fill="#141414" stroke="#1F1F1F" />
            <text x="142" y="154" fill="#A1A1A1" fontSize="9" fontFamily="monospace">AI</text>
            <circle cx="250" cy="150" r="22" fill="#141414" stroke="#1F1F1F" />
            <text x="238" y="154" fill="#A1A1A1" fontSize="9" fontFamily="monospace">Tags</text>
          </svg>
        )
      case 'Team Task Manager':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <rect width="400" height="200" rx="10" fill="#0A0A0A" />
            <rect x="20" y="25" width="110" height="150" rx="6" fill="#141414" stroke="#1F1F1F" />
            <text x="32" y="44" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">To Do</text>
            <rect x="30" y="60" width="90" height="35" rx="4" fill="#1C1C1C" stroke="#1F1F1F" />
            <rect x="40" y="70" width="70" height="4" rx="2" fill="#2D2D2D" />
            <rect x="40" y="80" width="50" height="4" rx="2" fill="#2D2D2D" />
            <rect x="145" y="25" width="110" height="150" rx="6" fill="#141414" stroke="#1F1F1F" />
            <text x="157" y="44" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">In Progress</text>
            <rect x="155" y="60" width="90" height="35" rx="4" fill="#1C1C1C" stroke="#1F1F1F" />
            <rect x="165" y="70" width="70" height="4" rx="2" fill="#2D2D2D" />
            <rect x="270" y="25" width="110" height="150" rx="6" fill="#141414" stroke="#1F1F1F" />
            <text x="282" y="44" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Done</text>
            <rect x="280" y="60" width="90" height="35" rx="4" fill="#1C1C1C" stroke="#1F1F1F" />
            <rect x="290" y="70" width="70" height="4" rx="2" fill="#2D2D2D" />
            <circle cx="350" cy="80" r="6" fill="#FFFFFF" />
          </svg>
        )
      case 'MindLift AI':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <rect width="400" height="200" rx="10" fill="#0A0A0A" />
            <path d="M30 40h120a10 10 0 0110 10v35a10 10 0 01-10 10H50L30 105V40z" fill="#141414" stroke="#1F1F1F" />
            <rect x="45" y="55" width="90" height="5" rx="2.5" fill="#FFFFFF" />
            <rect x="45" y="68" width="60" height="5" rx="2.5" fill="#FFFFFF" />
            <path d="M370 110H250a10 10 0 01-10-10V65a10 10 0 0110-10h120v65l-10-10z" fill="#1C1C1C" stroke="#1F1F1F" />
            <rect x="265" y="70" width="90" height="5" rx="2.5" fill="#A1A1A1" />
            <rect x="265" y="83" width="70" height="5" rx="2.5" fill="#A1A1A1" />
            <rect x="20" y="150" width="360" height="30" rx="6" fill="#141414" stroke="#1F1F1F" />
            <text x="35" y="169" fill="#7A7A7A" fontSize="10" fontFamily="sans-serif">Type a response...</text>
          </svg>
        )
      case 'Sorting Visualizer':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
            <rect width="400" height="200" rx="10" fill="#0A0A0A" />
            {/* Draw bar arrays representing sorting */}
            <rect x="40" y="130" width="16" height="50" rx="3" fill="#1F1F1F" />
            <rect x="66" y="110" width="16" height="70" rx="3" fill="#1F1F1F" />
            <rect x="92" y="60" width="16" height="120" rx="3" fill="#1F1F1F" />
            <rect x="118" y="150" width="16" height="30" rx="3" fill="#1F1F1F" />
            <rect x="144" y="90" width="16" height="90" rx="3" fill="#FFFFFF" />
            <rect x="170" y="40" width="16" height="140" rx="3" fill="#1F1F1F" />
            <rect x="196" y="120" width="16" height="60" rx="3" fill="#1F1F1F" />
            <rect x="222" y="75" width="16" height="105" rx="3" fill="#FFFFFF" />
            <rect x="248" y="145" width="16" height="35" rx="3" fill="#1F1F1F" />
            <rect x="274" y="50" width="16" height="130" rx="3" fill="#1F1F1F" />
            <rect x="300" y="100" width="16" height="80" rx="3" fill="#1F1F1F" />
            <rect x="326" y="135" width="16" height="45" rx="3" fill="#1F1F1F" />
          </svg>
        )
      default:
        return (
          <div className="w-full h-full bg-neutral-900 border border-[#1F1F1F] rounded-lg flex items-center justify-center font-mono text-xs text-[#A1A1A1]">
            Preview Coming Soon
          </div>
        )
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="perspective-[1000px] w-full"
    >
      <Card className="flex h-full flex-col p-4 md:p-6 overflow-hidden">
        {/* Project vector mockup */}
        <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-lg overflow-hidden border border-[#1F1F1F] transition-transform duration-500 hover:scale-[1.015] bg-black">
          {renderMockup(project.title)}
        </div>

        {/* Heading & info */}
        <div className="mt-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#A1A1A1]">{project.description}</p>

            {/* highlights */}
            <ul className="mt-4 space-y-1.5 text-xs text-[#7A7A7A] list-none pl-0">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-white shrink-0">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* Tech stack */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-[#101010] border border-[#1F1F1F] px-2 py-0.5 font-mono text-[10px] text-[#A1A1A1]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Case study dashboard overlay */}
            <div className="mt-6 grid grid-cols-2 gap-2 text-[11px] font-mono border-t border-[#1F1F1F] pt-4">
              <div>
                <span className="text-white uppercase tracking-wider block font-bold text-[9px]">Problem</span>
                <span className="text-[#A1A1A1] mt-0.5 block truncate" title={project.caseStudy.problem}>
                  {project.caseStudy.problem}
                </span>
              </div>
              <div>
                <span className="text-white uppercase tracking-wider block font-bold text-[9px]">Impact</span>
                <span className="text-[#A1A1A1] mt-0.5 block truncate" title={project.caseStudy.impact}>
                  {project.caseStudy.impact}
                </span>
              </div>
            </div>

            {/* External buttons */}
            <div className="mt-6 flex gap-3.5">
              <Button href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 text-center py-2">
                Live Demo
              </Button>
              <Button
                variant="secondary"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2"
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export function Projects({ data }: ProjectsProps) {
  const [archiveOpen, setArchiveOpen] = useState(false)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <Reveal className="flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Portfolio</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
        <div className="mt-4 h-1 w-12 bg-white accent-glow" />
      </Reveal>

      {/* Main Grid */}
      <Reveal delay={0.15}>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {data.projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </Reveal>

      {/* Collapsible secondary Archive Section */}
      <div className="mt-20 flex flex-col items-center">
        <Button variant="secondary" onClick={() => setArchiveOpen(!archiveOpen)}>
          {archiveOpen ? 'Hide Project Archive' : 'View Project Archive'}
        </Button>

        {archiveOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            {data.archiveProjects.map((proj, idx) => (
              <Card key={idx} className="flex flex-col justify-between border border-[#1F1F1F]">
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{proj.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#A1A1A1]">{proj.description}</p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {proj.tech.map((t) => (
                      <span key={t} className="rounded bg-[#101010] border border-[#1F1F1F] px-1.5 py-0.5 font-mono text-[9px] text-[#A1A1A1]">
                        {t}
                      </span>
                    ))}
                  </div>
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block font-mono text-[10px] text-white hover:underline"
                    >
                      View Source
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
