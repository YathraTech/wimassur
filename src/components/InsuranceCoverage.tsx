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
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Title - Responsive font sizes and margins */}
        <h2 className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight font-benzin">
          Nous offrons une <span className="text-primary-700">large gamme de couvertures</span>
        </h2>

        {/* Grid - 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {coverages.map((coverage) => (
            <div
              key={coverage.number}
              className="group relative bg-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 h-full flex flex-col transition-all duration-300 hover:bg-primary-700 hover:border-primary-700 cursor-pointer"
            >
              {/* Numéro - Responsive font size */}
              <div className="mb-4 sm:mb-6 md:mb-8 text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-100 transition-colors group-hover:text-white/20">
                {coverage.number}
              </div>

              {/* Titre - Responsive font size and margin */}
              <h3 className="mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl font-bold text-gray-900 transition-colors group-hover:text-white font-montserrat">
                {coverage.title}
              </h3>

              {/* Description - Responsive text size and margin */}
              <p className="mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base text-gray-500 leading-relaxed flex-grow transition-colors group-hover:text-white/90 font-montserrat">
                {coverage.description}
              </p>

              {/* Lien Learn More - Responsive text and icon size */}
              <a
                href="#"
                className="inline-flex items-center gap-2 sm:gap-3 text-base sm:text-lg font-medium text-gray-900 transition-colors group-hover:text-white"
              >
                En savoir plus
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
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