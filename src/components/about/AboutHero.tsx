'use client'

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
        <div className="absolute right-[15%] top-[60%] h-48 w-48 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[60vh] items-center justify-center py-20">
        <div className="w-full text-center">
          <h1 className="mb-6 animate-fade-in text-4xl font-bold text-white opacity-0 lg:text-5xl xl:text-6xl [animation-fill-mode:forwards] font-benzin whitespace-nowrap">
            Notre histoire, <span className="text-secondary-400">votre confiance</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl animate-fade-in text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat">
            Depuis plus de 10 ans, WimAssur accompagne les professionnels et particuliers 
            dans la protection de ce qui compte vraiment pour eux.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120V60C240 20 480 0 720 20C960 40 1200 100 1440 80V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}