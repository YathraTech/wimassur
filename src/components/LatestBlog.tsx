'use client'

import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  date: string
  image: string
  slug: string
}

export function LatestBlog() {
  // Mock data - sera remplacé par les données de Strapi
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: "L'importance de l'assurance dans la vie moderne",
      date: '20 Juin, 2024',
      image: '/images/blog/blog1.jpg', // placeholder
      slug: 'importance-assurance-vie-moderne',
    },
    {
      id: '2',
      title: 'Comprendre les bases de l\'assurance',
      date: '22 Juin, 2024',
      image: '/images/blog/blog2.jpg', // placeholder
      slug: 'comprendre-bases-assurance',
    },
    {
      id: '3',
      title: 'Guide complet de l\'assurance auto',
      date: '24 Juin, 2024',
      image: '/images/blog/blog3.jpg', // placeholder
      slug: 'guide-complet-assurance-auto',
    },
    {
      id: '4',
      title: 'Protéger votre famille avec l\'assurance vie',
      date: '26 Juin, 2024',
      image: '/images/blog/blog4.jpg', // placeholder
      slug: 'proteger-famille-assurance-vie',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl lg:text-5xl font-extrabold text-gray-900 font-benzin">
            Derniers articles de notre blog
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Lorsque vous déposez une réclamation, vous devrez fournir la documentation nécessaire,
            comme les rapports de police ou les dossiers médicaux.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-4xl">📄</div>
                    <p className="text-sm text-gray-500">Image d'article</p>
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
              <div className="p-4">
                {/* Date */}
                <div className="mb-2 flex items-center gap-1 text-xs text-gray-500">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clipRule="evenodd" />
                  </svg>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 transition-colors group-hover:text-primary-700 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}