import Link from 'next/link';
import Image from 'next/image';

export default function Card({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="text-primary-600 hover:underline font-medium inline-block"
        >
          En savoir plus →
        </Link>
      </div>
    </div>
  );
}
