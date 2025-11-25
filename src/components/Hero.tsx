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

    // TODO: Implement actual email capture API
    console.log('Lead captured:', email)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setEmail('')

    // Reset success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-breathe-slow rounded-full bg-primary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute left-[10%] top-[20%] h-64 w-64 animate-float-slow">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-secondary-400/20 to-transparent blur-3xl" />
        </div>
        <div className="absolute right-[5%] top-[60%] h-48 w-48 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-gradient-to-tl from-primary-400/15 to-transparent blur-3xl" />
        </div>
        
        {/* Medium orbs */}
        <div className="absolute left-[70%] top-[10%] h-32 w-32 animate-float">
          <div className="h-full w-full rounded-full bg-white/10 blur-2xl" />
        </div>
        <div className="absolute left-[40%] bottom-[20%] h-40 w-40 animate-float-slow [animation-delay:2s]">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-secondary-300/15 to-transparent blur-2xl" />
        </div>
        
        {/* Small glowing orbs */}
        <div className="absolute left-[25%] top-[45%] h-20 w-20 animate-pulse-slow">
          <div className="h-full w-full rounded-full bg-white/20 blur-xl" />
        </div>
        <div className="absolute right-[30%] bottom-[35%] h-24 w-24 animate-pulse-slow [animation-delay:1.5s]">
          <div className="h-full w-full rounded-full bg-secondary-400/25 blur-xl" />
        </div>
        
        {/* Tiny accent orbs */}
        <div className="absolute left-[60%] top-[35%] h-8 w-8 animate-twinkle">
          <div className="h-full w-full rounded-full bg-white/30 blur-md" />
        </div>
        <div className="absolute right-[15%] top-[25%] h-12 w-12 animate-twinkle [animation-delay:1s]">
          <div className="h-full w-full rounded-full bg-secondary-300/30 blur-lg" />
        </div>
        <div className="absolute left-[15%] bottom-[15%] h-10 w-10 animate-pulse-slow [animation-delay:0.5s]">
          <div className="h-full w-full rounded-full bg-primary-400/20 blur-lg" />
        </div>
      </div>

      <div className="container relative flex min-h-screen items-center">
        <div className="grid w-full items-center pt-20 lg:grid-cols-2 lg:gap-12">
          {/* Content */}
          <div className="z-10 text-white">
            <h1 className="mb-6 animate-fade-in font-alan-sans text-4xl font-bold leading-tight opacity-0 md:text-5xl lg:text-6xl [animation-fill-mode:forwards]">
              Protégez votre avenir avec{' '}
              <span className="text-secondary-400">WimAssur</span>
            </h1>
            <p className="mb-8 animate-fade-in text-lg text-gray-100 opacity-0 md:text-xl [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat">
              La vie est pleine d'incertitudes. Mais avec le bon plan d'assurance, 
              vous pouvez protéger vos proches et votre avenir financier.
            </p>
            
            {/* Email capture form */}
            <form onSubmit={handleSubmit} className="mb-8 animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              {showSuccess ? (
                <div className="flex items-center gap-3 rounded-lg bg-green-500/20 p-4 text-green-100 backdrop-blur-sm">
                  <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Merci ! Nous vous contacterons très bientôt pour votre devis personnalisé.</span>
                </div>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email professionnel"
                    className="flex-1 rounded-lg bg-white/10 px-5 py-3 text-white placeholder-white/70 backdrop-blur-sm transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn bg-white px-8 text-primary-700 font-semibold shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl hover:scale-[1.02] focus:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi...' : 'Obtenir mon devis gratuit'}
                  </button>
                </div>
              )}
              <p className="mt-3 text-sm text-gray-200">
                ✓ Devis gratuit et sans engagement • ✓ Réponse en 24h
              </p>
            </form>
            
            {/* Trust indicators */}
            <div className="mt-12 flex animate-fade-in items-center gap-8 text-sm text-gray-200 opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Courtier indépendant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>+1000 clients satisfaits</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative mt-12 lg:mt-0">
            <div className="relative z-10">
              {/* Hero image */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/[0.02] shadow-lg backdrop-blur-sm">
                <Image
                  src="/images/home/logo.png"
                  alt="WimAssur - Votre partenaire d'assurance"
                  width={800}
                  height={600}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-secondary-400/30 blur-xl" />
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary-400/30 blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
        <button
          onClick={() => scrollToSection('life-partner')}
          className="flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
          aria-label="Défiler vers le bas"
        >
          <span className="text-xs uppercase tracking-wider">Découvrir</span>
          <svg
            className="h-6 w-6 animate-bounce-subtle"
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