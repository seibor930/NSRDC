'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FACULTY_CATEGORIES, COURSES } from '@/lib/courses-data';
import { useApplicationModal } from './ApplicationModal';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, BookOpen, GraduationCap, PhoneCall, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedCat, setSelectedCat] = useState<string>('psy');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useApplicationModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const currentCatData = FACULTY_CATEGORIES.find(c => c.key === selectedCat) || FACULTY_CATEGORIES[0];
  const currentCatCourses = COURSES.filter(c => c.category === selectedCat);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-[#e8e5e0] transition-all duration-200 ${
          isScrolled 
            ? 'py-3 shadow-md' 
            : 'py-4 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center group py-0.5"
            onClick={closeDropdowns}
          >
            <img 
              src="/assets/images/logo-png1.png"
              alt="NSDRC Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[280px] sm:max-w-[360px] md:max-w-[440px] object-contain object-left transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* ONLINE COURSES MEGA MENU */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('courses')}
                onMouseEnter={() => setActiveDropdown('courses')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'courses' 
                    ? 'text-[#8C1627] bg-[#f5f3f0]' 
                    : 'text-[#0E0904] hover:text-[#8C1627] hover:bg-[#f5f3f0]'
                }`}
              >
                <span>Online Courses</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180 text-[#8C1627]' : ''}`} />
              </button>

              {/* Courses Mega Dropdown */}
              {activeDropdown === 'courses' && (
                <div 
                  onMouseLeave={closeDropdowns}
                  className="absolute left-1/2 -translate-x-1/3 top-full pt-3 w-[780px] animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#e8e5e0] overflow-hidden flex divide-x divide-[#e8e5e0]">
                    {/* Left: Category Sidebar */}
                    <div className="w-64 bg-[#f5f3f0]/70 p-3 space-y-1">
                      <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#9a9590]">
                        Course Categories
                      </div>
                      {FACULTY_CATEGORIES.map(cat => (
                        <button
                          key={cat.key}
                          onClick={() => setSelectedCat(cat.key)}
                          onMouseEnter={() => setSelectedCat(cat.key)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
                            selectedCat === cat.key 
                              ? 'bg-white text-[#8C1627] shadow-sm border border-[#e8e5e0]' 
                              : 'text-[#5a5550] hover:bg-white/60 hover:text-[#0E0904]'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <span>{cat.icon}</span>
                            <span className="truncate">{cat.title}</span>
                          </span>
                          {cat.key === 'lang' && (
                            <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-normal">Soon</span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Right: Courses in Selected Category */}
                    <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex items-center justify-between border-b border-[#e8e5e0] pb-3 mb-4">
                          <div>
                            <span className="text-xs uppercase font-bold text-[#8C1627] tracking-wider">Courses & Programs</span>
                            <h4 className="font-serif text-lg font-bold text-[#0E0904] flex items-center gap-2">
                              {currentCatData.icon} {currentCatData.title}
                            </h4>
                          </div>
                          <Link 
                            href="/courses" 
                            onClick={closeDropdowns}
                            className="text-xs text-[#8C1627] hover:underline font-semibold flex items-center gap-1"
                          >
                            All Programs <ArrowRight size={12} />
                          </Link>
                        </div>
                        <p className="text-xs text-[#5a5550] mb-4 leading-relaxed">
                          {currentCatData.description}
                        </p>

                        {currentCatCourses.length > 0 ? (
                          <div className="space-y-2.5">
                            {currentCatCourses.map(course => (
                              <Link
                                key={course.slug}
                                href={`/courses/${course.slug}`}
                                onClick={closeDropdowns}
                                className="group/item block p-3 rounded-xl border border-transparent hover:border-[#8C1627]/30 hover:bg-[#8C1627]/5 transition"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#0E0904] group-hover/item:text-[#8C1627] transition-colors">
                                    {course.title}
                                  </span>
                                  <span className="text-[11px] font-semibold text-[#8C1627] bg-[#8C1627]/10 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                                    {course.level}
                                  </span>
                                </div>
                                <span className="block text-[11px] text-[#9a9590] mt-0.5">
                                  {course.duration} • {course.credits} • AISCP Accredited
                                </span>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="py-8 text-center bg-[#f5f3f0] rounded-xl border border-dashed border-[#e8e5e0] text-xs text-[#5a5550]">
                            Curriculum currently undergoing AISCP international accreditation review. Announced shortly.
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#e8e5e0] flex items-center justify-between text-xs text-[#5a5550]">
                        <span className="flex items-center gap-1 text-[#8C1627] font-medium">
                          <ShieldCheck size={14} /> Backed by American International Society (AISCP)
                        </span>
                        <button 
                          onClick={() => { closeDropdowns(); openModal(); }}
                          className="font-bold text-[#0E0904] hover:text-[#8C1627] transition"
                        >
                          Request Syllabus →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ADMISSIONS & TUITION */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('admissions')}
                onMouseEnter={() => setActiveDropdown('admissions')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'admissions' 
                    ? 'text-[#8C1627] bg-[#f5f3f0]' 
                    : 'text-[#0E0904] hover:text-[#8C1627] hover:bg-[#f5f3f0]'
                }`}
              >
                <span>Admissions & Tuition</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'admissions' ? 'rotate-180 text-[#8C1627]' : ''}`} />
              </button>

              {activeDropdown === 'admissions' && (
                <div 
                  onMouseLeave={closeDropdowns}
                  className="absolute left-0 top-full pt-3 w-80 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#e8e5e0] p-4 space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#9a9590] tracking-wider px-2">Admissions</span>
                      <div className="mt-1 space-y-1">
                        <Link 
                          href="/admissions#requirements" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Requirements
                        </Link>
                        <Link 
                          href="/admissions#requirements" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Tuition & Costs
                        </Link>
                        <Link 
                          href="/admissions#requirements" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Start Dates
                        </Link>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#e8e5e0]">
                      <span className="text-[10px] uppercase font-bold text-[#9a9590] tracking-wider px-2">Financial Aid</span>
                      <div className="mt-1 space-y-1">
                        <Link 
                          href="/admissions#opportunity-fund" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          NSDRC Opportunity Fund
                        </Link>
                        <Link 
                          href="/admissions#process" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          How to Apply
                        </Link>
                        <Link 
                          href="/admissions#process" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Alumni Review Process
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* TOOLS & SUPPORT */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('tools')}
                onMouseEnter={() => setActiveDropdown('tools')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'tools' 
                    ? 'text-[#8C1627] bg-[#f5f3f0]' 
                    : 'text-[#0E0904] hover:text-[#8C1627] hover:bg-[#f5f3f0]'
                }`}
              >
                <span>Tools & Support</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180 text-[#8C1627]' : ''}`} />
              </button>

              {activeDropdown === 'tools' && (
                <div 
                  onMouseLeave={closeDropdowns}
                  className="absolute left-0 top-full pt-3 w-80 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#e8e5e0] p-4 space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#9a9590] tracking-wider px-2">Tools</span>
                      <div className="mt-1 space-y-1">
                        <Link 
                          href="/tools#suite" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Virtual Campus (LMS)
                        </Link>
                        <Link 
                          href="/tools#suite" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Research & Reference Library
                        </Link>
                        <Link 
                          href="/tools#journey" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Blockchain Verifier
                        </Link>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#e8e5e0]">
                      <span className="text-[10px] uppercase font-bold text-[#9a9590] tracking-wider px-2">Support</span>
                      <div className="mt-1 space-y-1">
                        <Link 
                          href="/tools#suite" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Help Desk (24/7)
                        </Link>
                        <Link 
                          href="/tools#suite" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Faculty Office Hours
                        </Link>
                        <Link 
                          href="/tools#suite" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Community Forums
                        </Link>
                        <Link 
                          href="/tools#journey" 
                          onClick={closeDropdowns}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                        >
                          Alumni Mentorship
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT US */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeDropdown === 'about' 
                    ? 'text-[#8C1627] bg-[#f5f3f0]' 
                    : 'text-[#0E0904] hover:text-[#8C1627] hover:bg-[#f5f3f0]'
                }`}
              >
                <span>About Us</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180 text-[#8C1627]' : ''}`} />
              </button>

              {activeDropdown === 'about' && (
                <div 
                  onMouseLeave={closeDropdowns}
                  className="absolute left-0 top-full pt-3 w-72 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#e8e5e0] p-4 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#9a9590] tracking-wider px-2">About</span>
                    <div className="mt-1 space-y-1">
                      <Link 
                        href="/#quality" 
                        onClick={closeDropdowns}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                      >
                        Our Mission & Values
                      </Link>
                      <Link 
                        href="/#impact" 
                        onClick={closeDropdowns}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                      >
                        Our Impact
                      </Link>
                      <Link 
                        href="/#impact" 
                        onClick={closeDropdowns}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                      >
                        Research Hub
                      </Link>
                      <Link 
                        href="/#quality" 
                        onClick={closeDropdowns}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-[#0E0904] hover:bg-[#f5f3f0] hover:text-[#8C1627] transition"
                      >
                        Partners & Accreditation
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => openModal()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8C1627] hover:bg-[#a31d30] text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-[#8C1627]/25 hover:shadow-lg hover:shadow-[#8C1627]/40 transition-all active:scale-95"
            >
              <Sparkles size={14} /> Request Info
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0E0904] hover:bg-[#f5f3f0] rounded-xl transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e8e5e0]">
                <img 
                  src="/assets/images/logo-png1.png"
                  alt="NSDRC Logo"
                  className="h-16 w-auto object-contain object-left"
                />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#5a5550] hover:bg-[#f5f3f0] rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="mt-6 space-y-4">
                <div>
                  <Link 
                    href="/courses" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-[#0E0904] hover:text-[#8C1627]"
                  >
                    Online Courses
                  </Link>
                  <div className="pl-4 mt-2 space-y-1.5 border-l-2 border-[#e8e5e0]">
                    {FACULTY_CATEGORIES.slice(0, 5).map(cat => (
                      <Link
                        key={cat.key}
                        href="/courses"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-[#5a5550] hover:text-[#8C1627]"
                      >
                        {cat.icon} {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <Link 
                    href="/admissions" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-[#0E0904] hover:text-[#8C1627]"
                  >
                    Admissions & Tuition
                  </Link>
                  <div className="pl-4 mt-2 space-y-1.5 border-l-2 border-[#e8e5e0]">
                    <Link href="/admissions#requirements" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Requirements</Link>
                    <Link href="/admissions#requirements" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Tuition & Costs</Link>
                    <Link href="/admissions#opportunity-fund" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">NSDRC Opportunity Fund</Link>
                    <Link href="/admissions#process" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">How to Apply</Link>
                  </div>
                </div>

                <div>
                  <Link 
                    href="/tools" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-bold text-[#0E0904] hover:text-[#8C1627]"
                  >
                    Tools & Support
                  </Link>
                  <div className="pl-4 mt-2 space-y-1.5 border-l-2 border-[#e8e5e0]">
                    <Link href="/tools#suite" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Virtual Campus (LMS)</Link>
                    <Link href="/tools#suite" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Research Library</Link>
                    <Link href="/tools#suite" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Help Desk (24/7)</Link>
                    <Link href="/tools#journey" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">The Certification Journey</Link>
                  </div>
                </div>

                <div>
                  <span className="block text-base font-bold text-[#0E0904]">
                    About Us
                  </span>
                  <div className="pl-4 mt-2 space-y-1.5 border-l-2 border-[#e8e5e0]">
                    <Link href="/#quality" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Our Mission & Values</Link>
                    <Link href="/#impact" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Our Impact</Link>
                    <Link href="/#impact" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Research Hub</Link>
                    <Link href="/#quality" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-[#5a5550]">Partners & Accreditation</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="pt-6 border-t border-[#e8e5e0] space-y-3">
              <button 
                onClick={() => { setMobileMenuOpen(false); openModal(); }}
                className="w-full py-3 bg-[#8C1627] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#8C1627]/25"
              >
                Request Info / Apply
              </button>
              <p className="text-[11px] text-center text-[#9a9590]">
                AISCP Certified Educational Standards
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
