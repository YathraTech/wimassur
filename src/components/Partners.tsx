'use client'

import Image from 'next/image'
import { partners } from '@/data/partners'

export function Partners() {
  // Double the partners array for seamless infinite scroll
  const doubledPartners = [...partners, ...partners]

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Header */}
      <div className="container mb-16">
        <div className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100/50 px-3 py-1 text-xs font-medium text-primary-800">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Plus de 15 entreprises partenaires
          </div>

          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 lg:text-4xl font-benzin">
            Des entreprises professionnelles{' '}
            <span className="text-primary-700">nous font confiance</span>
          </h2>

          <p className="mx-auto max-w-4xl text-sm text-gray-600 font-montserrat">
            Nous sommes fiers de collaborer avec les leaders du marché pour offrir les meilleures
            solutions d'assurance à nos clients
          </p>
        </div>
      </div>

      {/* Partners Slider - Full width */}
      <div className="relative">
        {/* Gradient masks for fade effect */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling logos container */}
        <div className="flex animate-scroll-left hover:[animation-play-state:paused]">
          {/* First set */}
          {doubledPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group flex min-w-[250px] flex-shrink-0 items-center justify-center px-6"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                {/* Logo */}
                <div className="relative h-16 w-32">
                  {partner.logo && (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                      sizes="128px"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {doubledPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}-duplicate`}
              className="group flex min-w-[250px] flex-shrink-0 items-center justify-center px-6"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                {/* Logo */}
                <div className="relative h-16 w-32">
                  {partner.logo && (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                      sizes="128px"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
