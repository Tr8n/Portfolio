import { motion, AnimatePresence } from 'framer-motion'
import type { PortfolioData } from '../../types/portfolio'

type ResumeModalProps = {
  isOpen: boolean
  onClose: () => void
  data: PortfolioData
}

export function ResumeModal({ isOpen, onClose, data }: ResumeModalProps) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Prevent background scroll when open */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            className="relative z-10 flex h-full max-h-[90vh] w-full max-w-4xl flex-col rounded-xl border border-[#1F1F1F] bg-[#0A0A0A] shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
          >
            {/* Header controls */}
            <div className="flex items-center justify-between border-b border-[#1F1F1F] bg-[#0D0D0D] px-6 py-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A1A1A1]">Recruiter-Ready Resume</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-black transition hover:bg-neutral-200"
                >
                  Print / Save PDF
                </button>
                <button
                  onClick={onClose}
                  className="rounded-md border border-[#1F1F1F] bg-transparent px-3 py-1.5 text-xs font-semibold text-[#A1A1A1] transition hover:border-[#FFFFFF] hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Resume Content Container (Printable) */}
            <div className="print-page flex-1 overflow-y-auto px-8 py-10 text-neutral-200" id="resume-printable-area">
              <div className="mx-auto max-w-3xl">
                {/* Contact Header */}
                <div className="border-b border-[#1F1F1F] pb-6 text-center md:text-left">
                  <h1 className="text-3xl font-bold tracking-tight text-white">{data.name}</h1>
                  <p className="font-mono text-sm text-[#A1A1A1] mt-1">{data.role}</p>
                  
                  <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-[#A1A1A1] font-mono">
                    <span>{data.contact.email}</span>
                    <span>•</span>
                    <span>{data.contact.phone}</span>
                    <span>•</span>
                    <span>{data.contact.location}</span>
                    <span>•</span>
                    <a href={data.contact.portfolio} target="_blank" rel="noreferrer" className="text-white hover:underline">Portfolio</a>
                    <span>•</span>
                    <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="text-white hover:underline">LinkedIn</a>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="py-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-mono mb-2">Professional Summary</h2>
                  <p className="text-sm leading-relaxed text-[#A1A1A1]">{data.about}</p>
                </div>

                {/* Experience */}
                <div className="border-t border-[#1F1F1F] py-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-mono mb-4">Professional Experience</h2>
                  <div className="space-y-6">
                    {data.experience.map((exp, idx) => (
                      <div key={idx}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <h3 className="text-sm font-semibold text-white">
                            {exp.role} <span className="text-[#A1A1A1] font-normal">at {exp.company}</span>
                          </h3>
                          <span className="font-mono text-xs text-[#A1A1A1]">{exp.period}</span>
                        </div>
                        {exp.highlights && (
                          <ul className="mt-2 list-disc pl-4 space-y-1 text-xs text-[#A1A1A1]">
                            {exp.highlights.map((point, pIdx) => (
                              <li key={pIdx}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Projects */}
                <div className="border-t border-[#1F1F1F] py-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-mono mb-4">Selected Key Projects</h2>
                  <div className="space-y-4">
                    {data.projects.slice(0, 4).map((proj, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-white">{proj.title}</h3>
                          <span className="font-mono text-[10px] uppercase text-[#A1A1A1]">{proj.stack.slice(0, 3).join(', ')}</span>
                        </div>
                        <p className="text-xs text-[#A1A1A1] mt-1">{proj.description}</p>
                        <p className="text-[11px] text-[#7A7A7A] mt-1 font-mono">
                          <strong>Problem:</strong> {proj.caseStudy.problem} | <strong>Impact:</strong> {proj.caseStudy.impact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="border-t border-[#1F1F1F] py-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-mono mb-3">Skills & Technologies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {Object.entries(data.techStack).map(([category, items]) => (
                      <div key={category} className="flex gap-2">
                        <span className="font-semibold text-white min-w-[80px] font-mono">{category}:</span>
                        <span className="text-[#A1A1A1]">{items.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="border-t border-[#1F1F1F] py-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-mono mb-3">Education</h2>
                  <div className="flex justify-between text-xs">
                    <div>
                      <h3 className="font-semibold text-white">{data.education.degree}</h3>
                      <p className="text-[#A1A1A1]">{data.education.institution}</p>
                    </div>
                    <span className="font-mono text-[#A1A1A1]">{data.education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
