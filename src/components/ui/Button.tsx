import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  download?: boolean | string
  ariaLabel?: string
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
  type = 'button',
  download,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const classes = `${baseClasses} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        className={classes}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {children}
    </motion.button>
  )
}
