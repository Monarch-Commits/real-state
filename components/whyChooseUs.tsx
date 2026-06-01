'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, TrendingUp } from 'lucide-react';

const FEATURES = [
  {
    id: 1,
    title: 'Trusted Experts',
    description:
      'Years of experience in luxury real estate across prime locations in the Philippines.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Premium Listings',
    description:
      'Carefully curated properties that meet high standards of quality and value.',
    icon: Award,
  },
  {
    id: 3,
    title: 'Market Insight',
    description:
      'We help you make smart investments with data-driven property insights.',
    icon: TrendingUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0f0f10] py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-4xl leading-tight font-medium text-white sm:text-6xl">
            Built on trust,{' '}
            <span className="text-amber-400">driven by results</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-400">
            We don’t just list properties — we guide you through one of the most
            important investments of your life with transparency, expertise, and
            long-term value.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid gap-10 lg:grid-cols-3">
          {FEATURES.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* card */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-white/10">
                  {/* ICON (more subtle now) */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>

                  {/* subtle line accent */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
