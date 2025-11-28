'use client'

import Image from 'next/image'

export function LifePartner() {
  const benefits = [
    'Protégez votre bien-être financier',
    "Consultez un courtier d'assurance expert",
    'Des primes régulières adaptées à votre budget',
  ]

  const benefits2 = [
    'Analyse personnalisée de vos besoins',
    'Comparaison des meilleures offres du marché',
    'Accompagnement dans toutes vos démarches',
  ]

  return (
    <section id="life-partner" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image Section */}
          <div className="max-w-md mx-auto lg:max-w-none">
            <Image
              src="/images/home/home1.jpg"
              alt="Famille heureuse protégée par l'assurance"
              width={600}
              height={800}
              className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-lg"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="py-4 sm:py-6 lg:py-8">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold leading-tight text-gray-900 lg:text-4xl xl:text-5xl font-benzin">
              Votre partenaire pour <span className="text-primary-700">le voyage de la vie</span>
            </h2>

            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 leading-relaxed font-montserrat">
              L'assurance offre une sécurité financière et une tranquillité d'esprit. Elle vous aide
              à vous protéger contre les imprévus financiers et à construire un avenir serein pour
              vous et vos proches.
            </p>

            <ul className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <svg
                      className="h-3 w-3 sm:h-4 sm:w-4 text-primary-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-montserrat">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:translate-y-[-2px] w-full sm:w-auto justify-center sm:justify-start"
            >
              En savoir plus
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Deuxième section avec disposition inversée */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 mt-12 sm:mt-16 md:mt-20">
          {/* Content Section - À gauche sur desktop */}
          <div className="order-2 lg:order-1 py-4 sm:py-6 lg:py-8">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold leading-tight text-gray-900 lg:text-4xl xl:text-5xl font-benzin">
              Une protection <span className="text-primary-700">adaptée à vos besoins</span>
            </h2>

            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 leading-relaxed font-montserrat">
              Chez WimAssur, nous comprenons que chaque situation est unique. Notre équipe d'experts
              analyse vos besoins spécifiques pour vous proposer les solutions d'assurance les plus
              adaptées à votre profil professionnel.
            </p>

            <ul className="mb-8 sm:mb-10 space-y-3 sm:space-y-4">
              {benefits2.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <svg
                      className="h-3 w-3 sm:h-4 sm:w-4 text-primary-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-montserrat">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:translate-y-[-2px] w-full sm:w-auto justify-center sm:justify-start"
            >
              En savoir plus
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Image Section - À droite sur desktop */}
          <div className="order-1 lg:order-2 max-w-md mx-auto lg:max-w-none">
            <Image
              src="/images/home/home1.jpg"
              alt="Conseiller en assurance professionnel"
              width={600}
              height={800}
              className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
