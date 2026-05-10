import { Navbar } from './components/layout/Navbar'
import { PortfolioSections } from './components/sections/PortfolioSections'
import { navItems, portfolioData } from './data/portfolio'

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f2f2f2]">
      <Navbar items={navItems} name="Siddhant" email={portfolioData.contact.email} />
      <PortfolioSections data={portfolioData} />
      <footer className="border-t border-[#242424] py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-[#888] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Siddhant Shukla</p>
          <p>Built with React, Tailwind, Framer Motion.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
