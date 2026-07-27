import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import { useActiveSection } from '../../hooks/useActiveSection'
import type { NavItem } from '../../types/portfolio'

type NavbarProps = {
  items: NavItem[]
  name: string
  onOpenResume: () => void
}

export function Navbar({ items, name, onOpenResume }: NavbarProps) {
  const scrollDirection = useScrollDirection()
  const sectionIds = items.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust based on navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      id="navbar"
      className={`fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 transition-all duration-300 ${
        scrollDirection === 'down' ? '-translate-y-24 opacity-0' : 'translate-y-0'
      }`}
    >
      <nav className="glass-nav flex items-center justify-between px-6 py-3.5">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, 'about')}
          className="text-md font-semibold tracking-tight text-white font-mono hover:text-neutral-300"
        >
          {name.split(' ')[0]}
        </a>

        {/* Desktop Navbar Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`text-xs font-mono uppercase tracking-[0.14em] transition-colors relative py-1 ${
                  activeSection === item.id ? 'text-white' : 'text-[#A1A1A1] hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full accent-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={onOpenResume}
            className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-neutral-200"
          >
            Resume
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1F1F1F] bg-transparent text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          <div className="relative flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 rounded-2xl border border-[#1F1F1F] bg-[#0A0A0A]/95 p-4 shadow-xl backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className={`block rounded-lg px-3 py-2 transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#1F1F1F] text-white'
                        : 'text-[#A1A1A1] hover:bg-[#101010] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[#1F1F1F]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenResume()
                  }}
                  className="w-full rounded-lg bg-white py-2 text-center text-xs font-semibold text-black hover:bg-neutral-200"
                >
                  Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
