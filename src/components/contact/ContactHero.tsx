'use client'

export function ContactHero() {
  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-16 md:pt-20">
      {/* Background decorations - responsive sizes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 -top-10 md:-right-20 md:-top-20 h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs - hidden on mobile, smaller on tablets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
        <div className="absolute right-[15%] top-[60%] h-24 w-24 md:h-36 md:w-36 lg:h-48 lg:w-48 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="absolute left-[70%] bottom-[20%] h-28 w-28 md:h-42 md:w-42 lg:h-56 lg:w-56 animate-float">
          <div className="h-full w-full rounded-full bg-primary-400/10 blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[40vh] md:min-h-[50vh] items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="w-full text-center">
          <h1 className="mb-4 sm:mb-6 animate-fade-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white opacity-0 [animation-fill-mode:forwards] font-benzin">
            Parlons de <span className="text-secondary-400 block sm:inline">votre protection</span>
          </h1>
          <p className="mx-auto mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl animate-fade-in text-sm sm:text-base md:text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat px-4 sm:px-0">
            Notre équipe est à votre écoute pour vous conseiller et vous accompagner dans tous vos projets d'assurance
          </p>
          
          {/* Quick contact info - stacked on mobile */}
          <div className="animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
            <a href="tel:0611393247" className="flex items-center gap-2 text-white hover:text-secondary-400 transition-colors group">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-montserrat font-medium text-sm sm:text-base">06 11 39 32 47</span>
            </a>
            <a href="mailto:contact@wimassur.fr" className="flex items-center gap-2 text-white hover:text-secondary-400 transition-colors group">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-montserrat font-medium text-sm sm:text-base">contact@wimassur.fr</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave - responsive height */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V40C240 13.33 480 0 720 13.33C960 26.67 1200 66.67 1440 53.33V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}