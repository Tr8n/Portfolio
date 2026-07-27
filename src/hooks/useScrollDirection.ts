import { useState, useEffect } from 'react'

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      // Threshold check to avoid jitter
      if (Math.abs(scrollY - lastScrollY) < 8) return

      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDirection])

  return scrollDirection
}
