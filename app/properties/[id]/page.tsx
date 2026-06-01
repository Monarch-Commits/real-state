import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MapPin, Bed, Bath } from 'lucide-react';
import { PROPERTIES } from '@/app/data/properties';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PropertyDetails({ params }: Props) {
  const { id } = await params;

  const property = PROPERTIES.find((p) => p.id === Number(id));

  if (!property) return notFound();

  const images = [
    `${property.image}?auto=format&fit=crop&w=1200&q=70`,
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=70',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=70',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={images[0]}
          alt={property.title}
          fill
          priority
          className="object-cover"
        />

        {/* elegant gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/40 to-transparent" />

        {/* HERO TEXT OVERLAY */}
        <div className="absolute bottom-10 left-0 w-full">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-3xl font-medium sm:text-5xl">
              {property.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-neutral-300">
              <MapPin className="h-4 w-4" />
              {property.location}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* PRICE + DETAILS */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold text-amber-400">
              {property.price}
            </p>

            <div className="mt-4 flex gap-6 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <Bed className="h-4 w-4" /> {property.beds} Beds
              </span>

              <span className="flex items-center gap-2">
                <Bath className="h-4 w-4" /> {property.baths} Baths
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Schedule Viewing
            </button>

            <button className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5">
              Contact Agent
            </button>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-12 max-w-3xl text-base leading-relaxed text-neutral-300">
          {property.description}
        </p>

        {/* GALLERY */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.slice(1).map((img, i) => (
            <div
              key={i}
              className="group relative h-52 overflow-hidden rounded-xl sm:h-64"
            >
              <Image
                src={img}
                alt={`Property image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
