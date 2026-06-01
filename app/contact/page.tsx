'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-neutral-950">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-medium text-white sm:text-6xl">
            Let’s find your{' '}
            <span className="text-amber-400">next property</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-400">
            Schedule a viewing, ask questions, or connect with our real estate
            specialists. We’re here to help you make the right investment.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h2 className="text-lg font-medium text-white">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-neutral-400">
              We usually respond within 24 hours.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none focus:border-amber-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none focus:border-amber-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none focus:border-amber-400"
              />

              <textarea
                placeholder="Tell us what you're looking for..."
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white outline-none focus:border-amber-400"
              />

              <button
                type="button"
                className="w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <p className="text-white">+63 900 123 4567</p>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Call us for immediate assistance
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <p className="text-white">contact@modernhomes.com</p>
              </div>
              <p className="mt-2 text-sm text-neutral-400">Email us anytime</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <p className="text-white">BGC, Taguig City</p>
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Visit our office for consultations
              </p>
            </div>

            {/* CTA BOX */}
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
              <h3 className="font-medium text-white">Need faster response?</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Contact us via phone for priority assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
