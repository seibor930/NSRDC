'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const studentCohorts = [
    {
      title: 'Working Adults',
      stat: '78.1%',
      statLabel: 'Employed while studying',
      description: 'Career professionals who study around demanding shift patterns, leadership duties, and family commitments with 100% self-paced scheduling.',
      highlight: '24/7 Virtual Campus Access',
      image: '/assets/images/Faculty/1.png',
    },
    {
      title: 'Experienced Leaders',
      stat: '38',
      statLabel: 'Average student age',
      description: 'Mid-career managers, technicians, and practitioners updating their credentials to meet AISCP international mandates.',
      highlight: 'Applied Practical Curricula',
      image: '/assets/images/Faculty/2.png',
    },
    {
      title: 'First Generation',
      stat: '60.4%',
      statLabel: 'First in family to achieve certification',
      description: 'Driven individuals striving to set new standards in their communities, with up to 75% tuition support from the NSDRC Opportunity Fund.',
      highlight: 'Opportunity Fund Backing',
      image: '/assets/images/Faculty/6.png',
    },
    {
      title: 'Leaders for Life',
      stat: '9/10',
      statLabel: 'Would recommend NSDRC',
      description: 'An international alumni network spanning over 40 countries, advancing ethical leadership and sustainable industry practices.',
      highlight: 'Global AISCP Network',
      image: '/assets/images/Faculty/4.png',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ============================================================
          SECTION 1 – HERO (with bg2.png and NO red overlay)
          ============================================================ */}
      <section className="relative min-h-[600px] lg:min-h-[660px] bg-[#0E0904] text-white flex items-center overflow-hidden py-16 lg:py-24">
        
        {/* Authentic Background Image (bg2.png) with NO red overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/bg2.png"
            alt="NSDRC Background"
            fill
            priority
            className="object-cover object-center opacity-85"
          />
          {/* Neutral dark gradient on left for text contrast — 100% free of any red tint */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0904]/90 via-[#0E0904]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 text-left">
            
            {/* Tag */}
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-rose-200 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
              Your Online Portal for Certifications &amp; Growth
            </div>

            {/* H1 Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Master Your Profession<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-rose-300">
                On Your Terms
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed font-normal">
              NSDRC provides world-class online certifications backed by the American International Society of Certified Professionals, bridging the gap between local expertise and global standards.
            </p>

            {/* Hero Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#8C1627] hover:bg-[#a31d30] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#8C1627]/30 hover:shadow-xl hover:shadow-[#8C1627]/50 transition-all text-center"
              >
                Explore Courses
              </Link>

              <Link
                href="/admissions"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all text-center"
              >
                Admissions &amp; Tuition
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 – PILLARS (from original site)
          ============================================================ */}
      <section className="py-20 bg-[#f5f3f0] border-b border-[#e8e5e0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e5e0] hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#0E0904]">
                  Save Time and Money
                </h3>
                <p className="text-sm text-[#5a5550] leading-relaxed">
                  Maximize your professional ROI by gaining industry-ready skills and American-standard accreditation in a fraction of the time and cost of a conventional university program.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/admissions"
                  className="text-xs font-bold uppercase tracking-wider text-[#8C1627] hover:text-[#a31d30] flex items-center gap-1.5 group"
                >
                  Explore savings
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e5e0] hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#0E0904]">
                  Scholarships That Fit You
                </h3>
                <p className="text-sm text-[#5a5550] leading-relaxed">
                  Your future, supported by our past. Need-based scholarships made possible by the generosity of the NSDRC alumni and global donor community.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/admissions"
                  className="text-xs font-bold uppercase tracking-wider text-[#8C1627] hover:text-[#a31d30] flex items-center gap-1.5 group"
                >
                  Search scholarships
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e5e0] hover-lift flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#0E0904]">
                  Start When You&apos;re Ready
                </h3>
                <p className="text-sm text-[#5a5550] leading-relaxed">
                  Experience the ultimate flexibility with our year-round enrollment: start your certification whenever you are ready, move at your own pace, and learn without the pressure of rigid deadlines.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href="/admissions"
                  className="text-xs font-bold uppercase tracking-wider text-[#8C1627] hover:text-[#a31d30] flex items-center gap-1.5 group"
                >
                  View all options
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3 – QUALITY EDUCATION (Enhanced visibility for bg_sect.jpg)
          ============================================================ */}
      <section id="quality" className="relative py-28 bg-[#0E0904] text-white overflow-hidden">
        {/* Background Image Clearly Visible */}
        <div className="absolute inset-0 opacity-75">
          <Image
            src="/assets/images/bg_sect.jpg"
            alt="Quality Education Background"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* Balanced overlay allowing image to shine through while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0904]/85 via-[#0E0904]/60 to-[#0E0904]/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#a31d30] bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 inline-block">
              Quality Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-md">
              Pioneering Education for Working Professionals
            </h2>
            <div className="w-12 h-1 bg-[#8C1627] rounded-full" />
            <blockquote className="text-base sm:text-lg text-white/90 italic font-serif leading-relaxed border-l-2 border-[#8C1627] pl-4 bg-black/30 p-4 rounded-r-xl backdrop-blur-sm">
              &ldquo;At NSDRC, quality is defined by a rigorous, research-backed curriculum that meets the international gold standards of the AISCP, ensuring our graduates possess the elite competencies required in today&apos;s global market.&rdquo;
            </blockquote>
            <div className="pt-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8C1627] hover:bg-[#a31d30] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                Skills-Aligned Learning <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4 – FACULTY (Reverted strictly to previous 2-column layout)
          ============================================================ */}
      <section id="faculty" className="py-24 bg-white border-b border-[#e8e5e0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E0904] leading-tight">
                Faculty Who Teach<br />— And Do.
              </h2>
              <div className="red-line" />
              <p className="text-sm sm:text-base text-[#5a5550] leading-relaxed">
                Our instructors are accomplished professionals who understand the challenges working adults face and are committed to fostering a flexible, supportive learning environment. What they teach you today can be directly applied to your career tomorrow.
              </p>
              <div className="pt-2">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0E0904] text-[#0E0904] text-xs font-bold uppercase tracking-wider hover:bg-[#0E0904] hover:text-white transition"
                >
                  Our Faculty <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Card with matching Faculty/7.png */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-[#e8e5e0] bg-[#0E0904] group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/assets/images/Faculty/7.png"
                    alt="Expert Instructor"
                    fill
                    className="object-cover object-top transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-serif text-base font-bold">
                      Expert Instructor <span className="text-[#a31d30] font-sans font-normal text-xs">| AISCP Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5 – STUDENTS (Prominent Big Title & Vibrant Color Cards)
          ============================================================ */}
      <section className="py-24 bg-[#f5f3f0] border-b border-[#e8e5e0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E0904] tracking-tight">
              OUR STUDENTS ARE:
            </h2>
            <div className="red-line" />
            <p className="text-base sm:text-lg text-[#5a5550] max-w-3xl leading-relaxed">
              Our students are a global community of ambitious professionals, lifelong learners, and industry pioneers dedicated to mastering the skills required to lead in a sustainable and technology-driven world.
            </p>
          </div>

          {/* Redesigned Cohorts Grid with Vibrant Natural Color Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentCohorts.map((cohort, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#e8e5e0] overflow-hidden hover-lift flex flex-col justify-between shadow-sm group"
              >
                {/* Full-Color Vibrant Photo */}
                <div className="relative h-48 w-full bg-[#e8e5e0] overflow-hidden">
                  <Image
                    src={cohort.image}
                    alt={cohort.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-[#8C1627] border border-[#e8e5e0]">
                    {cohort.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-[#0E0904]">
                      {cohort.title}
                    </h4>
                    <div className="space-y-0.5">
                      <strong className="text-2xl text-[#8C1627] font-serif block">
                        {cohort.stat}
                      </strong>
                      <span className="text-xs font-semibold text-[#0E0904] block">
                        {cohort.statLabel}
                      </span>
                    </div>
                    <p className="text-xs text-[#5a5550] leading-relaxed pt-1">
                      {cohort.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#e8e5e0]/60">
                    <span className="text-[11px] font-semibold text-[#8C1627] flex items-center gap-1">
                      <CheckCircle2 size={13} /> Verified NSDRC Profile
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 6 – IMPACT (from original site)
          ============================================================ */}
      <section id="impact" className="py-24 bg-[#0E0904] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(140,22,39,0.25),transparent)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#a31d30]">
              Making An Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Impact Reaches Far Beyond the Classroom
            </h2>
            <div className="w-12 h-1 bg-[#8C1627] rounded-full" />
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
              NSDRC is more than an educational platform — it is a research hub where academic rigor meets real-world application, ensuring our curriculum evolves in real-time to solve the complex challenges of the global economy.
            </p>
            <div className="pt-2">
              <Link
                href="/#quality"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#0E0904] transition-all"
              >
                Our Mission &amp; Values
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7 – COMMUNITY (from original site)
          ============================================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Community Image Matching Content */}
            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-[#e8e5e0]">
                <Image
                  src="/assets/images/community.jpg"
                  alt="Empowering Communities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Community Text */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E0904] leading-tight">
                Empowering the Communities We Serve
              </h2>
              <div className="red-line" />
              <p className="text-sm sm:text-base text-[#5a5550] leading-relaxed">
                Community engagement and higher education go hand-in-hand. Our research is focused on creating a positive change in the modern-day workforce, connecting local talent with global standards.
              </p>
              <div className="pt-2">
                <Link
                  href="/#impact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0E0904] text-[#0E0904] text-xs font-bold uppercase tracking-wider hover:bg-[#0E0904] hover:text-white transition"
                >
                  Our Impact
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
