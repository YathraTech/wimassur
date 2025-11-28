import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { fetchBlogPost, fetchBlogPosts } from '@/lib/strapi'
import { BlogPostContent } from '@/components/blog/BlogPostContent'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  try {
    const { posts } = await fetchBlogPosts(1, 100)
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await fetchBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Article non trouvé - WimAssur',
    }
  }

  return {
    title: `${post.title} - WimAssur Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // Mock fallback post for development
  const fallbackPost = {
    id: '1',
    title: 'Comment choisir la meilleure assurance auto en 2024',
    slug: params.slug,
    excerpt: 'Découvrez nos conseils d\'experts pour sélectionner une assurance auto adaptée à vos besoins et votre budget.',
    content: `
# Comment choisir la meilleure assurance auto en 2024

L'assurance automobile est un élément essentiel de la protection financière de tout conducteur. En 2024, avec l'évolution constante du marché et des nouvelles technologies, il devient crucial de bien comprendre les différentes options disponibles pour faire le meilleur choix.

## Comprendre les différents types de couverture

### 1. L'assurance au tiers
C'est la couverture minimale obligatoire. Elle couvre les dommages que vous pourriez causer à autrui, mais ne protège pas votre propre véhicule.

### 2. L'assurance intermédiaire
Elle inclut généralement l'assurance au tiers plus certaines garanties comme le vol, l'incendie ou le bris de glace.

### 3. L'assurance tous risques
La protection la plus complète qui couvre aussi les dommages à votre véhicule, même si vous êtes responsable.

## Facteurs à considérer pour choisir votre assurance

### Votre profil de conducteur
- Âge et expérience de conduite
- Historique de sinistres
- Kilométrage annuel
- Lieu de résidence

### Les caractéristiques de votre véhicule
- Valeur du véhicule
- Âge et modèle
- Utilisation (personnelle ou professionnelle)

## Comment économiser sur votre assurance auto

1. **Comparez les offres** : Utilisez des comparateurs en ligne ou consultez un courtier
2. **Augmentez votre franchise** : Une franchise plus élevée réduit la prime
3. **Regroupez vos assurances** : Des réductions sont souvent disponibles
4. **Installez des dispositifs de sécurité** : Alarmes, trackers GPS peuvent réduire les coûts

## Les nouveautés 2024

### Assurance au kilomètre
Idéale pour les petits rouleurs, vous payez selon votre utilisation réelle.

### Télématique et conduite connectée
Des capteurs analysent votre conduite et peuvent vous faire bénéficier de réductions.

### Couverture des véhicules électriques
Des garanties spécifiques pour les batteries et les bornes de recharge.

## Conclusion

Choisir la bonne assurance auto nécessite de bien évaluer vos besoins et de comparer les différentes options. N'hésitez pas à demander conseil à un professionnel pour vous guider dans votre choix.

**Besoin d'aide pour trouver l'assurance auto parfaite ?** Contactez WimAssur dès aujourd'hui pour un devis personnalisé !
    `,
    category: 'Assurance Auto',
    categorySlug: 'auto',
    publishedAt: new Date().toISOString(),
    readingTime: 5,
    featured: true,
    author: {
      name: 'Marie Martin',
      role: 'Experte en assurance'
    }
  }

  // Use fallback if no real post data
  const displayPost = post.content ? post : { ...fallbackPost, ...post }

  return (
    <>
      <Header />
      <main>
        <BlogPostContent post={displayPost} />
      </main>
      <Footer />
    </>
  )
}