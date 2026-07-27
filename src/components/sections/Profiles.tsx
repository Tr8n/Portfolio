import { Card } from '../ui/Card'
import type { PortfolioData } from '../../types/portfolio'

type ProfilesProps = {
  data: PortfolioData
}

export function Profiles({ data }: ProfilesProps) {
  return (
    <section id="profiles" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Performance Indicators</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Coding Profiles & Achievements</h2>
        <div className="mt-4 h-1 w-12 bg-white accent-glow" />
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {/* Competitive coding profiles */}
        <Card className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-mono border-b border-[#1F1F1F] pb-3 mb-5">
              Competitive Coding Profiles
            </h3>
            <div className="space-y-4">
              {data.codingProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg border border-[#1F1F1F] bg-[#000000] p-4 transition hover:border-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white font-mono">{profile.label}</span>
                    <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <p className="mt-2 text-xs text-[#A1A1A1] font-mono">{profile.handle}</p>
                </a>
              ))}
            </div>
          </div>
        </Card>

        {/* Practical achievements list */}
        <Card className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-mono border-b border-[#1F1F1F] pb-3 mb-5">
              Key Wins & Milestones
            </h3>
            <ul className="space-y-3 pl-0 list-none">
              {data.achievements.map((ach, idx) => (
                <li key={idx} className="flex gap-3 text-xs leading-relaxed text-[#A1A1A1] sm:text-sm">
                  <span className="text-white font-bold font-mono">0{idx + 1}.</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  )
}
