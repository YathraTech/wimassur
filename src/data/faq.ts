export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Comment obtenir un devis personnalisé ?',
    answer:
      'Vous pouvez obtenir un devis en remplissant notre formulaire de contact en ligne ou en nous appelant directement. Nous analyserons vos besoins et vous proposerons une solution sur mesure dans les 24 heures.',
  },
  {
    id: '2',
    question: 'Quels sont les délais de prise en charge en cas de sinistre ?',
    answer:
      'Nous nous engageons à traiter votre déclaration de sinistre dans les 48 heures. Notre équipe vous accompagne tout au long du processus pour une indemnisation rapide et équitable.',
  },
  {
    id: '3',
    question: 'Puis-je modifier mon contrat en cours ?',
    answer:
      'Oui, vous pouvez modifier votre contrat à tout moment pour l\'adapter à vos nouveaux besoins. Contactez votre conseiller pour étudier les options disponibles.',
  },
  {
    id: '4',
    question: 'Comment résilier mon contrat actuel ?',
    answer:
      'Nous vous accompagnons dans toutes les démarches de résiliation. Grâce à la loi Hamon, vous pouvez résilier votre assurance auto ou habitation à tout moment après la première année.',
  },
  {
    id: '5',
    question: 'WimAssur est-il un assureur ou un courtier ?',
    answer:
      'WimAssur est un courtier en assurance indépendant. Nous travaillons avec plusieurs compagnies d\'assurance pour vous proposer les meilleures offres du marché adaptées à votre profil.',
  },
]