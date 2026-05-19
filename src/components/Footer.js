import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Safety Car Z</h3>
            <p className="text-white/80">Location haut de gamme de voitures de luxe et sportives en Île-de-France.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">À propos</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services#courte-duree" className="hover:text-secondary transition-colors">Location courte durée</Link></li>
              <li><Link href="/services#longue-duree" className="hover:text-secondary transition-colors">Location longue durée</Link></li>
              <li><Link href="/services#chauffeur" className="hover:text-secondary transition-colors">Avec chauffeur</Link></li>
              <li><Link href="/services#evenementielle" className="hover:text-secondary transition-colors">Événementielle</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-white/80">
              12 Rue des Entrepreneurs<br />
              78280 Guyancourt<br />
              01 23 45 67 89<br />
              contact@safetycarz.fr
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Safety Car Z. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}