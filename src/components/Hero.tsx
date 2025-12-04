'use client'

import { useState } from 'react'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'
import { scrollToSection } from '@/lib/utils'

export function Hero() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)
    trackEvent('Hero Email Capture', { source: 'hero' })

    try {
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'hero',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccess(true)
        setEmail('')
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Erreur lors de la capture du lead:', error)
      // Afficher quand même le message de succès pour ne pas bloquer l'utilisateur
      setShowSuccess(true)
      setEmail('')
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute -right-10 -top-10 h-48 w-48 sm:-right-20 sm:-top-20 sm:h-96 sm:w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 sm:-bottom-20 sm:-left-20 sm:h-96 sm:w-96 animate-breathe-slow rounded-full bg-primary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs - smaller on mobile */}
        <div className="absolute left-[10%] top-[20%] h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 animate-float-slow">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-secondary-400/20 to-transparent blur-3xl" />
        </div>
        <div className="absolute right-[5%] top-[60%] h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-gradient-to-tl from-primary-400/15 to-transparent blur-3xl" />
        </div>

        {/* Medium orbs - hidden on mobile, smaller on tablet */}
        <div className="absolute left-[70%] top-[10%] hidden sm:block h-24 w-24 md:h-32 md:w-32 animate-float">
          <div className="h-full w-full rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="absolute left-[40%] bottom-[20%] hidden sm:block h-24 w-24 md:h-40 md:w-40 animate-float-slow [animation-delay:2s]">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-secondary-300/15 to-transparent blur-2xl" />
        </div>

        {/* Small glowing orbs - hidden on mobile */}
        <div className="absolute left-[25%] top-[45%] hidden md:block h-20 w-20 animate-pulse-slow">
          <div className="h-full w-full rounded-full bg-white/20 blur-xl" />
        </div>
        <div className="absolute right-[30%] bottom-[35%] hidden md:block h-24 w-24 animate-pulse-slow [animation-delay:1.5s]">
          <div className="h-full w-full rounded-full bg-secondary-400/25 blur-xl" />
        </div>

        {/* Tiny accent orbs - hidden on mobile */}
        <div className="absolute left-[60%] top-[35%] hidden lg:block h-8 w-8 animate-twinkle">
          <div className="h-full w-full rounded-full bg-white/30 blur-md" />
        </div>
        <div className="absolute right-[15%] top-[25%] hidden lg:block h-12 w-12 animate-twinkle [animation-delay:1s]">
          <div className="h-full w-full rounded-full bg-secondary-300/30 blur-lg" />
        </div>
        <div className="absolute left-[15%] bottom-[15%] hidden lg:block h-10 w-10 animate-pulse-slow [animation-delay:0.5s]">
          <div className="h-full w-full rounded-full bg-primary-400/20 blur-lg" />
        </div>
      </div>

      <div className="container relative flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-8 py-16 sm:py-20 md:py-24 lg:grid-cols-2 lg:gap-12 lg:py-0">
          {/* Content */}
          <div className="z-10 text-white">
            <h1 className="mb-4 sm:mb-6 animate-fade-in font-alan-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight opacity-0 [animation-fill-mode:forwards]">
              Protégez-vous et vos revenus avec <span className="text-secondary-400">WimAssur</span>
            </h1>
            <p className="mb-6 sm:mb-8 animate-fade-in text-base sm:text-lg md:text-xl text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat">
              Sécurisez votre patrimoine et garantissez votre stabilité financière. Découvrez des
              solutions d'assurance sur mesure pour protéger ce qui compte vraiment.
            </p>

            {/* Email capture form */}
            <form
              onSubmit={handleSubmit}
              className="mb-6 sm:mb-8 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]"
            >
              {showSuccess ? (
                <div className="flex items-center gap-3 rounded-lg bg-green-500/20 p-3 sm:p-4 text-sm sm:text-base text-green-100 backdrop-blur-sm">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Merci ! Nous vous contacterons très bientôt pour votre devis personnalisé.
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email professionnel"
                    className="flex-1 rounded-lg bg-white/10 px-4 py-3 sm:px-5 text-white placeholder-white/70 backdrop-blur-sm transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn w-full sm:w-auto bg-white px-6 sm:px-8 py-3 text-sm sm:text-base text-primary-700 font-semibold shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-[1.02] focus:ring-white disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap"
                  >
                    {isSubmitting ? 'Envoi...' : 'Obtenir mon devis'}
                  </button>
                </div>
              )}
              <p className="mt-3 text-xs sm:text-sm text-gray-200">
                ✓ Devis gratuit et sans engagement • ✓ Réponse en 24h
              </p>
            </form>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row animate-fade-in items-start sm:items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-200 opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Courtier indépendant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>+100 clients satisfaits</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration - Modern minimal design */}
          <div className="relative mt-8 sm:mt-12 lg:mt-0 order-first lg:order-last">
            <div className="relative z-10 mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Modern logo container with glassmorphism */}
              <div className="group relative">
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Main logo container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-secondary-400/20">
                  {/* Subtle pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />

                  {/* Logo with modern effects */}
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="relative w-full max-w-[280px] transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src="/images/home/logowimassur.png"
                        alt="WimAssur - Votre partenaire d'assurance"
                        width={600}
                        height={600}
                        className="h-auto w-full drop-shadow-2xl filter"
                        priority
                      />

                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 -z-10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-30">
                        <div className="h-full w-full bg-gradient-to-br from-secondary-400 to-primary-400" />
                      </div>
                    </div>
                  </div>

                  {/* Modern geometric decorations */}
                  <div className="absolute bottom-4 right-4 h-20 w-20 opacity-20">
                    <div className="h-full w-full rounded-2xl border border-white/30 rotate-45" />
                  </div>
                  <div className="absolute top-4 left-4 h-16 w-16 opacity-20">
                    <div className="h-full w-full rounded-xl border border-white/30 -rotate-12" />
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -inset-4 -z-10">
                  <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary-400/20 to-transparent blur-2xl animate-pulse-slow" />
                  <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-gradient-to-br from-primary-400/20 to-transparent blur-2xl animate-pulse-slow [animation-delay:1s]" />
                </div>

                {/* Interactive particles (hidden on mobile) */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none hidden sm:block">
                  <div className="absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-white/40 animate-float" />
                  <div className="absolute top-3/4 right-1/3 h-1.5 w-1.5 rounded-full bg-secondary-400/40 animate-float-delayed" />
                  <div className="absolute bottom-1/3 left-1/2 h-1 w-1 rounded-full bg-primary-400/40 animate-float-slow" />
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs sm:text-sm text-white/90 border border-white/10">
                  <svg
                    className="h-4 w-4 text-secondary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Certifié ORIAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
        <button
          onClick={() => scrollToSection('life-partner')}
          className="flex flex-col items-center gap-1 sm:gap-2 text-white/70 transition-colors hover:text-white"
          aria-label="Défiler vers le bas"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-wider">Découvrir</span>
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce-subtle"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
