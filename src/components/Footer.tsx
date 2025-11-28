'use client'

import { useState } from 'react'
import { company } from '@/data/company'
import { formatPhoneNumber } from '@/lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'footer',
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setShowSuccess(true)
        setEmail('')
        setTimeout(() => setShowSuccess(false), 3000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription:', error)
      // Afficher quand même le message de succès pour ne pas bloquer l'utilisateur
      setShowSuccess(true)
      setEmail('')
      setTimeout(() => setShowSuccess(false), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary-600/10 blur-3xl" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-secondary-600/10 blur-3xl" />
      </div>

      <div className="container relative py-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-2 mb-12 lg:mb-16">
          {/* Left side - Company info & Newsletter */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-benzin">
                <span className="text-primary-400">Wim</span><span className="text-white">Assur</span>
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 font-montserrat max-w-md">
                {company.description}
              </p>
            </div>

            {/* Newsletter signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 font-benzin">Restez informé</h3>
              <p className="text-gray-300 mb-4 text-xs sm:text-sm font-montserrat">Recevez nos dernières actualités et conseils</p>
              
              {showSuccess ? (
                <div className="flex items-center gap-2 text-green-400 py-3">
                  <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-montserrat text-sm">Merci pour votre inscription !</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="flex-1 rounded-lg bg-white/10 px-3 sm:px-4 py-2 text-sm sm:text-base text-white placeholder-gray-400 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-primary-600 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg disabled:opacity-50 whitespace-nowrap"
                  >
                    {isSubmitting ? 'Envoi...' : 'S\'inscrire'}
                  </button>
                </form>
              )}
            </div>

            {/* Social links */}
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-primary-600 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-primary-600 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-primary-600 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
            {/* Contact */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold font-benzin text-primary-400">Contact</h3>
              <address className="space-y-3 not-italic text-gray-300 font-montserrat">
                <div className="flex items-start sm:items-center gap-3">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 flex-shrink-0 mt-1 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a
                    href={`tel:${company.contact.phone.replace(/\s/g, '')}`}
                    className="hover:text-primary-400 transition-colors text-sm sm:text-base break-all"
                  >
                    {formatPhoneNumber(company.contact.phone)}
                  </a>
                </div>
                <div className="flex items-start sm:items-center gap-3">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 flex-shrink-0 mt-1 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="hover:text-primary-400 transition-colors text-sm sm:text-base break-all"
                  >
                    {company.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-sm sm:text-base">
                    <p>{company.contact.address.street}</p>
                    <p>{company.contact.address.postalCode} {company.contact.address.city}</p>
                  </div>
                </div>
              </address>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold font-benzin text-primary-400">Liens rapides</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-300 font-montserrat">
                <li>
                  <button
                    onClick={() => document.getElementById('life-partner')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('insurance-coverage')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    Nos assurances
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal info */}
            <div>
              <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold font-benzin text-primary-400">Informations légales</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-montserrat">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0"></div>
                  <span>SIREN: <span className="text-white">{company.legal.siren}</span></span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-montserrat">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0"></div>
                  <span>ORIAS: <span className="text-white">{company.legal.orias}</span></span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-montserrat">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-primary-500 flex-shrink-0"></div>
                  <span>RC Pro: <span className="text-white">{company.legal.rcPro}</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 justify-center py-6 sm:py-8 border-t border-white/10">
          <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10">
            <svg className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-montserrat">Courtier agréé ORIAS</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10">
            <svg className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span className="text-xs sm:text-sm font-montserrat">Membre de la CSCA</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-white/10">
            <svg className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-montserrat">Certifié ISO 9001</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-gray-400 md:flex-row">
            <p className="font-montserrat text-center md:text-left">© {currentYear} {company.name}. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/mentions-legales" className="hover:text-primary-400 transition-colors font-montserrat whitespace-nowrap">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-primary-400 transition-colors font-montserrat whitespace-nowrap">
                Politique de confidentialité
              </a>
              <a href="/cgu" className="hover:text-primary-400 transition-colors font-montserrat whitespace-nowrap">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}