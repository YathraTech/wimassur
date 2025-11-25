'use client'

export function InsuranceCoverage() {
  const coverages = [
    {
      number: '01',
      title: 'Assurance Vie',
      description: 'Protégez l\'avenir de vos proches avec notre assurance vie. Garantissez leur sécurité financière et construisez votre patrimoine en toute sérénité.',
    },
    {
      number: '02',
      title: 'Assurance Santé',
      description: 'Bénéficiez d\'une couverture santé complète adaptée à vos besoins. Accédez aux meilleurs soins sans vous soucier des coûts médicaux imprévus.',
    },
    {
      number: '03',
      title: 'Assurance Auto',
      description: 'Roulez en toute confiance avec notre assurance automobile. Protection optimale pour votre véhicule et assistance 24h/24 en cas de sinistre.',
    },
  ]

  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <h2 className="mb-20 text-center text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-benzin">
          Nous offrons une <span className="text-primary-700">large gamme de couvertures</span>
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {coverages.map((coverage) => (
            <div
              key={coverage.number}
              className="group relative bg-white border border-gray-200 rounded-lg p-10 h-full flex flex-col transition-all duration-300 hover:bg-primary-700 hover:border-primary-700 cursor-pointer"
            >
              {/* Numéro */}
              <div className="mb-8 text-7xl font-extrabold text-gray-100 transition-colors group-hover:text-white/20">
                {coverage.number}
              </div>

              {/* Titre */}
              <h3 className="mb-6 text-2xl font-bold text-gray-900 transition-colors group-hover:text-white font-montserrat">
                {coverage.title}
              </h3>

              {/* Description */}
              <p className="mb-12 text-gray-500 leading-relaxed flex-grow transition-colors group-hover:text-white/90 font-montserrat">
                {coverage.description}
              </p>

              {/* Lien Learn More */}
              <a
                href="#"
                className="inline-flex items-center gap-3 text-lg font-medium text-gray-900 transition-colors group-hover:text-white"
              >
                En savoir plus
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}