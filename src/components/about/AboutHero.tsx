'use client'

export function AboutHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-16 sm:pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 -top-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 animate-breathe rounded-full bg-primary-500/20 blur-2xl sm:blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-2xl sm:blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[5%] sm:left-[10%] top-[15%] sm:top-[20%] h-32 w-32 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-2xl sm:blur-3xl" />
        </div>
        <div className="absolute right-[5%] sm:right-[10%] md:right-[15%] top-[55%] sm:top-[60%] h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-white/5 blur-2xl sm:blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[50vh] sm:min-h-[60vh] items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="w-full text-center">
          <h1 className="mb-4 sm:mb-6 animate-fade-in text-2xl sm:text-3xl md:text-4xl font-bold text-white opacity-0 lg:text-5xl xl:text-6xl [animation-fill-mode:forwards] font-benzin">
            <span className="block sm:inline">Notre histoire,</span>{' '}
            <span className="text-secondary-400 block sm:inline">votre confiance</span>
          </h1>
          <p className="mx-auto mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl animate-fade-in text-sm sm:text-base md:text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat px-4 sm:px-0">
            Depuis plus de 10 ans, WimAssur accompagne les professionnels et particuliers 
            dans la protection de ce qui compte vraiment pour eux.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120V60C240 20 480 0 720 20C960 40 1200 100 1440 80V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}