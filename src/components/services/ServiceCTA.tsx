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
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background decorations - responsive sizes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 h-48 sm:h-72 md:h-96 w-48 sm:w-72 md:w-96 animate-breathe rounded-full bg-primary-500/20 blur-2xl sm:blur-3xl" />
        <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 h-48 sm:h-72 md:h-96 w-48 sm:w-72 md:w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-2xl sm:blur-3xl" />
      </div>

      {/* Floating Orbs - responsive sizes and positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] sm:left-[20%] bottom-[5%] sm:bottom-[10%] h-32 sm:h-40 md:h-48 w-32 sm:w-40 md:w-48 animate-float">
          <div className="h-full w-full rounded-full bg-white/5 blur-2xl sm:blur-3xl" />
        </div>
        <div className="absolute right-[5%] sm:right-[10%] top-[10%] sm:top-[20%] h-36 sm:h-48 md:h-56 w-36 sm:w-48 md:w-56 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-2xl sm:blur-3xl" />
        </div>
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white lg:text-5xl font-benzin animate-fade-in opacity-0 [animation-fill-mode:forwards] leading-tight">
            {title}
          </h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-100 font-montserrat animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] px-4 sm:px-0">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] px-4 sm:px-0">
            <a
              href={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-primary-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-montserrat group min-h-[48px] touch-manipulation"
            >
              {primaryButtonText}
              <svg className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            {secondaryButtonText && (
              <a
                href={secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 active:bg-white/30 font-montserrat min-h-[48px] touch-manipulation"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {secondaryButtonText}
              </a>
            )}
          </div>

          {/* Trust badges */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-montserrat text-sm sm:text-base">Devis gratuit</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-montserrat text-sm sm:text-base">Sans engagement</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-white">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-montserrat text-sm sm:text-base">Réponse en 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}