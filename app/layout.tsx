import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elyot Tubert - Étudiant chez Eugenia School',
  description: 'Portfolio professionnel d\'Elyot Tubert, Étudiant chez Eugenia School',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

