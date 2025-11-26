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
  title: 'Assurance Animaux - WimAssur | Protégez vos compagnons',
  description: 'Assurez la santé de vos animaux de compagnie. Remboursement des frais vétérinaires jusqu\'à 90% et assistance 24/7.',
}

// Data for the pet insurance page
const petBenefits = [
  {
    icon: '🏥',
    title: 'Frais vétérinaires remboursés',
    description: 'Jusqu\'à 90% de remboursement sur tous les frais vétérinaires : consultations, médicaments, analyses, chirurgies.'
  },
  {
    icon: '🐕',
    title: 'Tous les animaux acceptés',
    description: 'Chiens, chats, NAC... Nous assurons tous vos compagnons sans limite d\'âge à la souscription.'
  },
  {
    icon: '🌍',
    title: 'Couverture mondiale',
    description: 'Vos animaux sont protégés partout dans le monde. Idéal pour vos voyages et déménagements.'
  },
  {
    icon: '💉',
    title: 'Prévention incluse',
    description: 'Vaccins, vermifuges, antiparasitaires... Nous participons aux frais de prévention de votre animal.'
  },
  {
    icon: '📞',
    title: 'Téléconsultation vétérinaire',
    description: 'Accès illimité à des vétérinaires par téléphone ou vidéo, 24h/24 et 7j/7.'
  },
  {
    icon: '⚡',
    title: 'Remboursement rapide',
    description: 'Envoyez vos factures via l\'app et recevez votre remboursement sous 48h ouvrées.'
  }
]

const petCoverages = [
  {
    title: 'Soins courants',
    description: 'Les consultations et soins du quotidien',
    features: [
      'Consultations généralistes',
      'Consultations spécialistes',
      'Médicaments prescrits',
      'Analyses et examens',
      'Radiographies et échographies'
    ],
    icon: '🩺',
    included: true
  },
  {
    title: 'Chirurgie et hospitalisation',
    description: 'Les interventions lourdes et séjours en clinique',
    features: [
      'Toutes chirurgies',
      'Anesthésie générale',
      'Hospitalisation',
      'Soins post-opératoires',
      'Rééducation'
    ],
    icon: '🏥',
    included: true
  },
  {
    title: 'Urgences et accidents',
    description: 'La prise en charge immédiate en cas d\'urgence',
    features: [
      'Urgences 24/7',
      'Transport en ambulance animalière',
      'Soins intensifs',
      'Transfusion sanguine',
      'Oxygénothérapie'
    ],
    icon: '🚨',
    included: true
  },
  {
    title: 'Prévention et bien-être',
    description: 'Pour maintenir votre animal en bonne santé',
    features: [
      'Vaccinations annuelles',
      'Traitements antiparasitaires',
      'Détartrage dentaire',
      'Bilan de santé annuel',
      'Stérilisation'
    ],
    icon: '💊',
    included: false
  },
  {
    title: 'Médecines alternatives',
    description: 'Les approches complémentaires pour le bien-être',
    features: [
      'Ostéopathie',
      'Acupuncture',
      'Physiothérapie',
      'Comportementaliste',
      'Phytothérapie'
    ],
    icon: '🌿',
    included: false
  }
]

const petPricingPlans = [
  {
    name: 'Essential',
    price: '15€',
    description: 'La protection de base pour votre compagnon',
    features: [
      'Remboursement 70%',
      'Plafond 1 000€/an',
      'Franchise 50€/acte',
      'Accidents uniquement',
      'Téléconsultation incluse'
    ],
    icon: '🐱'
  },
  {
    name: 'Optimal',
    price: '29€',
    description: 'L\'équilibre parfait protection/prix',
    features: [
      'Remboursement 80%',
      'Plafond 2 000€/an',
      'Franchise 30€/acte',
      'Accidents + Maladies',
      'Prévention 50€/an',
      'Urgences 24/7'
    ],
    highlighted: true,
    icon: '🐕'
  },
  {
    name: 'Intégral',
    price: '49€',
    description: 'La protection maximale sans compromis',
    features: [
      'Remboursement 90%',
      'Plafond illimité',
      'Sans franchise',
      'Toutes pathologies',
      'Prévention 150€/an',
      'Médecines douces incluses',
      'Assistance décès'
    ],
    icon: '🦮'
  }
]

const petFAQs = [
  {
    question: 'À partir de quel âge puis-je assurer mon animal ?',
    answer: 'Vous pouvez assurer votre animal dès l\'âge de 2 mois. Contrairement à d\'autres assureurs, nous n\'avons pas de limite d\'âge maximale à la souscription. Votre animal reste assuré toute sa vie tant que vous renouvelez le contrat.'
  },
  {
    question: 'Y a-t-il un délai de carence ?',
    answer: 'Oui, pour éviter les fraudes : 48h pour les accidents, 30 jours pour les maladies et 6 mois pour certaines pathologies spécifiques. Les soins préventifs sont couverts immédiatement.'
  },
  {
    question: 'Comment fonctionne le remboursement ?',
    answer: 'C\'est très simple : payez votre vétérinaire, prenez en photo la facture avec notre app, envoyez-la nous. Vous êtes remboursé sous 48h ouvrées directement sur votre compte bancaire.'
  },
  {
    question: 'Les maladies chroniques sont-elles couvertes ?',
    answer: 'Oui, nous couvrons les maladies chroniques (diabète, insuffisance rénale, etc.) tant qu\'elles sont diagnostiquées après la souscription. Les pathologies préexistantes ne sont pas prises en charge.'
  },
  {
    question: 'Puis-je choisir mon vétérinaire ?',
    answer: 'Absolument ! Vous êtes libre de consulter le vétérinaire de votre choix, partout en France et même à l\'étranger. Nous remboursons selon les conditions de votre contrat, quel que soit le praticien.'
  }
]

export default function AnimauxInsurancePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Assurance Animaux"
          subtitle="Prenez soin de ceux qui vous aiment sans condition"
          description="Offrez à vos compagnons à quatre pattes la meilleure protection santé. Des garanties complètes pour leur bien-être et votre tranquillité."
          icon="🐾"
        />
        <ServiceBenefits
          title="Pourquoi assurer vos animaux ?"
          subtitle="Des soins de qualité sans vous soucier du budget"
          benefits={petBenefits}
        />
        <ServiceCoverage
          title="Nos garanties pour vos animaux"
          subtitle="Une couverture adaptée aux besoins de chaque compagnon"
          coverages={petCoverages}
        />
        <ServicePricing
          title="Nos formules d'assurance animaux"
          subtitle="Choisissez la protection idéale pour votre budget"
          plans={petPricingPlans}
        />
        <ServiceFAQ
          title="Questions fréquentes sur l'assurance animaux"
          subtitle="Tout savoir pour bien protéger vos compagnons"
          questions={petFAQs}
        />
        <ServiceCTA
          title="Offrez la meilleure protection à votre compagnon"
          subtitle="Devis gratuit en 2 minutes, sans engagement"
          primaryButtonText="Assurer mon animal"
          secondaryButtonText="Demander conseil"
        />
      </main>
      <Footer />
    </>
  )
}