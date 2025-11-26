import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LegalHero } from '@/components/legal/LegalHero'
import { LegalContent } from '@/components/legal/LegalContent'
import { LegalSection } from '@/components/legal/LegalSection'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - WimAssur',
  description: 'Politique de confidentialité et protection des données personnelles de WimAssur. Vos droits et nos engagements RGPD.',
}

const sections = [
  { id: 'responsable', title: 'Responsable du traitement' },
  { id: 'collecte', title: 'Données collectées' },
  { id: 'finalites', title: 'Finalités du traitement' },
  { id: 'base-legale', title: 'Base légale' },
  { id: 'destinataires', title: 'Destinataires' },
  { id: 'conservation', title: 'Durée de conservation' },
  { id: 'droits', title: 'Vos droits' },
  { id: 'securite', title: 'Sécurité' },
  { id: 'cookies', title: 'Cookies et traceurs' },
  { id: 'contact', title: 'Contact' },
]

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero
          title="Politique de Confidentialité"
          subtitle="Protection de vos données personnelles"
          lastUpdated="26 novembre 2024"
        />
        
        <LegalContent sections={sections}>
          <div className="mb-8 rounded-2xl bg-primary-50 p-6 border border-primary-200">
            <p className="text-sm text-gray-700 font-montserrat">
              Chez {company.name}, la protection de vos données personnelles est notre priorité. Cette politique de confidentialité vous explique comment nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <LegalSection id="responsable" title="1. Responsable du traitement" highlighted>
            <p>
              Le responsable du traitement des données personnelles est :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Société :</strong> {company.name} SAS</p>
              <p><strong>Adresse :</strong> {company.contact.address.street}, {company.contact.address.postalCode} {company.contact.address.city}</p>
              <p><strong>Email DPO :</strong> dpo@wimassur.fr</p>
              <p><strong>Téléphone :</strong> {company.contact.phone}</p>
            </div>
          </LegalSection>

          <LegalSection id="collecte" title="2. Données collectées">
            <p>
              Nous collectons uniquement les données nécessaires à la fourniture de nos services :
            </p>
            
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Données d'identification :</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Nom, prénom</li>
                <li>Date de naissance</li>
                <li>Adresse postale</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Données relatives aux contrats :</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Informations sur vos biens à assurer</li>
                <li>Historique des sinistres</li>
                <li>Données de paiement (traitées de manière sécurisée)</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">Données de navigation :</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Adresse IP</li>
                <li>Pages visitées</li>
                <li>Durée de visite</li>
                <li>Type de navigateur</li>
              </ul>
            </div>
          </LegalSection>

          <LegalSection id="finalites" title="3. Finalités du traitement">
            <p>
              Vos données personnelles sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Gestion de la relation commerciale :</strong> étude de vos besoins, établissement de devis, souscription de contrats</li>
              <li><strong>Exécution des contrats :</strong> gestion de vos contrats d'assurance, traitement des sinistres</li>
              <li><strong>Obligations légales :</strong> lutte contre le blanchiment, déclarations réglementaires</li>
              <li><strong>Amélioration de nos services :</strong> analyses statistiques, enquêtes de satisfaction</li>
              <li><strong>Communication :</strong> envoi d'informations sur nos services (avec votre consentement)</li>
            </ul>
          </LegalSection>

          <LegalSection id="base-legale" title="4. Base légale">
            <p>
              Le traitement de vos données repose sur :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>L'exécution d'un contrat</strong> ou de mesures précontractuelles</li>
              <li><strong>Le respect d'obligations légales</strong> (conservation de documents, déclarations obligatoires)</li>
              <li><strong>Votre consentement</strong> pour l'envoi de communications commerciales</li>
              <li><strong>Notre intérêt légitime</strong> pour l'amélioration de nos services et la prévention de la fraude</li>
            </ul>
          </LegalSection>

          <LegalSection id="destinataires" title="5. Destinataires">
            <p>
              Vos données peuvent être transmises à :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Nos partenaires assureurs pour l'étude et la gestion de vos contrats</li>
              <li>Les prestataires techniques (hébergement, maintenance)</li>
              <li>Les autorités administratives et judiciaires si la loi l'exige</li>
              <li>Les experts et réparateurs en cas de sinistre</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm">
                <strong>Important :</strong> Nous ne vendons jamais vos données personnelles à des tiers.
              </p>
            </div>
          </LegalSection>

          <LegalSection id="conservation" title="6. Durée de conservation">
            <p>
              Vos données sont conservées selon les durées suivantes :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données clients :</strong> durée du contrat + 5 ans</li>
              <li><strong>Données de sinistres :</strong> 10 ans après la clôture du dossier</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
              <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
            </ul>
          </LegalSection>

          <LegalSection id="droits" title="7. Vos droits" highlighted>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  Droit d'accès
                </h3>
                <p className="text-sm">Obtenir la confirmation que vos données sont traitées et en recevoir une copie</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">✏️</span>
                  Droit de rectification
                </h3>
                <p className="text-sm">Corriger vos données si elles sont inexactes ou incomplètes</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🗑️</span>
                  Droit à l'effacement
                </h3>
                <p className="text-sm">Demander la suppression de vos données dans certains cas</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">⏸️</span>
                  Droit à la limitation
                </h3>
                <p className="text-sm">Limiter le traitement de vos données dans certaines situations</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  Droit à la portabilité
                </h3>
                <p className="text-sm">Recevoir vos données dans un format structuré et lisible</p>
              </div>
              
              <div className="rounded-lg bg-white p-4 shadow-md">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚫</span>
                  Droit d'opposition
                </h3>
                <p className="text-sm">Vous opposer au traitement de vos données pour motifs légitimes</p>
              </div>
            </div>

            <p className="mt-6">
              Pour exercer vos droits, contactez-nous à : <strong>dpo@wimassur.fr</strong>
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la CNIL : www.cnil.fr
            </p>
          </LegalSection>

          <LegalSection id="securite" title="8. Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Chiffrement des données sensibles</li>
              <li>Accès restreint aux données (principe du besoin d'en connaître)</li>
              <li>Sauvegardes régulières et sécurisées</li>
              <li>Formation du personnel à la protection des données</li>
              <li>Tests de sécurité réguliers</li>
              <li>Protocole HTTPS pour toutes les transmissions</li>
            </ul>
          </LegalSection>

          <LegalSection id="cookies" title="9. Cookies et traceurs">
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Types de cookies utilisés :
            </p>
            
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold mb-2">🔧 Cookies essentiels</h3>
                <p className="text-sm">Nécessaires au fonctionnement du site (session, préférences)</p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold mb-2">📊 Cookies analytiques</h3>
                <p className="text-sm">Mesure d'audience avec Plausible Analytics (respectueux de la vie privée)</p>
              </div>
              
              <div className="rounded-lg border border-gray-200 p-4">
                <h3 className="font-semibold mb-2">🎯 Cookies marketing</h3>
                <p className="text-sm">Uniquement avec votre consentement pour personnaliser nos offres</p>
              </div>
            </div>

            <p className="mt-4">
              Vous pouvez gérer vos préférences cookies à tout moment via notre bannière de consentement.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="10. Contact">
            <p>
              Pour toute question concernant cette politique ou l'exercice de vos droits :
            </p>
            
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 p-6">
              <h3 className="font-semibold mb-4">Délégué à la Protection des Données (DPO)</h3>
              <div className="space-y-2">
                <p><strong>Email :</strong> dpo@wimassur.fr</p>
                <p><strong>Téléphone :</strong> {company.contact.phone}</p>
                <p><strong>Adresse :</strong> {company.name} - Service DPO<br />
                {company.contact.address.street}<br />
                {company.contact.address.postalCode} {company.contact.address.city}</p>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Nous nous engageons à répondre à vos demandes dans un délai d'un mois maximum.
            </p>
          </LegalSection>
        </LegalContent>
      </main>
      <Footer />
    </>
  )
}