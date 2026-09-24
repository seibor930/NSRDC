'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { subscribeNewsletter } from '@/lib/supabase/db';
import { Shield, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await subscribeNewsletter(email);
    setLoading(false);
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0E0904] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141008] via-[#1f170f] to-[#141008] border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute w-72 h-72 rounded-full bg-[#8C1627]/15 blur-3xl -top-20 -left-20 pointer-events-none" />
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-[#a31d30]">
              Academic & Professional Briefings
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              Stay ahead with AISCP Research Dispatches
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Monthly insights on clinical psychology, workforce AI trends, sustainability policies, and scholarship deadlines.
            </p>
          </div>

          <div className="relative z-10 w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-950/60 border border-emerald-800/60 px-5 py-3 rounded-full">
                <CheckCircle2 size={18} /> Subscribed to Research Dispatches
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md w-full">
                <div className="relative w-full">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" size={16} />
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your professional email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/15 rounded-full text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#8C1627] transition"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full sm:w-auto px-6 py-3 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-full text-xs font-bold uppercase tracking-wider transition whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-56 sm:w-64 h-14 sm:h-16">
              <Image 
                src="/assets/images/logo-png1.png"
                alt="NSDRC Logo"
                fill
                sizes="260px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-white/65 leading-relaxed max-w-sm">
              National Skill Development and Research Center — bridging local expertise with global professional standards through AISCP-backed online certifications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a31d30]">
                <Shield size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">AISCP Standard of Excellence</span>
                <span className="text-[11px] text-white/50 block">Accredited Professional Directorate</span>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h5 className="font-serif text-base font-bold text-white mb-4">Programs</h5>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><Link href="/courses" className="hover:text-[#a31d30] transition">Online Courses</Link></li>
              <li><Link href="/admissions" className="hover:text-[#a31d30] transition">Admissions</Link></li>
              <li><Link href="/tools" className="hover:text-[#a31d30] transition">Tools & Support</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-serif text-base font-bold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><Link href="/" className="hover:text-[#a31d30] transition">Home</Link></li>
              <li><Link href="/admissions#opportunity-fund" className="hover:text-[#a31d30] transition">Opportunity Fund</Link></li>
              <li><Link href="/tools#suite" className="hover:text-[#a31d30] transition">Help Desk</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-serif text-base font-bold text-white mb-4">Contact</h5>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li><a href="mailto:info@nsdrc.org" className="hover:text-[#a31d30] transition">info@nsdrc.org</a></li>
              <li><a href="mailto:support@nsdrc.org" className="hover:text-[#a31d30] transition">support@nsdrc.org</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>
            © 2025 NSDRC. All rights reserved.
          </span>
          <span className="flex items-center gap-2">
            <span>Backed by AISCP</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
