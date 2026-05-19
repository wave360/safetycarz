import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-primary/90 backdrop-blur-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-secondary">Safety Car Z</Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-light hover:text-secondary transition-colors">Accueil</Link>
            <Link href="/about" className="text-light hover:text-secondary transition-colors">À propos</Link>
            <Link href="/services" className="text-light hover:text-secondary transition-colors">Services</Link>
            <Link href="/blog" className="text-light hover:text-secondary transition-colors">Blog</Link>
            <Link
              href="/contact"
              className="bg-secondary text-primary px-4 py-2 rounded hover:bg-opacity-90 transition-all font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-light">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}