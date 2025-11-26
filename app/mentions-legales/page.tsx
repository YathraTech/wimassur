import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LegalHero } from '@/components/legal/LegalHero'
import { LegalContent } from '@/components/legal/LegalContent'
import { LegalSection } from '@/components/legal/LegalSection'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: 'Mentions Légales - WimAssur',
  description: 'Mentions légales du site WimAssur, courtier en assurance. Informations sur l\'éditeur, l\'hébergeur et les droits.',
}

const sections = [
  { id: 'editeur', title: 'Éditeur du site' },
  { id: 'publication', title: 'Directeur de publication' },
  { id: 'hebergement', title: 'Hébergement' },
  { id: 'propriete', title: 'Propriété intellectuelle' },
  { id: 'donnees', title: 'Données personnelles' },
  { id: 'cookies', title: 'Cookies' },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <LegalHero
          title="Mentions Légales"
          subtitle="Informations légales et réglementaires"
          lastUpdated="26 novembre 2024"
        />
        
        <LegalContent sections={sections}>
          <LegalSection id="editeur" title="1. Éditeur du site" highlighted>
            <p>
              Le site <strong>www.wimassur.fr</strong> est édité par :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Raison sociale :</strong> {company.name} SAS</p>
              <p><strong>Capital social :</strong> 10 000 €</p>
              <p><strong>Siège social :</strong> {company.contact.address.street}, {company.contact.address.postalCode} {company.contact.address.city}</p>
              <p><strong>SIREN :</strong> {company.legal.siren}</p>
              <p><strong>SIRET :</strong> {company.legal.siret}</p>
              <p><strong>N° TVA Intracommunautaire :</strong> FR89{company.legal.siren}</p>
              <p><strong>Téléphone :</strong> {company.contact.phone}</p>
              <p><strong>Email :</strong> {company.contact.email}</p>
            </div>
          </LegalSection>

          <LegalSection id="publication" title="2. Directeur de publication">
            <p>
              <strong>Directeur de la publication :</strong> Madame Charmila, Présidente de {company.name} SAS
            </p>
            <p>
              <strong>Contact :</strong> direction@wimassur.fr
            </p>
          </LegalSection>

          <LegalSection id="hebergement" title="3. Hébergement">
            <p>
              Ce site est hébergé par :
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Société :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p><strong>Site web :</strong> https://vercel.com</p>
            </div>
          </LegalSection>

          <LegalSection id="propriete" title="4. Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (structure, textes, logos, images, vidéos, etc.) est la propriété exclusive de {company.name} ou de ses partenaires.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de {company.name}.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
          </LegalSection>

          <LegalSection id="donnees" title="5. Données personnelles">
            <p>
              Conformément à la loi n°78-17 du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Par email : dpo@wimassur.fr</li>
              <li>Par courrier : {company.name} - Service DPO, {company.contact.address.street}, {company.contact.address.postalCode} {company.contact.address.city}</li>
            </ul>
            <p className="mt-4">
              Pour plus d'informations sur notre politique de protection des données, consultez notre <a href="/politique-confidentialite" className="text-primary-600 underline hover:text-primary-700">Politique de Confidentialité</a>.
            </p>
          </LegalSection>

          <LegalSection id="cookies" title="6. Cookies">
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de navigation et à des fins statistiques. En continuant votre visite, vous acceptez l'utilisation de cookies.
            </p>
            <p>
              Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne plus être accessibles.
            </p>
            <div className="mt-4 rounded-lg bg-primary-50 p-4 border border-primary-200">
              <p className="text-sm">
                <strong>Types de cookies utilisés :</strong>
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Cookies essentiels au fonctionnement du site</li>
                <li>Cookies de mesure d'audience (Plausible Analytics)</li>
                <li>Cookies de préférences utilisateur</li>
              </ul>
            </div>
          </LegalSection>

          <div className="mt-16 rounded-2xl bg-gray-100 p-8 text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-900 font-benzin">
              Informations complémentaires
            </h3>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p>
                <strong>N° ORIAS :</strong> {company.legal.orias} - Vous pouvez vérifier cette immatriculation sur le site www.orias.fr
              </p>
              <p>
                <strong>Autorité de contrôle :</strong> ACPR (Autorité de Contrôle Prudentiel et de Résolution) - 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09
              </p>
              <p>
                <strong>RC Professionnelle :</strong> {company.legal.rcPro}
              </p>
            </div>
          </div>
        </LegalContent>
      </main>
      <Footer />
    </>
  )
}