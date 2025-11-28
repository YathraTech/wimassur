interface StrapiImageFormat {
  url: string
  width: number
  height: number
}

interface StrapiImage {
  data: {
    attributes: {
      url: string
      formats: {
        thumbnail?: StrapiImageFormat
        small?: StrapiImageFormat
        medium?: StrapiImageFormat
        large?: StrapiImageFormat
      }
    }
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  categorySlug: string
  publishedAt: string
  readingTime: number
  featured: boolean
  image?: StrapiImage
  author: {
    name: string
    role: string
    avatar?: StrapiImage
  }
}

interface StrapiResponse<T> {
  data: {
    id: number
    attributes: T
  }[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

export async function fetchBlogPosts(
  page = 1,
  pageSize = 10,
  filters: Record<string, any> = {}
): Promise<{ posts: BlogPost[], pagination: any }> {
  try {
    const params = new URLSearchParams({
      'pagination[page]': page.toString(),
      'pagination[pageSize]': pageSize.toString(),
      'populate': '*',
      'sort': 'publishedAt:desc',
    })

    // Add filters
    Object.entries(filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value)
    })

    const response = await fetch(`${STRAPI_URL}/api/blog-posts?${params}`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 60 } // Revalidate every minute
    })

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }

    const data: StrapiResponse<any> = await response.json()

    const posts: BlogPost[] = data.data.map((item) => ({
      id: item.id.toString(),
      title: item.attributes.title,
      slug: item.attributes.slug,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      category: item.attributes.category?.data?.attributes?.name || 'Non catégorisé',
      categorySlug: item.attributes.category?.data?.attributes?.slug || 'uncategorized',
      publishedAt: item.attributes.publishedAt,
      readingTime: item.attributes.readingTime || 5,
      featured: item.attributes.featured || false,
      image: item.attributes.featuredImage,
      author: {
        name: item.attributes.author?.data?.attributes?.name || 'WimAssur',
        role: item.attributes.author?.data?.attributes?.role || 'Expert en assurance',
        avatar: item.attributes.author?.data?.attributes?.avatar,
      },
    }))

    return {
      posts,
      pagination: data.meta.pagination,
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Return mock data as fallback
    return {
      posts: [],
      pagination: {
        page: 1,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    }
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const params = new URLSearchParams({
      'filters[slug][$eq]': slug,
      'populate': '*',
    })

    const response = await fetch(`${STRAPI_URL}/api/blog-posts?${params}`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 60 }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch blog post')
    }

    const data: StrapiResponse<any> = await response.json()

    if (data.data.length === 0) {
      return null
    }

    const item = data.data[0]
    
    return {
      id: item.id.toString(),
      title: item.attributes.title,
      slug: item.attributes.slug,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      category: item.attributes.category?.data?.attributes?.name || 'Non catégorisé',
      categorySlug: item.attributes.category?.data?.attributes?.slug || 'uncategorized',
      publishedAt: item.attributes.publishedAt,
      readingTime: item.attributes.readingTime || 5,
      featured: item.attributes.featured || false,
      image: item.attributes.featuredImage,
      author: {
        name: item.attributes.author?.data?.attributes?.name || 'WimAssur',
        role: item.attributes.author?.data?.attributes?.role || 'Expert en assurance',
        avatar: item.attributes.author?.data?.attributes?.avatar,
      },
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function fetchBlogCategories() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blog-categories`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`,
      },
      next: { revalidate: 300 } // Revalidate every 5 minutes
    })

    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }

    const data = await response.json()
    return data.data.map((item: any) => ({
      id: item.id.toString(),
      name: item.attributes.name,
      slug: item.attributes.slug,
    }))
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export function getStrapiImageUrl(image?: StrapiImage, size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string | null {
  if (!image?.data?.attributes) return null
  
  const formats = image.data.attributes.formats
  const format = formats[size] || image.data.attributes
  
  return format.url.startsWith('http') ? format.url : `${STRAPI_URL}${format.url}`
}