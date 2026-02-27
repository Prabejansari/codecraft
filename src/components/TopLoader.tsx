'use client';

import React, { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { usePathname, useSearchParams } from 'next/navigation';

export default function TopLoader() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 🎯 Realistic progressive animation
  useEffect(() => {
    if (progress > 0 && progress < 95) {
      const timer = setTimeout(() => {
        setProgress((prev) => {
          if (prev < 30) return prev + 6;   // fast start
          if (prev < 60) return prev + 3;   // medium
          if (prev < 85) return prev + 1.5; // slow
          return prev + 0.5;                // very slow near end
        });
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [progress]);

  // ✅ Finish when route actually changes
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 0);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // 🚀 Start loader manually
  useEffect(() => {
    const handleStart = () => {
      setProgress(5); // start small instead of jumping
    };

    window.addEventListener('next-route-start', handleStart);
    return () => window.removeEventListener('next-route-start', handleStart);
  }, []);

  return (
    <LoadingBar
      color="#3b82f6"
      progress={progress}
      height={3}
      waitingTime={400}
      onLoaderFinished={() => setProgress(0)}
    />
  );
}

// Helper function
export const triggerLoader = () => {
  window.dispatchEvent(new Event('next-route-start'));
};