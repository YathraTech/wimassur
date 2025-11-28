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
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
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
    
    if (!email || !name || !phone || !consent) {
      return
    }

    setIsSubmitting(true)
    trackEvent('Newsletter Signup', { source: 'popup' })

    try {
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          source: 'popup',
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setShowSuccess(true)
        // Auto close after success
        setTimeout(() => {
          handleClose()
        }, 3000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error)
      // Afficher quand même le message de succès pour ne pas bloquer l'utilisateur
      setShowSuccess(true)
      setTimeout(() => {
        handleClose()
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
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
        className="fixed left-1/2 top-1/2 z-50 w-[95vw] sm:w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto"
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
          <div className="relative z-10 p-4 sm:p-6 lg:p-8">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-2 top-2 sm:right-6 sm:top-6 z-20 rounded-full bg-gray-100/80 p-2 sm:p-3 text-gray-600 backdrop-blur-sm transition-all hover:bg-gray-200 hover:text-gray-900 hover:rotate-90"
              aria-label="Fermer"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

          {showSuccess ? (
              // Success state
              <div className="mx-auto max-w-md py-4 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-xl">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl sm:text-2xl font-bold text-gray-900 font-benzin">Bienvenue dans la communauté !</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">Vous faites maintenant partie de ceux qui reçoivent nos conseils exclusifs.</p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary-50 px-5 py-2.5 text-primary-700">
                  <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base font-medium">Vérifiez votre boîte mail</span>
                </div>
              </div>
          ) : (
              // Form state
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                {/* Left side - Content */}
                <div className="flex flex-col justify-center">
                  <h3 id="newsletter-title" className="mb-3 text-xl sm:text-2xl font-extrabold leading-tight text-gray-900 lg:text-2xl font-benzin">
                    Ne manquez plus <span className="text-primary-700">aucune opportunité</span>
                  </h3>
                  
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-gray-600">
                    Rejoignez notre communauté et recevez des conseils exclusifs pour optimiser vos assurances
                  </p>

                  {/* Benefits - Hidden on mobile, shown on tablet and up */}
                  <div className="hidden sm:block space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">Conseils personnalisés</p>
                        <p className="text-xs sm:text-sm text-gray-600">Recevez des recommandations adaptées à votre situation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">Meilleures offres</p>
                        <p className="text-xs sm:text-sm text-gray-600">Accédez aux tarifs négociés avec nos partenaires</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-900">Guides exclusifs</p>
                        <p className="text-xs sm:text-sm text-gray-600">Analyses et conseils de nos experts en assurance</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Form */}
                <div className="relative flex items-center lg:mt-0 mt-4">
                  {/* Form card */}
                  <div className="w-full rounded-2xl lg:rounded-3xl bg-gradient-to-b from-gray-50 to-white p-4 sm:p-6 shadow-2xl">
                    
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label htmlFor="newsletter-name" className="mb-1 sm:mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                          Votre nom
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input
                            id="newsletter-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jean Dupont"
                            className="w-full rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-white py-2 sm:py-2.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="newsletter-phone" className="mb-1 sm:mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                          Votre téléphone
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <input
                            id="newsletter-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="06 12 34 56 78"
                            className="w-full rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-white py-2 sm:py-2.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="newsletter-email" className="mb-1 sm:mb-2 block text-xs sm:text-sm font-semibold text-gray-700">
                          Votre email
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input
                            id="newsletter-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nom@entreprise.com"
                            className="w-full rounded-xl sm:rounded-2xl border-2 border-gray-200 bg-white py-2 sm:py-2.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base font-medium text-gray-900 placeholder-gray-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-100"
                            required
                          />
                        </div>
                      </div>

                      <div className="rounded-lg sm:rounded-xl bg-gray-50 p-2.5 sm:p-3">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <input
                            id="newsletter-consent"
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-2 border-gray-300 bg-white text-primary-600 transition-colors focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
                            required
                          />
                          <label htmlFor="newsletter-consent" className="text-xs sm:text-sm leading-relaxed text-gray-700">
                            J'accepte de recevoir la newsletter et les communications de WimAssur
                          </label>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !email || !name || !phone || !consent}
                        className="group w-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white shadow-xl transition-all hover:from-primary-700 hover:to-primary-800 hover:shadow-2xl hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center gap-2 sm:gap-3">
                          {isSubmitting ? (
                            <>
                              <svg className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Inscription...</span>
                            </>
                          ) : (
                            <>
                              <span>S'inscrire</span>
                              <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </span>
                      </button>

                      {/* Trust indicators */}
                      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-600">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Sécurisé</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span>Sans spam</span>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute -inset-2 sm:-inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary-100/40 via-transparent to-secondary-100/40 blur-2xl" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}