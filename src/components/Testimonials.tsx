'use client'

import Image from 'next/image'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  // Display first 6 testimonials in a static grid
  const displayedTestimonials = testimonials.slice(0, 6)

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-primary-500',
      'bg-primary-600',
      'bg-primary-700',
      'bg-secondary-500',
      'bg-secondary-600',
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <section className="bg-white py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 lg:text-5xl font-benzin">
            Approuvé par <span className="text-primary-700">nos clients</span>
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg border border-gray-200 bg-white p-8 transition-all hover:border-gray-300 hover:shadow-sm"
            >
              {/* Quote */}
              <blockquote className="mb-8">
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white ${getAvatarColor(
                      testimonial.name
                    )}`}
                  >
                    {getInitials(testimonial.name)}
                  </div>
                )}

                {/* Name and company */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.company || testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
