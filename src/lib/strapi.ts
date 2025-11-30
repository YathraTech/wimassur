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
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
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

    const headers: HeadersInit = {}
    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`
    }

    const response = await fetch(`${STRAPI_URL}/api/articles?${params}`, {
      headers,
      next: { revalidate: 60 } // Revalidate every minute
    })

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }

    const data: StrapiResponse<any> = await response.json()

    const posts: BlogPost[] = data.data.map((item) => ({
      id: item.id.toString(),
      title: item.title || 'Sans titre',
      slug: item.slug || item.documentId,
      excerpt: item.description || 'Aucune description disponible',
      content: item.content || item.description || '',
      category: item.category?.name || 'Non catégorisé',
      categorySlug: item.category?.slug || 'uncategorized',
      publishedAt: item.publishedAt || item.createdAt,
      readingTime: item.readingTime || 5,
      featured: item.featured || false,
      image: item.cover,
      author: {
        name: item.author?.name || 'WimAssur',
        role: item.author?.role || 'Expert en assurance',
        avatar: item.author?.avatar,
      },
    }))

    return {
      posts,
      pagination: data.meta.pagination,
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Log more details in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Strapi URL:', STRAPI_URL)
      console.error('Has Token:', !!STRAPI_TOKEN)
    }
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

    const headers: HeadersInit = {}
    if (STRAPI_TOKEN) {
      headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`
    }

    const response = await fetch(`${STRAPI_URL}/api/articles?${params}`, {
      headers,
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
      title: item.title || 'Sans titre',
      slug: item.slug || item.documentId,
      excerpt: item.description || 'Aucune description disponible',
      content: item.content || item.description || '',
      category: item.category?.name || 'Non catégorisé',
      categorySlug: item.category?.slug || 'uncategorized',
      publishedAt: item.publishedAt || item.createdAt,
      readingTime: item.readingTime || 5,
      featured: item.featured || false,
      image: item.cover,
      author: {
        name: item.author?.name || 'WimAssur',
        role: item.author?.role || 'Expert en assurance',
        avatar: item.author?.avatar,
      },
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function fetchBlogCategories() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/categories`, {
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