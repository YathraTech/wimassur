'use client'

interface Benefit {
  icon: string
  title: string
  description: string
}

interface ServiceBenefitsProps {
  title: string
  subtitle: string
  benefits: Benefit[]
}

export function ServiceBenefits({ title, subtitle, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-montserrat">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group animate-fade-in opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 text-4xl shadow-md transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 font-benzin">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 opacity-20 blur-2xl transition-transform duration-300 group-hover:scale-150" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust element */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <div className="mb-2 text-4xl font-bold font-montserrat">98%</div>
              <div className="text-primary-100 font-montserrat">Clients satisfaits</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold font-montserrat">24/7</div>
              <div className="text-primary-100 font-montserrat">Assistance disponible</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold font-montserrat">48h</div>
              <div className="text-primary-100 font-montserrat">Traitement des sinistres</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}