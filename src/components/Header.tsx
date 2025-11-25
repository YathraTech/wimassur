'use client'

import { useState, useEffect } from 'react'
import { company } from '@/data/company'

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
            href="#"
            className={`font-kanit font-bold transition-all duration-300 ${
              isScrolled ? 'text-2xl text-primary-600' : 'text-3xl text-white drop-shadow-lg'
            }`}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            {company.name}
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
                    {item.name === 'Blog' && (
                      <span className="absolute -right-1 -top-1 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                      </span>
                    )}
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

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="border-t border-gray-100 bg-white/95 px-4 pb-6 pt-2 shadow-2xl backdrop-blur-md">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdown(item.name)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      >
                        <span>{item.name}</span>
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
                        <ul className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.href}>
                              <a
                                href={subItem.href}
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                              >
                                <span>{subItem.icon}</span>
                                <span>{subItem.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a href="/contact" className="btn-primary mt-4 w-full block text-center">
                  Obtenir un devis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
