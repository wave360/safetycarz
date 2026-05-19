import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-primary to-dark text-light"
    >
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary">Safety Car Z</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">À propos</Link>
            <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <Link href="/contact" className="bg-secondary text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-all">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Location de voitures de luxe
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Découvrez notre flotte premium de voitures haut de gamme et sportives en Île-de-France
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/services" className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all font-semibold">
            Nos services
          </Link>
          <Link href="/contact" className="border-2 border-light text-light px-8 py-3 rounded-lg hover:bg-light hover:text-primary transition-all font-semibold">
            Réserver maintenant
          </Link>
        </motion.div>
      </section>
    </motion.main>
  )
}