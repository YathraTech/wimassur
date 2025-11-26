'use client'

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-20">
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
        <div className="absolute left-[70%] bottom-[20%] h-56 w-56 animate-float">
          <div className="h-full w-full rounded-full bg-primary-400/10 blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[50vh] items-center justify-center py-16">
        <div className="w-full text-center">
          <h1 className="mb-6 animate-fade-in text-4xl font-bold text-white opacity-0 lg:text-5xl xl:text-6xl [animation-fill-mode:forwards] font-benzin">
            Parlons de <span className="text-secondary-400">votre protection</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl animate-fade-in text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat">
            Notre équipe est à votre écoute pour vous conseiller et vous accompagner dans tous vos projets d'assurance
          </p>
          
          {/* Quick contact info */}
          <div className="animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 text-white hover:text-secondary-400 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-montserrat font-medium">+33 1 23 45 67 89</span>
            </a>
            <a href="mailto:contact@wimassur.fr" className="flex items-center gap-2 text-white hover:text-secondary-400 transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-montserrat font-medium">contact@wimassur.fr</span>
            </a>
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