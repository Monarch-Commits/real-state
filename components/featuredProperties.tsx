'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROPERTIES } from '@/app/data/properties';
import { useMediaQuery } from './hooks/useMediaQuery';

export default function FeaturedProperties() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className="bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
          {PROPERTIES.slice(0, 6).map((property, i) => {
            const CardContent = (
              <Link
                href={`/properties/${property.id}`}
                className="group block overflow-hidden rounded-md"
              >
                {/* IMAGE */}
                <div className="relative h-[340px] overflow-hidden rounded-md">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white transition group-hover:text-amber-400">
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
              </Link>
            );

            return (
              <div key={property.id}>
                {isDesktop ? (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.08,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {CardContent}
                  </motion.div>
                ) : (
                  <div>{CardContent}</div>
                )}
              </div>
            );
          })}
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
