import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { NavItem } from '../../types/portfolio'

type NavbarProps = {
  items: NavItem[]
  name: string
  email: string
}

export function Navbar({ items, name, email }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-[#242424] bg-[#0f0f0f]/96'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight text-[#f3f3f3]">
          {name}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <li key={item.id}>
              <a
                className="nav-link text-sm text-[#b0b0b0] transition-colors hover:text-white"
                href={item.id === 'contact' ? `mailto:${email}` : `#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
          href={`mailto:${email}`}
          className="rounded-full border border-[#353535] bg-[#171717] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#e7e7e7] sm:text-sm"
        >
          Let&apos;s Talk
        </motion.a>
      </nav>
    </header>
  )
}
