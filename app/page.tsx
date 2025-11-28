import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LifePartner } from '@/components/LifePartner'
import { InsuranceCoverage } from '@/components/InsuranceCoverage'
import { LatestBlog } from '@/components/LatestBlog'
import { Testimonials } from '@/components/Testimonials'
import { Partners } from '@/components/Partners'
import { FAQ } from '@/components/FAQ'
import { NewsletterPopup } from '@/components/NewsletterPopup'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WimAssur - Protégez-vous et vos revenus | Courtier Assurance',
  description: 'Sécurisez votre patrimoine et garantissez votre stabilité financière avec WimAssur. Solutions d\'assurance auto, habitation et santé sur mesure pour protéger vos revenus.',
  keywords: 'protection revenus, assurance patrimoine, sécurité financière, courtier assurance, assurance auto, assurance habitation, stabilité financière',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Partners />
        <LifePartner />
        <InsuranceCoverage />
        <LatestBlog />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <NewsletterPopup />
    </>
  )
}