'use client';

import React from 'react';
import { useApplicationModal } from '@/components/ApplicationModal';
import { Check } from 'lucide-react';

export default function AdmissionsPage() {
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
              Admissions & Tuition
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              Simple, transparent, and designed to remove every barrier between you and your global certification.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* ============================================================
            ADMISSION REQUIREMENTS + TUITION OVERVIEW (from original site)
            ============================================================ */}
        <section id="requirements" className="scroll-mt-40">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0E0904]">
              Admission Requirements
            </h2>
            <div className="red-line" />
            <p className="text-sm sm:text-base text-[#5a5550]">
              We&apos;ve removed the traditional barriers. Here&apos;s everything you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements Card */}
            <div className="bg-[#f5f3f0] rounded-2xl p-8 border border-[#e8e5e0] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0E0904]">Requirements</h3>
              <div className="red-line" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#3a3020]">No admission fees — zero upfront cost to apply</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#3a3020]">No essay requirements for initial application</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#3a3020]">Must have access to the Internet</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#3a3020]">Able to speak either in your local language or English</span>
                </li>
              </ul>
            </div>

            {/* Tuition Overview Card */}
            <div className="bg-[#f5f3f0] rounded-2xl p-8 border border-[#e8e5e0] space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#0E0904]">Tuition Overview</h3>
              <div className="red-line" />
              <ul className="space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#3a3020]">
                    <strong>Affordable tuition cost</strong> — designed for your future, not your present budget
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-[#3a3020]">
                    <strong>Lock-in one flat tuition rate</strong> from enrolment to graduation. No surprises — just clear pricing you can count on.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================
            FINANCIAL AID – THE NSDRC OPPORTUNITY FUND (from original site)
            ============================================================ */}
        <section id="opportunity-fund" className="scroll-mt-40">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0E0904]">
              Financial Aid
            </h2>
            <div className="red-line-center" />
          </div>

          <div className="bg-[#f5f3f0] rounded-3xl p-8 sm:p-12 border border-[#e8e5e0] space-y-8">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E0904]">
                The NSDRC Opportunity Fund
              </h2>
              <div className="red-line" />
              <p className="text-sm sm:text-base text-[#8C1627] font-semibold">
                Empowered by Alumni. Driven by Global Benefactors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#0E0904]">A Legacy of Giving</h4>
                <p className="text-xs sm:text-sm text-[#5a5550] leading-relaxed">
                  Our financial aid program is governed by a committee of successful AISCP alumni and visionary global investors who identify and champion the leaders of tomorrow.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#0E0904]">Supporting the Underprivileged</h4>
                <p className="text-xs sm:text-sm text-[#5a5550] leading-relaxed">
                  We prioritise individuals from economically marginalized communities, professionals in remote regions, and first-generation learners striving to set a new standard.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#0E0904]">Our Holistic Assessment</h4>
                <p className="text-xs sm:text-sm text-[#5a5550] leading-relaxed">
                  Selection goes beyond needs-based checks. We look for demonstrated need, professional ambition, and the resilience required to succeed in a rigorous international curriculum.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e8e5e0] text-sm text-[#3a3020] leading-relaxed italic font-serif">
              💬 &ldquo;Financial limitations should never be the ceiling of your career. If you have the drive to meet the international standards of the AISCP, our community of alumni and donors is here to ensure you have the means to reach them.&rdquo;
            </div>
          </div>
        </section>

        {/* ============================================================
            3-STEP PROCESS TABLE (from original site)
            ============================================================ */}
        <section id="process" className="scroll-mt-40">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0E0904]">
              How to Apply – The 3-Step Process
            </h2>
            <div className="red-line" />
          </div>

          <div className="bg-white rounded-2xl border border-[#e8e5e0] overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0E0904] text-white text-xs font-bold uppercase tracking-wider p-4 hidden md:grid">
              <div className="md:col-span-3">Step</div>
              <div className="md:col-span-5">Action Required</div>
              <div className="md:col-span-4">Outcome</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 border-b border-[#e8e5e0] items-center gap-4 text-sm">
              <div className="md:col-span-3 font-serif font-bold text-base text-[#8C1627]">
                1. Statement of Intent
              </div>
              <div className="md:col-span-5 text-[#3a3020]">
                Submit a short essay on your career goals and how NSDRC will support your journey.
              </div>
              <div className="md:col-span-4 text-xs text-[#5a5550] bg-[#f5f3f0] p-3 rounded-xl">
                Helps our donors understand your vision and aligns your goals with available funding.
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 border-b border-[#e8e5e0] items-center gap-4 text-sm">
              <div className="md:col-span-3 font-serif font-bold text-base text-[#8C1627]">
                2. Financial Overview
              </div>
              <div className="md:col-span-5 text-[#3a3020]">
                Provide documentation of your current financial situation.
              </div>
              <div className="md:col-span-4 text-xs text-[#5a5550] bg-[#f5f3f0] p-3 rounded-xl">
                Ensures aid goes to those who truly need a leg up to achieve professional mastery.
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 p-6 items-center gap-4 text-sm">
              <div className="md:col-span-3 font-serif font-bold text-base text-[#8C1627]">
                3. Alumni Review
              </div>
              <div className="md:col-span-5 text-[#3a3020]">
                An interview or review conducted by a certified AISCP member.
              </div>
              <div className="md:col-span-4 text-xs text-[#5a5550] bg-[#f5f3f0] p-3 rounded-xl">
                Personalises your path to professional success with guidance from experienced mentors.
              </div>
            </div>
          </div>

          {/* Request Info button matching original site's nav-cta */}
          <div className="text-center pt-8">
            <button
              onClick={() => openModal()}
              className="px-8 py-3.5 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-full text-xs font-bold uppercase tracking-wider transition shadow-md shadow-[#8C1627]/25"
            >
              Request Info
            </button>
          </div>
        </section>

      </div>

    </div>
  );
}
