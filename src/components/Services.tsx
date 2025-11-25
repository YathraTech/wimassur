import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Nos Services d'Assurance
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Des solutions sur mesure pour protéger ce qui compte le plus pour vous
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="card group cursor-pointer transition-all hover:-translate-y-1"
            >
              <div className="mb-4 text-5xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 flex items-center gap-2 font-semibold text-primary-600 transition-colors group-hover:text-primary-700">
                En savoir plus
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}