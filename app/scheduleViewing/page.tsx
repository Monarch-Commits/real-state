'use client';

import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';

export default function ScheduleViewing() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 pt-16 text-center lg:pt-20">
        <p className="text-[11px] tracking-[0.35em] text-neutral-500 uppercase">
          Private Viewing
        </p>

        <h2 className="mt-5 text-4xl font-medium text-white sm:text-5xl">
          Schedule a <span className="text-amber-400">Property Tour</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
          Book a private viewing with our real estate specialist. We’ll guide
          you through available properties based on your lifestyle and
          investment goals.
        </p>

        {/* CTA */}
        <button
          onClick={() => setOpen(true)}
          className="mt-10 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Schedule Viewing
        </button>

        <p className="mt-4 text-xs text-neutral-500">
          No spam. No pressure. Just expert guidance.
        </p>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-neutral-950 p-6">
            {/* HEADER */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white">
                Schedule a Viewing
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                Fill in your details and preferred schedule.
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <User className="h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <Mail className="h-4 w-4 text-neutral-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <Phone className="h-4 w-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <Calendar className="h-4 w-4 text-neutral-400" />
                <input
                  placeholder="Date"
                  type="date"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                <Clock className="h-4 w-4 text-neutral-400" />
                <input
                  placeholder="Preferred Time"
                  type="time"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-lg bg-white py-3 text-sm font-medium text-black hover:bg-neutral-200">
                Confirm Booking
              </button>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 px-4 py-3 text-sm text-white hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
