'use client'

import { useEffect, useRef } from 'react'

export function BinaryStreamBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const streamCount = 45
    const characters = '01'
    const centerX = 50
    const centerY = 45

    function createStream() {
      const stream = document.createElement('div')
      stream.className = 'binary-stream'
      stream.style.position = 'absolute'
      stream.style.fontFamily = '"JetBrains Mono", monospace'
      stream.style.fontSize = '11px'
      stream.style.color = 'rgba(0, 255, 65, 0.25)'
      stream.style.whiteSpace = 'nowrap'
      stream.style.userSelect = 'none'
      stream.style.pointerEvents = 'none'

      let content = ''
      const length = 5 + Math.floor(Math.random() * 6)
      for (let i = 0; i < length; i++) {
        content += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      stream.textContent = content

      const isEntering = Math.random() > 0.5
      const angle = Math.random() * Math.PI * 2
      const distance = 80 + Math.random() * 40

      const offsetX = Math.cos(angle) * distance
      const offsetY = Math.sin(angle) * distance

      stream.style.left = centerX + '%'
      stream.style.top = centerY + '%'
      stream.style.transform = 'translate(-50%, -50%)'

      const duration = 6 + Math.random() * 4
      const delay = Math.random() * -15

      if (isEntering) {
        stream.style.animation = `flow-in ${duration}s linear infinite`
        stream.style.setProperty('--sx', offsetX + 'vw')
        stream.style.setProperty('--sy', offsetY + 'vh')
      } else {
        stream.style.animation = `flow-out ${duration}s linear infinite`
        stream.style.setProperty('--tx', offsetX + 'vw')
        stream.style.setProperty('--ty', offsetY + 'vh')
      }

      stream.style.animationDelay = delay + 's'
      container.appendChild(stream)
    }

    for (let i = 0; i < streamCount; i++) {
      createStream()
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id="binary-background"
      className="fixed inset-0 pointer-events-none z-5 overflow-hidden"
    />
  )
}
