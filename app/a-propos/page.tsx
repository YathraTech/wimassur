import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutStory } from '@/components/about/AboutStory'
import { AboutValues } from '@/components/about/AboutValues'
import { AboutTeam } from '@/components/about/AboutTeam'
import { AboutStats } from '@/components/about/AboutStats'

export const metadata: Metadata = {
  title: 'À propos - WimAssur | Votre courtier en assurance de confiance',
  description: 'Découvrez l\'histoire de WimAssur, nos valeurs et notre équipe dédiée à vous offrir les meilleures solutions d\'assurance.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
      </main>
      <Footer />
    </>
  )
}