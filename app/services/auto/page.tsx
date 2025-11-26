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
  title: 'Assurance Auto - WimAssur | Protégez votre véhicule',
  description: 'Découvrez nos offres d\'assurance auto adaptées à vos besoins. Protection complète, tarifs compétitifs et service personnalisé.',
}

// Data for the auto insurance page
const autoBenefits = [
  {
    icon: '🚗',
    title: 'Protection complète',
    description: 'Couvrez votre véhicule contre tous les risques : accident, vol, incendie, bris de glace et catastrophes naturelles.'
  },
  {
    icon: '💰',
    title: 'Tarifs compétitifs',
    description: 'Bénéficiez des meilleurs prix du marché grâce à nos partenariats avec plus de 15 assureurs de confiance.'
  },
  {
    icon: '⚡',
    title: 'Assistance 24/7',
    description: 'En cas de panne ou d\'accident, notre assistance est disponible 24h/24 et 7j/7 partout en France et à l\'étranger.'
  },
  {
    icon: '🚙',
    title: 'Véhicule de remplacement',
    description: 'En cas de sinistre, nous mettons à votre disposition un véhicule de remplacement pour maintenir votre mobilité.'
  },
  {
    icon: '⚖️',
    title: 'Protection juridique',
    description: 'Bénéficiez d\'un accompagnement juridique complet en cas de litige lié à votre véhicule.'
  },
  {
    icon: '📱',
    title: 'Gestion 100% digitale',
    description: 'Déclarez vos sinistres et suivez vos remboursements directement depuis notre application mobile.'
  }
]

const autoCoverages = [
  {
    title: 'Responsabilité civile',
    description: 'La garantie obligatoire qui couvre les dommages causés aux tiers',
    features: [
      'Dommages corporels illimités',
      'Dommages matériels jusqu\'à 100M€',
      'Défense et recours inclus',
      'Protection du conducteur'
    ],
    icon: '🛡️',
    included: true
  },
  {
    title: 'Tous risques',
    description: 'La protection maximale pour votre véhicule en toutes circonstances',
    features: [
      'Dommages tous accidents',
      'Vol et tentative de vol',
      'Incendie et explosion',
      'Catastrophes naturelles et technologiques',
      'Vandalisme et dégradations'
    ],
    icon: '🎯',
    included: true
  },
  {
    title: 'Vol et incendie',
    description: 'Protégez votre véhicule contre le vol et les dommages liés au feu',
    features: [
      'Vol du véhicule et tentative',
      'Vol des accessoires et équipements',
      'Incendie et explosion',
      'Attentats et actes de terrorisme'
    ],
    icon: '🔥',
    included: true
  },
  {
    title: 'Bris de glace',
    description: 'Réparez ou remplacez vos vitres sans franchise',
    features: [
      'Pare-brise avant et arrière',
      'Vitres latérales',
      'Toit panoramique',
      'Rétroviseurs'
    ],
    icon: '🪟',
    included: true
  },
  {
    title: 'Assistance Plus',
    description: 'Une assistance renforcée pour plus de tranquillité',
    features: [
      'Dépannage et remorquage 0 km',
      'Véhicule de remplacement 7 jours',
      'Hébergement et transport retour',
      'Assistance à l\'étranger'
    ],
    icon: '🆘',
    included: false
  }
]

const autoPricingPlans = [
  {
    name: 'Essentiel',
    price: '29€',
    description: 'L\'assurance au tiers pour les petits budgets',
    features: [
      'Responsabilité civile',
      'Défense et recours',
      'Assistance de base',
      'Gestion en ligne'
    ],
    icon: '🚙'
  },
  {
    name: 'Confort',
    price: '49€',
    description: 'La protection équilibrée pour rouler serein',
    features: [
      'Tout de l\'offre Essentiel',
      'Vol et incendie',
      'Bris de glace sans franchise',
      'Assistance 24/7',
      'Véhicule de prêt 3 jours'
    ],
    highlighted: true,
    icon: '🚗'
  },
  {
    name: 'Premium',
    price: '79€',
    description: 'La couverture tous risques complète',
    features: [
      'Tout de l\'offre Confort',
      'Tous risques collision',
      'Valeur à neuf 2 ans',
      'Assistance Plus',
      'Véhicule de prêt 7 jours',
      'Protection juridique étendue'
    ],
    icon: '🏎️'
  }
]

const autoFAQs = [
  {
    question: 'Quels documents sont nécessaires pour souscrire une assurance auto ?',
    answer: 'Pour souscrire, vous aurez besoin de votre permis de conduire, de la carte grise du véhicule, de votre relevé d\'information (si vous étiez déjà assuré) et d\'un RIB pour le prélèvement des cotisations.'
  },
  {
    question: 'Comment est calculé le prix de mon assurance auto ?',
    answer: 'Le tarif dépend de plusieurs critères : votre profil (âge, expérience, bonus-malus), votre véhicule (marque, modèle, puissance, valeur), votre lieu de résidence et l\'usage que vous faites de votre voiture.'
  },
  {
    question: 'Que faire en cas d\'accident ?',
    answer: 'Assurez d\'abord la sécurité de tous, appelez les secours si nécessaire. Remplissez un constat amiable avec l\'autre conducteur. Déclarez le sinistre dans les 5 jours ouvrés via notre application ou par téléphone. Nous nous occupons du reste !'
  },
  {
    question: 'Puis-je modifier mes garanties en cours de contrat ?',
    answer: 'Oui, vous pouvez ajuster vos garanties à tout moment selon vos besoins. Les modifications prennent effet dès le mois suivant. Contactez votre conseiller pour étudier ensemble les meilleures options.'
  },
  {
    question: 'Comment fonctionne le système de bonus-malus ?',
    answer: 'Le bonus-malus évolue chaque année : vous gagnez 5% de bonus par année sans sinistre responsable (jusqu\'à 50% maximum). En cas d\'accident responsable, vous subissez un malus de 25%. Le coefficient s\'applique sur votre prime de base.'
  }
]

export default function AutoInsurancePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Assurance Auto"
          subtitle="Protégez votre véhicule et roulez en toute sérénité"
          description="Des garanties flexibles et des tarifs adaptés à votre profil. Obtenez votre devis personnalisé en 2 minutes et économisez jusqu'à 40% sur votre assurance auto."
          icon="🚗"
        />
        <ServiceBenefits
          title="Pourquoi choisir notre assurance auto ?"
          subtitle="Des avantages exclusifs pour une protection optimale de votre véhicule"
          benefits={autoBenefits}
        />
        <ServiceCoverage
          title="Nos garanties auto"
          subtitle="Choisissez les protections adaptées à vos besoins et votre budget"
          coverages={autoCoverages}
        />
        <ServicePricing
          title="Nos formules d'assurance auto"
          subtitle="Des offres transparentes et sans surprise"
          plans={autoPricingPlans}
        />
        <ServiceFAQ
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir sur l'assurance auto"
          questions={autoFAQs}
        />
        <ServiceCTA
          title="Prêt à protéger votre véhicule ?"
          subtitle="Obtenez votre devis personnalisé en quelques minutes"
          primaryButtonText="Obtenir mon devis auto"
          secondaryButtonText="Parler à un conseiller"
        />
      </main>
      <Footer />
    </>
  )
}