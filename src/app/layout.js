import './globals.css'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Safety Car Z - Location de voitures de luxe',
  description: 'Location haut de gamme de voitures de luxe et sportives en Île-de-France',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}