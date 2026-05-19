import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: "Location courte durée",
    description: "Location de voitures de luxe à l'heure, à la journée ou au week-end avec des tarifs flexibles.",
    price: "À partir de 89€/jour",
    icon: "🚗"
  },
  {
    id: 2,
    title: "Location longue durée",
    description: "Contrats de location mensuels ou annuels avec des véhicules haut de gamme entretenus régulièrement.",
    price: "Sur devis",
    icon: "📅"
  },
  {
    id: 3,
    title: "Location avec chauffeur",
    description: "Service premium avec chauffeur professionnel pour vos déplacements en Île-de-France.",
    price: "Sur devis",
    icon: "👨‍💼"
  },
  {
    id: 4,
    title: "Location événementielle",
    description: "Véhicules de luxe pour mariages, tournages, événements privés ou professionnels.",
    price: "Sur devis",
    icon: "🎉"
  },
  {
    id: 5,
    title: "Location VIP",
    description: "Accès à notre flotte exclusive de supercars et véhicules de collection.",
    price: "À partir de 299€/jour",
    icon: "🏎️"
  },
  {
    id: 6,
    title: "Location pour tournages",
    description: "Véhicules adaptés pour productions cinématographiques et publicitaires.",
    price: "Sur devis",
    icon: "🎬"
  }
]

export default function Services() {
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
          Nos Services
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: service.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-secondary transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/80 mb-4">{service.description}</p>
              <p className="font-semibold text-secondary">{service.price}</p>
              <Link
                href="/contact"
                className="mt-4 inline-block bg-secondary text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-all"
              >
                Réserver
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}