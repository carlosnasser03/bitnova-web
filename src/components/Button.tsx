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
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
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
