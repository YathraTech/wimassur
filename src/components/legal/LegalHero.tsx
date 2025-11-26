'use client'

interface LegalHeroProps {
  title: string
  subtitle?: string
  lastUpdated?: string
}

export function LegalHero({ title, subtitle, lastUpdated }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-20">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -right-40 -top-40 h-80 w-80 animate-breathe-slow rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-breathe-slow rounded-full bg-secondary-400/10 blur-3xl" />
      </div>

      <div className="container relative py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 animate-fade-in text-4xl font-bold text-white opacity-0 lg:text-5xl [animation-fill-mode:forwards] font-benzin">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-4 animate-fade-in text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat">
              {subtitle}
            </p>
          )}
          {lastUpdated && (
            <p className="animate-fade-in text-sm text-primary-100 opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] font-montserrat">
              Dernière mise à jour : {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 50 1440 40V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}