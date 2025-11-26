import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceBenefits } from '@/components/services/ServiceBenefits'
import { ServiceCoverage } from '@/components/services/ServiceCoverage'
import { ServicePricing } from '@/components/services/ServicePricing'
import { ServiceFAQ } from '@/components/services/ServiceFAQ'
import { ServiceCTA } from '@/components/services/ServiceCTA'

export const metadata: Metadata = {
  title: 'Assurance Santé - WimAssur | Votre santé, notre priorité',
  description: 'Complémentaire santé adaptée à vos besoins. Remboursements élevés, tiers payant et téléconsultation incluse.',
}

// Data for the health insurance page
const healthBenefits = [
  {
    icon: '💳',
    title: 'Tiers payant généralisé',
    description: 'Plus d\'avance de frais chez les professionnels de santé. Votre carte de tiers payant est acceptée partout.'
  },
  {
    icon: '📱',
    title: 'Téléconsultation illimitée',
    description: 'Consultez un médecin 24h/24 et 7j/7 par vidéo. Ordonnances délivrées directement sur votre espace.'
  },
  {
    icon: '🦷',
    title: 'Dentaire et optique renforcés',
    description: 'Des remboursements élevés sur les postes coûteux : implants, orthodontie, verres progressifs.'
  },
  {
    icon: '🏃',
    title: 'Médecines douces',
    description: 'Ostéopathie, acupuncture, psychologie... Nous remboursons les médecines alternatives.'
  },
  {
    icon: '⚡',
    title: 'Remboursements express',
    description: 'Vos remboursements en 48h grâce à la télétransmission automatique avec la Sécurité sociale.'
  },
  {
    icon: '🌍',
    title: 'Assistance mondiale',
    description: 'Couverture santé dans le monde entier avec rapatriement médical et prise en charge directe.'
  }
]

const healthCoverages = [
  {
    title: 'Hospitalisation',
    description: 'La prise en charge complète de vos séjours hospitaliers',
    features: [
      'Chambre particulière illimitée',
      'Dépassements d\'honoraires jusqu\'à 300%',
      'Forfait accompagnant',
      'Télévision et WiFi',
      'Frais de transport'
    ],
    icon: '🏥',
    included: true
  },
  {
    title: 'Consultations et soins',
    description: 'Les soins du quotidien sans reste à charge',
    features: [
      'Médecins généralistes et spécialistes',
      'Analyses et examens',
      'Radiologie et imagerie',
      'Pharmacie remboursée à 100%',
      'Auxiliaires médicaux'
    ],
    icon: '👨‍⚕️',
    included: true
  },
  {
    title: 'Dentaire',
    description: 'Des dents saines sans se ruiner',
    features: [
      'Soins dentaires 100%',
      'Prothèses jusqu\'à 500€/dent',
      'Implants jusqu\'à 800€',
      'Orthodontie 400€/semestre',
      'Parodontologie'
    ],
    icon: '🦷',
    included: true
  },
  {
    title: 'Optique et audition',
    description: 'Voir et entendre sans compter',
    features: [
      'Montures jusqu\'à 150€',
      'Verres progressifs jusqu\'à 400€',
      'Lentilles 300€/an',
      'Chirurgie réfractive 500€/œil',
      'Audioprothèses jusqu\'à 1500€'
    ],
    icon: '👓',
    included: true
  },
  {
    title: 'Bien-être et prévention',
    description: 'Prenez soin de vous au quotidien',
    features: [
      'Médecines douces 40€/séance',
      'Cure thermale 400€/an',
      'Sevrage tabagique 150€',
      'Nutrition et diététique',
      'Sport sur ordonnance'
    ],
    icon: '🧘',
    included: false
  }
]

const healthPricingPlans = [
  {
    name: 'Santé Eco',
    price: '25€',
    description: 'L\'essentiel pour compléter la Sécu',
    features: [
      'Hospitalisation 100%',
      'Consultations 100%',
      'Pharmacie 100%',
      'Dentaire 125%',
      'Optique 100€',
      'Tiers payant'
    ],
    icon: '💚'
  },
  {
    name: 'Santé Confort',
    price: '55€',
    description: 'L\'équilibre idéal qualité/prix',
    features: [
      'Tout Santé Eco +',
      'Dépassements honoraires 200%',
      'Dentaire jusqu\'à 300€/dent',
      'Optique jusqu\'à 300€',
      'Médecines douces 120€/an',
      'Téléconsultation illimitée',
      'Assistance 24/7'
    ],
    highlighted: true,
    icon: '💙'
  },
  {
    name: 'Santé Premium',
    price: '89€',
    description: 'Le haut de gamme sans limite',
    features: [
      'Tout Santé Confort +',
      'Dépassements honoraires 300%',
      'Dentaire jusqu\'à 500€/dent',
      'Optique jusqu\'à 500€',
      'Médecines douces illimitées',
      'Cure thermale 400€/an',
      'Chirurgie réfractive',
      'Conciergerie santé'
    ],
    icon: '💎'
  }
]

const healthFAQs = [
  {
    question: 'Puis-je souscrire sans questionnaire médical ?',
    answer: 'Oui ! Chez WimAssur, pas de questionnaire de santé ni de délai de carence. Vous êtes couvert immédiatement, quel que soit votre état de santé ou votre âge.'
  },
  {
    question: 'Comment fonctionne le tiers payant ?',
    answer: 'Avec votre carte de tiers payant WimAssur, vous ne payez rien chez les professionnels de santé. Nous réglons directement vos frais. C\'est valable partout en France : médecins, pharmacies, laboratoires, hôpitaux.'
  },
  {
    question: 'Les dépassements d\'honoraires sont-ils remboursés ?',
    answer: 'Oui, selon votre formule. Nous remboursons les dépassements d\'honoraires des médecins non conventionnés jusqu\'à 300% du tarif de base de la Sécurité sociale avec notre formule Premium.'
  },
  {
    question: 'Ma famille peut-elle bénéficier de réductions ?',
    answer: 'Absolument ! Nous offrons -10% dès le 2ème bénéficiaire et -20% à partir du 3ème. Les enfants de moins de 18 ans bénéficient automatiquement de -50% sur leur cotisation.'
  },
  {
    question: 'Que se passe-t-il si je change d\'avis ?',
    answer: 'Vous disposez d\'un délai de rétractation de 14 jours après souscription. Au-delà, vous pouvez résilier à tout moment après 1 an d\'ancienneté, sans frais ni justificatif.'
  }
]

export default function SanteInsurancePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Assurance Santé"
          subtitle="Votre santé mérite le meilleur"
          description="Une complémentaire santé qui s'adapte à vos besoins et votre budget. Profitez de remboursements élevés et de services exclusifs pour prendre soin de vous et votre famille."
          icon="❤️"
        />
        <ServiceBenefits
          title="Les atouts de notre assurance santé"
          subtitle="Des garanties pensées pour votre bien-être au quotidien"
          benefits={healthBenefits}
        />
        <ServiceCoverage
          title="Nos garanties santé"
          subtitle="Une couverture complète pour tous vos besoins de santé"
          coverages={healthCoverages}
        />
        <ServicePricing
          title="Nos formules santé"
          subtitle="Des solutions adaptées à chaque budget et chaque besoin"
          plans={healthPricingPlans}
        />
        <ServiceFAQ
          title="Vos questions sur l'assurance santé"
          subtitle="Tout comprendre pour bien choisir votre complémentaire"
          questions={healthFAQs}
        />
        <ServiceCTA
          title="Prenez soin de votre santé dès maintenant"
          subtitle="Devis personnalisé gratuit et souscription en ligne en 5 minutes"
          primaryButtonText="Obtenir mon devis santé"
          secondaryButtonText="Être rappelé"
        />
      </main>
      <Footer />
    </>
  )
}