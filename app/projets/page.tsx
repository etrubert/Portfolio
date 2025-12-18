import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projets - Elyot Tubert',
  description: 'Découvrez mes réalisations et projets professionnels',
}

export default function Projets() {
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
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Titre de la page */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream mb-4 tracking-tight uppercase">
          Mes Projets
        </h1>
        
        <div className="h-px w-24 bg-accent-beige mb-12 mt-6"></div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet) => (
            <div
              key={projet.id}
              className="group border border-accent-beige/20 hover:border-accent-beige/60 transition-all duration-300 p-6 flex flex-col"
            >
              {/* Catégorie */}
              <div className="mb-4">
                <span className="text-xs font-sans text-accent-beige uppercase tracking-wider">
                  {projet.categorie}
                </span>
              </div>

              {/* Titre */}
              <h2 className="font-serif text-2xl text-cream mb-3 group-hover:text-accent-beige transition-colors">
                {projet.titre}
              </h2>

              {/* Description */}
              <p className="text-cream/80 font-sans text-sm leading-relaxed mb-6 flex-grow">
                {projet.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projet.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs font-sans text-cream/60 border border-cream/20 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Lien (placeholder) */}
              <div className="mt-auto pt-4 border-t border-accent-beige/10">
                <span className="text-accent-beige text-sm font-sans uppercase tracking-wider group-hover:underline cursor-pointer">
                  En savoir plus →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

