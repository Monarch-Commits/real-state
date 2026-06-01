'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* TEXT */}
          <div>
            <p className="text-[12px] tracking-[0.35em] text-neutral-500 uppercase">
              About Us
            </p>

            <h2 className="mt-5 text-4xl leading-tight font-medium text-white sm:text-6xl">
              Crafting spaces that define{' '}
              <span className="text-amber-400">modern living</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-neutral-300">
              We are a premium real estate agency focused on curated homes,
              strategic investments, and long-term value. Our approach is simple
              — quality over quantity, always.
            </p>

            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              From luxury villas to city penthouses, we help clients find
              properties that match both lifestyle and vision.
            </p>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              <div>
                <p className="text-3xl font-semibold text-white">120+</p>
                <p className="mt-1 text-xs tracking-wide text-neutral-500">
                  Properties Sold
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">8 yrs</p>
                <p className="mt-1 text-xs tracking-wide text-neutral-500">
                  Experience
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-white">95%</p>
                <p className="mt-1 text-xs tracking-wide text-neutral-500">
                  Client Satisfaction
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            {/* IMAGE WRAPPER */}
            <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
                alt="Modern luxury home interior"
                fill
                className="scale-[1.02] object-cover transition duration-700 hover:scale-105"
              />

              {/* LUXURY OVERLAY (SOFTER + MORE DEPTH) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* SUBTLE LIGHT GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            </div>

            {/* FLOATING PREMIUM CARD */}
            <div className="absolute -bottom-12 left-6 max-w-[260px] rounded-2xl border border-white/10 bg-neutral-950/70 p-5 shadow-2xl backdrop-blur-xl">
              <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
                Our Mission
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white">
                Delivering premium homes with transparency, trust, and long-term
                value.
              </p>

              {/* subtle accent line */}
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
            </div>

            {/* DECORATIVE ACCENT (VERY SUBTLE PREMIUM TOUCH) */}
            <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
