import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Histoire - Elyot Tubert',
  description: 'Découvrez mon parcours et mon histoire professionnelle',
}

export default function Histoire() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Titre de la page */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream mb-4 tracking-tight uppercase">
          Mon Histoire
        </h1>
        
        <div className="h-px w-24 bg-accent-beige mb-12 mt-6"></div>

        {/* Contenu principal */}
        <div className="space-y-8 text-cream/90 font-sans">
          <section className="space-y-4">
            <h2 className="font-serif text-3xl text-accent-beige mb-4">Mon Parcours</h2>
            <p className="text-lg leading-relaxed">
              Passionné par le développement web et la stratégie digitale, j'ai consacré ma carrière à créer des expériences numériques exceptionnelles qui allient esthétique et performance.
            </p>
            <p className="text-lg leading-relaxed">
              Au fil des années, j'ai développé une expertise approfondie dans les technologies modernes du web, tout en gardant une approche centrée sur l'utilisateur et les résultats business.
            </p>
          </section>

          <section className="space-y-4 pt-8">
            <h2 className="font-serif text-3xl text-accent-beige mb-4">Philosophie</h2>
            <p className="text-lg leading-relaxed">
              Je crois fermement que chaque projet est une opportunité de créer quelque chose d'unique. Mon approche combine rigueur technique, créativité et vision stratégique pour transformer les idées en réalités numériques impactantes.
            </p>
          </section>

          <section className="space-y-4 pt-8">
            <h2 className="font-serif text-3xl text-accent-beige mb-4">Mes Outils</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                <h3 className="font-serif text-xl text-accent-beige mb-2">Développement Front-End</h3>
                <p className="text-cream/80">
                  Création d'interfaces utilisateur élégantes et performantes avec les dernières technologies.
                </p>
              </div>
              <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                <h3 className="font-serif text-xl text-accent-beige mb-2">Stratégie Digital</h3>
                <p className="text-cream/80">
                  Conception de stratégies digitales sur mesure pour maximiser l'impact et les résultats.
                </p>
              </div>
              <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                <h3 className="font-serif text-xl text-accent-beige mb-2">Architecture Web</h3>
                <p className="text-cream/80">
                  Design de solutions techniques robustes et scalables pour des projets ambitieux.
                </p>
              </div>
              <div className="border border-accent-beige/20 p-6 hover:border-accent-beige/40 transition-colors">
                <h3 className="font-serif text-xl text-accent-beige mb-2">Optimisation</h3>
                <p className="text-cream/80">
                  Amélioration continue des performances, de l'expérience utilisateur et du SEO.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

