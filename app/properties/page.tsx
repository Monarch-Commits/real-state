'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROPERTIES } from '../data/properties';

export default function Page() {
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  const visibleProperties = PROPERTIES.slice(0, visible);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="border-b border-white/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase">
            Exclusive Listings
          </p>

          <h1 className="mt-5 text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            Discover <span className="text-amber-400">Luxury Properties</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Handpicked homes across the Philippines curated for modern living,
            long-term value, and architectural excellence.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-0 z-10 border-b border-white/5 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <p className="text-sm text-neutral-400">
            Showing {PROPERTIES.length} properties
          </p>

          <div className="flex gap-3 text-xs text-neutral-400">
            <button className="rounded-full border border-white/10 px-4 py-2 hover:text-white">
              All
            </button>
            <button className="rounded-full border border-white/10 px-4 py-2 hover:text-white">
              Villas
            </button>
            <button className="rounded-full border border-white/10 px-4 py-2 hover:text-white">
              Condos
            </button>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProperties.map((property, i) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] transition hover:border-white/10"
                >
                  {/* IMAGE */}
                  <div className="relative h-[340px] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-3 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-lg font-medium text-white">
                        {property.title}
                      </h2>

                      <span className="text-base font-medium text-amber-400">
                        {property.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-neutral-400">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </div>

                    <div className="flex gap-6 text-sm text-neutral-400">
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
              </Link>
            ))}
          </div>

          {/* LOAD MORE */}
          {visible < PROPERTIES.length && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={loadMore}
                className="rounded-full border border-white/10 px-8 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Load More Properties
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
