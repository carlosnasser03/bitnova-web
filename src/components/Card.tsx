import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' } : {}}
      className={`bg-white rounded-lg border-2 border-gray-200 p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}
