'use client'

import { useState, useEffect } from 'react'
import { setCookie, getCookieValue } from '@/lib/utils'
import { trackEvent } from '@/lib/analytics'

const COOKIE_NAME = 'newsletter_dismissed'
const COOKIE_DAYS = 30
const DESKTOP_DELAY = 5000 // 5 seconds for exit intent setup
const MOBILE_DELAY = 10000 // 10 seconds
const MOBILE_SCROLL_THRESHOLD = 0.5 // 50% scroll

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(true) // Show immediately on page load
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    // Temporarily disabled cookie/localStorage saving
    // setCookie(COOKIE_NAME, 'true', COOKIE_DAYS)
    // localStorage.setItem(COOKIE_NAME, 'true')
    trackEvent('Newsletter Popup Closed')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !consent) {
      return
    }

    setIsSubmitting(true)
    trackEvent('Newsletter Signup', { source: 'popup' })

    // TODO: Implement actual newsletter signup
    console.log('Newsletter signup:', { email, consent })

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
    
    // Auto close after success
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2"
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        style={{
          animation: 'popupEntry 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50/50 to-white shadow-2xl">
          {/* Background decoration */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary-100/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary-100/20 blur-3xl" />
          
          {/* Content wrapper */}
          <div className="relative z-10 p-12 lg:p-16">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-12 top-12 z-20 rounded-full bg-gray-100/80 p-3 text-gray-600 backdrop-blur-sm transition-all hover:bg-gray-200 hover:text-gray-900 hover:rotate-90"
              aria-label="Fermer"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          {showSuccess ? (
              // Success state
              <div className="mx-auto max-w-md py-8 text-center">
                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-xl">
                  <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900 font-benzin">Bienvenue dans la communauté !</h3>
                <p className="text-lg leading-relaxed text-gray-600">Vous faites maintenant partie des 23,000+ membres qui reçoivent nos conseils exclusifs.</p>
                <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary-50 px-6 py-3 text-primary-700">
                  <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Vérifiez votre boîte mail</span>
                </div>
              </div>
          ) : (
              // Form state
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Left side - Content */}
                <div className="flex flex-col justify-center">
                  <h3 id="newsletter-title" className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:text-3xl font-benzin">
                    Ne manquez plus <span className="text-primary-700">aucune opportunité</span>
                  </h3>
                  
                  <p className="mb-8 text-base leading-relaxed text-gray-600">
                    Rejoignez +23,000 professionnels qui optimisent leurs assurances
                  </p>

                  {/* Benefits */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                        <svg className="h-6 w-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Conseils personnalisés</p>
                        <p className="text-sm text-gray-600">Recevez des recommandations adaptées à votre situation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                        <svg className="h-6 w-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Meilleures offres</p>
                        <p className="text-sm text-gray-600">Accédez aux tarifs négociés avec nos partenaires</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                        <svg className="h-6 w-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Guides exclusifs</p>
                        <p className="text-sm text-gray-600">Analyses et conseils de nos experts en assurance</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="relative flex items-center">
                  {/* Form card */}
                  <div className="w-full rounded-3xl bg-gradient-to-b from-gray-50 to-white p-8 shadow-2xl lg:p-10">
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="newsletter-email" className="mb-3 block text-sm font-semibold text-gray-700">
                          Votre email
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nom@entreprise.com"
                            className="w-full rounded-2xl border-2 border-gray-200 bg-white py-4 pl-12 pr-4 text-base font-medium text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
                            required
                          />
                        </div>
                      </div>

                      <div className="rounded-2xl bg-gray-50 p-4">
                        <div className="flex items-start gap-3">
                          <input
                            id="newsletter-consent"
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-1 h-5 w-5 rounded border-2 border-gray-300 bg-white text-primary-600 transition-colors focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
                            required
                          />
                          <label htmlFor="newsletter-consent" className="text-sm leading-relaxed text-gray-700">
                            J'accepte de recevoir des emails personnalisés.
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !email || !consent}
                        className="group w-full rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Inscription en cours...</span>
                            </>
                          ) : (
                            <>
                              <span>Accéder aux conseils</span>
                              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </span>
                      </button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="bg-white px-4 text-gray-500">100% gratuit</span>
                        </div>
                      </div>
                    </form>

                    {/* Trust indicators */}
                    <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Sécurisé</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>Sans spam</span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary-100/40 via-transparent to-secondary-100/40 blur-2xl" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}