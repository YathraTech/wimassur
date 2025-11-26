'use client'

import Image from 'next/image'

export function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-benzin">
              Notre <span className="text-primary-600">histoire</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 font-montserrat">
              <p className="text-lg">
                Fondé en 2013, WimAssur est né de la volonté de révolutionner le monde 
                de l'assurance. Notre fondateur, fort de 20 ans d'expérience dans le 
                secteur, a constaté que les clients méritaient mieux : plus de transparence, 
                plus de proximité et surtout, des solutions vraiment adaptées à leurs besoins.
              </p>
              
              <p>
                Depuis nos débuts modestes avec une équipe de 3 personnes, nous avons 
                grandi pour devenir l'un des courtiers les plus respectés de la région. 
                Notre secret ? Une approche humaine et personnalisée qui place toujours 
                l'intérêt du client au premier plan.
              </p>
              
              <p>
                Aujourd'hui, avec plus de 1000 clients satisfaits et une équipe de 
                15 experts passionnés, nous continuons notre mission : rendre l'assurance 
                simple, accessible et adaptée à chaque situation unique.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-4">
              {[
                { year: '2013', event: 'Création de WimAssur' },
                { year: '2015', event: 'Ouverture de notre première agence' },
                { year: '2018', event: 'Partenariat avec 10+ assureurs majeurs' },
                { year: '2020', event: 'Lancement de notre plateforme digitale' },
                { year: '2023', event: 'Plus de 1000 clients nous font confiance' },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-semibold shadow-lg transition-transform group-hover:scale-110">
                    <span className="text-xs">{milestone.year}</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
                  <p className="text-gray-700 font-medium">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-secondary-100">
                  <img
                    src="/images/about/team.avif"
                    alt="L'équipe WimAssur"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-secondary-400/20 blur-3xl" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-400/20 blur-3xl" />

              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-3xl text-white">
                    🏆
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 font-benzin">10+</p>
                    <p className="text-sm text-gray-600 font-montserrat">Années d'excellence</p>
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