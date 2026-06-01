'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Michael Reyes',
    role: 'Property Investor',
    message:
      'The process was smooth and transparent. They helped me secure a property in BGC that exceeded my expectations.',
    avatar:
      'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    name: 'Sofia Lim',
    role: 'Home Buyer',
    message:
      'Very professional team. They guided us from viewing to closing without stress. Highly recommended.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Daniel Cruz',
    role: 'Real Estate Client',
    message:
      'Excellent service and curated listings. You can tell they focus on quality properties only.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-neutral-950 py-24 sm:py-32"
      aria-label="Client testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <header className="mb-20 max-w-3xl">
          <p className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase">
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl leading-[1.05] font-medium text-white sm:text-5xl lg:text-6xl">
            What our <span className="text-amber-400">clients say</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Real experiences from buyers and investors who trusted us with their
            property journey and investment decisions.
          </p>
        </header>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
            >
              {/* QUOTE */}
              <p className="text-base leading-8 text-neutral-300">
                “{item.message}”
              </p>

              {/* CLIENT */}
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-base font-medium text-white">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
