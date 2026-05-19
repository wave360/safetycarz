import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Safety Car Z | Location de Voitures de Luxe - Guyancourt',
  description: 'Location de voitures de luxe et sportives haut de gamme à Guyancourt. Expérience premium avec Safety Car Z.',
  keywords: 'location voiture luxe, safety car, voiture sportive, Guyancourt, location premium',
  openGraph: {
    title: 'Safety Car Z - Location de Voitures de Luxe',
    description: 'Découvrez notre flotte de voitures sportives et de luxe à Guyancourt.',
    url: 'https://safety-car-z.fr',
    siteName: 'Safety Car Z',
    images: [
      {
        url: 'https://safety-car-z.fr/images/hero.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://safety-car-z.fr" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
