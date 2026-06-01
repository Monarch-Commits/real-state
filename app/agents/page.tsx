'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import type { Agent } from '../data/properties';
import AgentContactModal from './agentContactModal';

const AGENTS: Agent[] = [
  {
    name: 'Michael Santos',
    role: 'Senior Property Consultant',
    location: 'BGC, Taguig',
    phone: '+63 900 111 2222',
    email: 'michael@modernhomes.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sofia Reyes',
    role: 'Luxury Property Specialist',
    location: 'Makati City',
    phone: '+63 900 333 4444',
    email: 'sofia@modernhomes.com',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Daniel Cruz',
    role: 'Investment Advisor',
    location: 'Ortigas Center',
    phone: '+63 900 555 6666',
    email: 'daniel@modernhomes.com',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Andrea Lim',
    role: 'Condo Specialist',
    location: 'Alabang',
    phone: '+63 900 777 8888',
    email: 'andrea@modernhomes.com',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Joshua Cruz',
    role: 'Luxury Villas Expert',
    location: 'Antipolo',
    phone: '+63 900 999 0000',
    email: 'joshua@modernhomes.com',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Maria Torres',
    role: 'Leasing Advisor',
    location: 'Batangas',
    phone: '+63 900 121 2121',
    email: 'maria@modernhomes.com',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
];

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (agent: Agent) => {
    setSelectedAgent(agent);
    setOpen(true);
  };

  return (
    <main className="bg-neutral-950 pt-16 lg:pt-20">
      {/* HEADER */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
            Our Agents
          </p>

          <h1 className="mt-4 text-4xl font-medium tracking-tight text-white sm:text-6xl">
            Meet the people behind your{' '}
            <span className="text-amber-400">future home</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-400">
            Licensed real estate professionals helping you find premium
            properties and investment opportunities.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((agent) => (
            <article
              key={agent.name}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition hover:border-white/10"
            >
              {/* IMAGE */}
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  priority={false}
                />

                {/* Premium gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-white">
                  {agent.name}
                </h2>

                <p className="mt-1 text-sm text-neutral-400">{agent.role}</p>

                {/* LOCATION */}
                <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                  <MapPin className="h-4 w-4 text-neutral-400" />
                  {agent.location}
                </div>

                {/* CONTACT INFO */}
                <div className="mt-5 space-y-2 text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-neutral-500" />
                    {agent.phone}
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-neutral-500" />
                    {agent.email}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleOpen(agent)}
                  className="mt-6 w-full rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200 active:scale-[0.98]"
                >
                  Contact Agent
                </button>
              </div>

              {/* subtle glow line (premium touch) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AgentContactModal
        agent={selectedAgent}
        open={open}
        onClose={() => setOpen(false)}
      />
    </main>
  );
}
