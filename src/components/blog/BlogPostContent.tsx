'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/strapi'
import { getStrapiImageUrl } from '@/lib/strapi'
import { trackEvent } from '@/lib/analytics'

interface BlogPostContentProps {
  post: BlogPost
}

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

export function BlogPostContent({ post }: BlogPostContentProps) {
  useEffect(() => {
    trackEvent('Blog Post View', { 
      postId: post.id, 
      postTitle: post.title,
      category: post.category 
    })
  }, [post])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = post.title
    
    trackEvent('Blog Post Share', { platform, postId: post.id })

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
        break
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
        break
    }
  }

  return (
    <article className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-100/30 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64 md:-right-32 md:-top-32 md:h-96 md:w-96" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-secondary-100/30 blur-3xl sm:-bottom-24 sm:-left-24 sm:h-64 sm:w-64 md:-bottom-32 md:-left-32 md:h-96 md:w-96" />
        </div>
        
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Category & Date */}
            <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-4">
              <span className={`inline-flex rounded-full bg-gradient-to-r ${categoryColors[post.categorySlug] || categoryColors['conseils']} px-3 py-1 text-xs font-semibold text-white sm:px-4 sm:py-1.5 sm:text-sm`}>
                {categoryIcons[post.categorySlug] || categoryIcons['conseils']} {post.category}
              </span>
              <span className="text-xs text-gray-500 font-montserrat sm:text-sm">{formatDate(post.publishedAt)}</span>
              <span className="hidden text-gray-500 font-montserrat sm:inline">•</span>
              <span className="text-xs text-gray-500 font-montserrat sm:text-sm">{post.readingTime} min de lecture</span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-2xl font-bold text-gray-900 font-benzin sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mb-6 text-base text-gray-600 font-montserrat sm:mb-8 sm:text-lg md:text-xl">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 sm:gap-4">
              {post.author.avatar ? (
                <Image
                  src={getStrapiImageUrl(post.author.avatar, 'thumbnail') || ''}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full sm:h-12 sm:w-12"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 sm:h-12 sm:w-12"></div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-900 font-montserrat sm:text-base">{post.author.name}</p>
                <p className="text-xs text-gray-500 font-montserrat sm:text-sm">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image ? (
        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative -mt-4 aspect-[16/9] overflow-hidden rounded-xl shadow-xl sm:-mt-6 sm:aspect-[2/1] sm:rounded-2xl sm:shadow-2xl md:-mt-8 md:rounded-3xl lg:aspect-[21/9]">
              <Image
                src={getStrapiImageUrl(post.image, 'large') || ''}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
              />
            </div>
          </div>
        </section>
      ) : (
        <section className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className={`relative -mt-4 aspect-[16/9] overflow-hidden rounded-xl shadow-xl bg-gradient-to-br ${categoryGradients[post.categorySlug] || categoryGradients['conseils']} sm:-mt-6 sm:aspect-[2/1] sm:rounded-2xl sm:shadow-2xl md:-mt-8 md:rounded-3xl lg:aspect-[21/9]`}>
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[4rem] opacity-20 sm:text-[6rem] md:text-[8rem]">{categoryIcons[post.categorySlug] || categoryIcons['conseils']}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="container py-8 px-4 sm:py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Main Content */}
            <div className="prose prose-sm prose-primary max-w-none font-montserrat sm:prose-base lg:prose-lg">
              <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
            </div>

            {/* Sidebar - Below content on mobile, sticky on desktop */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit lg:space-y-8">
              {/* Share */}
              <div className="rounded-xl bg-gray-50 p-4 sm:rounded-2xl sm:p-6">
                <h3 className="mb-3 text-base font-semibold text-gray-900 font-benzin sm:mb-4 sm:text-lg">Partager cet article</h3>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[#1DA1F2] px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:text-sm"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="hidden sm:inline">Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[#1877F2] px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:text-sm"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="hidden sm:inline">Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[#0A66C2] px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:text-sm"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="hidden sm:inline">LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-gray-600 px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:gap-2 sm:px-4 sm:text-sm"
                  >
                    <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">Email</span>
                  </button>
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 p-4 text-white sm:rounded-2xl sm:p-6">
                <h3 className="mb-2 text-lg font-bold font-benzin sm:mb-4 sm:text-xl">Ne manquez aucun article</h3>
                <p className="mb-4 text-xs opacity-90 font-montserrat sm:mb-6 sm:text-sm">
                  Inscrivez-vous à notre newsletter pour recevoir nos derniers conseils
                </p>
                <Link
                  href="/#newsletter"
                  className="block w-full rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold text-primary-700 transition-all hover:shadow-lg hover:-translate-y-0.5 font-montserrat sm:rounded-xl sm:px-4 sm:py-3 sm:text-base"
                >
                  S'inscrire
                </Link>
              </div>
            </aside>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-8 lg:p-12">
            <h3 className="mb-3 text-xl font-bold text-gray-900 font-benzin sm:mb-4 sm:text-2xl lg:text-3xl">
              Besoin de conseils personnalisés ?
            </h3>
            <p className="mb-6 text-sm text-gray-600 font-montserrat sm:mb-8 sm:text-base lg:text-lg">
              Nos experts sont là pour vous accompagner dans tous vos besoins d'assurance
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              >
                Obtenir un devis gratuit
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:0611393247"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary-600 bg-white px-4 py-2.5 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 11 39 32 47
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

// Simple markdown parser for the content
function parseMarkdown(content: string): string {
  // This is a very basic markdown to HTML converter
  // In production, you would use a proper markdown parser like marked or remark
  return content
    // Headers with responsive classes
    .replace(/^### (.*$)/gim, '<h3 class="mt-6 mb-3 text-lg sm:text-xl md:text-2xl font-bold">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="mt-8 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="mt-8 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold">$1</h1>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>')
    // Lists
    .replace(/^\* (.+)$/gim, '<li class="ml-4 list-disc">$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul class="my-4 space-y-2">$1</ul>')
    .replace(/^\d+\. (.+)$/gim, '<li class="ml-4 list-decimal">$1</li>')
    // Paragraphs with responsive spacing
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
    .replace(/^/, '<p class="mb-4 leading-relaxed">')
    .replace(/$/, '</p>')
}