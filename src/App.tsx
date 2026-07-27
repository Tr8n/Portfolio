import { useState, lazy, Suspense } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Timeline } from './components/sections/Timeline'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { GithubStats } from './components/sections/GithubStats'
import { Profiles } from './components/sections/Profiles'
import { Contact } from './components/sections/Contact'
import { navItems, portfolioData } from './data/portfolio'

// Lazy load the resume modal for performance optimization
const ResumeModal = lazy(() =>
  import('./components/ui/ResumeModal').then((module) => ({
    default: module.ResumeModal,
  }))
)

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] antialiased selection:bg-neutral-800 selection:text-white">
      {/* Navigation menu */}
      <Navbar
        items={navItems}
        name={portfolioData.name}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main sections */}
      <main className="relative z-10">
        <Hero data={portfolioData} onOpenResume={() => setIsResumeOpen(true)} />
        <About data={portfolioData} />
        <Experience data={portfolioData} />
        <Timeline />
        <Projects data={portfolioData} />
        <Skills data={portfolioData} />
        <GithubStats />
        <Profiles data={portfolioData} />
        <Contact data={portfolioData} onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer layout */}
      <Footer data={portfolioData} />

      {/* Recruiter resume overlay modal */}
      <Suspense fallback={null}>
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          data={portfolioData}
        />
      </Suspense>
    </div>
  )
}

export default App
