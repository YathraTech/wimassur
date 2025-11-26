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
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-montserrat">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Coverage selector */}
          <div>
            <div className="space-y-4">
              {coverages.map((coverage, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCoverage(index)}
                  className={`w-full rounded-2xl p-6 text-left transition-all duration-300 ${
                    selectedCoverage === index
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 shadow-lg scale-[1.02]'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-2xl ${
                      selectedCoverage === index
                        ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg'
                        : 'bg-white shadow-md'
                    }`}>
                      {coverage.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 font-benzin">
                          {coverage.title}
                        </h3>
                        {coverage.included && (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                            Inclus
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 font-montserrat">
                        {coverage.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Coverage details */}
          <div>
            <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-gray-50 to-white p-8 shadow-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-4xl text-white shadow-lg">
                  {coverages[selectedCoverage].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-benzin">
                    {coverages[selectedCoverage].title}
                  </h3>
                  <p className="text-gray-600 font-montserrat">
                    {coverages[selectedCoverage].included ? 'Garantie incluse' : 'Option disponible'}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-4 text-lg font-semibold text-gray-900 font-montserrat">
                  Cette garantie comprend :
                </h4>
                <ul className="space-y-3">
                  {coverages[selectedCoverage].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                        <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-montserrat">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-primary-50 p-4">
                <p className="text-sm text-primary-700 font-montserrat">
                  <strong>💡 Bon à savoir :</strong> Toutes nos garanties sont personnalisables selon vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual separator */}
        <div className="mt-16 grid gap-6 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-1">
          <div className="rounded-xl bg-white p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 font-benzin">
              Besoin de conseils pour choisir vos garanties ?
            </h3>
            <p className="mb-6 text-gray-600 font-montserrat">
              Nos experts sont là pour vous accompagner et créer une protection sur mesure
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Parler à un conseiller
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}