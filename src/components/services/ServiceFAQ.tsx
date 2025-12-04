'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  title: string
  subtitle: string
  questions: FAQItem[]
}

export function ServiceFAQ({ title, subtitle, questions }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-gradient-to-tr from-secondary-500 to-primary-500 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-benzin leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-montserrat max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-3 sm:space-y-4">
            {questions.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full rounded-xl sm:rounded-2xl bg-gray-50 p-4 sm:p-5 lg:p-6 text-left transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-primary-500/20 touch-manipulation"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start sm:items-center justify-between gap-3">
                    <h3 className="pr-2 sm:pr-4 lg:pr-8 text-base sm:text-lg font-semibold text-gray-900 font-montserrat leading-snug">
                      {item.question}
                    </h3>
                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {openIndex === index && (
                    <div 
                      className="mt-3 sm:mt-4 animate-fade-in"
                      id={`faq-answer-${index}`}
                    >
                      <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-10 sm:mt-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-6 sm:p-8 text-center">
            <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl">🤔</div>
            <h3 className="mb-2 text-lg sm:text-xl font-bold text-gray-900 font-benzin">
              Vous avez d'autres questions ?
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 font-montserrat max-w-md mx-auto">
              Nos conseillers sont disponibles pour répondre à toutes vos interrogations
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 touch-manipulation"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous contacter
              </a>
              <a
                href="tel:0611393247"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base text-primary-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 touch-manipulation"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 11 39 32 47
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}