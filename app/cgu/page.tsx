import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LegalHero } from '@/components/legal/LegalHero'
import { LegalContent } from '@/components/legal/LegalContent'
import { LegalSection } from '@/components/legal/LegalSection'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation - WimAssur',
  description: 'Conditions générales d\'utilisation du site WimAssur. Règles d\'utilisation et responsabilités.',
}

const sections = [
  { id: 'objet', title: 'Objet et acceptation' },
  { id: 'definitions', title: 'Définitions' },
  { id: 'acces', title: 'Accès au site' },
  { id: 'services', title: 'Description des services' },
  { id: 'compte', title: 'Compte utilisateur' },
  { id: 'obligations', title: 'Obligations de l\'utilisateur' },
  { id: 'propriete', title: 'Propriété intellectuelle' },
  { id: 'responsabilite', title: 'Responsabilités' },
  { id: 'donnees', title: 'Données personnelles' },
  { id: 'modification', title: 'Modification des CGU' },
  { id: 'loi', title: 'Loi applicable' },
]

export default function CGUPage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero
          title="Conditions Générales d'Utilisation"
          subtitle="Règles d'utilisation de notre site et services"
          lastUpdated="26 novembre 2024"
        />
        
        <LegalContent sections={sections}>
          <div className="mb-8 rounded-2xl bg-blue-50 p-6 border border-blue-200">
            <p className="text-sm text-gray-700 font-montserrat">
              <strong>Important :</strong> En accédant et en utilisant ce site, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </div>

          <LegalSection id="objet" title="1. Objet et acceptation" highlighted>
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles {company.name} met à disposition son site internet et ses services.
            </p>
            <p>
              L'utilisation du site www.wimassur.fr implique l'acceptation pleine et entière des présentes CGU. Ces conditions d'utilisation peuvent être modifiées à tout moment.
            </p>
            <p>
              Date d'entrée en vigueur : 26 novembre 2024
            </p>
          </LegalSection>

          <LegalSection id="definitions" title="2. Définitions">
            <p>
              Pour la bonne compréhension des présentes, les termes suivants sont définis :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>"Site" :</strong> Le site internet accessible à l'adresse www.wimassur.fr</li>
              <li><strong>"Utilisateur" :</strong> Toute personne physique ou morale accédant au Site</li>
              <li><strong>"Services" :</strong> L'ensemble des services proposés par {company.name} sur le Site</li>
              <li><strong>"Contenu" :</strong> Tous les éléments présents sur le Site (textes, images, vidéos, etc.)</li>
              <li><strong>"Compte" :</strong> L'espace personnel créé par un Utilisateur sur le Site</li>
            </ul>
          </LegalSection>

          <LegalSection id="acces" title="3. Accès au site">
            <p>
              Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au Site sont à la charge de l'Utilisateur.
            </p>
            <p>
              {company.name} met en œuvre tous les moyens raisonnables pour assurer un accès continu au Site. Toutefois, l'accès peut être temporairement suspendu pour :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-1">
              <li>Maintenance technique</li>
              <li>Mise à jour du Site</li>
              <li>Raisons de sécurité</li>
              <li>Sur demande des autorités compétentes</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm">
                {company.name} ne saurait être tenu responsable des difficultés d'accès au Site dues à des perturbations du réseau Internet.
              </p>
            </div>
          </LegalSection>

          <LegalSection id="services" title="4. Description des services">
            <p>
              {company.name} propose via son Site les services suivants :
            </p>
            
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 p-4">
                <h3 className="font-semibold mb-2">📋 Devis en ligne</h3>
                <p className="text-sm">Simulation et comparaison d'offres d'assurance personnalisées</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-secondary-50 to-secondary-100 p-4">
                <h3 className="font-semibold mb-2">📞 Mise en relation</h3>
                <p className="text-sm">Contact avec nos conseillers experts en assurance</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4">
                <h3 className="font-semibold mb-2">📚 Information</h3>
                <p className="text-sm">Articles et guides sur l'assurance</p>
              </div>
              
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                <h3 className="font-semibold mb-2">🤝 Accompagnement</h3>
                <p className="text-sm">Suivi personnalisé de vos besoins d'assurance</p>
              </div>
            </div>

            <p className="mt-6">
              Les informations fournies sur le Site ont un caractère informatif et ne constituent pas un conseil personnalisé. Pour toute souscription, un conseiller vous accompagnera.
            </p>
          </LegalSection>

          <LegalSection id="compte" title="5. Compte utilisateur">
            <p>
              Certains services peuvent nécessiter la création d'un Compte. L'Utilisateur s'engage à :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Fournir des informations exactes et à jour</li>
              <li>Maintenir la confidentialité de ses identifiants</li>
              <li>Notifier immédiatement toute utilisation non autorisée de son Compte</li>
              <li>Assumer la responsabilité de toutes les activités sur son Compte</li>
            </ul>
            <p className="mt-4">
              {company.name} se réserve le droit de suspendre ou supprimer tout Compte en cas de violation des présentes CGU.
            </p>
          </LegalSection>

          <LegalSection id="obligations" title="6. Obligations de l'utilisateur" highlighted>
            <p>
              L'Utilisateur s'engage à utiliser le Site conformément aux présentes CGU et à la législation en vigueur. Il est notamment interdit de :
            </p>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <p>Utiliser le Site à des fins illégales ou non autorisées</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <p>Transmettre des virus ou tout code malveillant</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <p>Tenter d'accéder sans autorisation aux systèmes informatiques</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <p>Collecter des données personnelles sans consentement</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <p>Reproduire ou exploiter le Contenu sans autorisation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">❌</span>
                <p>Perturber le fonctionnement normal du Site</p>
              </div>
            </div>
          </LegalSection>

          <LegalSection id="propriete" title="7. Propriété intellectuelle">
            <p>
              L'ensemble du Contenu présent sur le Site est protégé par les lois relatives à la propriété intellectuelle et appartient à {company.name} ou à ses partenaires.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation du Contenu est strictement interdite sans autorisation écrite préalable.
            </p>
            
            <div className="mt-4 rounded-lg bg-gray-100 p-4">
              <h3 className="font-semibold mb-2">Éléments protégés :</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Logo et identité visuelle de {company.name}</li>
                <li>Textes, articles et contenus rédactionnels</li>
                <li>Images, photographies et illustrations</li>
                <li>Vidéos et animations</li>
                <li>Structure et design du Site</li>
                <li>Codes source et bases de données</li>
              </ul>
            </div>
          </LegalSection>

          <LegalSection id="responsabilite" title="8. Responsabilités">
            <h3 className="font-semibold mb-2">Responsabilité de {company.name} :</h3>
            <p>
              {company.name} s'efforce d'assurer l'exactitude des informations diffusées sur le Site. Toutefois, nous ne pouvons garantir :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>L'exhaustivité et l'actualisation permanente des informations</li>
              <li>L'absence d'erreurs ou d'omissions</li>
              <li>La disponibilité permanente du Site</li>
              <li>L'absence de virus ou d'éléments malveillants</li>
            </ul>

            <h3 className="font-semibold mb-2 mt-6">Limitation de responsabilité :</h3>
            <p>
              {company.name} ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le Site.
            </p>
            
            <h3 className="font-semibold mb-2 mt-6">Sites tiers :</h3>
            <p>
              Le Site peut contenir des liens vers des sites tiers. {company.name} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </LegalSection>

          <LegalSection id="donnees" title="9. Données personnelles">
            <p>
              La collecte et le traitement des données personnelles sont effectués dans le respect du RGPD et de notre Politique de Confidentialité.
            </p>
            <p>
              Pour plus d'informations sur la gestion de vos données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-primary-600 underline hover:text-primary-700">Politique de Confidentialité</a>.
            </p>
            
            <div className="mt-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="text-sm">
                <strong>Rappel :</strong> Vous disposez de droits sur vos données personnelles (accès, rectification, suppression, etc.). Contact DPO : dpo@wimassur.fr
              </p>
            </div>
          </LegalSection>

          <LegalSection id="modification" title="10. Modification des CGU">
            <p>
              {company.name} se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site.
            </p>
            <p>
              Il est recommandé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p>
            <p className="mt-4">
              En continuant à utiliser le Site après la publication de modifications, vous acceptez les CGU modifiées.
            </p>
          </LegalSection>

          <LegalSection id="loi" title="11. Loi applicable et juridiction">
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou leur exécution relève de la compétence exclusive des tribunaux français.
            </p>
            
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-6">
              <h3 className="font-semibold mb-4">Règlement des litiges</h3>
              <p className="mb-4">
                En cas de litige, nous privilégions toujours une résolution amiable. Vous pouvez nous contacter :
              </p>
              <ul className="space-y-2 text-sm">
                <li>📧 Par email : reclamation@wimassur.fr</li>
                <li>📮 Par courrier : Service Réclamations - {company.contact.address.street}, {company.contact.address.postalCode} {company.contact.address.city}</li>
                <li>📞 Par téléphone : {company.contact.phone}</li>
              </ul>
              <p className="mt-4 text-sm">
                Si aucune solution amiable n'est trouvée, vous pouvez recourir à la médiation de l'assurance : www.mediation-assurance.org
              </p>
            </div>
          </LegalSection>

          <div className="mt-16 text-center">
            <p className="text-gray-600 font-montserrat">
              Pour toute question concernant ces CGU, n'hésitez pas à nous contacter.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Nous contacter
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </LegalContent>
      </main>
      <Footer />
    </>
  )
}