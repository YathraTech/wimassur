import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)
  
  // Create the response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Security headers
  const securityHeaders = {
    // HSTS - Enforce HTTPS
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    
    // Prevent clickjacking
    'X-Frame-Options': 'DENY',
    
    // Prevent MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // XSS Protection (for older browsers)
    'X-XSS-Protection': '1; mode=block',
    
    // Referrer Policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Permissions Policy (formerly Feature Policy)
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    
    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://form.jotform.com https://plausible.io https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://form.jotform.com https://plausible.io https://www.google-analytics.com http://localhost:1337 https://api.wimassur.fr https://wimassur.up.railway.app",
      "frame-src 'self' https://form.jotform.com https://www.google.com https://maps.google.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://form.jotform.com",
      "object-src 'none'",
      "upgrade-insecure-requests"
    ].join('; ')
  }

  // Apply security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Add custom headers for specific paths
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // API-specific headers
    response.headers.set('Cache-Control', 'no-store, max-age=0')
  } else if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/i)) {
    // Cache static images for 1 year
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (request.nextUrl.pathname.match(/\.(js|css)$/i)) {
    // Cache JS/CSS for 1 year (Next.js adds hashes to filenames)
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (request.nextUrl.pathname === '/') {
    // Homepage cache for 1 hour
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  } else {
    // Default cache for other pages
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  }

  return response
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * 
     * Note: We still want to run on API routes to add security headers
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}