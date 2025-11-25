declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string | number> }) => void
  }
}

export function trackEvent(eventName: string, props?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props: props || {} })
  }
}

export function initPlausible() {
  if (typeof window === 'undefined') return
  
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return

  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = domain
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
}