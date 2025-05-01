import { useEffect } from 'react';

export function usePerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring setup
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`Performance entry: ${entry.name}`, entry);
      }
    });

    observer.observe({ entryTypes: ['measure', 'resource'] });

    return () => {
      observer.disconnect();
    };
  }, []);
} 