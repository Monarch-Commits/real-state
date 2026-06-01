'use client';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, TrendingUp, Shield, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 pt-16 lg:pt-20">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
            About Modern Homes
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-medium text-white sm:text-6xl">
            Building trust in{' '}
            <span className="text-amber-400">modern real estate</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-400">
            We are a premium real estate agency focused on curated properties,
            smart investments, and long-term value creation for clients who
            expect excellence.
          </p>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
                alt="Luxury property"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          </div>

          {/* STORY */}
          <div>
            <h2 className="text-2xl font-medium text-white sm:text-3xl">
              Our mission is simple
            </h2>

            <p className="mt-4 leading-relaxed text-neutral-400">
              We connect people to properties that match their lifestyle,
              ambitions, and long-term financial goals. Every listing is
              carefully selected to ensure quality and value.
            </p>

            <p className="mt-4 leading-relaxed text-neutral-500">
              From luxury villas in BGC to investment condos in Makati, we
              provide end-to-end guidance for buyers and investors.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-medium text-white sm:text-4xl">
            Why clients choose us
          </h2>

          <p className="mt-4 text-neutral-400">
            We focus on trust, transparency, and long-term relationships.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Shield className="h-5 w-5 text-amber-400" />
            <h3 className="mt-4 font-medium text-white">Trusted Deals</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Secure and transparent transactions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <TrendingUp className="h-5 w-5 text-amber-400" />
            <h3 className="mt-4 font-medium text-white">Smart Investment</h3>
            <p className="mt-2 text-sm text-neutral-400">
              High-value properties with ROI focus.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <Users className="h-5 w-5 text-amber-400" />
            <h3 className="mt-4 font-medium text-white">Expert Agents</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Experienced professionals guiding you.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <CheckCircle className="h-5 w-5 text-amber-400" />
            <h3 className="mt-4 font-medium text-white">Proven Results</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Hundreds of successful property deals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10 bg-[#0f0f10]">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-white sm:text-4xl">
            Ready to find your dream property?
          </h2>
          <p className="mt-4 text-neutral-400">
            Let our team help you make the right investment decision.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
