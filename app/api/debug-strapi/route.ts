import { NextResponse } from 'next/server'
import { fetchBlogPosts } from '@/lib/strapi'

export async function GET() {
  try {
    const result = await fetchBlogPosts(1, 10)
    return NextResponse.json({
      success: true,
      data: result,
      env: {
        STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        HAS_TOKEN: !!process.env.STRAPI_API_TOKEN,
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      env: {
        STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        HAS_TOKEN: !!process.env.STRAPI_API_TOKEN,
      }
    })
  }
}