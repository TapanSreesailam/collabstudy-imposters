"use client"

import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  type: string
  top: string
  left: string
  delay: number
  size: number
  opacity: number
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    // Generate random floating elements
    const newElements: FloatingElement[] = []
    const types = ["floating-element-1", "floating-element-2", "floating-element-3"]

    for (let i = 0; i < 12; i++) {
      newElements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        size: Math.random() * 0.5 + 0.5, // Scale between 0.5 and 1
        opacity: Math.random() * 0.3 + 0.1, // Opacity between 0.1 and 0.4
      })
    }

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`floating-element ${element.type}`}
          style={{
            top: element.top,
            left: element.left,
            animationDelay: `${element.delay}s`,
            transform: `scale(${element.size})`,
            opacity: element.opacity,
          }}
        />
      ))}
    </div>
  )
}
