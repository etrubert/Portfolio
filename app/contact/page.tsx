'use client'

import { useState } from 'react'

export default function Contact() {
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
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.')
    setFormData({ nom: '', email: '', sujet: '', message: '' })
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Titre de la page */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream mb-4 tracking-tight uppercase">
          Contactez-moi
        </h1>
        
        <div className="h-px w-24 bg-accent-beige mb-12 mt-6"></div>

        {/* Description */}
        <p className="text-cream/80 font-sans text-lg leading-relaxed mb-12">
          Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous et de discuter de vos besoins.
        </p>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nom */}
            <div>
              <label htmlFor="nom" className="block text-cream font-sans text-sm font-medium mb-2">
                Nom *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full bg-transparent border border-accent-beige/30 focus:border-accent-beige focus:outline-none px-4 py-3 text-cream font-sans transition-colors"
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-cream font-sans text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-accent-beige/30 focus:border-accent-beige focus:outline-none px-4 py-3 text-cream font-sans transition-colors"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="sujet" className="block text-cream font-sans text-sm font-medium mb-2">
              Sujet *
            </label>
            <input
              type="text"
              id="sujet"
              name="sujet"
              required
              value={formData.sujet}
              onChange={handleChange}
              className="w-full bg-transparent border border-accent-beige/30 focus:border-accent-beige focus:outline-none px-4 py-3 text-cream font-sans transition-colors"
              placeholder="Sujet de votre message"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-cream font-sans text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border border-accent-beige/30 focus:border-accent-beige focus:outline-none px-4 py-3 text-cream font-sans transition-colors resize-none"
              placeholder="Votre message..."
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="cta-button w-full md:w-auto px-8 py-4 border border-accent-beige text-accent-beige font-sans text-sm font-medium uppercase tracking-wider hover:text-accent-taupe"
          >
            Envoyer le message
          </button>
        </form>

        {/* Informations de contact alternatives */}
        <div className="mt-16 pt-12 border-t border-accent-beige/10">
          <h2 className="font-serif text-2xl text-accent-beige mb-6">Autres moyens de contact</h2>
          <div className="space-y-4 text-cream/80 font-sans">
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
    </main>
  )
}

