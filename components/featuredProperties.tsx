'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';

const PROPERTIES = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'BGC, Taguig',
    price: '₱45,000,000',
    beds: 4,
    baths: 4,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: 'Minimalist Glass House',
    location: 'Alabang, Muntinlupa',
    price: '₱32,000,000',
    beds: 3,
    baths: 3,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Skyline Penthouse',
    location: 'Makati City',
    price: '₱68,000,000',
    beds: 5,
    baths: 5,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 4,
    title: 'Seaside Modern Estate',
    location: 'Batangas',
    price: '₱38,500,000',
    beds: 4,
    baths: 3,
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 5,
    title: 'Urban Smart Condo',
    location: 'Ortigas Center',
    price: '₱18,000,000',
    beds: 2,
    baths: 2,
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 6,
    title: 'Private Hillside Mansion',
    location: 'Antipolo',
    price: '₱55,000,000',
    beds: 6,
    baths: 5,
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
            Featured Listings
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
            Discover Luxury <span className="text-amber-400">Homes</span>
          </h2>

          <p className="mt-4 text-neutral-400">
            Handpicked properties designed for modern living, comfort, and
            long-term value.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((property, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group block overflow-hidden rounded-md"
            >
              {/* IMAGE */}
              <div className="relative h-[340px] overflow-hidden rounded-md">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition duration-200 group-hover:scale-102"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">
                    {property.title}
                  </h3>

                  <span className="text-sm text-amber-400">
                    {property.price}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-sm text-neutral-400">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </div>

                <div className="flex gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {property.beds}
                  </span>

                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.baths}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/properties"
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
          >
            View All Properties →
          </Link>
        </div>
      </div>
    </section>
  );
}
