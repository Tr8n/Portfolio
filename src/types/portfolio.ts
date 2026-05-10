export type NavItem = {
  id: string
  label: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  location?: string
  highlights?: string[]
}

export type ProjectItem = {
  title: string
  description: string
  stack: string[]
  highlights: string[]
  caseStudy: {
    problem: string
    architecture: string
    optimization: string
    impact: string
  }
  liveUrl: string
  githubUrl: string
}

export type ProfileItem = {
  label: string
  handle: string
  url: string
}

export type PortfolioData = {
  name: string
  role: string
  tagline: string
  about: string
  contact: {
    email: string
    phone: string
    location: string
    portfolio: string
    linkedin: string
    github: string
  }
  education: {
    degree: string
    institution: string
    period: string
    coursework?: string[]
  }
  schooling: {
    institution: string
    entries: string[]
  }
  experience: ExperienceItem[]
  skills: string[]
  techStack: Record<string, string[]>
  specialization: string[]
  projects: ProjectItem[]
  codingProfiles: ProfileItem[]
  achievements: string[]
  certifications: string[]
}
