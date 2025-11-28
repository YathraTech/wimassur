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
      <span className="font-benzin text-2xl font-bold text-primary-600 sm:text-3xl lg:text-4xl">
        {count}{suffix}
      </span>
    </div>
  )
}

export function AboutStats() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-benzin">
            Les chiffres qui parlent
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-montserrat px-4 sm:px-0">
            Notre succès se mesure à travers la confiance et la satisfaction de nos clients
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-white p-4 sm:p-6 lg:p-8 text-center shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl lg:hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Content */}
              <div className="relative">
                <div className="mb-2 sm:mb-3 lg:mb-4 text-2xl sm:text-3xl animate-bounce-slow">
                  {stat.icon}
                </div>
                <Counter target={stat.value} suffix={stat.suffix} />
                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg font-semibold text-gray-800 font-montserrat">
                  {stat.label}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 font-montserrat hidden sm:block">
                  {stat.description}
                </p>
              </div>

              {/* Decorative corner - hidden on mobile */}
              <div className="absolute -bottom-8 -right-8 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full bg-primary-100 opacity-20 blur-2xl transition-transform duration-300 group-hover:scale-150 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}