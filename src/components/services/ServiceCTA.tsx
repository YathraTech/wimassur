'use client'

interface ServiceCTAProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage?: string
}

export function ServiceCTA({ 
  title, 
  subtitle, 
  primaryButtonText,
  primaryButtonLink = '/contact',
  secondaryButtonText,
  secondaryButtonLink = 'tel:+33123456789',
  backgroundImage
}: ServiceCTAProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[20%] bottom-[10%] h-48 w-48 animate-float">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="absolute right-[10%] top-[20%] h-56 w-56 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl font-benzin animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            {title}
          </h2>
          <p className="mb-8 text-xl text-gray-100 font-montserrat animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <a
              href={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-primary-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-montserrat group"
            >
              {primaryButtonText}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            {secondaryButtonText && (
              <a
                href={secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20 font-montserrat"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {secondaryButtonText}
              </a>
            )}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="flex items-center gap-2 text-white">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-montserrat">Devis gratuit</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-montserrat">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-montserrat">Réponse en 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}