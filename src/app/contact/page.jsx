import Form from '@/components/Form';
import Map from '@/components/Map';
import Button from '@/components/Button';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gray-900 text-white flex items-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contactez-nous</h1>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nous contacter</h2>
                <p className="text-gray-600 mb-6">
                  Vous avez une question ou souhaitez réserver une voiture ? N'hésitez pas à nous contacter.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                  <p className="text-gray-600">
                    12 Rue de la République<br />
                    78280 Guyancourt<br />
                    France
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+33123456789" className="hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@safety-car-z.fr" className="hover:underline">
                      contact@safety-car-z.fr
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 9h00 - 19h00<br />
                    Samedi: 10h00 - 18h00<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" as="a" href="#" size="lg">
                  Facebook
                </Button>
                <Button variant="outline" as="a" href="#" size="lg">
                  Instagram
                </Button>
                <Button variant="outline" as="a" href="#" size="lg">
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
