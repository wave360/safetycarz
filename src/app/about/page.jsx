import Image from 'next/image';
import Button from '@/components/Button';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-900 text-white flex items-center">
        <Image
          src="/images/about-hero.jpg"
          alt="Voitures de luxe alignées"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold">À propos de Safety Car Z</h1>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Fondée en 2018 par Elyes Loukil, Safety Car Z est née de la passion pour l'automobile de luxe et le désir de partager cette passion avec nos clients.
              </p>
              <p className="text-gray-600 mb-6">
                Située à Guyancourt, notre entreprise s'est rapidement imposée comme un acteur majeur dans la location de voitures haut de gamme en Île-de-France.
              </p>
              <p className="text-gray-600 mb-8">
                Notre mission est de fournir une expérience de location exceptionnelle, avec des véhicules impeccablement entretenus et un service client irréprochable.
              </p>
              <Button variant="primary" as="a" href="/contact">
                Contactez-nous
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/team/elyes.jpg"
                alt="Elyes Loukil, fondateur de Safety Car Z"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Elyes Loukil</p>
                <p className="text-sm text-gray-600">Fondateur & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Valeurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'Nous nous engageons à offrir le meilleur service possible.',
                icon: '✨',
              },
              {
                title: 'Passion',
                description: 'Notre amour pour les voitures se reflète dans chaque détail.',
                icon: '💙',
              },
              {
                title: 'Professionnalisme',
                description: 'Une équipe dédiée pour répondre à tous vos besoins.',
                icon: '👔',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Chiffres Clés</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Véhicules', value: '50+' },
              { label: 'Clients satisfaits', value: '2,000+' },
              { label: 'Pays desservis', value: '1' },
              { label: 'Avis 5 étoiles', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
