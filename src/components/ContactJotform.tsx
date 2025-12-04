'use client'

import { useEffect, useRef } from 'react'

export function ContactJotform() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const formId = process.env.NEXT_PUBLIC_JOTFORM_FORM_ID || '241234567890123'

  useEffect(() => {
    // Handle Jotform iframe resizing
    const handleJotformMessage = (e: MessageEvent) => {
      if (e.origin === 'https://form.jotform.com' && iframeRef.current) {
        const iframe = iframeRef.current
        if (e.data && typeof e.data === 'object' && 'frameHeight' in e.data) {
          iframe.style.height = `${e.data.frameHeight}px`
        }
      }
    }

    window.addEventListener('message', handleJotformMessage)
    return () => window.removeEventListener('message', handleJotformMessage)
  }, [])

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Demandez votre devis gratuit
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Remplissez le formulaire ci-dessous et recevez votre devis personnalisé sous 24h
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            {/* Privacy notice */}
            <div className="mb-6 flex items-start gap-3 rounded-lg bg-blue-50 p-4">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-blue-800">
                Vos données personnelles sont protégées et ne seront jamais revendues à des tiers.
                Consultez notre{' '}
                <a href="#" className="font-medium underline hover:text-blue-900">
                  politique de confidentialité
                </a>
                .
              </p>
            </div>

            {/* Jotform iframe */}
            <iframe
              ref={iframeRef}
              id="JotFormIFrame"
              title="Formulaire de contact WimAssur"
              src={`https://form.jotform.com/${formId}`}
              frameBorder={0}
              style={{
                width: '100%',
                minHeight: '600px',
                border: 'none',
              }}
              scrolling="no"
              allowFullScreen
            />

            {/* Alternative contact methods */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="mb-4 text-center text-gray-600">
                Vous préférez nous contacter directement ?
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:0611393247"
                  className="flex items-center gap-2 font-medium text-primary-600 hover:text-primary-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  06 11 39 32 47
                </a>
                <span className="hidden text-gray-400 sm:inline">•</span>
                <a
                  href="mailto:contact@wimassur.fr"
                  className="flex items-center gap-2 font-medium text-primary-600 hover:text-primary-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@wimassur.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}