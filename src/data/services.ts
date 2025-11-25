export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 'auto',
    title: 'Assurance Auto',
    description: 'Protection complète pour votre véhicule avec des garanties adaptées à vos besoins.',
    icon: '🚗',
    features: [
      'Responsabilité civile',
      'Dommages tous accidents',
      'Vol et incendie',
      'Assistance 24h/24',
    ],
  },
  {
    id: 'habitation',
    title: 'Assurance Habitation',
    description: 'Sécurisez votre foyer avec une couverture complète pour votre logement et vos biens.',
    icon: '🏠',
    features: [
      'Dégâts des eaux',
      'Incendie et explosion',
      'Vol et vandalisme',
      'Responsabilité civile vie privée',
    ],
  },
  {
    id: 'animaux',
    title: 'Assurance Animaux',
    description: 'Prenez soin de vos compagnons avec une assurance santé adaptée à leurs besoins.',
    icon: '🐾',
    features: [
      'Frais vétérinaires',
      'Chirurgie et hospitalisation',
      'Médicaments',
      'Prévention et vaccins',
    ],
  },
]