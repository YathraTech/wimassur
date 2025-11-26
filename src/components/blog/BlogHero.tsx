'use client'

import { useState } from 'react'

const categories = [
  { id: 'all', name: 'Tous', count: 24 },
  { id: 'auto', name: 'Assurance Auto', count: 8 },
  { id: 'habitation', name: 'Assurance Habitation', count: 6 },
  { id: 'sante', name: 'Santé', count: 4 },
  { id: 'vie', name: 'Assurance Vie', count: 3 },
  { id: 'conseils', name: 'Conseils', count: 3 },
]

export function BlogHero() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative min-h-[40vh] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[15%] top-[30%] h-48 w-48 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
        <div className="absolute right-[20%] bottom-[20%] h-56 w-56 animate-float-delayed">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
      </div>

      <div className="container relative flex min-h-[40vh] items-center justify-center py-16">
        <div className="w-full max-w-4xl text-center">
          <h1 className="mb-6 animate-fade-in text-4xl font-bold text-white opacity-0 lg:text-5xl xl:text-6xl [animation-fill-mode:forwards] font-benzin">
            Notre <span className="text-secondary-400">actualité</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl animate-fade-in text-lg text-gray-100 opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-montserrat whitespace-nowrap">
            Découvrez nos articles, guides et conseils pour mieux comprendre le monde de l'assurance
          </p>
          
          {/* Search Bar */}
          <div className="animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] mb-8">
            <div className="relative mx-auto max-w-2xl">
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white/10 backdrop-blur-md border border-white/20 py-4 pl-14 pr-6 text-white placeholder-gray-300 transition-all duration-200 focus:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20 font-montserrat"
              />
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards] flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-200 font-montserrat ${
                  selectedCategory === category.id
                    ? 'bg-white text-primary-700 shadow-lg'
                    : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-80">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 10 480 0 720 10C960 20 1200 50 1440 40V60H0Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}