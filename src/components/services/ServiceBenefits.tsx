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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-montserrat px-4 sm:px-0">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group animate-fade-in opacity-0 [animation-fill-mode:forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full overflow-hidden rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-4 sm:mb-6 inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 text-2xl sm:text-3xl lg:text-4xl shadow-md transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-900 font-benzin">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-montserrat leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-8 -right-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 opacity-20 blur-2xl transition-transform duration-300 group-hover:scale-150" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust element */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 p-6 sm:p-8 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold font-montserrat">98%</div>
              <div className="text-sm sm:text-base text-primary-100 font-montserrat">Clients satisfaits</div>
            </div>
            <div>
              <div className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold font-montserrat">24/7</div>
              <div className="text-sm sm:text-base text-primary-100 font-montserrat">Assistance disponible</div>
            </div>
            <div>
              <div className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-bold font-montserrat">48h</div>
              <div className="text-sm sm:text-base text-primary-100 font-montserrat">Traitement des sinistres</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}