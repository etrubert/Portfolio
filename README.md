# Elyot Tubert - Portfolio

Portfolio professionnel élégant et sophistiqué développé avec Next.js 14+ (App Router) et Tailwind CSS.

## 🎨 Design

- **Thème** : Ultra-dark, premium, minimaliste
- **Palette de couleurs** : Noir profond, crème élégant, accents beige/taupe dorés
- **Polices** : Playfair Display (Serif) pour les titres, Inter (Sans-Serif) pour le corps

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
Portfolio/
├── app/
│   ├── components/
│   │   └── Navbar.tsx      # Barre de navigation fixe
│   ├── globals.css          # Styles globaux et variables CSS
│   ├── layout.tsx           # Layout principal avec configuration des polices
│   └── page.tsx             # Page d'accueil avec section Hero
├── tailwind.config.js       # Configuration Tailwind CSS
└── package.json
```

## 🛠️ Technologies utilisées

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next/font/google** (Playfair Display & Inter)

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint