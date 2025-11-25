export interface Testimonial {
  id: string
  name: string
  location: string
  company?: string
  rating: number
  text: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Leblanc',
    location: 'Paris',
    company: 'L\'Oréal',
    rating: 5,
    text: 'Notre équipe dévouée s\'engage à fournir un service client exceptionnel. Nous sommes toujours disponibles pour répondre à vos questions et vous aider.',
  },
  {
    id: '2',
    name: 'Pierre Martin',
    location: 'Lyon',
    company: 'Starbucks',
    rating: 5,
    text: 'Nous comprenons que le processus de réclamation peut être stressant. Notre processus efficace minimise les tracas et garantit des paiements rapides.',
  },
  {
    id: '3',
    name: 'Sophie Bernard',
    location: 'Marseille',
    company: 'The Walt Disney Company',
    rating: 5,
    text: 'Nous offrons des tarifs compétitifs sans compromettre la qualité. Notre objectif est de fournir des solutions d\'assurance abordables adaptées à votre budget.',
  },
  {
    id: '4',
    name: 'Jean Durand',
    location: 'Bordeaux',
    company: 'eBay',
    rating: 5,
    text: 'Nous utilisons les dernières technologies pour fournir des services efficaces et pratiques, incluant la gestion en ligne et le dépôt de réclamations.',
  },
  {
    id: '5',
    name: 'Isabelle Moreau',
    location: 'Toulouse',
    company: 'McDonald\'s',
    rating: 5,
    text: 'Nous sommes plus qu\'un simple fournisseur d\'assurance ; nous sommes votre partenaire de confiance, dédiés à protéger votre avenir.',
  },
  {
    id: '6',
    name: 'Thomas Petit',
    location: 'Nantes',
    company: 'Nintendo',
    rating: 5,
    text: 'Nous tirons parti des dernières technologies pour offrir des services efficaces, y compris la gestion des polices en ligne et les déclarations de sinistres.',
  },
  {
    id: '7',
    name: 'Céline Rousseau',
    location: 'Nice',
    rating: 5,
    text: 'Je recommande vivement ! Ils ont pris le temps de bien comprendre mes besoins avant de me proposer des solutions.',
  },
  {
    id: '8',
    name: 'Marc Dubois',
    location: 'Strasbourg',
    rating: 5,
    text: 'Changement d\'assurance auto sans souci. Ils se sont occupés de tout, même de la résiliation chez mon ancien assureur.',
  },
  {
    id: '9',
    name: 'Amélie Laurent',
    location: 'Lille',
    rating: 5,
    text: 'Excellente expérience ! Des conseils personnalisés et des tarifs vraiment compétitifs pour mon assurance habitation.',
  },
]