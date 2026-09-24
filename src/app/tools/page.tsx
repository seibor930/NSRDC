'use client';

import React from 'react';
import Link from 'next/link';
import { useApplicationModal } from '@/components/ApplicationModal';

export default function ToolsPage() {
  const { openModal } = useApplicationModal();

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* ============================================================
          PAGE BANNER (from original site)
          ============================================================ */}
      <div className="bg-[#0E0904] text-white py-20 lg:py-24 relative overflow-hidden border-b border-[#e8e5e0]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(140,22,39,0.3),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Tools & Support
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              Your Professional Success Suite — everything you need to learn, grow, and get certified, available 24/7.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* ============================================================
            SECTION 1 – YOUR PROFESSIONAL SUCCESS SUITE (from original site)
            ============================================================ */}
        <section id="suite" className="scroll-mt-40">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0E0904]">
              Your Professional Success Suite
            </h2>
            <div className="red-line" />
            <p className="text-sm sm:text-base text-[#5a5550] max-w-4xl leading-relaxed">
              At NSDRC, we provide more than just curriculum — we provide the infrastructure for mastery. Every student gains access to a comprehensive suite of digital tools and a global support network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* LMS */}
            <div className="bg-[#f5f3f0] rounded-2xl p-8 border border-[#e8e5e0] space-y-5 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                  🖥️
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0E0904]">
                  The NSDRC Virtual Campus (LMS)
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-[#3a3020]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>24/7 Access:</strong> A fully responsive mobile and desktop platform that allows you to start, pause, and resume your learning anytime.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Resource Vault:</strong> Downloadable SOPs, case studies, and industry-specific templates you can use in your actual job from day one.
                  </span>
                </li>
              </ul>
            </div>

            {/* Library */}
            <div className="bg-[#f5f3f0] rounded-2xl p-8 border border-[#e8e5e0] space-y-5 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">
                  📚
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0E0904]">
                  Research & Reference Library
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-[#3a3020]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Industry Whitepapers:</strong> Deep dives into AI ethics, sustainability data, and global safety mandates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Digital Archives:</strong> A repository of past research conducted by the NSDRC Board of Standards.
                  </span>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="bg-[#f5f3f0] rounded-2xl p-8 border border-[#e8e5e0] space-y-5 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl">
                  🎧
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0E0904]">
                  Technical & Academic Support
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-[#3a3020]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>The Help Desk:</strong> 24/7 technical assistance for any platform-related issues.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Faculty Office Hours:</strong> Scheduled open Q&A sessions with subject matter experts.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Community Forums:</strong> A private Members Only space to network with fellow students and AISCP professionals worldwide.
                  </span>
                </li>
              </ul>
            </div>

            {/* Certification Journey */}
            <div className="bg-[#f5f3f0] rounded-2xl p-8 border border-[#e8e5e0] space-y-5 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <h3 className="font-serif text-xl font-bold text-[#0E0904]">
                  Certification Journey Support
                </h3>
              </div>
              <ul className="space-y-4 text-sm text-[#3a3020]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Blockchain Verifier:</strong> Instant digital certificate authentication — 100% trust for global employers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Career Roadmap:</strong> Personalised path to AISCP membership with clear trajectory for long-term growth.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#8C1627] shrink-0 mt-2" />
                  <span>
                    <strong>Alumni Mentorship:</strong> Access to the Opportunity Fund network — guidance from those already in the field.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* ============================================================
            SECTION 2 – THE CERTIFICATION JOURNEY (from original site)
            ============================================================ */}
        <section id="journey" className="scroll-mt-40">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0E0904]">
              The Certification Journey
            </h2>
            <div className="red-line-center" />
          </div>

          <div className="bg-white rounded-2xl border border-[#e8e5e0] overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0E0904] text-white text-xs font-bold uppercase tracking-wider p-4 hidden md:grid">
              <div className="md:col-span-3">Tool / Support</div>
              <div className="md:col-span-4">Feature</div>
              <div className="md:col-span-5">Professional Benefit</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 border-b border-[#e8e5e0] items-center gap-4 text-sm">
              <div className="md:col-span-3 font-serif font-bold text-base text-[#8C1627]">
                Blockchain Verifier
              </div>
              <div className="md:col-span-4 text-[#0E0904] font-medium">
                Instant digital certificate authentication
              </div>
              <div className="md:col-span-5 text-xs text-[#5a5550] bg-[#f5f3f0] p-3 rounded-xl">
                100% trust for global employers — your credential speaks for itself.
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 border-b border-[#e8e5e0] items-center gap-4 text-sm">
              <div className="md:col-span-3 font-serif font-bold text-base text-[#8C1627]">
                Career Roadmap
              </div>
              <div className="md:col-span-4 text-[#0E0904] font-medium">
                Personalised path to AISCP membership
              </div>
              <div className="md:col-span-5 text-xs text-[#5a5550] bg-[#f5f3f0] p-3 rounded-xl">
                Clear trajectory for long-term professional growth and advancement.
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 items-center gap-4 text-sm">
              <div className="md:col-span-3 font-serif font-bold text-base text-[#8C1627]">
                Alumni Mentorship
              </div>
              <div className="md:col-span-4 text-[#0E0904] font-medium">
                Access to the Opportunity Fund network
              </div>
              <div className="md:col-span-5 text-xs text-[#5a5550] bg-[#f5f3f0] p-3 rounded-xl">
                Guidance from those already in the field — real advice, real results.
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3 – ALWAYS ON QUOTE (from original site)
            ============================================================ */}
        <section id="always-on" className="scroll-mt-40">
          <div className="rounded-3xl p-10 sm:p-14 text-center text-white bg-gradient-to-br from-[#8C1627] to-[#6a1220] relative overflow-hidden shadow-xl">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold italic leading-relaxed max-w-4xl mx-auto relative z-10">
              &ldquo;We have removed the deadlines, but we have not removed the support. Whether you are studying at midnight or midday, our tools and faculty are aligned to ensure your success never hits a standstill.&rdquo;
            </blockquote>
          </div>
        </section>

        {/* Request Info CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => openModal()}
            className="px-8 py-3.5 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-full text-xs font-bold uppercase tracking-wider transition shadow-md shadow-[#8C1627]/25"
          >
            Request Info
          </button>
        </div>

      </div>

    </div>
  );
}
