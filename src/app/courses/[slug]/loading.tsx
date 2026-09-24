import React from 'react';
import { Loader2 } from 'lucide-react';

export default function CourseDetailLoading() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] pb-24 animate-pulse">
      
      {/* Skeleton Hero Band */}
      <section className="bg-[#0E0904] text-white pt-14 sm:pt-16 pb-16 sm:pb-20 relative overflow-hidden border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          {/* Back button skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-white/10 rounded-full" />
            <div className="flex items-center gap-2 text-xs text-[#a31d30] font-medium bg-[#8C1627]/20 px-3 py-1 rounded-full border border-[#8C1627]/30">
              <Loader2 size={13} className="animate-spin text-[#a31d30]" />
              <span>Loading Course...</span>
            </div>
          </div>

          <div className="space-y-4 max-w-3xl">
            {/* Tag Badge */}
            <div className="h-6 w-48 bg-white/10 rounded-full" />

            {/* Title */}
            <div className="h-10 sm:h-12 w-3/4 bg-white/15 rounded-xl" />
            <div className="h-10 sm:h-12 w-1/2 bg-white/15 rounded-xl" />

            {/* Tagline */}
            <div className="h-5 w-5/6 bg-white/10 rounded-md" />
            <div className="h-5 w-2/3 bg-white/10 rounded-md" />

            {/* Meta chips */}
            <div className="flex gap-4 pt-4 flex-wrap">
              <div className="h-8 w-36 bg-white/10 rounded-lg" />
              <div className="h-8 w-32 bg-white/10 rounded-lg" />
              <div className="h-8 w-36 bg-white/10 rounded-lg" />
              <div className="h-8 w-28 bg-white/10 rounded-lg" />
            </div>
          </div>

        </div>
      </section>

      {/* Main Skeleton Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Skeleton */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e2d8] space-y-4 shadow-sm">
              <div className="h-7 w-48 bg-[#e8e2d8] rounded-md" />
              <div className="space-y-2 pt-2">
                <div className="h-4 w-full bg-[#f0eae1] rounded" />
                <div className="h-4 w-11/12 bg-[#f0eae1] rounded" />
                <div className="h-4 w-4/5 bg-[#f0eae1] rounded" />
              </div>
              <div className="space-y-2 pt-2">
                <div className="h-4 w-full bg-[#f0eae1] rounded" />
                <div className="h-4 w-5/6 bg-[#f0eae1] rounded" />
              </div>
            </div>

            {/* Learning Outcomes Skeleton */}
            <div className="space-y-4">
              <div className="h-7 w-56 bg-[#e8e2d8] rounded-md" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-[#e8e2d8] border-l-4 border-l-[#8C1627]/40 space-y-2">
                    <div className="h-4 w-28 bg-[#e8e2d8] rounded" />
                    <div className="h-3 w-full bg-[#f0eae1] rounded" />
                    <div className="h-3 w-3/4 bg-[#f0eae1] rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar Card Skeleton) */}
          <div className="lg:col-span-4">
            <div className="bg-[#0E0904] rounded-3xl p-8 border border-white/10 space-y-6">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <div className="h-4 w-24 bg-white/20 rounded" />
                <div className="h-4 w-16 bg-white/20 rounded" />
              </div>

              <div className="space-y-2">
                <div className="h-9 w-32 bg-white/20 rounded" />
                <div className="h-4 w-48 bg-white/10 rounded" />
              </div>

              <div className="space-y-3 py-4 border-t border-b border-white/10">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-4 w-full bg-white/10 rounded" />
                ))}
              </div>

              <div className="h-12 w-full bg-[#8C1627]/50 rounded-xl" />
              <div className="h-10 w-full bg-white/10 rounded-xl" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
