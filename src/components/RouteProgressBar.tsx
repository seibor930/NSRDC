'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function RouteProgressBar() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname changes, complete the progress and fade out
  useEffect(() => {
    if (isNavigating) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setProgress(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Intercept internal link clicks to trigger progress immediately
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Only trigger for internal route links (starting with / and not hash only)
      if (href.startsWith('/') && !href.startsWith('/#') && href !== pathname) {
        setIsNavigating(true);
        setProgress(35);

        // Incremental animation while loading
        const t1 = setTimeout(() => setProgress(65), 150);
        const t2 = setTimeout(() => setProgress(85), 450);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [pathname]);

  if (!isNavigating && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none">
      {/* Top Glowing Crimson Bar */}
      <div
        className="h-[3px] bg-gradient-to-r from-[#8C1627] via-[#e53e3e] to-[#8C1627] transition-all duration-300 ease-out shadow-[0_0_12px_rgba(140,22,39,0.8)]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: progress === 100 ? 'all 0.3s ease-out' : 'width 0.3s ease-in-out'
        }}
      />
    </div>
  );
}
