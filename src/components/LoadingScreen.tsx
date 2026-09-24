'use client';

import React, { useState, useEffect } from 'react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user already saw the intro loading animation this session
    const hasSeenIntro = sessionStorage.getItem('nsrdc_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('nsrdc_intro_seen', 'true');
          }, 400);
          return 100;
        }
        const diff = Math.random() * 25 + 10;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0E0904] text-white transition-opacity duration-700 ease-out ${
        progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient crimson glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#8C1627]/25 blur-3xl -top-10 -left-10 animate-pulse-glow" />
      <div className="absolute w-80 h-80 rounded-full bg-[#8C1627]/20 blur-3xl -bottom-10 -right-10 animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Brand Emblem */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8C1627] to-[#141008] border border-white/20 shadow-2xl flex items-center justify-center p-3 animate-bounce duration-1000">
            <span className="font-serif font-black text-2xl tracking-wider text-white">N</span>
          </div>
          {/* Orbiting Spinner Ring */}
          <div className="absolute -inset-2 border-2 border-transparent border-t-[#a31d30] border-r-[#8C1627] rounded-full animate-spin" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl font-bold tracking-tight text-white mb-1">
          NSDRC
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-[#a31d30] font-semibold mb-6">
          National Skill Development & Research Center
        </p>

        {/* Loading Bar */}
        <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 mb-3 border border-white/5">
          <div 
            className="h-full bg-gradient-to-r from-[#8C1627] via-[#a31d30] to-rose-400 rounded-full transition-all duration-300 ease-out shadow-sm shadow-[#8C1627]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-64 text-[11px] text-white/50 font-mono">
          <span>AISCP Global Standard</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
}
