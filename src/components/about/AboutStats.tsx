'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    id: 1,
    value: 1000,
    suffix: '+',
    label: 'Clients Satisfaits',
    icon: '👥',
    description: 'Des familles et professionnels nous font confiance'
  },
  {
    id: 2,
    value: 15,
    suffix: '+',
    label: 'Partenaires Assureurs',
    icon: '🤝',
    description: 'Les meilleures compagnies du marché'
  },
  {
    id: 3,
    value: 98,
    suffix: '%',
    label: 'Taux de Satisfaction',
    icon: '⭐',
    description: 'Clients qui nous recommandent'
  },
  {
    id: 4,
    value: 24,
    suffix: 'h',
    label: 'Service Disponible',
    icon: '📞',
    description: 'Assistance en cas d\'urgence'
  }
]

function Counter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, target, duration])

  return (
    <div ref={ref}>
      <span className="font-benzin text-3xl font-bold text-primary-600 lg:text-4xl">
        {count}{suffix}
      </span>
    </div>
  )
}

export function AboutStats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-benzin">
            Les chiffres qui parlent
          </h2>
          <p className="text-lg text-gray-600 font-montserrat">
            Notre succès se mesure à travers la confiance et la satisfaction de nos clients
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="relative">
                <div className="mb-4 text-3xl animate-bounce-slow">
                  {stat.icon}
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <h3 className="mt-2 text-lg font-semibold text-gray-800 font-montserrat whitespace-nowrap">
                  {stat.label}
                </h3>
                <p className="mt-2 text-sm text-gray-600 font-montserrat">
                  {stat.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary-100 opacity-20 blur-2xl transition-transform duration-300 group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}