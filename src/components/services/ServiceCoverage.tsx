'use client'

import { useState } from 'react'

interface Coverage {
  title: string
  description: string
  features: string[]
  icon: string
  included: boolean
}

interface ServiceCoverageProps {
  title: string
  subtitle: string
  coverages: Coverage[]
}

export function ServiceCoverage({ title, subtitle, coverages }: ServiceCoverageProps) {
  const [selectedCoverage, setSelectedCoverage] = useState(0)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-montserrat">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          {/* Coverage selector */}
          <div>
            <div className="space-y-3 sm:space-y-4">
              {coverages.map((coverage, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCoverage(index)}
                  className={`w-full rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-left transition-all duration-300 ${
                    selectedCoverage === index
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 shadow-lg scale-[1.02]'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full text-lg sm:text-xl md:text-2xl ${
                      selectedCoverage === index
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'bg-white shadow-md'
                    }`}>
                      {coverage.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 font-benzin">
                          {coverage.title}
                        </h3>
                        {coverage.included && (
                          <span className="rounded-full bg-green-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-green-700 whitespace-nowrap">
                            Inclus
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 font-montserrat line-clamp-2">
                        {coverage.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Coverage details */}
          <div className="mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 shadow-xl">
              <div className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-2xl sm:text-3xl md:text-4xl text-white shadow-lg">
                  {coverages[selectedCoverage].icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-benzin">
                    {coverages[selectedCoverage].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-montserrat">
                    {coverages[selectedCoverage].included ? 'Garantie incluse' : 'Option disponible'}
                  </p>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-gray-900 font-montserrat">
                  Cette garantie comprend :
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {coverages[selectedCoverage].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-0.5 sm:mt-1 flex h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 font-montserrat">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg sm:rounded-xl bg-primary-50 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-primary-700 font-montserrat">
                  <strong>💡 Bon à savoir :</strong> Toutes nos garanties sont personnalisables selon vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual separator */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:gap-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-0.5 sm:p-1">
          <div className="rounded-[11px] sm:rounded-xl bg-white p-6 sm:p-8 text-center">
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-900 font-benzin">
              Besoin de conseils pour choisir vos garanties ?
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 font-montserrat">
              Nos experts sont là pour vous accompagner et créer une protection sur mesure
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Parler à un conseiller
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}