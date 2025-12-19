'use client'

import Image from 'next/image'

export default function Home() {

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
    {
      id: 7,
      titre: 'Nouveau Projet 1',
      description: 'Description du nouveau projet 1.',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      categorie: 'Catégorie 1',
    },
    {
      id: 8,
      titre: 'Nouveau Projet 2',
      description: 'Description du nouveau projet 2.',
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      categorie: 'Catégorie 2',
    },
  ]

  return (
    <>
      {/* Section Hero */}
      <section id="accueil" className="hero-background min-h-screen flex items-center justify-start relative overflow-hidden">
        {/* Image de fond à droite */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-2/5 lg:w-1/3 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/Photo.JPG"
              alt="Elyot Tubert"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
          </div>
        </div>
        
        <div className="text-left z-10 px-6 sm:px-8 max-w-4xl w-full relative">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-5 tracking-tight uppercase">
            ELYOT TUBERT
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-cream/80 mb-10 font-light tracking-wide">
            Étudiant chez Eugenia School
          </p>
          <a
            href="#histoire"
            className="cta-button inline-block px-7 py-3.5 md:px-9 md:py-4 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe"
          >
            Commencer mon Histoire
          </a>
          
          {/* Boutons LinkedIn, GitHub et Email */}
          <div className="mt-6 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/elyot-trubert-965070382/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent-beige/20 hover:bg-accent-beige/30 border-2 border-accent-beige/50 hover:border-accent-beige rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 text-accent-beige"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          
          <a
            href="https://github.com/etrubert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent-beige/20 hover:bg-accent-beige/30 border-2 border-accent-beige/50 hover:border-accent-beige rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 text-accent-beige"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          
          <a
            href="mailto:elyot3112@gmail.com"
            className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-accent-beige/20 hover:bg-accent-beige/30 border-2 border-accent-beige/50 hover:border-accent-beige rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 md:w-7 md:h-7 text-accent-beige"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section id="histoire" className="min-h-screen flex items-center py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4 tracking-tight uppercase">
            Mon Histoire
          </h1>
          <div className="h-px w-24 bg-accent-beige mb-12 mt-6"></div>

          <div className="space-y-10 text-cream/90 font-sans">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-accent-beige mb-4">Mon Parcours</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                À 18 ans, mon parcours est déjà marqué par une forte mobilité : avoir grandi dans 5 pays différents m'a doté d'une capacité d'adaptation exceptionnelle, tant humaine que technique. Sportif depuis mon plus jeune âge, j'ai pratiqué le rugby pendant 16 ans, une école de la persévérance et de l'esprit d'équipe qui définit aujourd'hui ma force de travail.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Actuellement en Bachelor à l'Eugenia School (Paris), je me spécialise dans la maîtrise des technologies qui redéfinissent le monde professionnel. Je développe une expertise concrète sur les outils de demain, notamment : Organisation & Gestion : Notion & Airtable, Analyse de données : Google Sheets & Looker Studio, Développement & IA : Cursor
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <h2 className="font-serif text-3xl md:text-4xl text-accent-beige mb-6">Mes Outils</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-4 flex justify-center items-center min-h-[100px]">
                    <Image
                      src="/lookerstudio-image.png"
                      alt="Looker Studio"
                      width={120}
                      height={120}
                      className="h-auto w-auto max-w-[120px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-base md:text-lg">
                    Looker Studio (anciennement appelé Google Data Studio) est l'outil de Data Visualisation gratuit de Google. Son but est simple : transformer des chiffres bruts et ennuyeux (provenant de tableaux Excel, Google Ads, etc.) en tableaux de bord interactifs, visuels et faciles à comprendre.
                  </p>
                </div>
                <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-4 flex justify-center items-center min-h-[100px]">
                    <Image
                      src="/Notion-image.png"
                      alt="Notion"
                      width={120}
                      height={120}
                      className="h-auto w-auto max-w-[120px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-base md:text-lg">
                    Notion est souvent décrit comme un « système d'exploitation pour le travail ». C'est un outil tout-en-un extrêmement flexible qui combine la prise de notes, la gestion de bases de données, la planification de projets et la création de documents.
                  </p>
                </div>
                <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-4 flex justify-center items-center min-h-[100px]">
                    <Image
                      src="/Cursor-image.png"
                      alt="Cursor"
                      width={120}
                      height={120}
                      className="h-auto w-auto max-w-[120px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-base md:text-lg">
                    Cursor est un éditeur de code (IDE) de nouvelle génération, conçu spécifiquement pour intégrer l'intelligence artificielle au cœur du développement informatique.
                  </p>
                </div>
                <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                  <div className="mb-4 flex justify-center items-center min-h-[100px]">
                    <Image
                      src="/Airtable-image.png"
                      alt="Airtable"
                      width={120}
                      height={120}
                      className="h-auto w-auto max-w-[100px] object-contain"
                      priority
                    />
                  </div>
                  <p className="text-cream/80 text-base md:text-lg">
                    Airtable est souvent décrit comme le mélange parfait entre un tableur (comme Excel ou Google Sheets) et une base de données (comme Access ou SQL), le tout avec une interface ultra-moderne et colorée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projets" className="min-h-screen flex items-center py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4 tracking-tight uppercase">
            Mes Projets
          </h1>
          <div className="h-px w-24 bg-accent-beige mb-12 mt-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet) => (
              <div
                key={projet.id}
                className="group border border-accent-beige/20 hover:border-accent-beige/60 transition-all duration-300 p-6 md:p-8 flex flex-col"
              >
                {projet.id === 1 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/projet n°1-lookerstudio.png"
                        alt="Dashboard Looker Studio"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
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
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Dashboard →
                      </a>
                    </div>
                  </>
                )}

                {projet.id !== 1 && projet.id !== 2 && projet.id !== 3 && projet.id !== 4 && projet.id !== 5 && projet.id !== 6 && projet.id !== 7 && projet.id !== 8 && (
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

                {projet.id === 8 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/Vision Vox.png"
                        alt="Vision Vox"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
                      Vision Vox, est mon projet que j'ai du réaliser pendant mais deux semaine d'immersion.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAGyq6NZa0M/fJ0wKOkxYh9YX-vsoP9O8g/view?utm_content=DAGyq6NZa0M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0d9b984a7f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 7 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/Association Podcast.png"
                        alt="Association Podcast"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
                      C'était ma premiere étape dans une association pendant lais étude chez Eugénia. Vous verrez aussi tout mais collaborateur qui mon aider a monter cette association.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAGyBac4ew0/OgnCGFA72Dih-kUrkX-jDA/view?utm_content=DAGyBac4ew0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc6f38b7a81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 6 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/SQL.png"
                        alt="Projet SQL Fondamentaux"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
                      Ce projet de SQL représente les fondamentaux du SQL. On devait faire deux automatisitoin pour aidez Stéphane pour classer les élève.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAG5EUOwYcs/zPqTAUZxm3OqKXlOKUKz-g/view?utm_content=DAG5EUOwYcs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h903bb558a3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 5 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/Respire.png"
                        alt="Respire"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
                      Respire était notre premier Projet Finaux de l'anné en Merkating Stratégique. Notre sujet était Respire
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAG0h-9Ush8/0KktKZLzafLGmcmtfhfCmg/view?utm_content=DAG0h-9Ush8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h464b1f374d"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 4 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/Neogen-ia.png"
                        alt="Neogen-ia"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
                      Pour le projet final d'IA Génératif, on a du créer deux article grace a l'intelligence artificiel. C'est article on était créer pour que l'école puisse le publier.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAG5hMHPxik/OT_jscfoh5PY4F3Qui9Wyg/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 3 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/FairWay.png"
                        alt="FairWay App"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
                      />
                    </div>
                    <p className="text-cream/80 font-sans text-xs md:text-sm leading-relaxed mb-4">
                      Lors de notre cours Stratégie D'entreprise, on a du créer une strat-up de notre choix. Nous nous avons choisie de proposer une stratt-up pour démocratiser le golf en France.
                    </p>
                    <div className="mt-auto">
                      <a
                        href="https://www.canva.com/design/DAG4BiapqTE/YwuPX04HUsRogah7VHRD-Q/view?utm_content=DAG4BiapqTE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0b17a096bc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
                      >
                        Voir le Projet →
                      </a>
                    </div>
                  </>
                )}

                {projet.id === 2 && (
                  <>
                    <div className="mb-4 flex justify-center items-center">
                      <Image
                        src="/projet n°2-lookestudio.png"
                        alt="Dashboard Looker Studio"
                        width={240}
                        height={160}
                        className="w-auto h-auto max-w-[220px] object-contain rounded"
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
                        className="cta-button inline-block w-full text-center px-5 py-2.5 border-2 border-accent-beige text-accent-beige font-sans text-xs md:text-sm font-medium uppercase tracking-wider hover:text-accent-taupe hover:bg-accent-beige/10 transition-all"
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
      <section id="contact" className="min-h-screen flex items-center py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-4 tracking-tight uppercase">
            Contact
          </h1>
          <div className="h-px w-24 bg-accent-beige mb-6 mt-6"></div>

          <div className="space-y-4 text-cream/80 font-sans text-base md:text-lg">
            <p>
              <span className="text-accent-beige font-medium">E-mail :</span>{' '}
              <a
                href="mailto:elyot3112@gmail.com"
                className="text-cream/80 hover:text-accent-beige transition-colors underline"
              >
                elyot3112@gmail.com
              </a>
            </p>
            <div className="pt-2 flex flex-row gap-3">
              <a
                href="https://www.linkedin.com/in/elyot-trubert-965070382/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent-beige/20 hover:bg-accent-beige/30 border-2 border-accent-beige/50 hover:border-accent-beige rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7 text-accent-beige"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              
              <a
                href="https://github.com/etrubert"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent-beige/20 hover:bg-accent-beige/30 border-2 border-accent-beige/50 hover:border-accent-beige rounded-full transition-all duration-300 backdrop-blur-sm"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7 text-accent-beige"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
