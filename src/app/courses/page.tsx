'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { COURSES, FACULTY_CATEGORIES } from '@/lib/courses-data';
import { useApplicationModal } from '@/components/ApplicationModal';
import { 
  Search, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  BookOpen, 
  Award, 
  X
} from 'lucide-react';

export default function CoursesPage() {
  const { openModal } = useApplicationModal();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCourses = useMemo(() => {
    return COURSES.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFaculty = selectedFaculty === 'all' || course.category === selectedFaculty;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;

      return matchesSearch && matchesFaculty && matchesLevel;
    });
  }, [searchQuery, selectedFaculty, selectedLevel]);

  return (
    <div className="min-h-screen bg-[#f5f3f0] pb-24">
      
      {/* ============================================================
          PAGE BANNER (from original site)
          ============================================================ */}
      <section className="bg-[#0E0904] text-white py-20 lg:py-24 relative overflow-hidden border-b border-[#e8e5e0]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(140,22,39,0.3),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Online Courses
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
              Explore our AISCP-backed certification programs designed for working professionals across six specialised faculties.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* ============================================================
            SECTION 1 – OUR DEPARTMENTS (from original site)
            ============================================================ */}
        <section id="departments">
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#0E0904]">
              Our Departments
            </h2>
            <div className="red-line" />
            <p className="text-sm sm:text-base text-[#5a5550]">
              Each faculty is structured to deliver industry-ready competencies aligned with American international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* OHS */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] shadow-sm hover-lift space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <h3 className="font-serif text-lg font-bold text-[#0E0904]">
                  Faculty of Occupational Safety & Health
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3a3020]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/cbt" className="hover:text-[#8C1627] transition">
                    Advanced Diploma in Cognitive Behavior Therapy
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <span className="text-[#5a5550]">
                    Certification Programs – Independent Courses{' '}
                    <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                      Coming Soon
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Admin Management */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] shadow-sm hover-lift space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <h3 className="font-serif text-lg font-bold text-[#0E0904]">
                  Faculty of Administration Management
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3a3020]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/leadership" className="hover:text-[#8C1627] transition">
                    Administration Specialist – Administration Procedures and Support in Office
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sustainability & Green Innovation */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] shadow-sm hover-lift space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <h3 className="font-serif text-lg font-bold text-[#0E0904]">
                  Faculty of Sustainability & Green Innovation
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3a3020]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/waste-to-wealth" className="hover:text-[#8C1627] transition">
                    Circular Economy Specialist
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/environmental" className="hover:text-[#8C1627] transition">
                    Advanced Certification in Agricultural Entrepreneurship
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/environmental" className="hover:text-[#8C1627] transition">
                    Advanced Certification in Renewable Energy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Health & Behavioral Science */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] shadow-sm hover-lift space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🩺</span>
                <h3 className="font-serif text-lg font-bold text-[#0E0904]">
                  Faculty of Health & Behavioral Science
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3a3020]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/nursing-patient-care" className="hover:text-[#8C1627] transition">
                    Nursing Courses To Be Finalised
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/cbt" className="hover:text-[#8C1627] transition">
                    Advanced Certification in Clinical Psychology
                  </Link>
                </li>
              </ul>
            </div>

            {/* Emerging Tech & Hospitality */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] shadow-sm hover-lift space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <h3 className="font-serif text-lg font-bold text-[#0E0904]">
                  Faculty of Emerging Technology & Hospitality
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#3a3020]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/homestay" className="hover:text-[#8C1627] transition">
                    Advanced Certification in Homestay Management
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C1627] mt-1.5 shrink-0" />
                  <Link href="/courses/ai-hr" className="hover:text-[#8C1627] transition">
                    Specialist in Artificial Intelligence (AI)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Language (Coming Soon) */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0] shadow-sm hover-lift space-y-4 opacity-80">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                <h3 className="font-serif text-lg font-bold text-[#0E0904]">
                  Faculty of Language{' '}
                  <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                    Coming Soon
                  </span>
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5a5550]">
                Language proficiency and international communication programs currently undergoing AISCP syllabus approval.
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================
            SECTION 2 – COURSE CATALOGUE & SEARCH (all 17 courses)
            ============================================================ */}
        <section id="catalogue" className="space-y-8">
          
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#e8e5e0] p-6 space-y-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Input */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9a9590]" size={18} />
                <input
                  type="text"
                  placeholder="Search certifications (e.g. CBT, AI, Nursing, Safety)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-[#f5f3f0] rounded-xl text-sm border border-[#e8e5e0] focus:outline-none focus:border-[#8C1627] transition"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9a9590] hover:text-[#0E0904]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Level Selector */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <span className="text-xs font-semibold text-[#5a5550] whitespace-nowrap">Credential:</span>
                <div className="flex rounded-xl bg-[#f5f3f0] p-1 border border-[#e8e5e0] w-full md:w-auto">
                  {['all', 'Certificate', 'Diploma', 'Advanced Diploma'].map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setSelectedLevel(lvl)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        selectedLevel === lvl 
                          ? 'bg-white text-[#8C1627] shadow-sm' 
                          : 'text-[#5a5550] hover:text-[#0E0904]'
                      }`}
                    >
                      {lvl === 'all' ? 'All' : lvl}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none border-t border-[#e8e5e0]">
              <button
                onClick={() => setSelectedFaculty('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedFaculty === 'all'
                    ? 'bg-[#8C1627] text-white shadow-sm'
                    : 'bg-[#f5f3f0] text-[#5a5550] hover:bg-[#e8e5e0]'
                }`}
              >
                All Programs ({COURSES.length})
              </button>
              {FACULTY_CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedFaculty(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                    selectedFaculty === cat.key
                      ? 'bg-[#8C1627] text-white shadow-sm'
                      : 'bg-[#f5f3f0] text-[#5a5550] hover:bg-[#e8e5e0]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count & Active Filters */}
          <div className="flex items-center justify-between text-xs text-[#5a5550] px-1">
            <div>
              Showing <strong>{filteredCourses.length}</strong> certification programs
              {selectedFaculty !== 'all' && (
                <span className="ml-1 text-[#8C1627]">
                  in {FACULTY_CATEGORIES.find(c => c.key === selectedFaculty)?.title}
                </span>
              )}
            </div>
            {(searchQuery || selectedFaculty !== 'all' || selectedLevel !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFaculty('all');
                  setSelectedLevel('all');
                }}
                className="text-[#8C1627] hover:underline font-semibold"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Course Cards Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div
                  key={course.slug}
                  className="bg-white rounded-2xl border border-[#e8e5e0] hover-lift overflow-hidden flex flex-col justify-between group shadow-sm"
                >
                  <div className="p-6 space-y-4">
                    {/* Top Bar: Level Badge on left, Duration on right */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C1627] bg-[#8C1627]/10 px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-[11px] font-medium text-[#7a7268] flex items-center gap-1">
                        <Clock size={12} className="text-[#8C1627]" /> {course.duration}
                      </span>
                    </div>

                    {/* Department / Category on its own clean line */}
                    <div className="text-[11px] uppercase font-bold tracking-wider text-[#8C1627]/90 pt-0.5">
                      {course.tag}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0E0904] group-hover:text-[#8C1627] transition-colors leading-snug">
                      <Link href={`/courses/${course.slug}`}>
                        {course.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#5a5550] line-clamp-3 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="p-3 bg-[#f5f3f0] rounded-xl border border-[#e8e5e0]/60 space-y-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#9a9590] font-bold block">
                        Curriculum Structure
                      </span>
                      <span className="text-xs text-[#0E0904] font-medium block truncate">
                        {course.phases[0]?.title || 'Module 1 — Core Principles'}
                      </span>
                      <span className="text-[11px] text-[#5a5550]">
                        +{course.phases.length - 1} additional modules & applied capstone
                      </span>
                    </div>

                    <div className="pt-1 flex flex-wrap gap-2 text-[11px] text-[#5a5550]">
                      <span className="inline-flex items-center gap-1 bg-[#f5f3f0] px-2 py-0.5 rounded-md">
                        <ShieldCheck size={12} className="text-[#8C1627]" /> AISCP Accredited
                      </span>
                      <span className="inline-flex items-center gap-1 bg-[#f5f3f0] px-2 py-0.5 rounded-md">
                        <Award size={12} className="text-[#8C1627]" /> {course.credits}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 pt-4 border-t border-[#e8e5e0] bg-[#f5f3f0]/50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-[#9a9590] font-bold block">Flat-Rate Tuition</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-[#0E0904]">${course.tuition}</span>
                        <span className="text-[10px] text-emerald-700 font-semibold">Aid Eligible</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openModal(course.slug)}
                        className="px-3.5 py-1.5 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-lg text-xs font-semibold transition shadow-sm"
                      >
                        Apply Now
                      </button>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="px-3 py-1.5 border border-[#e8e5e0] hover:bg-white text-xs font-semibold text-[#0E0904] rounded-lg transition"
                      >
                        Syllabus
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-[#e8e5e0] space-y-4">
              <BookOpen size={40} className="text-[#9a9590] mx-auto" />
              <h3 className="font-serif text-xl font-bold text-[#0E0904]">No certifications found</h3>
              <p className="text-sm text-[#5a5550] max-w-sm mx-auto">
                We couldn&apos;t find any programs matching your current filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFaculty('all');
                  setSelectedLevel('all');
                }}
                className="px-6 py-2 bg-[#8C1627] text-white text-xs font-semibold rounded-xl"
              >
                View All Programs
              </button>
            </div>
          )}

        </section>

      </div>

    </div>
  );
}
