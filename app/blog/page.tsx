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
  
  // Get all posts to properly count by category
  const { posts: allPosts } = await fetchBlogPosts(1, 100)
  
  // Calculate article count for each category
  const categoriesWithCount = categories.map((category: any) => {
    const count = allPosts.filter(post => 
      post.categorySlug === category.slug || 
      post.category === category.name
    ).length
    
    return {
      ...category,
      count
    }
  })
  
  // Filter to only show categories that have at least one article
  const categoriesWithArticles = categoriesWithCount.filter(category => category.count > 0)
  
  // Log for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('All categories:', categories.map(c => ({ name: c.name, slug: c.slug })))
    console.log('Categories with articles:', categoriesWithArticles.map(c => ({ name: c.name, slug: c.slug, count: c.count })))
  }
  
  return (
    <>
      <Header />
      <main>
        <BlogHero categories={categoriesWithArticles} />
        <BlogGridServer />
      </main>
      <Footer />
    </>
  )
}