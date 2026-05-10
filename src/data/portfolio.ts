import type { NavItem, PortfolioData } from '../types/portfolio'

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const portfolioData: PortfolioData = {
  name: 'Siddhant Shukla',
  role: 'Backend-Focused Full Stack Developer',
  tagline:
    'I build scalable backend systems, resilient APIs, and high-performance full stack products.',
  about:
    'Backend-focused Software Developer specializing in scalable REST APIs, authentication systems, and caching layers using MERN and Redis. Strong in system design, backend architecture, and production debugging. Focused on building high-performance backend systems for real-world applications.',
  contact: {
    email: 'dev.siddhant.shukla@gmail.com',
    phone: '+91-7379479903',
    location: 'Kanpur, India',
    portfolio: 'https://tr8n.github.io/',
    linkedin: 'https://www.linkedin.com/in/siddhant-shukla-6b4564275/',
    github: 'https://github.com/Tr8n',
  },
  education: {
    degree: 'B.Tech CSE (Cyber Security)',
    institution: 'Pranveer Singh Institute of Technology',
    period: 'Dec 2022 - Jul 2026',
    coursework: ['DSA', 'DBMS', 'OS', 'Computer Networks', 'System Design'],
  },
  schooling: {
    institution: 'United Public School',
    entries: ['Class 10th - 2020', 'Class 12th - 2022'],
  },
  experience: [
    {
      role: 'Junior Developer',
      company: 'KeyIcon Pvt Ltd',
      period: 'Feb 2026 - Present',
      location: 'Kanpur, India',
      highlights: [
        'Developed and maintained backend features and REST APIs to improve reliability and response times.',
        'Resolved production issues and optimized API performance while contributing to code review quality standards.',
      ],
    },
    {
      role: 'AI Training Intern',
      company: 'Outliar',
      period: 'Sep 2024 - Mar 2025',
      location: 'Remote',
      highlights: [
        'Worked on data pipelines and model evaluation for AI systems, improving model accuracy by 15%.',
        'Automated preprocessing workflows to reduce operational overhead by 20%.',
      ],
    },
    {
      role: 'Backend Developer Intern',
      company: 'SpyderWeb Technologies',
      period: 'Jun 2024 - Sep 2024',
      location: 'Remote',
      highlights: [
        'Designed and implemented backend services using Node.js, Express, Redis, and MongoDB.',
        'Built secure REST APIs with JWT authentication, caching, and rate limiting for higher reliability.',
      ],
    },
  ],
  skills: [
    'Scalable REST APIs',
    'Authentication & Authorization',
    'Caching with Redis',
    'Rate Limiting',
    'System Design',
    'Production Debugging',
  ],
  techStack: {
    Languages: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
    Frontend: ['React.js', 'Next.js'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Redis'],
    Databases: ['MongoDB', 'PostgreSQL'],
    'DevOps & Tools': ['Docker', 'Git', 'Linux'],
    GenAI: ['OpenAI APIs', 'Prompt Engineering'],
  },
  specialization: [
    'Authentication Systems',
    'API Design',
    'Caching',
    'Rate Limiting',
    'System Design',
    'Backend Architecture',
    'AI Integrations',
  ],
  projects: [
    {
      title: 'LinkUp',
      description: 'MERN + AI SaaS platform focused on secure content workflows and backend scalability.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'JWT', 'AI'],
      highlights: [
        'JWT-based authentication',
        'Redis caching',
        'AI-powered summarization',
        'Modular REST APIs',
        'Secure access control and scalable backend architecture',
      ],
      caseStudy: {
        problem: 'Users needed a reliable way to store, organize, and summarize links without performance drop at scale.',
        architecture:
          'Designed a modular Node.js + Express service layer with JWT auth boundaries, Redis-backed caching, and MongoDB persistence.',
        optimization:
          'Added cache-aware API routes and tightened query patterns to reduce repeated compute for high-frequency reads.',
        impact:
          'Delivered faster retrieval and a stable API foundation suitable for production growth and secure collaboration.',
      },
      liveUrl: 'https://tr8n.github.io/LinkUp/',
      githubUrl: 'https://github.com/Tr8n',
    },
    {
      title: 'Sorting Visualizer',
      description: 'Interactive algorithm visualization tool for understanding sorting internals in real time.',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      highlights: ['Real-time sorting animations', 'Interactive controls', 'Algorithm visualization'],
      caseStudy: {
        problem:
          'Students often struggle to understand algorithm behavior from static pseudocode alone.',
        architecture:
          'Built a React-driven visualization loop that separates algorithm state transitions from rendering concerns.',
        optimization:
          'Used controlled update intervals and deterministic state snapshots to keep animation smooth and debuggable.',
        impact:
          'Improved conceptual clarity for core sorting techniques with a cleaner, interactive learning experience.',
      },
      liveUrl: 'https://github.com/Tr8n/Sorting-Visualizer',
      githubUrl: 'https://github.com/Tr8n/Sorting-Visualizer',
    },
  ],
  codingProfiles: [
    { label: 'LeetCode', handle: '0nTr8n', url: 'https://leetcode.com/u/0nTr8n/' },
    { label: 'LeetCode (Alt)', handle: 'Tr8n', url: 'https://leetcode.com/u/Tr8n/' },
    { label: 'Codeforces', handle: 'TanBlaze', url: 'https://codeforces.com/profile/TanBlaze' },
  ],
  achievements: [
    'LeetCode Knight (1650+), 400+ problems solved',
    'Codeforces Rating: 1230 (Pupil)',
    'HackQuest Hackathon - 4th Runner-Up',
  ],
  certifications: [
    'Meta Back-End Development Specialization - Coursera (2024)',
    'Intro to Generative AI - Coursera (2024)',
  ],
}
