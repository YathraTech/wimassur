'use client'

const team = [
  {
    id: 1,
    name: 'Charmila',
    role: 'Fondateur & CEO',
    image: '/images/about/avatar.png',
    bio: "20 ans d'expérience dans l'assurance",
    social: {
      linkedin: '#',
      email: 'jean.dupont@wimassur.fr',
    },
  },
  // Add more team members here as needed
  {
    id: 2,
    name: 'Marie Laurent',
    role: 'Directrice Commerciale',
    image: '/images/about/avatar.png',
    bio: "15 ans d'expertise en conseil client",
    social: {
      linkedin: '#',
      email: 'marie.laurent@wimassur.fr',
    },
  },
  {
    id: 3,
    name: 'Thomas Martin',
    role: 'Expert Assurance',
    image: '/images/about/avatar.png',
    bio: "Spécialiste en assurance entreprise",
    social: {
      linkedin: '#',
      email: 'thomas.martin@wimassur.fr',
    },
  },
  {
    id: 4,
    name: 'Sophie Dubois',
    role: 'Responsable Sinistres',
    image: '/images/about/avatar.png',
    bio: "10 ans d'expérience en gestion de sinistres",
    social: {
      linkedin: '#',
      email: 'sophie.dubois@wimassur.fr',
    },
  },
]

export function AboutTeam() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background orbs - responsive sizing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 -top-10 sm:-right-20 sm:-top-20 h-48 w-48 sm:h-72 sm:w-72 md:h-96 md:w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 h-48 w-48 sm:h-72 sm:w-72 md:h-96 md:w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="mb-2 sm:mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-white font-benzin">
            L'équipe <span className="text-secondary-400">WimAssur</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-100 font-montserrat">
            Des experts passionnés à votre service
          </p>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group animate-fade-in opacity-0 [animation-fill-mode:forwards] w-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                {/* Profile image - responsive sizing */}
                <div className="relative mx-auto mb-4 sm:mb-5 md:mb-6 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-0.5 sm:p-1">
                  <div className="h-full w-full overflow-hidden rounded-full bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info - responsive text sizes */}
                <div className="flex-1 flex flex-col">
                  <h3 className="mb-1 text-lg sm:text-xl font-bold text-white font-benzin">{member.name}</h3>
                  <p className="mb-2 text-sm sm:text-base text-secondary-300 font-montserrat font-medium">
                    {member.role}
                  </p>
                  <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-200 font-montserrat flex-1">{member.bio}</p>
                </div>

                {/* Social links - responsive sizing and touch-friendly on mobile */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-auto">
                  <a
                    href={member.social.linkedin}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>

                {/* Hover decoration - hidden on mobile for performance */}
                <div className="absolute -bottom-8 -right-8 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-secondary-400/20 blur-2xl transition-transform duration-300 group-hover:scale-150 hidden sm:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
