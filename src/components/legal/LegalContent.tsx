'use client'

import { ReactNode } from 'react'

interface LegalContentProps {
  children: ReactNode
  sections?: { id: string; title: string }[]
}

export function LegalContent({ children, sections }: LegalContentProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Table of contents - Desktop only */}
          {sections && sections.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="mb-6 text-lg font-bold text-gray-900 font-benzin">
                  Table des matières
                </h3>
                <nav className="space-y-3">
                  {sections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-start gap-3 text-left text-sm text-gray-600 transition-colors hover:text-primary-600 font-montserrat group"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500 transition-colors group-hover:bg-primary-100 group-hover:text-primary-600">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{section.title}</span>
                    </button>
                  ))}
                </nav>

                {/* Back to top button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-8 flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200 font-montserrat"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  Retour en haut
                </button>
              </div>
            </aside>
          )}

          {/* Main content */}
          <div className={sections && sections.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}