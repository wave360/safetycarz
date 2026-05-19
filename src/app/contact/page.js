import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
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

      <section className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Contactez-nous
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p>12 Rue des Entrepreneurs, 78280 Guyancourt</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Téléphone</h3>
                <p>01 23 45 67 89</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p>contact@safetycarz.fr</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Horaires</h3>
                <p>Lundi-Vendredi: 9h-19h<br />Samedi: 10h-18h<br />Dimanche: Fermé</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-2xl hover:text-secondary transition-colors">📘</Link>
                <Link href="#" className="text-2xl hover:text-secondary transition-colors">📷</Link>
                <Link href="#" className="text-2xl hover:text-secondary transition-colors">🐦</Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-primary font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}