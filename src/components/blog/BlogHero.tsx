'use client'

import { useState } from 'react'

interface Category {
  id: string
  name: string
  slug: string
  count?: number
}

interface BlogHeroProps {
  categories?: Category[]
}

export function BlogHero({ categories: dynamicCategories }: BlogHeroProps) {
  // Calculate total count
  const totalCount = dynamicCategories?.reduce((acc, cat) => acc + (cat.count || 0), 0) || 0
  
  // Use dynamic categories if available
  const categories = dynamicCategories && dynamicCategories.length > 0 
    ? [
        { id: 'all', name: 'Tous', slug: 'all', count: totalCount },
        ...dynamicCategories
      ]
    : process.env.NODE_ENV === 'production'
    ? [] // No categories in production if none from Strapi
    : [ // Default categories only in development
        { id: 'all', name: 'Tous', slug: 'all', count: 24 },
        { id: 'auto', name: 'Assurance Auto', slug: 'auto', count: 8 },
        { id: 'habitation', name: 'Assurance Habitation', slug: 'habitation', count: 6 },
        { id: 'sante', name: 'Santé', slug: 'sante', count: 4 },
        { id: 'vie', name: 'Assurance Vie', slug: 'vie', count: 3 },
        { id: 'conseils', name: 'Conseils', slug: 'conseils', count: 3 },
      ]
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative min-h-[50vh] sm:min-h-[40vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 h-48 w-48 sm:h-64 md:h-80 lg:h-96 sm:w-64 md:w-80 lg:w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 sm:h-64 md:h-80 lg:h-96 sm:w-64 md:w-80 lg:w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[10%] sm:left-[15%] top-[25%] sm:top-[30%] h-32 w-32 sm:h-40 md:h-48 sm:w-40 md:w-48 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
        <div className="absolute right-[10%] sm:right-[20%] bottom-[15%] sm:bottom-[20%] h-36 w-36 sm:h-48 md:h-56 sm:w-48 md:w-56 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[50vh] sm:min-h-[40vh] items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-4xl text-center">
          <h1 className="mb-4 sm:mb-6 animate-fade-in text-3xl sm:text-4xl font-bold text-white opacity-0 lg:text-5xl xl:text-6xl [animation-fill-mode:forwards] font-benzin">
            Notre <span className="text-secondary-400">actualité</span>
          </h1>
          <p className="mx-auto mb-6 sm:mb-8 max-w-3xl animate-fade-in text-base sm:text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat px-4 sm:px-6 md:px-0">
            <span className="block sm:inline">Découvrez nos articles, guides et conseils</span>
            <span className="block sm:inline sm:ml-1">pour mieux comprendre le monde de l'assurance</span>
          </p>
          
          {/* Search Bar */}
          <div className="animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="relative mx-auto max-w-xl sm:max-w-2xl">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 py-3 sm:py-4 pl-12 sm:pl-14 pr-4 sm:pr-6 text-sm sm:text-base text-white placeholder-gray-300 transition-all duration-200 focus:bg-white/20 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-white/20 font-montserrat"
              />
              <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-gray-300">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Pills - Only show if categories exist */}
          {categories.length > 0 && (
            <div className="animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-0">
              {categories.map((category) => (
              <button
                key={category.slug || category.id}
                onClick={() => setSelectedCategory(category.slug || category.id)}
                className={`rounded-full px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base font-medium transition-all duration-200 font-montserrat ${
                  selectedCategory === (category.slug || category.id)
                    ? 'bg-white text-primary-700 shadow-lg'
                    : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                {category.name}
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm opacity-80">({category.count})</span>
              </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 sm:h-10 md:h-12 lg:h-auto" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 50 1440 40V60H0Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}