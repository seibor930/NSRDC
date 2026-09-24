import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { COURSES, getCourseBySlug } from '@/lib/courses-data';
import { CourseDetailClient } from './CourseDetailClient';
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
  Layers
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: 'Course Not Found – NSDRC' };

  return {
    title: `${course.title} – NSDRC Online Certifications`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
