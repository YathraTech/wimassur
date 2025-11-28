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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5 sm:gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 lg:text-5xl font-benzin">
            Approuvé par <span className="text-primary-700">nos clients</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:gap-x-8 md:gap-y-12 lg:gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-lg border border-gray-200 bg-white p-6 sm:p-8 transition-all hover:border-gray-300 hover:shadow-sm"
            >
              {/* Quote Icon */}
              <svg
                className="absolute top-4 left-4 sm:top-6 sm:left-6 h-6 w-6 sm:h-8 sm:w-8 text-gray-200"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.128 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.48 4z" />
              </svg>

              {/* Rating */}
              <div className="mb-4 sm:mb-6 relative z-10">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 sm:mb-8 relative z-10">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Avatar */}
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full text-xs sm:text-sm font-bold text-white flex-shrink-0 ${getAvatarColor(
                      testimonial.name
                    )}`}
                  >
                    {getInitials(testimonial.name)}
                  </div>
                )}

                {/* Name and company */}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
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
