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