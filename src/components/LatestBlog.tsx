'use client'

import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  date: string
  image: string
  slug: string
  category?: string
  excerpt?: string
  author?: string
  readTime?: string
}

export function LatestBlog() {
  // Mock data - sera remplacé par les données de Strapi
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: "L'importance de l'assurance dans la vie moderne",
      date: '20 Juin, 2024',
      image: '/images/blog/blog1.jpg',
      slug: 'importance-assurance-vie-moderne',
      category: 'Assurance Vie',
      excerpt: 'Découvrez pourquoi l\'assurance est devenue un élément essentiel de la protection financière dans notre société moderne.',
      author: 'Marie Dupont',
      readTime: '5 min de lecture',
    },
    {
      id: '2',
      title: 'Comprendre les bases de l\'assurance',
      date: '22 Juin, 2024',
      image: '/images/blog/blog2.jpg',
      slug: 'comprendre-bases-assurance',
      category: 'Guide',
      excerpt: 'Un guide complet pour comprendre les concepts fondamentaux de l\'assurance et comment choisir la meilleure couverture.',
      author: 'Jean Martin',
      readTime: '7 min de lecture',
    },
    {
      id: '3',
      title: 'Guide complet de l\'assurance auto',
      date: '24 Juin, 2024',
      image: '/images/blog/blog3.jpg',
      slug: 'guide-complet-assurance-auto',
      category: 'Assurance Auto',
      excerpt: 'Tout ce que vous devez savoir sur l\'assurance automobile, des garanties de base aux options complémentaires.',
      author: 'Sophie Bernard',
      readTime: '10 min de lecture',
    },
    {
      id: '4',
      title: 'Protéger votre famille avec l\'assurance vie',
      date: '26 Juin, 2024',
      image: '/images/blog/blog4.jpg',
      slug: 'proteger-famille-assurance-vie',
      category: 'Assurance Vie',
      excerpt: 'L\'importance de l\'assurance vie pour garantir la sécurité financière de vos proches en cas d\'imprévu.',
      author: 'Pierre Laurent',
      readTime: '6 min de lecture',
    },
  ]

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-16 text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-benzin leading-tight">
            Derniers articles de notre blog
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 px-4">
            Lorsque vous déposez une réclamation, vous devrez fournir la documentation nécessaire,
            comme les rapports de police ou les dossiers médicaux.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-gray-200 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                {/* Category Badge */}
                {post.category && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary-600 text-white">
                      {post.category}
                    </span>
                  </div>
                )}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-3xl sm:text-4xl">📄</div>
                    <p className="text-xs sm:text-sm text-gray-500">Image d'article</p>
                  </div>
                </div>
                {/* Pour la production avec images réelles :
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                */}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                {/* Date & Reading Time */}
                <div className="mb-3 flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clipRule="evenodd" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  {post.readTime && (
                    <span className="text-xs">{post.readTime}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-700 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="mb-4 text-xs sm:text-sm text-gray-600 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                )}

                {/* Author & Read More */}
                <div className="mt-auto flex items-center justify-between">
                  {post.author && (
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      {post.author}
                    </span>
                  )}
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group"
                  >
                    Lire plus
                    <svg 
                      className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
          >
            Voir tous les articles
            <svg 
              className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}