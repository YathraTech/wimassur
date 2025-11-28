'use client'

import Image from 'next/image'

export function AboutStory() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-benzin">
              Notre <span className="text-primary-600">histoire</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-lg text-gray-600 font-montserrat leading-relaxed text-justify">
              <p>
                Fondé en 2025, <span className="text-gray-700 font-medium">WimAssur</span> est né de la volonté de révolutionner le monde de 
                l'assurance. Notre équipe, forte de <span className="text-primary-600 font-medium">20 ans d'expérience</span> dans le secteur, a constaté 
                que les clients méritaient mieux : plus de transparence, plus de proximité et surtout, 
                des solutions vraiment adaptées à leurs besoins.
              </p>
              
              <p>
                En effet, nous avons constaté que trop de personnes se retrouvaient sans solution adaptée, 
                mal conseillées… ou même refusées par leur assureur. Nous avons donc décidé de créer une <span className="text-gray-700 font-medium">alternative réellement humaine</span>. Nous voulons développer une approche humaine et 
                personnalisée qui place toujours l'intérêt du client au premier plan.
              </p>
              
              <p>
                Aujourd'hui, de nombreux clients satisfaits et avec une équipe de <span className="text-primary-600 font-medium">5 experts 
                passionnés</span>, nous continuons notre mission : rendre l'assurance simple, accessible et 
                adaptée à chaque situation unique.
              </p>

              <p>
                Depuis notre lancement, nous avons déjà su gagner la confiance d'un nombre 
                grandissant de clients grâce à notre <span className="text-gray-700 font-medium">approche humaine</span> et à la qualité de nos 
                conseils personnalisés.
              </p>

              <div className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 bg-primary-50 rounded-xl sm:rounded-2xl border-l-2 sm:border-l-4 border-primary-600">
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-medium italic text-center">
                  « Notre mission reste la même : mettre notre expérience au service de votre tranquillité, 
                  et faire de l'assurance un domaine clair, compréhensible et fait pour vous. »
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 sm:mt-10 lg:mt-12 space-y-3 sm:space-y-4">
              {[
                { year: '2025', event: 'Création de WimAssur' },
                { year: '2025', event: 'Lancement de notre approche humaine' },
                { year: '2025', event: 'Premières solutions personnalisées' },
                { year: '2025', event: 'Équipe de 5 experts passionnés' },
                { year: '2025', event: 'Des clients satisfaits nous font confiance' },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-semibold shadow-lg transition-transform group-hover:scale-110">
                    <span className="text-[10px] sm:text-xs">{milestone.year}</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
                  <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-secondary-100">
                  <img
                    src="/images/about/team.avif"
                    alt="L'équipe WimAssur"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements - hidden on mobile */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-secondary-400/20 blur-3xl" />
              <div className="hidden sm:block absolute -right-8 -top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-primary-400/20 blur-3xl" />

              {/* Stats card - responsive positioning */}
              <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 lg:p-6 shadow-lg sm:shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-2xl sm:text-3xl text-white">
                    🏆
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 font-benzin">20</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-montserrat">Ans d'expérience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}