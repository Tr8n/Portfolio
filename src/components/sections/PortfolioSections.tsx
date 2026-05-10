import { motion } from 'framer-motion'
import { Reveal } from '../ui/Reveal'
import type { PortfolioData } from '../../types/portfolio'

type Props = { data: PortfolioData }

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f7f7f]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#f2f2f2] md:text-4xl">{title}</h2>
    </Reveal>
  )
}

export function PortfolioSections({ data }: Props) {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-24 px-4 pb-16 pt-16 sm:px-6 md:space-y-28 lg:px-8">
      <section id="hero" className="grid gap-10 border-b border-[#202020] pb-20 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-8">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f7f7f]">{data.role}</p>
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#f2f2f2] sm:text-5xl md:text-6xl">
            {data.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#b6b6b6] md:text-lg">{data.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">
              Selected Work
            </a>
            <a className="btn-ghost" href={`mailto:${data.contact.email}`}>
              Contact
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-4 md:col-start-9">
          <div className="panel p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f7f7f]">Focus Areas</p>
            <ul className="mt-5 space-y-2 text-sm text-[#c8c8c8]">
              {data.specialization.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section id="about">
        <SectionTitle eyebrow="About" title="Engineering mindset with product clarity" />
        <Reveal className="panel p-6 md:p-8">
          <p className="max-w-4xl text-base leading-relaxed text-[#bdbdbd] md:text-lg">{data.about}</p>
        </Reveal>
      </section>

      <section id="experience">
        <SectionTitle eyebrow="Experience" title="Timeline of hands-on execution" />
        <div className="grid gap-4">
          {data.experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.05} className="panel p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[#f1f1f1]">{item.role}</h3>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#8f8f8f]">{item.period}</span>
              </div>
              <p className="mt-2 text-sm text-[#bdbdbd]">
                {item.company}
                {item.location ? ` - ${item.location}` : ''}
              </p>
              {item.highlights ? (
                <ul className="mt-3 space-y-1 text-sm leading-relaxed text-[#a9a9a9]">
                  {item.highlights.map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills">
        <SectionTitle eyebrow="Skills" title="Core backend capabilities" />
        <Reveal className="flex flex-wrap gap-2.5">
          {data.skills.map((skill) => (
            <span key={skill} className="chip">
              {skill}
            </span>
          ))}
        </Reveal>
      </section>

      <section id="tech-stack">
        <SectionTitle eyebrow="Technical Skills" title="Tools used in production-grade builds" />
        <div className="grid gap-5 md:grid-cols-2">
          {Object.entries(data.techStack).map(([category, stack], index) => (
            <Reveal key={category} delay={index * 0.04} className="panel p-6">
              <h3 className="text-xl font-semibold tracking-tight text-[#f1f1f1]">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects">
        <SectionTitle eyebrow="Selected Projects" title="Engineering case studies" />
        <div className="grid gap-6">
          {data.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className="panel p-6 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-[#f1f1f1]">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b7b7b7]">{project.description}</p>
              <ul className="mt-5 space-y-1 text-sm text-[#a9a9a9]">
                {project.highlights.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                <div className="case-block">
                  <p className="case-label">Problem</p>
                  <p className="case-text">{project.caseStudy.problem}</p>
                </div>
                <div className="case-block">
                  <p className="case-label">Architecture</p>
                  <p className="case-text">{project.caseStudy.architecture}</p>
                </div>
                <div className="case-block">
                  <p className="case-label">Optimization</p>
                  <p className="case-text">{project.caseStudy.optimization}</p>
                </div>
                <div className="case-block">
                  <p className="case-label">Impact</p>
                  <p className="case-text">{project.caseStudy.impact}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <motion.a whileHover={{ y: -1 }} transition={{ duration: 0.2 }} href={project.liveUrl} className="btn-primary" target="_blank" rel="noreferrer">
                  Live
                </motion.a>
                <motion.a whileHover={{ y: -1 }} transition={{ duration: 0.2 }} href={project.githubUrl} className="btn-ghost" target="_blank" rel="noreferrer">
                  GitHub
                </motion.a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="coding-profiles" className="grid gap-6 md:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Coding Profiles" title="Consistent problem-solving track record" />
          <Reveal className="space-y-3">
            {data.codingProfiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="panel block p-4 text-[#bebebe] hover:border-[#494949]"
              >
                <span className="font-semibold text-[#efefef]">{profile.label}</span> - {profile.handle}
              </a>
            ))}
          </Reveal>
        </div>
        <div id="achievements">
          <SectionTitle eyebrow="Achievements" title="Competitive and practical wins" />
          <Reveal className="panel p-6">
            <ul className="space-y-2 text-sm text-[#b9b9b9]">
              {data.achievements.map((achievement) => (
                <li key={achievement}>- {achievement}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="education" className="grid gap-6 md:grid-cols-2">
        <div className="panel p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f7f7f]">Education</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#efefef]">{data.education.degree}</h3>
          <p className="mt-2 text-sm text-[#c3c3c3]">{data.education.institution}</p>
          <p className="mt-1 text-sm text-[#9a9a9a]">{data.education.period}</p>
          {data.education.coursework ? (
            <p className="mt-2 text-sm text-[#b9b9b9]">Coursework: {data.education.coursework.join(', ')}</p>
          ) : null}
        </div>
        <div className="panel p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f7f7f]">Schooling & Certifications</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#efefef]">{data.schooling.institution}</h3>
          <ul className="mt-3 space-y-1 text-sm text-[#c3c3c3]">
            {data.schooling.entries.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 text-sm text-[#b9b9b9]">
            {data.certifications.map((certification) => (
              <li key={certification}>- {certification}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact">
        <Reveal className="panel p-8 text-center md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f7f7f]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#f1f1f1] md:text-4xl">
            Let&apos;s build reliable systems together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#b8b8b8]">
            Open to backend-heavy full stack roles, internships, and engineering collaborations.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-[#b9b9b9]">
            <span>{data.contact.phone}</span>
            <span>·</span>
            <span>{data.contact.location}</span>
          </div>
          <a href={`mailto:${data.contact.email}`} className="btn-primary mt-8 inline-flex">
            {data.contact.email}
          </a>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#d0d0d0] hover:text-white">
              LinkedIn
            </a>
            <a href={data.contact.github} target="_blank" rel="noreferrer" className="text-[#d0d0d0] hover:text-white">
              GitHub
            </a>
            <a href={data.contact.portfolio} target="_blank" rel="noreferrer" className="text-[#d0d0d0] hover:text-white">
              Portfolio
            </a>
            {data.codingProfiles
              .filter((profile) => profile.label.startsWith('LeetCode'))
              .map((profile) => (
                <a
                  key={`${profile.label}-contact`}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d0d0d0] hover:text-white"
                >
                  {profile.label}
                </a>
              ))}
            {data.codingProfiles
              .filter((profile) => profile.label === 'Codeforces')
              .map((profile) => (
                <a
                  key={`${profile.label}-contact`}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d0d0d0] hover:text-white"
                >
                  Codeforces ({profile.handle})
                </a>
              ))}
          </div>
        </Reveal>
      </section>
    </main>
  )
}
