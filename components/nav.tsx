'use client';

import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'Agents', href: '/agents' },
  { label: 'About', href: '/about' },
] as const;

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const linkClass = (href: string) => {
    const isActive = pathname === href;

    return `
      text-sm transition
      ${
        isActive
          ? 'text-amber-400 font-medium'
          : 'text-white/70 hover:text-white'
      }
    `;
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div className="mt-2 flex items-center justify-between border-b border-white/10 bg-black/30 px-5 py-3 backdrop-blur-md">
            {/* LOGO */}

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logoforrealstate.svg"
                alt=" Real Estate Logo"
                width={40}
                height={40}
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

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-10 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200 lg:flex"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* MOBILE MENU BUTTON */}
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2.5 text-white backdrop-blur-md lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md lg:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 rounded-lg border border-white/10 bg-white/5 p-2 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex h-full flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-xl transition ${
                    isActive
                      ? 'text-amber-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200 lg:flex"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
