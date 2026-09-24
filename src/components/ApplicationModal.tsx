'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES, Course } from '@/lib/courses-data';
import { submitApplication } from '@/lib/supabase/db';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Award, ChevronRight, ArrowLeft, Loader2, Sparkles } from 'lucide-react';

interface ApplicationModalContextType {
  isOpen: boolean;
  openModal: (courseSlug?: string) => void;
  closeModal: () => void;
}

const ApplicationModalContext = createContext<ApplicationModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {}
});

export const useApplicationModal = () => useContext(ApplicationModalContext);

export function ApplicationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedSlug, setPreselectedSlug] = useState<string | undefined>(undefined);

  const openModal = (courseSlug?: string) => {
    setPreselectedSlug(courseSlug);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <ApplicationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <ApplicationModal preselectedSlug={preselectedSlug} onClose={closeModal} />}
    </ApplicationModalContext.Provider>
  );
}

function ApplicationModal({ preselectedSlug, onClose }: { preselectedSlug?: string; onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string>(preselectedSlug || COURSES[0].slug);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [occupation, setOccupation] = useState('');
  const [statement, setStatement] = useState('');
  const [requestAid, setRequestAid] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const selectedCourse = COURSES.find(c => c.slug === selectedCourseSlug) || COURSES[0];

  useEffect(() => {
    if (preselectedSlug) {
      setSelectedCourseSlug(preselectedSlug);
      setStep(2);
    }
  }, [preselectedSlug]);

  const filteredCourses = COURSES.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await submitApplication({
        full_name: fullName,
        email,
        phone,
        country,
        current_occupation: occupation || 'Professional',
        course_slug: selectedCourse.slug,
        course_title: selectedCourse.title,
        statement_of_intent: statement || 'Seeking professional certification to accelerate career growth.',
        request_financial_aid: requestAid
      });

      if (res.success) {
        setApplicationNumber(res.applicationNo);
        setStep(4);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8C1627', '#0E0904', '#B22222', '#F5F0E8']
          });
        } catch {}
      }
    } catch {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e8e5e0] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0E0904] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#8C1627] flex items-center justify-center font-bold text-sm tracking-wider text-white">
              AISCP
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">NSDRC Application Portal</h3>
              <p className="text-xs text-white/60">AISCP-Backed International Certification</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Stepper Indicator */}
        {step < 4 && (
          <div className="bg-[#f5f3f0] px-6 py-3 border-b border-[#e8e5e0] flex items-center justify-between text-xs font-medium text-[#5a5550]">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step === 1 ? 'bg-[#8C1627] text-white' : 'bg-[#e8e5e0] text-[#0E0904]'}`}>1</span>
              <span className={step === 1 ? 'text-[#8C1627] font-semibold' : ''}>Program</span>
            </div>
            <ChevronRight size={14} className="text-[#9a9590]" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step === 2 ? 'bg-[#8C1627] text-white' : 'bg-[#e8e5e0] text-[#0E0904]'}`}>2</span>
              <span className={step === 2 ? 'text-[#8C1627] font-semibold' : ''}>Applicant</span>
            </div>
            <ChevronRight size={14} className="text-[#9a9590]" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step === 3 ? 'bg-[#8C1627] text-white' : 'bg-[#e8e5e0] text-[#0E0904]'}`}>3</span>
              <span className={step === 3 ? 'text-[#8C1627] font-semibold' : ''}>Statement & Aid</span>
            </div>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              {errorMsg}
            </div>
          )}

          {/* STEP 1: Select Course */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#0E0904]">Select Certification Program</h4>
                <p className="text-sm text-[#5a5550] mt-1">Choose the faculty specialization that aligns with your career trajectory.</p>
              </div>

              <input 
                type="text" 
                placeholder="Search programs by name or faculty..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#f5f3f0] border border-[#e8e5e0] rounded-xl text-sm focus:outline-none focus:border-[#8C1627] transition"
              />

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {filteredCourses.map(course => (
                  <div 
                    key={course.slug}
                    onClick={() => setSelectedCourseSlug(course.slug)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition flex items-center justify-between ${
                      selectedCourseSlug === course.slug 
                        ? 'border-[#8C1627] bg-[#8C1627]/5 text-[#0E0904]' 
                        : 'border-[#e8e5e0] hover:border-[#9a9590] bg-white'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8C1627] tracking-wider">{course.tag}</span>
                      <h5 className="font-semibold text-sm text-[#0E0904] mt-0.5">{course.title}</h5>
                      <span className="text-xs text-[#5a5550]">{course.level} • {course.credits}</span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        selectedCourseSlug === course.slug 
                          ? 'bg-[#8C1627] text-white' 
                          : 'bg-[#f5f3f0] text-[#5a5550]'
                      }`}>
                        {selectedCourseSlug === course.slug ? 'Selected' : 'Select'}
                      </span>
                      <span className="block text-[10px] text-[#5a5550] mt-1 font-medium">{course.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex justify-end">
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-xl text-sm font-semibold transition flex items-center gap-2 shadow-md shadow-[#8C1627]/20"
                >
                  Continue to Applicant Info
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Personal Info */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="p-3 bg-[#f5f3f0] rounded-xl border border-[#e8e5e0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C1627]">Selected Certification</span>
                  <div className="text-sm font-bold text-[#0E0904]">{selectedCourse.title}</div>
                </div>
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="text-xs text-[#8C1627] font-semibold hover:underline"
                >
                  Change
                </button>
              </div>

              <div>
                <h4 className="font-serif text-xl font-bold text-[#0E0904]">Applicant Information</h4>
                <p className="text-sm text-[#5a5550]">No application fee is required. Please provide your contact details.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0E0904] mb-1">Full Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e5e0] text-sm focus:outline-none focus:border-[#8C1627]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0E0904] mb-1">Email Address *</label>
                  <input 
                    type="email"
                    required
                    placeholder="e.g. marcus@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e5e0] text-sm focus:outline-none focus:border-[#8C1627]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0E0904] mb-1">Phone / WhatsApp *</label>
                  <input 
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e5e0] text-sm focus:outline-none focus:border-[#8C1627]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0E0904] mb-1">Country of Residence *</label>
                  <input 
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e5e0] text-sm focus:outline-none focus:border-[#8C1627]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E0904] mb-1">Current Occupation / Role</label>
                <input 
                  type="text"
                  placeholder="e.g. Clinical Specialist / HR Manager / Educator"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e5e0] text-sm focus:outline-none focus:border-[#8C1627]"
                />
              </div>

              <div className="pt-3 flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-[#e8e5e0] rounded-xl text-sm font-medium text-[#5a5550] hover:bg-[#f5f3f0] transition flex items-center gap-1.5"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    if (!fullName || !email || !phone) {
                      setErrorMsg('Please complete all required fields.');
                      return;
                    }
                    setErrorMsg('');
                    setStep(3);
                  }}
                  className="px-6 py-2.5 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-xl text-sm font-semibold transition flex items-center gap-2 shadow-md shadow-[#8C1627]/20"
                >
                  Next Step <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Statement & Opportunity Fund Aid */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#0E0904]">Career Vision & Financial Aid</h4>
                <p className="text-sm text-[#5a5550]">Tell our Admissions Committee about your goals.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E0904] mb-1">
                  Brief Statement of Intent (Optional)
                </label>
                <textarea 
                  rows={3}
                  placeholder="Why do you wish to earn this AISCP certification, and how will it advance your impact?"
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e5e0] text-sm focus:outline-none focus:border-[#8C1627] resize-none"
                />
              </div>

              {/* Opportunity Fund Checkbox Box */}
              <div className="p-4 rounded-xl border-2 border-dashed border-[#8C1627]/40 bg-[#8C1627]/5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={requestAid}
                    onChange={(e) => setRequestAid(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded text-[#8C1627] focus:ring-[#8C1627] border-gray-300"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-[#8C1627]">
                      <Sparkles size={16} />
                      Apply for NSDRC Opportunity Fund Scholarship
                    </div>
                    <p className="text-xs text-[#5a5550] mt-1 leading-relaxed">
                      Our Alumni & Benefactor Fund covers up to <strong>75% of tuition fees</strong> for working adults, first-generation learners, and professionals from developing or underrepresented sectors.
                    </p>
                  </div>
                </label>
              </div>

              <div className="bg-[#f5f3f0] p-3 rounded-xl border border-[#e8e5e0] text-xs text-[#5a5550]">
                🔒 <strong>Zero upfront fees.</strong> Your submission creates your provisional enrollment file. An AISCP advisor will contact you within 24 hours.
              </div>

              <div className="pt-3 flex justify-between">
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="px-4 py-2 border border-[#e8e5e0] rounded-xl text-sm font-medium text-[#5a5550] hover:bg-[#f5f3f0] transition flex items-center gap-1.5"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#8C1627] hover:bg-[#a31d30] text-white rounded-xl text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-[#8C1627]/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <CheckCircle2 size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success / Confetti */}
          {step === 4 && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#0E0904]">Application Received!</h4>
              <p className="text-sm text-[#5a5550] max-w-md mx-auto">
                Thank you, <strong>{fullName}</strong>. Your provisional admission file has been logged in the NSDRC Academic Registry.
              </p>

              <div className="p-4 bg-[#f5f3f0] rounded-xl border border-[#e8e5e0] max-w-sm mx-auto">
                <span className="text-[11px] uppercase tracking-wider text-[#9a9590] font-bold">Application Reference</span>
                <div className="font-mono text-lg font-bold text-[#8C1627] mt-0.5">{applicationNumber}</div>
                <div className="text-xs text-[#5a5550] mt-1">{selectedCourse.title}</div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-md mx-auto text-left text-xs text-amber-900 leading-relaxed">
                <strong>Next Steps:</strong> An admissions coordinator from the AISCP Board will reach out via email (<strong>{email}</strong>) within 24 hours to schedule your 15-minute onboarding consultation and provide your Virtual Campus credentials.
              </div>

              <div className="pt-2">
                <button 
                  onClick={onClose}
                  className="px-8 py-2.5 bg-[#0E0904] text-white rounded-xl text-sm font-semibold hover:bg-black transition"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
