-- ============================================================
-- NSDRC Supabase Database Schema
-- National Skill Development and Research Center
-- ============================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. COURSES TABLE
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  tag VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  level VARCHAR(50) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  enrollment VARCHAR(100) NOT NULL,
  mode VARCHAR(100) NOT NULL,
  accreditation VARCHAR(100) NOT NULL,
  credits VARCHAR(50) NOT NULL,
  tuition NUMERIC(10, 2) NOT NULL,
  description TEXT NOT NULL,
  overview TEXT NOT NULL,
  outcomes JSONB NOT NULL DEFAULT '[]'::jsonb,
  phases JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. STUDENT APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  application_no VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  country VARCHAR(100) NOT NULL,
  course_slug VARCHAR(255) NOT NULL,
  course_title VARCHAR(255) NOT NULL,
  statement_of_intent TEXT NOT NULL,
  request_financial_aid BOOLEAN DEFAULT FALSE,
  current_occupation VARCHAR(255),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'waitlist')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. BLOCKCHAIN CREDENTIAL VERIFIER TABLE
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  credential_id VARCHAR(100) UNIQUE NOT NULL,
  recipient_name VARCHAR(255) NOT NULL,
  course_title VARCHAR(255) NOT NULL,
  issue_date DATE NOT NULL,
  grade VARCHAR(50) DEFAULT 'Pass with Distinction',
  status VARCHAR(50) DEFAULT 'verified' CHECK (status IN ('verified', 'revoked', 'expired')),
  verification_hash VARCHAR(255) NOT NULL,
  accreditation_body VARCHAR(255) DEFAULT 'AISCP (American International Society of Certified Professionals)',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. HELP DESK / INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  priority VARCHAR(50) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'urgent')),
  status VARCHAR(50) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. NEWSLETTER SUBSCRIBERS TABLE
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_courses_slug ON public.courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_category ON public.courses(category);
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_number ON public.applications(application_no);
CREATE INDEX IF NOT EXISTS idx_certificates_credential ON public.certificates(credential_id);

-- ============================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Courses: Anyone can read
DROP POLICY IF EXISTS "Public courses read access" ON public.courses;
CREATE POLICY "Public courses read access" ON public.courses FOR SELECT USING (true);

-- Applications: Anyone can submit an application
DROP POLICY IF EXISTS "Public application submission" ON public.applications;
CREATE POLICY "Public application submission" ON public.applications FOR INSERT WITH CHECK (true);

-- Certificates: Anyone can verify certificate records
DROP POLICY IF EXISTS "Public certificate verification" ON public.certificates;
CREATE POLICY "Public certificate verification" ON public.certificates FOR SELECT USING (true);

-- Inquiries: Anyone can submit an inquiry
DROP POLICY IF EXISTS "Public inquiry submission" ON public.inquiries;
CREATE POLICY "Public inquiry submission" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Newsletter: Anyone can subscribe
DROP POLICY IF EXISTS "Public newsletter subscription" ON public.newsletter_subscribers;
CREATE POLICY "Public newsletter subscription" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- ============================================================
-- SAMPLE DATA (CERTIFICATES)
-- ============================================================
INSERT INTO public.certificates (credential_id, recipient_name, course_title, issue_date, grade, status, verification_hash, accreditation_body)
VALUES 
  ('NSDRC-2025-AISCP-8921', 'Dr. Clara Beauchamp', 'Advanced Diploma in Cognitive Behaviour Therapy', '2025-11-14', 'Distinction (Grade A)', 'verified', '0x8f72c49b1a03e5d7f890123456789abcdeffedcba9876543210123456789abcd', 'AISCP (American International Society of Certified Professionals)'),
  ('NSDRC-2025-HR-4412', 'Marcus K. Sterling', 'Certificate Course – Artificial Intelligence in Human Resources', '2025-08-22', 'Honours', 'verified', '0x3a4b5c6d7e8f90123456789abcdef0123456789abcdef0123456789abcdef01', 'AISCP Standards Directorate'),
  ('NSDRC-2025-ICOSH-3109', 'Amara Adebayo', 'International Certificate of Occupational Safety and Health (ICOSH)', '2025-12-05', 'Certified Master Practitioner', 'verified', '0x11223344556677889900aabbccddeeff00112233445566778899aabbccddeeff', 'AISCP Board of Industrial Standards')
ON CONFLICT (credential_id) DO NOTHING;
