'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'histoire', 'projets', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Appel initial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Hauteur de la navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { id: 'histoire', label: 'Histoire' },
    { id: 'projets', label: 'Projets' },
    { id: 'contact', label: 'Contactez-moi' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-accent-beige/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo à gauche */}
          <button
            onClick={() => scrollToSection('accueil')}
            className="font-serif text-3xl md:text-4xl font-bold text-cream hover:text-accent-beige transition-colors duration-300 cursor-pointer"
          >
            Accueil
          </button>

          {/* Liens de navigation à droite */}
          <div className="flex items-center space-x-8 md:space-x-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link font-sans text-base md:text-lg font-medium text-cream ${
                    isActive ? 'active' : ''
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

