'use client';

import Image from 'next/image';
import Link from 'next/link';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Agents', href: '/agents' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-neutral-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid gap-16 lg:grid-cols-3">
          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logoforrealstate.svg"
                alt=" Real Estate Logo"
                width={50}
                height={50}
                className="rounded-lg"
                priority
              />
              <div className="leading-tight">
                <h2 className="text-sm font-semibold tracking-[0.25em] text-white">
                  MODERN HOMES
                </h2>
                <p className="text-[10px] tracking-[0.35em] text-white/50 uppercase">
                  Real Estate
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-base leading-7 text-neutral-400">
              A curated real estate platform focused on premium homes, refined
              living, and long-term value.
            </p>
          </div>

          {/* NAV */}
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase">
              Navigation
            </p>

            <div className="mt-6 space-y-4 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-neutral-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-xs font-medium tracking-[0.3em] text-neutral-500 uppercase">
              Contact
            </p>

            <div className="mt-6 space-y-4 text-sm text-neutral-400">
              <p>Metro Manila, Philippines</p>
              <p>+63 900 000 0000</p>
              <p>hello@modernhomes.com</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-white/5" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Modern Homes. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-neutral-500">
            <Link href="#" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
