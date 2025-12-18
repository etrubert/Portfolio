'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.')
    setFormData({ nom: '', email: '', sujet: '', message: '' })
  }

  const projets = [
    {
      id: 1,
      titre: 'Plateforme E-Commerce Premium',
      description: 'Développement d\'une plateforme e-commerce haut de gamme avec architecture microservices et interface utilisateur sur mesure.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      categorie: 'E-Commerce',
    },
    {
      id: 2,
      titre: 'Application Web Progressive',
      description: 'Création d\'une PWA performante avec fonctionnalités offline et expérience utilisateur optimale sur tous les appareils.',
      technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB'],
      categorie: 'Web App',
    },
    {
      id: 3,
      titre: 'Dashboard Analytics Avancé',
      description: 'Conception et développement d\'un tableau de bord analytique avec visualisations de données en temps réel.',
      technologies: ['Vue.js', 'D3.js', 'WebSocket', 'PostgreSQL'],
      categorie: 'Analytics',
    },
    {
      id: 4,
      titre: 'Site Corporate Élégant',
      description: 'Refonte complète d\'un site corporate avec design premium, animations subtiles et optimisation SEO.',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Headless CMS'],
      categorie: 'Corporate',
    },
    {
      id: 5,
      titre: 'Plateforme SaaS B2B',
      description: 'Développement d\'une solution SaaS complète avec authentification, facturation et gestion multi-tenant.',
      technologies: ['Next.js', 'Prisma', 'Stripe', 'AWS'],
      categorie: 'SaaS',
    },
    {
      id: 6,
      titre: 'Application Mobile Web',
      description: 'Création d\'une application mobile-first avec design responsive et performances optimisées.',
      technologies: ['React Native', 'Expo', 'GraphQL', 'Apollo'],
      categorie: 'Mobile',
    },
  ]

  return (
    <>
      {/* Section Hero */}
      <section id="accueil" className="hero-background min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 px-6 sm:px-8 max-w-5xl mx-auto w-full">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-cream mb-8 tracking-tight uppercase">
            ELYOT TUBERT
          </h1>
          <p className="font-sans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cream/80 mb-16 font-light tracking-wide">
            Étudiant chez Eugenia School
          </p>
          <a
            href="#histoire"
            className="cta-button inline-block px-10 py-5 md:px-12 md:py-6 border-2 border-accent-beige text-accent-beige font-sans text-base md:text-lg font-medium uppercase tracking-wider hover:text-accent-taupe"
          >
            Commencer mon Histoire
          </a>
        </div>
      </section>

      {/* Section Histoire */}
      <section id="histoire" className="min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-cream mb-6 tracking-tight uppercase">
            Mon Histoire
          </h1>
          <div className="h-px w-32 bg-accent-beige mb-16 mt-8"></div>

          <div className="space-y-12 text-cream/90 font-sans">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl text-accent-beige mb-6">Mon Parcours</h2>
              <p className="text-xl md:text-2xl leading-relaxed">
                À 18 ans, mon parcours est déjà marqué par une forte mobilité : avoir grandi dans 5 pays différents m'a doté d'une capacité d'adaptation exceptionnelle, tant humaine que technique. Sportif depuis mon plus jeune âge, j'ai pratiqué le rugby pendant 16 ans, une école de la persévérance et de l'esprit d'équipe qui définit aujourd'hui ma force de travail.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed">
                Actuellement en Bachelor à l'Eugenia School (Paris), je me spécialise dans la maîtrise des technologies qui redéfinissent le monde professionnel. Je développe une expertise concrète sur les outils de demain, notamment : Organisation & Gestion : Notion & Airtable, Analyse de données : Google Sheets & Looker Studio, Développement & IA : Cursor
              </p>
            </div>

            <div className="space-y-6 pt-12">
              <h2 className="font-serif text-4xl md:text-5xl text-accent-beige mb-8">Mes Outils</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-accent-beige/20 p-8 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-6 flex justify-center items-center min-h-[120px]">
                    <Image
                      src="/lookerstudio-image.png"
                      alt="Looker Studio"
                      width={150}
                      height={150}
                      className="h-auto w-auto max-w-[150px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-lg md:text-xl">
                    Looker Studio (anciennement appelé Google Data Studio) est l'outil de Data Visualisation gratuit de Google. Son but est simple : transformer des chiffres bruts et ennuyeux (provenant de tableaux Excel, Google Ads, etc.) en tableaux de bord interactifs, visuels et faciles à comprendre.
                  </p>
                </div>
                <div className="border border-accent-beige/20 p-8 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-6 flex justify-center items-center min-h-[120px]">
                    <Image
                      src="/Notion-image.png"
                      alt="Notion"
                      width={150}
                      height={150}
                      className="h-auto w-auto max-w-[150px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-lg md:text-xl">
                    Notion est souvent décrit comme un « système d'exploitation pour le travail ». C'est un outil tout-en-un extrêmement flexible qui combine la prise de notes, la gestion de bases de données, la planification de projets et la création de documents.
                  </p>
                </div>
                <div className="border border-accent-beige/20 p-8 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-6 flex justify-center items-center min-h-[120px]">
                    <Image
                      src="/Cursor-image.png"
                      alt="Cursor"
                      width={150}
                      height={150}
                      className="h-auto w-auto max-w-[150px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-lg md:text-xl">
                    Cursor est un éditeur de code (IDE) de nouvelle génération, conçu spécifiquement pour intégrer l'intelligence artificielle au cœur du développement informatique.
                  </p>
                </div>
                <div className="border border-accent-beige/20 p-8 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-6 flex justify-center items-center min-h-[120px]">
                    <Image
                      src="/Airtable-image.png"
                      alt="Airtable"
                      width={150}
                      height={150}
                      className="h-auto w-auto max-w-[120px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-lg md:text-xl">
                    Airtable est souvent décrit comme le mélange parfait entre un tableur (comme Excel ou Google Sheets) et une base de données (comme Access ou SQL), le tout avec une interface ultra-moderne et colorée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-cream mb-6 tracking-tight uppercase">
            Mes Projets
          </h1>
          <div className="h-px w-32 bg-accent-beige mb-16 mt-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet) => (
              <div
                key={projet.id}
                className="group border border-accent-beige/20 hover:border-accent-beige/60 transition-all duration-300 p-8 md:p-10 flex flex-col"
              >
                {projet.id === 1 && (
                  <>
                    <div className="mb-6 flex justify-center items-center">
                      <Image
                        src="/projet n°1-lookerstudio.png"
                        alt="Dashboard Looker Studio"
                        width={300}
                        height={200}
                        className="w-auto h-auto max-w-[280px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-sm md:text-base leading-relaxed mb-6 text-center">
                      Lors de ce projet on a répondu a la problématique.<br />
                      Analyse Géographique et Temporelle. L'objectif : Comprendre les marchés les plus rentables et les périodes de l'année/journée où les performances sont maximales.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://lookerstudio.google.com/u/0/reporting/aa7d9a8d-6a52-47e0-a456-27d7eaae94fc/page/usKhF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-6 py-3 border-2 border-accent-beige text-accent-beige font-sans text-sm md:text-base font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Dashboard →
                      </a>
                    </div>
                  </>
                )}

                {projet.id !== 1 && projet.id !== 2 && projet.id !== 3 && projet.id !== 4 && (
                  <>
                    <div className="mb-6">
                      <span className="text-sm md:text-base font-sans text-accent-beige uppercase tracking-wider">
                        {projet.categorie}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4 group-hover:text-accent-beige transition-colors">
                      {projet.titre}
                    </h2>

                    <p className="text-cream/80 font-sans text-base md:text-lg leading-relaxed mb-8 flex-grow">
                      {projet.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {projet.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm md:text-base font-sans text-cream/60 border border-cream/20 px-3 py-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-accent-beige/10">
                      <span className="text-accent-beige text-base md:text-lg font-sans uppercase tracking-wider group-hover:underline cursor-pointer">
                        En savoir plus →
                      </span>
                    </div>
                  </>
                )}

                {projet.id === 4 && (
                  <>
                    <div className="mb-6 flex justify-center items-center">
                      <Image
                        src="/Neogen-ia.png"
                        alt="Neogen-ia"
                        width={300}
                        height={200}
                        className="w-auto h-auto max-w-[280px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-sm md:text-base leading-relaxed mb-6">
                      Pour le projet final d'IA Génératif, on a du créer deux article grace a l'intelligence artificiel. C'est article on était créer pour que l'école puisse le publier.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAG5hMHPxik/OT_jscfoh5PY4F3Qui9Wyg/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-6 py-3 border-2 border-accent-beige text-accent-beige font-sans text-sm md:text-base font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 3 && (
                  <>
                    <div className="mb-6 flex justify-center items-center">
                      <Image
                        src="/FairWay.png"
                        alt="FairWay App"
                        width={300}
                        height={200}
                        className="w-auto h-auto max-w-[280px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-sm md:text-base leading-relaxed mb-6">
                      Lors de notre cours Stratégie D'entreprise, on a du créer une strat-up de notre choix. Nous nous avons choisie de proposer une stratt-up pour démocratiser le golf en France.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAG4BiapqTE/YwuPX04HUsRogah7VHRD-Q/view?utm_content=DAG4BiapqTE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0b17a096bc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-6 py-3 border-2 border-accent-beige text-accent-beige font-sans text-sm md:text-base font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 2 && (
                  <>
                    <div className="mb-6 flex justify-center items-center">
                      <Image
                        src="/projet n°2-lookestudio.png"
                        alt="Dashboard Looker Studio"
                        width={300}
                        height={200}
                        className="w-auto h-auto max-w-[280px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-sm md:text-base leading-relaxed mb-6 text-center">
                      J'ai répondu au sujet : Société de Fournitures de Bureau / E-commerce 📝 (Analyse de la Rentabilité). La problematique utiliser est P1. Les remises que nous accordons sont-elles profitables ou destructrices de valeur ?
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://lookerstudio.google.com/u/0/reporting/e17e159d-192f-452d-a8bc-383f26227f5e/page/43XiF"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-6 py-3 border-2 border-accent-beige text-accent-beige font-sans text-sm md:text-base font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Dashboard →
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="min-h-screen flex items-center py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-cream mb-6 tracking-tight uppercase">
            Contactez-moi
          </h1>
          <div className="h-px w-32 bg-accent-beige mb-16 mt-8"></div>

          <p className="text-cream/80 font-sans text-xl md:text-2xl leading-relaxed mb-16">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous et de discuter de vos besoins.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-cream font-sans text-base md:text-lg font-medium mb-3">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-accent-beige/30 focus:border-accent-beige focus:outline-none px-5 py-4 text-lg text-cream font-sans transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-cream font-sans text-base md:text-lg font-medium mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-accent-beige/30 focus:border-accent-beige focus:outline-none px-5 py-4 text-lg text-cream font-sans transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sujet" className="block text-cream font-sans text-base md:text-lg font-medium mb-3">
                Sujet *
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                required
                value={formData.sujet}
                onChange={handleChange}
                className="w-full bg-transparent border-2 border-accent-beige/30 focus:border-accent-beige focus:outline-none px-5 py-4 text-lg text-cream font-sans transition-colors"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cream font-sans text-base md:text-lg font-medium mb-3">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-2 border-accent-beige/30 focus:border-accent-beige focus:outline-none px-5 py-4 text-lg text-cream font-sans transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="cta-button w-full md:w-auto px-10 py-5 md:px-12 md:py-6 border-2 border-accent-beige text-accent-beige font-sans text-base md:text-lg font-medium uppercase tracking-wider hover:text-accent-taupe"
            >
              Envoyer le message
            </button>
          </form>

          <div className="mt-20 pt-16 border-t border-accent-beige/10">
            <h2 className="font-serif text-3xl md:text-4xl text-accent-beige mb-8">Autres moyens de contact</h2>
            <div className="space-y-6 text-cream/80 font-sans text-lg md:text-xl">
              <p>
                <span className="text-accent-beige font-medium">Email :</span> contact@portfolio.com
              </p>
              <p>
                <span className="text-accent-beige font-medium">LinkedIn :</span> /in/votre-profil
              </p>
              <p>
                <span className="text-accent-beige font-medium">Disponibilité :</span> Réponse sous 24-48h
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
