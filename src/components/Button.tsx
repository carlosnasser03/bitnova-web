import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  'aria-label'?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer active:scale-95'

  const variants = {
    primary: 'bg-primary-container text-on-primary-fixed hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:scale-105',
    secondary: 'bg-tertiary-container text-on-tertiary hover:bg-tertiary hover:scale-105',
    outline: 'border border-tech-dark-border text-on-surface hover:bg-nova-blue-dim hover:text-primary-container transition-colors',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
