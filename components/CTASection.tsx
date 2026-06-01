'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* EYEBROW */}
        <p className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase">
          Let&apos;s Get Started
        </p>

        {/* HEADLINE */}
        <h2 className="mt-5 text-4xl leading-[1.05] font-medium text-white sm:text-5xl lg:text-6xl">
          Find your next <span className="text-amber-400">dream property</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Schedule a private viewing or connect with our real estate specialists
          to discover properties tailored to your lifestyle, goals, and
          investment plans.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200">
            Book a Viewing
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button className="rounded-full border border-white/10 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
            Contact Agent
          </button>
        </div>

        {/* TRUST TEXT */}
        <p className="mt-12 text-sm text-neutral-500">
          No spam. No pressure. Just expert guidance.
        </p>
      </div>
    </section>
  );
}
