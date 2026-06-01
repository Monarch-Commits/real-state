'use client';

import { useEffect, useState } from 'react';
import { X, Mail, User } from 'lucide-react';
import { Agent } from '../data/properties';

type Props = {
  agent: Agent | null;
  open: boolean;
  onClose: () => void;
};

export default function AgentContactModal({ agent, open, onClose }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [open, onClose]);

  if (!open || !agent) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      to: agent.email,
      ...form,
    });

    alert('Message sent!');
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-6"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">
            Contact {agent.name}
          </h3>

          <button aria-label="close" onClick={onClose}>
            <X className="h-4 w-4 text-white/60" />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* NAME */}
          <div className="relative">
            <User className="absolute top-3 left-3 h-4 w-4 text-white/40" />
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pr-3 pl-9 text-sm text-white outline-none focus:border-white/20"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute top-3 left-3 h-4 w-4 text-white/40" />
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pr-3 pl-9 text-sm text-white outline-none focus:border-white/20"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Your message..."
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/20"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full rounded-lg bg-white py-2 text-sm font-medium text-black hover:bg-neutral-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
