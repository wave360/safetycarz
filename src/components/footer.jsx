import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Safety Car Z Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Safety Car Z</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Location de voitures de luxe et sportives haut de gamme à Guyancourt.
              Expérience premium avec une flotte de véhicules exceptionnels.
            </p>
            <div className="flex gap-4">
              <Button variant="outline-light" size="sm" as="a" href="#">
                Facebook
              </Button>
              <Button variant="outline-light" size="sm" as="a" href="#">
                Instagram
              </Button>
              <Button variant="outline-light" size="sm" as="a" href="#">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '/' },
                { name: 'À propos', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Location courte durée', href: '/services#short-term' },
                { name: 'Location longue durée', href: '/services#long-term' },
                { name: 'Événements spéciaux', href: '/services#events' },
                { name: 'Chauffeur privé', href: '/services#driver' },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Safety Car Z. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/legal/mentions-legales"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/legal/confidentialite"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/legal/cookies"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Gestion des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
