import Card from '@/components/Card';

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-900 text-white flex items-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nos Services</h1>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Offres</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos différentes options de location adaptées à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card
              title="Location à l'heure"
              description="Parfait pour des trajets courts ou des besoins ponctuels."
              image="/images/services/hourly.jpg"
              link="/contact"
            />
            <Card
              title="Location à la journée"
              description="Idéal pour les week-ends ou les voyages en amoureux."
              image="/images/services/daily.jpg"
              link="/contact"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card
              title="Location longue durée"
              description="Contrats flexibles de 1 à 12 mois pour particuliers et entreprises."
              image="/images/services/long-term.jpg"
              link="/contact"
            />
            <Card
              title="Événements spéciaux"
              description="Voitures de luxe pour mariages, lancements de produits, etc."
              image="/images/services/events.jpg"
              link="/contact"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              title="Chauffeur privé"
              description="Service de chauffeur inclus pour une expérience sans stress."
              image="/images/services/driver.jpg"
              link="/contact"
            />
            <Card
              title="Assurance tous risques"
              description="Couverture complète pour votre tranquillité d'esprit."
              image="/images/services/insurance.jpg"
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* Fleet Detail */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre Flotte Détaillée</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de véhicules disponibles à la location.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                category: 'Supercars',
                vehicles: [
                  { name: 'Ferrari 488 GTB', price: '890€/jour', features: 'V12, 660ch, 0-100km/h en 3.0s' },
                  { name: 'Lamborghini Huracán', price: '950€/jour', features: 'V10, 610ch, 0-100km/h en 3.2s' },
                  { name: 'Aston Martin DB11', price: '1200€/jour', features: 'V8, 535ch, 0-100km/h en 3.9s' },
                ],
              },
              {
                category: 'Sportives',
                vehicles: [
                  { name: 'Porsche 911 Turbo', price: '750€/jour', features: 'Flat-6, 580ch, 0-100km/h en 2.9s' },
                  { name: 'BMW M8 Competition', price: '580€/jour', features: 'V8, 625ch, 0-100km/h en 3.2s' },
                  { name: 'Mercedes-AMG GT', price: '680€/jour', features: 'V8, 530ch, 0-100km/h en 3.6s' },
                ],
              },
              {
                category: 'Luxe',
                vehicles: [
                  { name: 'Bentley Continental GT', price: '1100€/jour', features: 'W12, 550ch, intérieur cuir premium' },
                  { name: 'Rolls-Royce Phantom', price: '1800€/jour', features: 'V12, 570ch, expérience ultime' },
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.vehicles.map((vehicle, vIndex) => (
                    <div key={vIndex} className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b last:border-b-0">
                      <div>
                        <h4 className="text-xl font-semibold">{vehicle.name}</h4>
                        <p className="text-gray-600">{vehicle.features}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <p className="text-lg font-bold">{vehicle.price}</p>
                        <Button variant="primary" size="sm" as="a" href="/contact">
                          Réserver
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
