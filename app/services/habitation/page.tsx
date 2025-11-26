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
  title: 'Assurance Habitation - WimAssur | Protégez votre foyer',
  description: 'Protégez votre logement et vos biens avec notre assurance habitation complète. Garanties étendues et tarifs compétitifs.',
}

// Data for the home insurance page
const homeBenefits = [
  {
    icon: '🏠',
    title: 'Protection complète du foyer',
    description: 'Couvrez votre logement et tous vos biens contre les sinistres : incendie, dégât des eaux, vol, catastrophes naturelles.'
  },
  {
    icon: '🔧',
    title: 'Assistance dépannage',
    description: 'Plombier, électricien, serrurier... Nos artisans interviennent rapidement en cas d\'urgence, 24h/24 et 7j/7.'
  },
  {
    icon: '💎',
    title: 'Objets de valeur protégés',
    description: 'Vos bijoux, œuvres d\'art et équipements high-tech sont couverts avec des plafonds de garantie élevés.'
  },
  {
    icon: '🏖️',
    title: 'Villégiature incluse',
    description: 'Votre assurance vous suit pendant vos vacances partout dans le monde jusqu\'à 90 jours par an.'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Responsabilité familiale',
    description: 'Tous les membres de votre foyer sont couverts pour les dommages causés à des tiers.'
  },
  {
    icon: '🌳',
    title: 'Jardin et extérieurs',
    description: 'Piscine, abri de jardin, clôtures... Vos aménagements extérieurs sont également protégés.'
  }
]

const homeCoverages = [
  {
    title: 'Dommages aux biens',
    description: 'La protection de base pour votre logement et son contenu',
    features: [
      'Incendie et explosion',
      'Dégâts des eaux',
      'Tempête, grêle et neige',
      'Catastrophes naturelles',
      'Attentats et actes de terrorisme'
    ],
    icon: '🏠',
    included: true
  },
  {
    title: 'Vol et vandalisme',
    description: 'Protégez-vous contre les intrusions et dégradations',
    features: [
      'Vol avec effraction',
      'Vol avec agression',
      'Vandalisme et dégradations',
      'Détériorations immobilières',
      'Vol en cave et garage'
    ],
    icon: '🔒',
    included: true
  },
  {
    title: 'Responsabilité civile',
    description: 'Couvrez les dommages causés à autrui',
    features: [
      'Responsabilité civile vie privée',
      'Responsabilité du fait des enfants',
      'Responsabilité du fait des animaux',
      'Défense et recours',
      'Protection juridique habitation'
    ],
    icon: '⚖️',
    included: true
  },
  {
    title: 'Bris de glace étendu',
    description: 'Pour tous vos équipements vitrés',
    features: [
      'Vitres et fenêtres',
      'Vérandas et verrières',
      'Plaques vitrocéramiques',
      'Aquariums',
      'Serres de jardin'
    ],
    icon: '🪟',
    included: false
  },
  {
    title: 'Équipements durables',
    description: 'Protection spéciale pour vos installations écologiques',
    features: [
      'Panneaux solaires',
      'Pompe à chaleur',
      'Éolienne domestique',
      'Récupérateur d\'eau de pluie',
      'Borne de recharge électrique'
    ],
    icon: '🌱',
    included: false
  }
]

const homePricingPlans = [
  {
    name: 'Locataire',
    price: '12€',
    description: 'L\'essentiel pour les locataires',
    features: [
      'Responsabilité locative',
      'Biens mobiliers jusqu\'à 30 000€',
      'Responsabilité civile',
      'Assistance de base',
      'Protection juridique'
    ],
    icon: '🏢'
  },
  {
    name: 'Propriétaire',
    price: '35€',
    description: 'La protection idéale pour votre résidence',
    features: [
      'Tout de l\'offre Locataire',
      'Bâtiment protégé',
      'Biens mobiliers jusqu\'à 60 000€',
      'Jardin et dépendances',
      'Assistance 24/7',
      'Garantie dommages électriques'
    ],
    highlighted: true,
    icon: '🏡'
  },
  {
    name: 'Premium Plus',
    price: '59€',
    description: 'La couverture maximale sans limite',
    features: [
      'Tout de l\'offre Propriétaire',
      'Biens mobiliers illimités',
      'Objets de valeur jusqu\'à 50 000€',
      'Tous risques informatiques',
      'Piscine et installations',
      'Rééquipement à neuf',
      'Conciergerie privée'
    ],
    icon: '🏰'
  }
]

const homeFAQs = [
  {
    question: 'Que couvre exactement l\'assurance habitation ?',
    answer: 'L\'assurance habitation protège votre logement (murs, toiture, sols) et vos biens (meubles, électroménager, vêtements) contre les sinistres. Elle inclut aussi votre responsabilité civile qui couvre les dommages que vous pourriez causer à autrui.'
  },
  {
    question: 'L\'assurance habitation est-elle obligatoire ?',
    answer: 'Pour les locataires, l\'assurance est obligatoire (minimum responsabilité locative). Pour les propriétaires occupants, elle est fortement recommandée mais pas obligatoire. En copropriété, elle est obligatoire au minimum pour la responsabilité civile.'
  },
  {
    question: 'Comment est calculée la valeur de mes biens ?',
    answer: 'Nous évaluons vos biens selon leur valeur de remplacement à neuf, déduction faite de la vétusté. Pour les objets de valeur (bijoux, art), nous recommandons de fournir des factures ou expertises pour une indemnisation optimale.'
  },
  {
    question: 'Que faire en cas de sinistre habitation ?',
    answer: 'Mettez d\'abord en sécurité les personnes et les biens. Limitez l\'aggravation du sinistre si possible. Déclarez le sinistre dans les 5 jours (2 jours pour un vol) via notre app ou par téléphone. Conservez les preuves (photos, factures) et ne jetez rien avant expertise.'
  },
  {
    question: 'Mes enfants sont-ils couverts quand ils ne sont pas à la maison ?',
    answer: 'Oui, la responsabilité civile familiale couvre tous les membres de votre foyer, y compris vos enfants mineurs et majeurs vivant sous votre toit. Ils sont protégés pour les dommages qu\'ils pourraient causer à l\'école, chez des amis ou en vacances.'
  }
]

export default function HabitationInsurancePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Assurance Habitation"
          subtitle="Votre foyer mérite la meilleure protection"
          description="Protégez votre logement et tout ce qui vous est cher avec notre assurance habitation sur mesure. Des garanties complètes pour vivre sereinement chez vous."
          icon="🏠"
        />
        <ServiceBenefits
          title="Les avantages de notre assurance habitation"
          subtitle="Une protection complète pour votre tranquillité d'esprit"
          benefits={homeBenefits}
        />
        <ServiceCoverage
          title="Nos garanties habitation"
          subtitle="Des protections adaptées à chaque type de logement"
          coverages={homeCoverages}
        />
        <ServicePricing
          title="Nos formules d'assurance habitation"
          subtitle="Trouvez la protection adaptée à votre situation"
          plans={homePricingPlans}
        />
        <ServiceFAQ
          title="Vos questions sur l'assurance habitation"
          subtitle="Nous répondons à toutes vos interrogations"
          questions={homeFAQs}
        />
        <ServiceCTA
          title="Protégez votre foyer dès aujourd'hui"
          subtitle="Devis gratuit et personnalisé en moins de 3 minutes"
          primaryButtonText="Obtenir mon devis habitation"
          secondaryButtonText="Appeler un expert"
        />
      </main>
      <Footer />
    </>
  )
}