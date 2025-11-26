'use client'

const values = [
  {
    id: 1,
    title: 'Transparence',
    icon: '🔍',
    description: 'Nous croyons en une communication claire et honnête. Pas de frais cachés, pas de surprises.',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Expertise',
    icon: '🎯',
    description: 'Notre équipe cumule des décennies d\'expérience pour vous offrir les meilleurs conseils.',
    gradient: 'from-primary-400 to-primary-600'
  },
  {
    id: 3,
    title: 'Proximité',
    icon: '🤲',
    description: 'Nous sommes toujours là pour vous, avec une approche humaine et personnalisée.',
    gradient: 'from-secondary-400 to-secondary-600'
  },
  {
    id: 4,
    title: 'Innovation',
    icon: '💡',
    description: 'Nous utilisons les dernières technologies pour simplifier votre expérience d\'assurance.',
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    id: 5,
    title: 'Engagement',
    icon: '🛡️',
    description: 'Votre protection est notre priorité. Nous nous battons pour vos intérêts.',
    gradient: 'from-green-400 to-green-600'
  },
  {
    id: 6,
    title: 'Confiance',
    icon: '🤝',
    description: 'Construire une relation de confiance durable est au cœur de notre mission.',
    gradient: 'from-orange-400 to-orange-600'
  }
]

export function AboutValues() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-100/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary-100/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-benzin">
            Nos <span className="text-primary-600">valeurs</span>
          </h2>
          <p className="text-lg text-gray-600 font-montserrat">
            Les principes qui guident chacune de nos actions et décisions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.id}
              className="group relative animate-fade-in opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                
                {/* Icon */}
                <div className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} text-4xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <span className="animate-pulse">{value.icon}</span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-gray-900 font-benzin">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br ${value.gradient} opacity-10 blur-2xl transition-transform duration-300 group-hover:scale-150`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
          >
            Découvrez comment nous pouvons vous aider
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}