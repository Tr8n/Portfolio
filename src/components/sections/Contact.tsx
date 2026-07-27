import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import type { PortfolioData } from '../../types/portfolio'

type ContactProps = {
  data: PortfolioData
  onOpenResume: () => void
}

export function Contact({ data, onOpenResume }: ContactProps) {
  const contactDetails = [
    { label: 'Location', value: data.contact.location },
    { label: 'Availability', value: 'Open for full-time opportunities & AI/Full Stack projects.' },
    { label: 'Email', value: data.contact.email, href: `mailto:${data.contact.email}` },
    { label: 'LinkedIn', value: 'siddhant-shukla', href: data.contact.linkedin },
    { label: 'GitHub', value: 'Tr8n', href: data.contact.github },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
      <Card className="accent-glow p-8 md:p-12 border border-[#1F1F1F]">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left Column: Heading & Resume preview button */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1A1]">Get in touch</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let&apos;s build reliable architectures together
              </h2>
              <p className="mt-4 text-xs text-[#A1A1A1] sm:text-sm">
                If you are looking for an engineer with hands-on production experience in backend performance caching, security APIs, and Gen AI LLM pipelines, let&apos;s connect.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${data.contact.email}`}>
                Send Email
              </Button>
              <Button variant="secondary" onClick={onOpenResume}>
                Preview Resume
              </Button>
            </div>
          </div>

          {/* Right Column: Contact Details Dashboard Grid */}
          <div className="md:col-span-6 border-t border-[#1F1F1F] pt-8 md:border-t-0 md:pt-0 md:border-l md:pl-10 flex flex-col justify-center">
            <div className="space-y-6">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm">
                  <span className="font-mono text-white min-w-[100px]">{detail.label}</span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.label !== 'Email' ? '_blank' : undefined}
                      rel="noreferrer"
                      className="mt-1 sm:mt-0 text-[#A1A1A1] hover:text-white transition-colors break-all"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="mt-1 sm:mt-0 text-[#A1A1A1]">{detail.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
