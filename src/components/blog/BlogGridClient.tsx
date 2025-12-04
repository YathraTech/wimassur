'use client'

import { useState } from 'react'
import type { BlogPost } from '@/lib/strapi'
import { getStrapiImageUrl } from '@/lib/strapi'
import Image from 'next/image'
import Link from 'next/link'

const categoryColors: { [key: string]: string } = {
  'auto': 'from-blue-500 to-blue-600',
  'habitation': 'from-green-500 to-green-600',
  'vie': 'from-purple-500 to-purple-600',
  'sante': 'from-red-500 to-red-600',
  'conseils': 'from-orange-500 to-orange-600',
  'animaux': 'from-pink-500 to-pink-600',
  'professionnel': 'from-indigo-500 to-indigo-600',
  'voyage': 'from-teal-500 to-teal-600',
  'retraite': 'from-gray-500 to-gray-600',
  'default': 'from-amber-500 to-amber-600'
}

const categoryIcons: { [key: string]: string } = {
  'auto': '🚗',
  'habitation': '🏠',
  'vie': '💼',
  'sante': '❤️',
  'conseils': '💡',
  'animaux': '🐾',
  'professionnel': '💼',
  'voyage': '✈️',
  'retraite': '🏖️',
  'default': '📋'
}

const categoryGradients: { [key: string]: string } = {
  'auto': 'from-blue-100 to-blue-200',
  'habitation': 'from-green-100 to-green-200',
  'vie': 'from-purple-100 to-purple-200',
  'sante': 'from-red-100 to-red-200',
  'conseils': 'from-orange-100 to-orange-200',
  'animaux': 'from-pink-100 to-pink-200',
  'professionnel': 'from-indigo-100 to-indigo-200',
  'voyage': 'from-teal-100 to-teal-200',
  'retraite': 'from-gray-100 to-gray-200',
  'default': 'from-amber-100 to-amber-200'
}

// Mock data as fallback
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment choisir la meilleure assurance auto en 2024',
    slug: 'comment-choisir-assurance-auto-2024',
    excerpt: 'Découvrez nos conseils d\'experts pour sélectionner une assurance auto adaptée à vos besoins et votre budget.',
    content: '',
    category: 'Assurance Auto',
    categorySlug: 'auto',
    publishedAt: new Date().toISOString(),
    readingTime: 5,
    featured: true,
    author: {
      name: 'Marie Martin',
      role: 'Experte en assurance'
    }
  },
  {
    id: '2',
    title: 'Protégez votre maison : Guide complet de l\'assurance habitation',
    slug: 'guide-assurance-habitation',
    excerpt: 'Tout ce que vous devez savoir sur l\'assurance habitation : garanties essentielles et conseils.',
    content: '',
    category: 'Assurance Habitation',
    categorySlug: 'habitation',
    publishedAt: new Date().toISOString(),
    readingTime: 8,
    featured: false,
    author: {
      name: 'Thomas Bernard',
      role: 'Conseiller senior'
    }
  },
  {
    id: '3',
    title: 'Assurance santé : Les nouveautés 2024',
    slug: 'assurance-sante-nouveautes-2024',
    excerpt: 'Découvrez les changements importants dans le domaine de l\'assurance santé cette année.',
    content: '',
    category: 'Santé',
    categorySlug: 'sante',
    publishedAt: new Date().toISOString(),
    readingTime: 6,
    featured: false,
    author: {
      name: 'Sophie Leroy',
      role: 'Spécialiste santé'
    }
  }
]

interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

interface BlogGridClientProps {
  initialPosts: BlogPost[]
  pagination?: any
  categories?: Category[]
}

export function BlogGridClient({ initialPosts, pagination, categories = [] }: BlogGridClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Use mock data if no posts from Strapi
  const allPosts = initialPosts.length > 0 ? initialPosts : mockPosts
  
  // Filter posts by selected category
  const posts = selectedCategory 
    ? allPosts.filter(post => post.categorySlug === selectedCategory)
    : allPosts
  
  const postsPerPage = 6
  const totalPages = Math.ceil(posts.length / postsPerPage)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  
  const featuredPost = posts.find(post => post.featured) || posts[0]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Active filter indicator */}
            {selectedCategory && (
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between rounded-lg bg-primary-50 p-4 gap-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-sm text-gray-600">Filtré par :</span>
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-gradient-to-r ${categoryColors[selectedCategory] || categoryColors['default']} text-white`}>
                    <span>{categoryIcons[selectedCategory] || categoryIcons['default']}</span>
                    <span>{categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}</span>
                  </span>
                  <span className="text-sm text-gray-600">
                    ({posts.length} article{posts.length > 1 ? 's' : ''})
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setCurrentPage(1)
                  }}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium whitespace-nowrap"
                >
                  Effacer le filtre
                </button>
              </div>
            )}
            {/* Featured Post */}
            {currentPage === 1 && featuredPost && (
              <article className="mb-8 sm:mb-10 lg:mb-12 group animate-fade-in opacity-0 [animation-fill-mode:forwards]">
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                    <div className="grid md:grid-cols-2">
                      <div className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden">
                        {featuredPost.image ? (
                          <Image
                            src={getStrapiImageUrl(featuredPost.image, 'medium') || ''}
                            alt={featuredPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`h-full w-full bg-gradient-to-br ${categoryGradients[featuredPost.categorySlug] || categoryGradients['conseils']} relative`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-6xl sm:text-7xl lg:text-8xl opacity-20">{categoryIcons[featuredPost.categorySlug] || categoryIcons['conseils']}</div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <div className="mb-3 sm:mb-4">
                          <span className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[featuredPost.categorySlug] || categoryColors['conseils']} px-3 py-1 text-xs font-semibold text-white`}>
                            {featuredPost.category}
                          </span>
                        </div>
                        <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-gray-900 font-benzin group-hover:text-primary-600 transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 font-montserrat line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 font-montserrat">
                          <div className="flex items-center gap-2">
                            {featuredPost.author.avatar ? (
                              <Image
                                src={getStrapiImageUrl(featuredPost.author.avatar, 'thumbnail') || ''}
                                alt={featuredPost.author.name}
                                width={32}
                                height={32}
                                className="rounded-full w-6 h-6 sm:w-8 sm:h-8"
                              />
                            ) : (
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"></div>
                            )}
                            <span className="font-medium">{featuredPost.author.name}</span>
                          </div>
                          <span className="hidden sm:inline">•</span>
                          <span>{formatDate(featuredPost.publishedAt)}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{featuredPost.readingTime} min de lecture</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* Articles Grid */}
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
              {currentPosts.filter(post => currentPage !== 1 || post.id !== featuredPost?.id).map((post, index) => (
                <article 
                  key={post.id} 
                  className="group animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-full overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      {/* Image */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        {post.image ? (
                          <Image
                            src={getStrapiImageUrl(post.image, 'small') || ''}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`h-full w-full bg-gradient-to-br ${categoryGradients[post.categorySlug] || categoryGradients['default']} relative`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-5xl sm:text-6xl opacity-25">{categoryIcons[post.categorySlug] || categoryIcons['conseils']}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <div className="mb-2 sm:mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[post.categorySlug] || categoryColors['conseils']} px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white`}>
                            {post.category}
                          </span>
                          <span className="text-xs sm:text-sm text-gray-500 font-montserrat">{formatDate(post.publishedAt)}</span>
                        </div>

                        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-900 font-benzin group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 font-montserrat line-clamp-2 sm:line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {post.author.avatar ? (
                              <Image
                                src={getStrapiImageUrl(post.author.avatar, 'thumbnail') || ''}
                                alt={post.author.name}
                                width={24}
                                height={24}
                                className="rounded-full w-5 h-5 sm:w-6 sm:h-6"
                              />
                            ) : (
                              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"></div>
                            )}
                            <span className="text-xs sm:text-sm font-medium text-gray-700 font-montserrat truncate max-w-[120px] sm:max-w-none">{post.author.name}</span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-500 font-montserrat">{post.readingTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center justify-center gap-1 sm:gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Mobile: Show fewer page numbers */}
                <div className="flex gap-1 sm:gap-2">
                  {totalPages <= 5 ? (
                    [...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm sm:text-base font-medium transition-all ${
                          currentPage === index + 1
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                            : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))
                  ) : (
                    <>
                      {/* Show first page */}
                      <button
                        onClick={() => setCurrentPage(1)}
                        className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm sm:text-base font-medium transition-all ${
                          currentPage === 1
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                            : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
                        }`}
                      >
                        1
                      </button>
                      
                      {/* Show dots if needed */}
                      {currentPage > 3 && (
                        <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-gray-400">...</span>
                      )}
                      
                      {/* Show current page and neighbors */}
                      {currentPage > 2 && currentPage < totalPages - 1 && (
                        <>
                          {currentPage > 3 && (
                            <button
                              onClick={() => setCurrentPage(currentPage - 1)}
                              className="hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-sm sm:text-base text-gray-600 shadow-md hover:shadow-lg font-medium transition-all"
                            >
                              {currentPage - 1}
                            </button>
                          )}
                          <button
                            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm sm:text-base shadow-lg font-medium"
                          >
                            {currentPage}
                          </button>
                          {currentPage < totalPages - 2 && (
                            <button
                              onClick={() => setCurrentPage(currentPage + 1)}
                              className="hidden sm:flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-sm sm:text-base text-gray-600 shadow-md hover:shadow-lg font-medium transition-all"
                            >
                              {currentPage + 1}
                            </button>
                          )}
                        </>
                      )}
                      
                      {/* Show dots if needed */}
                      {currentPage < totalPages - 2 && (
                        <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-gray-400">...</span>
                      )}
                      
                      {/* Show last page */}
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-sm sm:text-base font-medium transition-all ${
                          currentPage === totalPages
                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                            : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - Moves below main content on mobile */}
          <aside className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
              {/* Popular Articles */}
              <div className="rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 shadow-lg">
                <h3 className="mb-4 sm:mb-6 text-lg sm:text-xl font-bold text-gray-900 font-benzin">
                  Articles populaires
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <article key={post.id} className="group">
                      <Link href={`/blog/${post.slug}`}>
                        <h4 className="mb-1 text-sm sm:text-base font-semibold text-gray-900 font-montserrat group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-500 font-montserrat">{formatDate(post.publishedAt)}</p>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-5 sm:p-6 text-white">
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold font-benzin">
                  Restez informé
                </h3>
                <p className="mb-4 sm:mb-6 text-xs sm:text-sm opacity-90 font-montserrat">
                  Recevez nos derniers articles et conseils directement dans votre boîte mail
                </p>
                <form className="space-y-3 sm:space-y-4">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/70 transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 font-montserrat"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg sm:rounded-xl bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5 font-montserrat"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="rounded-xl sm:rounded-2xl bg-white p-5 sm:p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-benzin">
                    Catégories
                  </h3>
                  {selectedCategory && (
                    <button
                      onClick={() => {
                        setSelectedCategory(null)
                        setCurrentPage(1)
                      }}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Tout voir
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.length > 0 ? (
                    categories.map((category) => {
                      const gradient = categoryColors[category.slug] || categoryColors['default']
                      const icon = categoryIcons[category.slug] || categoryIcons['default']
                      const categoryPosts = allPosts.filter(post => post.categorySlug === category.slug)
                      
                      return (
                        <button
                          key={category.id}
                          onClick={() => {
                            setSelectedCategory(category.slug === selectedCategory ? null : category.slug)
                            setCurrentPage(1)
                          }}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            selectedCategory === category.slug
                              ? `bg-gradient-to-r ${gradient} text-white shadow-lg scale-105 -translate-y-0.5 ring-2 ring-offset-2 ring-primary-500`
                              : `bg-gradient-to-r ${gradient} text-white hover:shadow-lg hover:scale-105 hover:-translate-y-0.5`
                          }`}
                        >
                          <span className="text-base">{icon}</span>
                          <span>{category.name}</span>
                          <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                            {categoryPosts.length}
                          </span>
                        </button>
                      )
                    })
                  ) : (
                    // Fallback avec catégories hardcodées si aucune catégorie de Strapi
                    Object.entries(categoryColors).map(([slug, gradient]) => {
                      const categoryPosts = allPosts.filter(post => post.categorySlug === slug)
                      if (categoryPosts.length === 0) return null
                      
                      return (
                        <button
                          key={slug}
                          onClick={() => {
                            setSelectedCategory(slug === selectedCategory ? null : slug)
                            setCurrentPage(1)
                          }}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            selectedCategory === slug
                              ? `bg-gradient-to-r ${gradient} text-white shadow-lg scale-105 -translate-y-0.5 ring-2 ring-offset-2 ring-primary-500`
                              : `bg-gradient-to-r ${gradient} text-white hover:shadow-lg hover:scale-105 hover:-translate-y-0.5`
                          }`}
                        >
                          <span className="text-base">{categoryIcons[slug]}</span>
                          <span className="capitalize">
                            {slug === 'conseils' ? 'Conseils' : `Assurance ${slug}`}
                          </span>
                          <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                            {categoryPosts.length}
                          </span>
                        </button>
                      )
                    })
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}