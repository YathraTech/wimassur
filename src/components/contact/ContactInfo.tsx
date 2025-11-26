'use client'

export function ContactInfo() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 h-96 w-96 animate-breathe rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 animate-breathe-slow rounded-full bg-secondary-400/20 blur-3xl" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[20%] bottom-[10%] h-48 w-48 animate-float">
          <div className="h-full w-full rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="absolute right-[10%] top-[20%] h-56 w-56 animate-float-slow">
          <div className="h-full w-full rounded-full bg-secondary-400/10 blur-3xl" />
        </div>
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold text-white font-benzin">
            Toujours <span className="text-secondary-400">à votre écoute</span>
          </h2>
          <p className="text-lg text-gray-100 font-montserrat">
            Plusieurs moyens de nous contacter selon vos préférences
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Phone Card */}
          <div className="group animate-fade-in opacity-0 [animation-fill-mode:forwards]">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white font-benzin">Téléphone</h3>
              <p className="mb-4 text-sm text-gray-200 font-montserrat">Du lundi au vendredi</p>
              <a href="tel:+33123456789" className="text-secondary-300 hover:text-secondary-400 font-semibold transition-colors font-montserrat">
                +33 1 23 45 67 89
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group animate-fade-in opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white font-benzin">Email</h3>
              <p className="mb-4 text-sm text-gray-200 font-montserrat">Réponse sous 24h</p>
              <a href="mailto:contact@wimassur.fr" className="text-secondary-300 hover:text-secondary-400 font-semibold transition-colors font-montserrat">
                contact@wimassur.fr
              </a>
            </div>
          </div>

          {/* Address Card */}
          <div className="group animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white font-benzin">Adresse</h3>
              <p className="mb-4 text-sm text-gray-200 font-montserrat">Venez nous rencontrer</p>
              <address className="text-secondary-300 not-italic font-montserrat">
                11 Rue Robert Corvisier<br />
                77230 Saint-Mard
              </address>
            </div>
          </div>

          {/* Hours Card */}
          <div className="group animate-fade-in opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
            <div className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white font-benzin">Horaires</h3>
              <p className="mb-4 text-sm text-gray-200 font-montserrat">Nos bureaux</p>
              <div className="text-secondary-300 font-montserrat text-sm">
                <p>Lun-Ven: 9h-18h</p>
                <p>Sam: 9h-12h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md p-2">
          <div className="aspect-[16/9] md:aspect-[16/6] rounded-2xl bg-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.6975693743095!2d2.6436893156703723!3d48.99610127930055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e615c5f5f5f5f5%3A0x0!2s11%20Rue%20Robert%20Corvisier%2C%2077230%20Saint-Mard%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-300"
            />
          </div>
        </div>

      </div>
    </section>
  )
}