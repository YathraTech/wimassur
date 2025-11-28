import { fetchBlogPosts } from '@/lib/strapi'
import { BlogGridClient } from './BlogGridClient'

export async function BlogGridServer() {
  const { posts, pagination } = await fetchBlogPosts(1, 100) // Get all posts
  
  return <BlogGridClient initialPosts={posts} pagination={pagination} />
}