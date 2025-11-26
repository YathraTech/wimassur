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
]

export function AboutTeam() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-white font-benzin">
            L'équipe <span className="text-secondary-400">WimAssur</span>
          </h2>
          <p className="text-lg text-gray-100 font-montserrat">
            Des experts passionnés à votre service
          </p>
        </div>

        <div className="flex justify-center">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group animate-fade-in opacity-0 [animation-fill-mode:forwards] w-full max-w-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                {/* Profile image */}
                <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                  <div className="h-full w-full overflow-hidden rounded-full bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="mb-1 text-xl font-bold text-white font-benzin">{member.name}</h3>
                  <p className="mb-2 text-secondary-300 font-montserrat font-medium">
                    {member.role}
                  </p>
                  <p className="mb-4 text-sm text-gray-200 font-montserrat flex-1">{member.bio}</p>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-3 mt-auto">
                  <a
                    href={member.social.linkedin}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>

                {/* Hover decoration */}
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-secondary-400/20 blur-2xl transition-transform duration-300 group-hover:scale-150" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
