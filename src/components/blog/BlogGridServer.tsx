import { fetchBlogPosts, fetchBlogCategories } from '@/lib/strapi'
import { BlogGridClient } from './BlogGridClient'

export async function BlogGridServer() {
  const [{ posts, pagination }, categories] = await Promise.all([
    fetchBlogPosts(1, 100), // Get all posts
    fetchBlogCategories()
  ])
  
  return <BlogGridClient initialPosts={posts} pagination={pagination} categories={categories} />
}