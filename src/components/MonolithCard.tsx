'use client'

import { useState } from 'react'

interface MonolithCardProps {
  title: string
  description: string
  icon: string
  label: string
  imageSrc?: string
}

export function MonolithCard({ title, description, icon, label, imageSrc }: MonolithCardProps) {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setTransform({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 })
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${title}: ${description}`}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(10px)`,
        transition: 'transform 0.3s ease-out',
      }}
      className="relative group aspect-[3/4] md:aspect-auto bg-tech-dark-surface border border-tech-dark-border rounded-xl overflow-hidden cursor-pointer shadow-nova-glow hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-tech-dark-deep"
    >
      {/* Background Image with Gradient */}
      {imageSrc && (
        <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40">
          <img alt={title} className="w-full h-full object-cover" src={imageSrc} />
        </div>
      )}

      {/* Scanline Effect */}
      <div className="absolute inset-0 w-full h-2 bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-20" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-tech-dark-deep via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8">
        <div className="mb-4">
          <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {icon}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-2">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant font-medium mb-6">
          {description}
        </p>
        <div className="flex items-center gap-2 text-primary-container font-status-label text-status-label tracking-tighter">
          {label}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </div>
      </div>
    </div>
  )
}
