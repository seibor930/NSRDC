# NSRDC – National Skill Development and Research Center

A modern, full-stack Next.js web application for the National Skill Development and Research Center (NSDRC), offering AISCP-accredited professional certifications and real-time application processing integrated with Supabase.

## Features

- **Next.js 16 (App Router & Turbopack)**: Blazing fast SSR/SSG with optimized typography, responsive layouts, and Tailwind CSS v4.
- **Supabase Backend**: Real-time application intake with Row-Level Security (RLS) policies and database schema.
- **Interactive Multi-Step Application Modal**: Step-by-step application workflow with live validation, category filtering, and instant reference number generation.
- **Full Course Catalog**: 17 specialized professional courses across 6 faculties with dedicated detail pages, curriculum breakdowns, and syllabus download simulation.
- **Responsive Architecture**: Polished navigation with mega menus, smooth scroll anchors, and branded aesthetics.

## Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4, Lucide Icons, Canvas Confetti, Framer Motion
- **Database**: Supabase PostgreSQL (@supabase/supabase-js)
- **Deployment**: Vercel ready

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/seibor930/NSRDC.git
cd NSRDC
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env.local` and configure your Supabase project keys:
```bash
cp .env.example .env.local
```
Fill in:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Build for Production
```bash
npm run build
```
