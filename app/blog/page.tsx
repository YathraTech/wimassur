import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'

export const metadata: Metadata = {
  title: 'Blog - WimAssur | Actualités et conseils en assurance',
  description: 'Découvrez nos derniers articles, guides et conseils pour mieux comprendre le monde de l\'assurance et protéger ce qui compte pour vous.',
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}