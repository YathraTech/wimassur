'use client'

import { useState } from 'react'

// Mock data - sera remplacé par les données de Strapi
const blogPosts = [
  {
    id: '1',
    title: 'Comment choisir la meilleure assurance auto en 2024',
    excerpt: 'Découvrez nos conseils d\'experts pour sélectionner une assurance auto adaptée à vos besoins et votre budget. Comparaisons et astuces incluses.',
    category: 'Assurance Auto',
    categorySlug: 'auto',
    date: '15 novembre 2024',
    readTime: '5 min',
    author: {
      name: 'Marie Martin',
      role: 'Experte en assurance',
      avatar: '/images/about/avatar.png'
    },
    image: '/images/blog/auto-insurance.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Protégez votre maison : Guide complet de l\'assurance habitation',
    excerpt: 'Tout ce que vous devez savoir sur l\'assurance habitation : garanties essentielles, options supplémentaires et conseils pour économiser.',
    category: 'Assurance Habitation',
    categorySlug: 'habitation',
    date: '12 novembre 2024',
    readTime: '8 min',
    author: {
      name: 'Thomas Bernard',
      role: 'Conseiller senior',
      avatar: '/images/about/avatar.png'
    },
    image: '/images/blog/home-insurance.jpg',
    featured: false
  },
  {
    id: '3',
    title: 'Assurance vie : Préparez l\'avenir sereinement',
    excerpt: 'L\'assurance vie est un outil essentiel pour protéger vos proches et préparer votre retraite. Découvrez comment optimiser votre contrat.',
    category: 'Assurance Vie',
    categorySlug: 'vie',
    date: '10 novembre 2024',
    readTime: '6 min',
    author: {
      name: 'Sophie Leroy',
      role: 'Spécialiste épargne',
      avatar: '/images/about/avatar.png'
    },
    image: '/images/blog/life-insurance.jpg',
    featured: true
  },
  {
    id: '4',
    title: '5 erreurs à éviter lors d\'une déclaration de sinistre',
    excerpt: 'Évitez les pièges courants lors de la déclaration d\'un sinistre. Nos experts partagent leurs conseils pour un traitement rapide de votre dossier.',
    category: 'Conseils',
    categorySlug: 'conseils',
    date: '8 novembre 2024',
    readTime: '4 min',
    author: {
      name: 'Jean Dupont',
      role: 'Gestionnaire sinistres',
      avatar: '/images/about/avatar.png'
    },
    image: '/images/blog/claims.jpg',
    featured: false
  },
  {
    id: '5',
    title: 'Assurance santé : Les nouveautés 2024',
    excerpt: 'Découvrez les changements importants dans le domaine de l\'assurance santé cette année et comment ils peuvent affecter votre couverture.',
    category: 'Santé',
    categorySlug: 'sante',
    date: '5 novembre 2024',
    readTime: '7 min',
    author: {
      name: 'Marie Martin',
      role: 'Experte en assurance',
      avatar: '/images/about/avatar.png'
    },
    image: '/images/blog/health-insurance.jpg',
    featured: false
  },
  {
    id: '6',
    title: 'Économisez sur votre assurance : 10 astuces méconnues',
    excerpt: 'Réduisez vos primes d\'assurance sans sacrifier votre protection. Découvrez des stratégies simples mais efficaces pour économiser.',
    category: 'Conseils',
    categorySlug: 'conseils',
    date: '2 novembre 2024',
    readTime: '5 min',
    author: {
      name: 'Thomas Bernard',
      role: 'Conseiller senior',
      avatar: '/images/about/avatar.png'
    },
    image: '/images/blog/save-money.jpg',
    featured: false
  }
]

const categoryColors: { [key: string]: string } = {
  'auto': 'from-blue-500 to-blue-600',
  'habitation': 'from-green-500 to-green-600',
  'vie': 'from-purple-500 to-purple-600',
  'sante': 'from-red-500 to-red-600',
  'conseils': 'from-orange-500 to-orange-600'
}

const categoryIcons: { [key: string]: string } = {
  'auto': '🚗',
  'habitation': '🏠',
  'vie': '💼',
  'sante': '❤️',
  'conseils': '💡'
}

const categoryGradients: { [key: string]: string } = {
  'auto': 'from-blue-100 to-blue-200',
  'habitation': 'from-green-100 to-green-200',
  'vie': 'from-purple-100 to-purple-200',
  'sante': 'from-red-100 to-red-200',
  'conseils': 'from-orange-100 to-orange-200'
}

export function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {currentPage === 1 && (
              <article className="mb-12 group animate-fade-in opacity-0 [animation-fill-mode:forwards]">
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
                  <div className="grid md:grid-cols-2">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${categoryGradients[blogPosts[0].categorySlug]} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-secondary-600/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl opacity-20">{categoryIcons[blogPosts[0].categorySlug]}</div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[blogPosts[0].categorySlug]} px-3 py-1 text-xs font-semibold text-white`}>
                          {blogPosts[0].category}
                        </span>
                      </div>
                      <h2 className="mb-3 text-2xl font-bold text-gray-900 font-benzin group-hover:text-primary-600 transition-colors">
                        {blogPosts[0].title}
                      </h2>
                      <p className="mb-6 text-gray-600 font-montserrat line-clamp-3">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 font-montserrat">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"></div>
                          <span className="font-medium">{blogPosts[0].author.name}</span>
                        </div>
                        <span>•</span>
                        <span>{blogPosts[0].date}</span>
                        <span>•</span>
                        <span>{blogPosts[0].readTime} de lecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* Articles Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {currentPosts.filter(post => currentPage !== 1 || post.id !== '1').map((post, index) => (
                <article 
                  key={post.id} 
                  className="group animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    {/* Image */}
                    <div className={`aspect-[16/10] bg-gradient-to-br ${categoryGradients[post.categorySlug]} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-25">{categoryIcons[post.categorySlug]}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[post.categorySlug]} px-3 py-1 text-xs font-semibold text-white`}>
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 font-montserrat">{post.date}</span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-gray-900 font-benzin group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="mb-4 text-gray-600 font-montserrat line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"></div>
                          <span className="text-sm font-medium text-gray-700 font-montserrat">{post.author.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 font-montserrat">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-medium transition-all ${
                    currentPage === index + 1
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                      : 'bg-white text-gray-600 shadow-md hover:shadow-lg'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Popular Articles */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900 font-benzin">
                  Articles populaires
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                      <h4 className="mb-1 font-semibold text-gray-900 font-montserrat group-hover:text-primary-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500 font-montserrat">{post.date}</p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white">
                <h3 className="mb-4 text-xl font-bold font-benzin">
                  Restez informé
                </h3>
                <p className="mb-6 text-sm opacity-90 font-montserrat">
                  Recevez nos derniers articles et conseils directement dans votre boîte mail
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder-white/70 transition-all focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 font-montserrat"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-white px-4 py-3 font-semibold text-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5 font-montserrat"
                  >
                    S'inscrire
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <h3 className="mb-6 text-xl font-bold text-gray-900 font-benzin">
                  Catégories
                </h3>
                <div className="space-y-3">
                  {Object.entries(categoryColors).map(([slug, gradient]) => (
                    <button
                      key={slug}
                      className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-3 transition-all hover:bg-gray-100"
                    >
                      <span className="font-medium text-gray-700 font-montserrat capitalize">
                        Assurance {slug}
                      </span>
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-xs font-bold text-white`}>
                        {blogPosts.filter(post => post.categorySlug === slug).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}