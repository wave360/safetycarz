import Link from 'next/link'
import { motion } from 'framer-motion'

const articles = [
  {
    id: 1,
    title: "Les 5 voitures de luxe à louer pour un mariage en 2024",
    excerpt: "Découvrez notre sélection des 5 véhicules les plus élégants et confortables pour votre grand jour.",
    date: "15 mai 2024",
    slug: "mariage-voitures-luxe-2024"
  },
  {
    id: 2,
    title: "Comment choisir la voiture de location idéale pour un tournage",
    excerpt: "Nos conseils d'experts pour sélectionner le véhicule parfait qui correspond à l'image de votre production.",
    date: "28 avril 2024",
    slug: "choisir-voiture-tournage"
  },
  {
    id: 3,
    title: "Les tendances 2024 en matière de location de voitures haut de gamme",
    excerpt: "Décryptage des nouvelles attentes des clients et des innovations dans le secteur du luxe automobile.",
    date: "10 avril 2024",
    slug: "tendances-location-luxe-2024"
  },
  {
    id: 4,
    title: "Sécurité et confort : les critères essentiels pour une location premium",
    excerpt: "Pourquoi Safety Car Z mise sur des véhicules récents, bien entretenus et équipés des dernières technologies.",
    date: "22 mars 2024",
    slug: "securite-confort-location"
  }
]

export default function Blog() {
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
          Notre Blog
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: article.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.date}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-primary hover:underline"
                  >
                    Lire l'article →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}