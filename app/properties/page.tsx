'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PROPERTIES } from '../data/properties';

export default function Page() {
  const [visible, setVisible] = useState(6);
  const [filter, setFilter] = useState<'All' | 'Villa' | 'Condo'>('All');

  const filtered =
    filter === 'All' ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter);

  const items = filtered.slice(0, visible);

  const filters = ['All', 'Villa', 'Condo'] as const;

  return (
    <main className="min-h-screen bg-neutral-950 pt-16 text-white lg:pt-20">
      {/* HERO */}
      <section className="border-b border-white/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
            Exclusive Listings
          </p>

          <h1 className="mt-6 text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            Discover <span className="text-amber-400">Luxury Homes</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            Handpicked properties across the Philippines curated for modern
            living, long-term value, and architectural excellence.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 z-20 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <p className="text-sm text-neutral-500">
            {filtered.length} properties
          </p>

          <div className="flex gap-2 overflow-x-auto">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setFilter(item);
                  setVisible(6);
                }}
                className={`rounded-full px-5 py-2 text-sm whitespace-nowrap transition ${
                  filter === item
                    ? 'bg-white text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="relative bg-[#0f0f10] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((property, i) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-md border border-white/5 bg-white/[0.02] transition hover:border-white/10"
                >
                  {/* IMAGE */}
                  <div className="relative h-[360px] overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* BADGES */}
                    <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-[11px] text-amber-400 backdrop-blur-md">
                      {property.type}
                    </div>

                    <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-[11px] text-white backdrop-blur-md">
                      {property.price}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-3 p-6">
                    <h3 className="text-lg font-medium text-white transition group-hover:text-amber-400">
                      {property.title}
                    </h3>

                    <div className="flex items-center gap-1 text-sm text-neutral-500">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </div>

                    <div className="flex gap-6 text-sm text-neutral-500">
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
          {visible < filtered.length && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={() => setVisible((v) => v + 3)}
                className="rounded-full border border-white/10 px-8 py-3 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
