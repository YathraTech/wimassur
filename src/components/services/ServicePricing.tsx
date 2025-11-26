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
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-benzin">
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-montserrat">
            {subtitle}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mb-12 flex items-center justify-center">
          <div className="relative rounded-full bg-gray-200 p-1">
            <div className="flex relative z-10">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                  billingPeriod === 'monthly'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 ${
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative animate-fade-in opacity-0 [animation-fill-mode:forwards] ${
                plan.highlighted ? 'lg:-mt-8' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="rounded-full bg-gradient-to-r from-secondary-400 to-secondary-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    Plus populaire
                  </span>
                </div>
              )}
              
              <div className={`relative h-full overflow-hidden rounded-3xl ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl'
                  : 'bg-white shadow-lg'
              } p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
                {/* Plan icon */}
                <div className="mb-6 text-center">
                  <div className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl text-4xl ${
                    plan.highlighted
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'bg-gradient-to-br from-primary-100 to-secondary-100'
                  }`}>
                    {plan.icon}
                  </div>
                </div>

                {/* Plan name and price */}
                <div className="mb-6 text-center">
                  <h3 className={`mb-2 text-2xl font-bold font-benzin ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold font-montserrat ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${
                      plan.highlighted ? 'text-primary-100' : 'text-gray-600'
                    } font-montserrat`}>
                      /{billingPeriod === 'monthly' ? 'mois' : 'an'}
                    </span>
                  </div>
                  <p className={`text-sm ${
                    plan.highlighted ? 'text-primary-100' : 'text-gray-600'
                  } font-montserrat`}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? 'bg-white/20' : 'bg-green-100'
                      }`}>
                        <svg className={`h-3 w-3 ${
                          plan.highlighted ? 'text-white' : 'text-green-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm font-montserrat ${
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
                  className={`block w-full rounded-full px-6 py-3 text-center font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-primary-700 hover:shadow-lg hover:-translate-y-0.5'
                      : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  Choisir ce plan
                </a>

                {/* Decorative element */}
                <div className={`absolute -bottom-8 -right-8 h-32 w-32 rounded-full blur-3xl ${
                  plan.highlighted
                    ? 'bg-white/10'
                    : 'bg-gradient-to-br from-primary-100 to-secondary-100'
                } opacity-50 transition-transform duration-300 group-hover:scale-150`} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-montserrat">
            Tous nos plans incluent une <strong>assistance 24/7</strong> et un <strong>gestionnaire dédié</strong>
          </p>
        </div>
      </div>
    </section>
  )
}