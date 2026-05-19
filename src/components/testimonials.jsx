import Card from './Card';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jean D.',
      role: 'Client depuis 2022',
      quote: 'Une expérience exceptionnelle ! Les voitures sont impeccables et le service est au top. Je recommande à 100%.',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      role: 'Célébration spéciale',
      quote: 'Nous avons loué une Ferrari pour notre mariage. Tout était parfait, de la réservation à la remise des clés.',
      rating: 5,
    },
    {
      name: 'Thomas L.',
      role: 'Entreprise',
      quote: 'Notre flotte d\'entreprise a été grandement améliorée avec Safety Car Z. Service professionnel et véhicules haut de gamme.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
