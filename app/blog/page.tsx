import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGridServer } from '@/components/blog/BlogGridServer'
import { fetchBlogCategories, fetchBlogPosts } from '@/lib/strapi'

export const metadata: Metadata = {
  title: 'Blog - WimAssur | Actualités et conseils en assurance',
  description: 'Découvrez nos derniers articles, guides et conseils pour mieux comprendre le monde de l\'assurance et protéger ce qui compte pour vous.',
}

export default async function BlogPage() {
  const categories = await fetchBlogCategories()
  
  // Calculate article count for each category
  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const { posts } = await fetchBlogPosts(1, 100, { 'category[slug][$eq]': category.slug })
      return {
        ...category,
        count: posts.length
      }
    })
  )
  
  return (
    <>
      <Header />
      <main>
        <BlogHero categories={categoriesWithCount} />
        <BlogGridServer />
      </main>
      <Footer />
    </>
  )
}