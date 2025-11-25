import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { initPlausible } from '@/lib/analytics'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WimAssur - Votre courtier en assurance de confiance',
  description: 'WimAssur, courtier en assurance indépendant. Comparez et trouvez les meilleures assurances auto, habitation et animaux adaptées à vos besoins.',
  keywords: 'assurance, courtier, assurance auto, assurance habitation, assurance animaux, devis gratuit',
  authors: [{ name: 'WimAssur' }],
  creator: 'WimAssur',
  publisher: 'WimAssur',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://wimassur.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WimAssur - Votre courtier en assurance de confiance',
    description: 'Protégez ce qui compte le plus. Comparez et trouvez les meilleures assurances avec WimAssur.',
    url: '/',
    siteName: 'WimAssur',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WimAssur - Courtier en assurance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WimAssur - Votre courtier en assurance',
    description: 'Comparez et trouvez les meilleures assurances avec WimAssur',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
        <div id="chat-root" className="hidden" aria-hidden="true" />
        <Script
          defer
          data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}