'use client'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  icon: string
}

export function ServiceHero({ 
  title, 
  subtitle, 
  description, 
  icon
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-16 sm:pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 -top-10 sm:-right-20 sm:-top-20 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[5%] sm:left-[10%] top-[15%] sm:top-[20%] h-32 w-32 sm:h-48 sm:w-48 md:h-64 md:w-64 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
        <div className="absolute right-[10%] sm:right-[15%] top-[55%] sm:top-[60%] h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="absolute left-[65%] sm:left-[70%] bottom-[15%] sm:bottom-[20%] h-28 w-28 sm:h-40 sm:w-40 md:h-56 md:w-56 animate-float">
          <div className="h-full w-full rounded-full bg-primary-400/10 blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] items-center py-12 sm:py-16 md:py-20">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <div className="mb-6 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-bounce-slow inline-block">
                {icon}
              </span>
            </div>
            <h1 className="mb-3 sm:mb-4 animate-fade-in text-2xl sm:text-3xl md:text-4xl font-bold text-white opacity-0 lg:text-5xl xl:text-6xl [animation-delay:200ms] [animation-fill-mode:forwards] font-benzin">
              {title}
            </h1>
            <p className="mb-3 sm:mb-4 animate-fade-in text-lg sm:text-xl md:text-2xl text-secondary-300 opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] font-montserrat font-semibold">
              {subtitle}
            </p>
            <p className="mb-6 sm:mb-8 animate-fade-in text-sm sm:text-base md:text-lg text-gray-100 opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] font-montserrat">
              {description}
            </p>
            <div className="animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards] flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-primary-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 font-montserrat"
              >
                Obtenir un devis gratuit
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 font-montserrat">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Nous appeler
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 lg:mt-0 lg:pl-12">
            <div className="grid gap-4 sm:gap-6 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
              <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-secondary-400 text-xl sm:text-2xl md:text-3xl shadow-lg">
                    👥
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-montserrat">+1000</div>
                    <div className="text-sm sm:text-base text-gray-200 font-montserrat">Clients protégés</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-secondary-400 text-xl sm:text-2xl md:text-3xl shadow-lg">
                    ⭐
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-montserrat">4.9/5</div>
                    <div className="text-sm sm:text-base text-gray-200 font-montserrat">Note de satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-secondary-400 text-xl sm:text-2xl md:text-3xl shadow-lg">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-montserrat">24h</div>
                    <div className="text-sm sm:text-base text-gray-200 font-montserrat">Devis personnalisé</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V40C240 13.33 480 0 720 13.33C960 26.67 1200 66.67 1440 53.33V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}