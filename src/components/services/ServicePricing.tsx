'use client'

import { useState } from 'react'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  icon: string
}

interface ServicePricingProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export function ServicePricing({ title, subtitle, plans }: ServicePricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-montserrat">
            {subtitle}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex items-center justify-center px-4">
          <div className="relative rounded-full bg-gray-200 p-1">
            <div className="flex relative z-10">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  billingPeriod === 'monthly'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 ${
                  billingPeriod === 'yearly'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annuel
                <span className="ml-1 text-xs text-green-600">-20%</span>
              </button>
            </div>
            <div
              className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg transition-transform duration-200 ${
                billingPeriod === 'yearly' ? 'translate-x-full' : ''
              }`}
            />
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative animate-fade-in opacity-0 [animation-fill-mode:forwards] ${
                plan.highlighted ? 'sm:scale-105 lg:-mt-8' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="rounded-full bg-gradient-to-r from-secondary-400 to-secondary-500 px-3 sm:px-4 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-white shadow-lg whitespace-nowrap">
                    Plus populaire
                  </span>
                </div>
              )}
              
              <div className={`relative h-full overflow-hidden rounded-2xl sm:rounded-3xl ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl'
                  : 'bg-white shadow-lg'
              } p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl sm:hover:-translate-y-1`}>
                {/* Plan icon */}
                <div className="mb-4 sm:mb-6 text-center">
                  <div className={`inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl text-3xl sm:text-4xl ${
                    plan.highlighted
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'bg-gradient-to-br from-primary-100 to-secondary-100'
                  }`}>
                    {plan.icon}
                  </div>
                </div>

                {/* Plan name and price */}
                <div className="mb-4 sm:mb-6 text-center">
                  <h3 className={`mb-2 text-xl sm:text-2xl font-bold font-benzin ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-3xl sm:text-4xl font-bold font-montserrat ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-base sm:text-lg ${
                      plan.highlighted ? 'text-primary-100' : 'text-gray-600'
                    } font-montserrat`}>
                      /{billingPeriod === 'monthly' ? 'mois' : 'an'}
                    </span>
                  </div>
                  <p className={`text-xs sm:text-sm ${
                    plan.highlighted ? 'text-primary-100' : 'text-gray-600'
                  } font-montserrat`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className={`mt-0.5 sm:mt-1 flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? 'bg-white/20' : 'bg-green-100'
                      }`}>
                        <svg className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                          plan.highlighted ? 'text-white' : 'text-green-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-xs sm:text-sm font-montserrat ${
                        plan.highlighted ? 'text-white' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href="/contact"
                  className={`block w-full rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-center text-sm sm:text-base font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-primary-700 hover:shadow-lg sm:hover:-translate-y-0.5'
                      : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg sm:hover:-translate-y-0.5'
                  }`}
                >
                  Choisir ce plan
                </a>

                {/* Decorative element */}
                <div className={`absolute -bottom-8 -right-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full blur-3xl ${
                  plan.highlighted
                    ? 'bg-white/10'
                    : 'bg-gradient-to-br from-primary-100 to-secondary-100'
                } opacity-50 transition-transform duration-300 group-hover:scale-150 hidden sm:block`} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
          <p className="text-sm sm:text-base text-gray-600 font-montserrat">
            Tous nos plans incluent une <strong>assistance 24/7</strong> et un <strong>gestionnaire dédié</strong>
          </p>
        </div>
      </div>
    </section>
  )
}