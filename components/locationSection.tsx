'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LOCATIONS = [
  'BGC, Taguig',
  'Makati City',
  'Ortigas Center',
  'Alabang',
  'Antipolo',
  'Batangas',
];

export default function LocationSection() {
  return (
    <section className="relative bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <header className="mb-20 max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase">
            Our Coverage
          </p>

          <h2 className="mt-5 text-4xl leading-[1.05] font-medium text-white sm:text-5xl lg:text-6xl">
            Serving key <span className="text-amber-400">real estate hubs</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            We operate across Metro Manilas most desirable districts and
            selected luxury destinations throughout the Philippines.
          </p>
        </header>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((place, i) => (
            <motion.article
              key={place}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-200 hover:border-white/10 hover:bg-gray-800/10"
            >
              {/* ICON */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
                <MapPin className="h-5 w-5 text-amber-400" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-medium text-white">{place}</h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-base leading-8 text-neutral-400">
                Premium residential, commercial, and investment opportunities
                available in this strategic location.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
