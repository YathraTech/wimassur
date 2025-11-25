'use client'

const benefits = [
  {
    title: 'Conseil personnalisé',
    description: 'Un accompagnement sur mesure adapté à votre situation et vos besoins spécifiques.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Comparaison objective',
    description: 'Accès aux meilleures offres du marché grâce à notre indépendance.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Gain de temps',
    description: 'Nous gérons toutes les démarches administratives pour vous simplifier la vie.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Suivi personnalisé',
    description: 'Un interlocuteur unique qui vous accompagne tout au long de votre contrat.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Pourquoi choisir WimAssur ?
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Découvrez les avantages de faire appel à un courtier indépendant
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
              
              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-primary-50 opacity-50 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg text-gray-700">
            Plus de <span className="font-bold text-primary-600">1000 clients</span> nous font déjà confiance
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Rejoignez-les
          </button>
        </div>
      </div>
    </section>
  )
}