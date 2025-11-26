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

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full rounded-2xl bg-gray-50 p-6 text-left transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-primary-500/20"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="pr-8 text-lg font-semibold text-gray-900 font-montserrat">
                      {item.question}
                    </h3>
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {openIndex === index && (
                    <div className="mt-4 animate-fade-in">
                      <p className="text-gray-600 font-montserrat leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8 text-center">
            <div className="mb-4 text-4xl">🤔</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 font-benzin">
              Vous avez d'autres questions ?
            </h3>
            <p className="mb-6 text-gray-600 font-montserrat">
              Nos conseillers sont disponibles pour répondre à toutes vos interrogations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Nous contacter
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}