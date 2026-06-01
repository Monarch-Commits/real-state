import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Modern Homes | Real Estate Listings',
    template: '%s | Modern Homes',
  },
  description:
    'Discover premium homes, luxury properties, and modern real estate listings. Find your dream home with ease through curated property selections and trusted agents.',
  keywords: [
    'real estate',
    'properties',
    'houses for sale',
    'luxury homes',
    'condos',
    'rent to own',
    'modern homes',
    'property listings',
  ],
  authors: [{ name: 'Modern Homes' }],
  creator: 'Modern Homes',
  openGraph: {
    title: 'Modern Homes | Real Estate Listings',
    description:
      'Browse premium real estate listings including modern homes, condos, and luxury estates.',
    url: 'https://yourdomain.com',
    siteName: 'Modern Homes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Homes | Real Estate',
    description:
      'Find your dream home with curated real estate listings and modern properties.',
  },
  icons: {
    icon: [
      {
        url: '/logowhitemode.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logoforrealstate.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
