import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Testimonials from '@/components/Testimonials';
import Map from '@/components/Map';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/hero.jpg"
          alt="Ferrari rouge en location"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Location de Voitures de Luxe
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Expérience premium avec Safety Car Z à Guyancourt. Flotte de voitures sportives et haut de gamme.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg" as={Link} href="/contact">
              Réserver maintenant
            </Button>
            <Button variant="outline" size="lg" as={Link} href="/services">
              Découvrir nos véhicules
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme de services premium pour une expérience inoubliable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Location courte durée"
              description="Location de voitures de luxe à l'heure ou à la journée."
              image="/images/services/short-term.jpg"
              link="/services#short-term"
            />
            <Card
              title="Location longue durée"
              description="Contrats flexibles pour particuliers et entreprises."
              image="/images/services/long-term.jpg"
              link="/services#long-term"
            />
            <Card
              title="Événements spéciaux"
              description="Voitures de luxe pour mariages, lancements de produits et plus."
              image="/images/services/events.jpg"
              link="/services#events"
            />
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre Flotte</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une sélection de véhicules haut de gamme pour répondre à tous vos besoins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Ferrari 488 GTB', image: '/images/cars/ferrari.jpg', price: '890€/jour' },
              { name: 'Lamborghini Huracán', image: '/images/cars/lamborghini.jpg', price: '950€/jour' },
              { name: 'Porsche 911 Turbo', image: '/images/cars/porsche.jpg', price: '750€/jour' },
              { name: 'Aston Martin DB11', image: '/images/cars/aston.jpg', price: '1200€/jour' },
              { name: 'Mercedes-AMG GT', image: '/images/cars/mercedes.jpg', price: '680€/jour' },
              { name: 'BMW M8 Competition', image: '/images/cars/bmw.jpg', price: '580€/jour' },
            ].map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={car.image}
                  alt={car.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.price}</p>
                  <Button variant="primary" size="sm" as={Link} href="/contact">
                    Réserver
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à vivre l'expérience ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour réserver votre voiture de luxe.
          </p>
          <Button variant="primary" size="lg" as={Link} href="/contact">
            Nous contacter
          </Button>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
}
