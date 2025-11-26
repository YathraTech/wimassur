'use client'

import { ReactNode } from 'react'

interface LegalSectionProps {
  id: string
  title: string
  children: ReactNode
  highlighted?: boolean
}

export function LegalSection({ id, title, children, highlighted = false }: LegalSectionProps) {
  return (
    <section
      id={id}
      className={`mb-12 scroll-mt-24 animate-fade-in opacity-0 [animation-fill-mode:forwards]`}
    >
      {highlighted ? (
        <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <div className="space-y-4 text-gray-700 font-montserrat leading-relaxed">
            {children}
          </div>
        </div>
      ) : (
        <>
          <h2 className="mb-4 text-2xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <div className="space-y-4 text-gray-700 font-montserrat leading-relaxed">
            {children}
          </div>
        </>
      )}
    </section>
  )
}