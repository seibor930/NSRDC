'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/lib/courses-data';
import { useApplicationModal } from '@/components/ApplicationModal';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Globe2, 
  Award, 
  CheckCircle2, 
  FileText, 
  Download, 
  UserCheck, 
  Sparkles,
  ChevronDown,
  Layers,
  HelpCircle
} from 'lucide-react';

export function CourseDetailClient({ course }: { course: Course }) {
  const { openModal } = useApplicationModal();
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [openPhases, setOpenPhases] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });

  const togglePhase = (index: number) => {
    setOpenPhases(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDownloadSyllabus = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] pb-24">
      
      {/* ============================================================
          COURSE HERO BAND
          ============================================================ */}
      <section className="bg-[#0E0904] text-white pt-14 sm:pt-16 pb-16 sm:pb-20 relative overflow-hidden border-b border-white/10">
        {/* Ambient Crimson Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(139,26,26,0.35),transparent)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#a31d30] hover:text-white px-4 py-2 rounded-full border border-[#8C1627]/50 hover:bg-[#8C1627] transition-all"
            >
              <ArrowLeft size={14} /> Back to Courses
            </Link>
          </div>

          <div className="space-y-4 max-w-3xl">
            {/* Tag / Badge */}
            <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#B22222] border border-[#B22222]/40 px-3.5 py-1 rounded-full bg-[#8C1627]/10">
              {course.tag} • {course.level}
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {course.title}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              {course.description}
            </p>

            {/* Info Chips */}
            <div className="pt-4 flex flex-wrap gap-4 sm:gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#a31d30]" />
                <span>Duration: <strong className="text-white">{course.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#a31d30]" />
                <span>Enrollment: <strong className="text-white">{course.enrollment}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#a31d30]" />
                <span>Accreditation: <strong className="text-white">{course.accreditation}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={16} className="text-[#a31d30]" />
                <span>Format: <strong className="text-white">{course.mode}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#a31d30]" />
                <span>Credits: <strong className="text-white">{course.credits}</strong></span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          MAIN TWO-COLUMN LAYOUT: Content + Sticky Sidebar
          ============================================================ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Main Course Syllabus & Outcomes */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* 1. Overview */}
            <section className="bg-white rounded-2xl p-8 border border-[#e8e2d8] shadow-sm space-y-4">
              <div className="border-b-2 border-[#8C1627] pb-2 inline-block">
                <h2 className="font-serif text-2xl font-bold text-[#0E0904]">Course Overview</h2>
              </div>
              <p className="text-sm sm:text-base text-[#3a3020] leading-relaxed whitespace-pre-line">
                {course.overview}
              </p>
            </section>

            {/* 2. What You Will Learn (Outcomes Grid) */}
            <section className="space-y-6">
              <div className="border-b-2 border-[#8C1627] pb-2 inline-block">
                <h2 className="font-serif text-2xl font-bold text-[#0E0904]">What You Will Learn</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-[#e8e2d8] border-l-4 border-l-[#8C1627] hover:shadow-md transition space-y-2"
                  >
                    <strong className="block text-sm font-bold text-[#8C1627]">
                      {outcome.title}
                    </strong>
                    <p className="text-xs text-[#5a5040] leading-relaxed">
                      {outcome.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Module Breakdown (Phases) */}
            <section className="space-y-6">
              <div className="border-b-2 border-[#8C1627] pb-2 inline-block">
                <h2 className="font-serif text-2xl font-bold text-[#0E0904]">Curriculum & Module Breakdown</h2>
              </div>

              <div className="space-y-4">
                {course.phases.map((phase, pIdx) => {
                  const isOpen = openPhases[pIdx] ?? true;
                  return (
                    <div 
                      key={pIdx}
                      className="bg-white rounded-xl border border-[#e8e2d8] overflow-hidden"
                    >
                      <button
                        onClick={() => togglePhase(pIdx)}
                        className="w-full px-6 py-4 bg-[#fdfbf7] flex items-center justify-between text-left hover:bg-[#f8f5ee] transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#8C1627] text-white flex items-center justify-center text-xs font-bold">
                            {pIdx + 1}
                          </span>
                          <span className="font-serif text-sm sm:text-base font-bold text-[#0E0904]">
                            {phase.title}
                          </span>
                        </div>
                        <ChevronDown 
                          size={18} 
                          className={`text-[#8C1627] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        />
                      </button>

                      {isOpen && (
                        <div className="p-6 pt-2 border-t border-[#e8e2d8]/60 space-y-2.5">
                          {phase.modules.map((mod, mIdx) => (
                            <div 
                              key={mIdx}
                              className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F0E8]/50 border border-[#e8e2d8] text-xs font-medium text-[#3a3020]"
                            >
                              <span className="w-5 h-5 rounded-full bg-[#8C1627]/10 text-[#8C1627] flex items-center justify-center font-bold text-[10px] shrink-0">
                                {mIdx + 1}
                              </span>
                              <span>{mod}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 4. Accreditation Badge */}
            <section className="bg-white rounded-2xl p-6 border border-[#e8e2d8] flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#8C1627] text-white flex flex-col items-center justify-center font-bold text-center shrink-0 shadow-md shadow-[#8C1627]/25">
                <span className="text-xs uppercase tracking-wider">AISCP</span>
                <span className="text-[9px] opacity-80">SEAL</span>
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-[#0E0904]">
                  American International Society of Certified Professionals
                </h4>
                <p className="text-xs text-[#5a5040] leading-relaxed">
                  Upon completion, your credential is electronically logged and cryptographically authenticated on the NSDRC Blockchain Registry.
                </p>
              </div>
            </section>

            {/* 5. 3-Step Admission Process */}
            <section className="space-y-6">
              <div className="border-b-2 border-[#8C1627] pb-2 inline-block">
                <h2 className="font-serif text-2xl font-bold text-[#0E0904]">Admission Process</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-[#e8e2d8] space-y-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#8C1627] text-[#8C1627] flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <strong className="block text-sm text-[#0E0904]">Online Application</strong>
                  <p className="text-xs text-[#5a5040]">
                    Submit your interest via the NSDRC portal in under 5 minutes with zero fees.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#e8e2d8] space-y-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#8C1627] text-[#8C1627] flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <strong className="block text-sm text-[#0E0904]">15-min Consultation</strong>
                  <p className="text-xs text-[#5a5040]">
                    A brief onboarding call to align course modules with your career objectives.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#e8e2d8] space-y-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#8C1627] text-[#8C1627] flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <strong className="block text-sm text-[#0E0904]">Instant LMS Access</strong>
                  <p className="text-xs text-[#5a5550]">
                    Receive your Virtual Campus credentials and begin studying immediately.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Instructor Spotlight */}
            <section className="bg-white rounded-2xl p-6 border border-[#e8e2d8] flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-[#e8e2d8]">
                <Image
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C1627]">
                  Program Faculty Lead
                </span>
                <h4 className="font-serif text-lg font-bold text-[#0E0904]">
                  {course.instructor.name}
                </h4>
                <p className="text-xs text-[#5a5040]">
                  {course.instructor.title}
                </p>
                <div className="pt-1 text-[11px] text-[#9a9590]">
                  Scheduled weekly open office hours via Virtual Campus.
                </div>
              </div>
            </section>

          </main>

          {/* RIGHT COLUMN: Sticky Enrollment Sidebar Card */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-[#0E0904] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#a31d30]">
                  Certified Program
                </span>
                <span className="text-xs text-white/60">
                  {course.level}
                </span>
              </div>

              {/* Tuition Price */}
              <div>
                <span className="text-xs text-white/50 block">Lock-in Flat Rate</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-4xl font-extrabold text-white">
                    ${course.tuition}
                  </span>
                  <span className="text-xs text-white/50">USD / total</span>
                </div>
                <span className="text-[11px] text-emerald-400 block mt-1">
                  ✓ Guaranteed zero graduation or assessment fees
                </span>
              </div>

              {/* Opportunity Fund Alert */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#a31d30]">
                  <Sparkles size={14} /> Opportunity Fund Eligible
                </div>
                <p className="text-[11px] text-white/65 leading-relaxed">
                  Financial assistance available covering up to <strong>75%</strong> of tuition for qualified applicants.
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openModal(course.slug)}
                  className="w-full py-3.5 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-[#8C1627]/30 flex items-center justify-center gap-2"
                >
                  Apply For This Course
                </button>

                <button
                  onClick={handleDownloadSyllabus}
                  className="w-full py-3 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-semibold transition flex items-center justify-center gap-2"
                >
                  <Download size={14} />
                  {downloadSuccess ? 'Syllabus Dispatched!' : 'Download Syllabus (PDF)'}
                </button>
              </div>

              {downloadSuccess && (
                <div className="p-2.5 bg-emerald-950/80 border border-emerald-700/60 rounded-xl text-[11px] text-emerald-300 text-center animate-in fade-in">
                  Detailed syllabus curriculum sent to your download folder.
                </div>
              )}

              {/* Course Quick Facts */}
              <div className="border-t border-white/10 pt-4 space-y-2.5 text-xs text-white/70">
                <div className="flex items-center justify-between">
                  <span>Pacing:</span>
                  <strong className="text-white">Self-Paced (24/7 LMS)</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Accreditation:</span>
                  <strong className="text-white">AISCP Certified</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Prerequisites:</span>
                  <strong className="text-white">Internet & Enthusiasm</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credential:</span>
                  <strong className="text-white">Blockchain Verified</strong>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

    </div>
  );
}
