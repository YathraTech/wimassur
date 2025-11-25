'use client'

import { useState } from 'react'
import { faqItems } from '@/data/faq'

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-12">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-secondary-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl font-benzin">
            Questions <span className="text-secondary-400">fréquentes</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white/15 hover:border-white/30"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-sm text-white font-bold font-montserrat">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="pr-4 text-base font-semibold text-white font-montserrat">
                      {item.question}
                    </h3>
                  </div>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all group-hover:bg-white/20 ${
                    openItem === item.id ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="h-5 w-5 text-secondary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openItem === item.id
                      ? 'max-h-96'
                      : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <div className="border-t border-white/10 px-5 pb-5 pt-3 pl-[60px]">
                    <p className="text-gray-200 font-montserrat text-sm">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center">
            <p className="mb-4 text-white font-montserrat">
              Vous ne trouvez pas la réponse ? <span className="font-semibold">Contactez-nous</span>
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-lg bg-secondary-400 px-5 py-2.5 text-sm font-semibold text-gray-900 transition-all hover:bg-secondary-500"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}