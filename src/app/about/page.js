import Link from 'next/link'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-light text-dark"
    >
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Safety Car Z</div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">À propos</Link>
            <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <Link href="/contact" className="bg-secondary text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-all">Contact</Link>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          À propos de Safety Car Z
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Fondée en 2018, Safety Car Z est une entreprise spécialisée dans la location de véhicules haut de gamme et sportifs en Île-de-France.
            </p>
            <p className="text-lg leading-relaxed">
              Notre mission est de fournir à nos clients une expérience de location premium, avec des véhicules impeccables et un service irréprochable.
            </p>
            <p className="text-lg leading-relaxed">
              Nous collaborons avec les plus grandes marques automobiles pour vous offrir une flotte variée et toujours à la pointe de la technologie.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <img
              src="/images/team.jpg"
              alt="Notre équipe Safety Car Z"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}