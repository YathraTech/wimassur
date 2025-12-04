'use client'

import { useState, useEffect } from 'react'
import { company } from '@/data/company'
import Image from 'next/image'

interface NavigationItem {
  name: string
  href: string
  dropdown?: {
    name: string
    href: string
    icon: string
  }[]
}

const navigation: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Services',
    href: '#',
    dropdown: [
      { name: 'Assurance Auto', href: '/services/auto', icon: '🚗' },
      { name: 'Assurance Habitation', href: '/services/habitation', icon: '🏠' },
      { name: 'Assurance Animaux', href: '/services/animaux', icon: '🐾' },
      { name: 'Assurance Santé', href: '/services/sante', icon: '❤️' },
    ],
  },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as HTMLElement).closest('.relative')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeDropdown])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? 'h-16 border-gray-200/50 bg-white/90 shadow-lg backdrop-blur-md'
          : 'h-20 border-white/10 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container h-full">
        <nav className="flex h-full items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="relative transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/images/home/logowimassur.png"
              alt={company.name}
              width={isScrolled ? 120 : 140}
              height={isScrolled ? 40 : 50}
              className="h-auto w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 md:flex md:ml-8">
            {navigation.map((item) => (
              <li key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdown(item.name)}
                      className={`group flex items-center gap-1 px-3 py-2 font-medium font-montserrat transition-all duration-200 hover:scale-105 ${
                        isScrolled
                          ? 'text-gray-700 hover:text-primary-600'
                          : 'text-white hover:text-white/90 hover:drop-shadow-lg'
                      } ${activeDropdown === item.name ? 'text-primary-600' : ''}`}
                    >
                      {item.name}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute left-0 top-full mt-2 w-72 animate-fade-in rounded-xl border border-gray-100 bg-white/95 p-2 shadow-2xl backdrop-blur-sm">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-primary-50 hover:scale-[1.02] hover:shadow-md"
                          >
                            <span className="text-2xl transition-transform group-hover:scale-110">
                              {subItem.icon}
                            </span>
                            <div className="flex-1">
                              <span className="font-medium text-gray-900 group-hover:text-primary-700">
                                {subItem.name}
                              </span>
                              <p className="text-xs text-gray-500 group-hover:text-gray-600">
                                {subItem.name.includes('Auto') &&
                                  'Protection complète pour votre véhicule'}
                                {subItem.name.includes('Habitation') && 'Sécurisez votre foyer'}
                                {subItem.name.includes('Animaux') &&
                                  'Prenez soin de vos compagnons'}
                                {subItem.name.includes('Santé') && 'Votre bien-être avant tout'}
                              </p>
                            </div>
                            <svg
                              className="h-4 w-4 text-gray-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`relative px-3 py-2 font-medium font-montserrat transition-all duration-200 hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-primary-600'
                        : 'text-white hover:text-white/90'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li className="ml-4 flex items-center gap-4">
              <a
                href="/contact"
                className={`group relative overflow-hidden rounded-lg px-6 py-2.5 font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/25'
                    : 'bg-white text-primary-700 hover:shadow-xl'
                } hover:-translate-y-0.5 hover:scale-105`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Obtenir un devis
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
            </li>
          </ul>

          {/* Mobile menu button - Modern hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 md:hidden ${
              isScrolled 
                ? 'bg-gray-100 hover:bg-gray-200' 
                : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition-all duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation - Modern Drawer */}
        <div 
          className={`fixed inset-x-0 top-0 z-[100] md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="bg-white backdrop-blur-lg shadow-2xl max-h-screen overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
              <a
                href="/"
                className="relative"
              >
                <Image
                  src="/images/home/logowimassur.png"
                  alt={company.name}
                  width={100}
                  height={35}
                  className="h-auto w-auto object-contain"
                  priority
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all duration-300 hover:bg-gray-200"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="px-4 py-6">
              <ul className="space-y-1">
                {navigation.map((item, index) => (
                  <li 
                    key={item.name}
                    className={`${isMobileMenuOpen ? 'animate-slide-in-right opacity-0 [animation-fill-mode:forwards]' : ''}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdown(item.name)}
                          className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-200 hover:bg-primary-50 active:scale-[0.98]"
                        >
                          <span className="font-medium text-gray-900 group-hover:text-primary-700">
                            {item.name}
                          </span>
                          <svg
                            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {activeDropdown === item.name && (
                          <ul className="ml-2 mt-2 space-y-1 animate-fade-in">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.href}>
                                <a
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-primary-50 active:scale-[0.98]"
                                >
                                  <span className="text-2xl transition-transform group-hover:scale-110">{subItem.icon}</span>
                                  <span className="font-medium text-gray-700 group-hover:text-primary-700">
                                    {subItem.name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 hover:bg-primary-50 active:scale-[0.98]"
                      >
                        <span className="font-medium text-gray-900 group-hover:text-primary-700">
                          {item.name}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                <a 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <span className="relative z-10">Obtenir un devis</span>
                  <svg
                    className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-700 to-primary-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-6 flex items-center justify-center gap-6 border-t border-gray-100 pt-6">
                <a
                  href="tel:+33611393247"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">06 11 39 32 47</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}
