import React from 'react';
import { Loader2 } from 'lucide-react';

export default function GlobalLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-[#8C1627]/20 border-t-[#8C1627] animate-spin" />
          <span className="absolute text-xs font-serif font-bold text-[#8C1627]">NSDRC</span>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[#0E0904] tracking-wide">Loading Page</p>
          <p className="text-xs text-[#5a5550]">Connecting to NSDRC Academic Directorate...</p>
        </div>
      </div>
    </div>
  );
}
