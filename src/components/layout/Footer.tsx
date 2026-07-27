import { motion } from 'framer-motion'
import type { PortfolioData } from '../../types/portfolio'

type FooterProps = {
  data: PortfolioData
}

export function Footer({ data }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-[#1F1F1F] bg-[#000000] py-12 text-[#A1A1A1]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">{data.name}</p>
            <p className="text-xs text-[#7A7A7A] max-w-md">
              Backend-focused Full Stack Engineer with expertise in Node.js, Express, MongoDB, Redis, and Generative AI systems.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A1A1A1]">Contact</p>
            <div className="text-sm leading-7">
              <p className="text-white">{data.contact.email}</p>
              <p>{data.contact.phone}</p>
              <p>{data.contact.location}</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A1A1A1]">Profiles</p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={data.contact.portfolio}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Portfolio
              </a>
              <a
                href={data.contact.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[#1F1F1F] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[#7A7A7A]">
            © {new Date().getFullYear()} {data.name}. Built with React, Tailwind CSS, and Framer Motion.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#A1A1A1]">
            {data.codingProfiles.map((profile) => (
              <a
                key={profile.label}
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                {profile.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleScrollToTop}
              className="flex items-center gap-1 rounded-full border border-[#1F1F1F] bg-transparent px-3 py-1.5 text-xs tracking-wider text-white hover:border-white transition-colors"
            >
              Back to Top
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
