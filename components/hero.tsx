'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax effect (background moves slower than scroll)
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.15]);

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-neutral-950 xl:h-[800px]"
      aria-label="Welcome and Featured Real Estate"
    >
      {/* BACKGROUND (PARALLAX) */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Modern luxury estate with pool"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </motion.div>

      {/* OVERLAY */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/85 via-neutral-950/50 to-neutral-950/85 md:bg-gradient-to-r md:from-neutral-950/90 md:via-neutral-950/40 md:to-transparent"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-6 text-white sm:space-y-8">
          <p className="text-[11px] tracking-[0.25em] text-neutral-300 uppercase sm:text-xs">
            Modern Living • Premium Estates
          </p>

          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Find Your <br />
            <span className="block">
              Dream <span className="text-amber-400">Home</span>
            </span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
            Explore curated luxury homes, modern condos, and exclusive estates
            designed for modern living.
          </p>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
            <Link
              href="/properties"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto"
            >
              Explore Properties
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href="/agents"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
            >
              Contact Agent
            </Link>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
