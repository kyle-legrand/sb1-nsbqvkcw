import { useEffect, useRef } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  totalTime: number;
  rerenders: number;
}

export function usePerformanceMonitor(componentName: string) {
  const metrics = useRef<PerformanceMetrics>({
    renderTime: 0,
    totalTime: 0,
    rerenders: 0,
  });

  const startTime = useRef(performance.now());
  const lastRenderTime = useRef(performance.now());

  useEffect(() => {
    const currentTime = performance.now();
    const renderDuration = currentTime - lastRenderTime.current;
    const totalDuration = currentTime - startTime.current;

    metrics.current = {
      renderTime: renderDuration,
      totalTime: totalDuration,
      rerenders: metrics.current.rerenders + 1,
    };

    // Log performance metrics
    console.debug(`[${componentName}] Performance Metrics:`, {
      'Render Time': `${renderDuration.toFixed(2)}ms`,
      'Total Time': `${totalDuration.toFixed(2)}ms`,
      'Rerender Count': metrics.current.rerenders,
    });

    // Optional: Send metrics to your analytics service
    if (process.env.NEXT_PUBLIC_ANALYTICS_ID) {
      const body = {
        componentName,
        renderTime: renderDuration,
        totalTime: totalDuration,
        rerenders: metrics.current.rerenders,
        timestamp: new Date().toISOString(),
        path: window.location.pathname,
      };

      // Use sendBeacon for better performance
      const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });
      navigator.sendBeacon('/api/component-metrics', blob);
    }

    lastRenderTime.current = currentTime;

    // Cleanup function
    return () => {
      const unmountTime = performance.now();
      const lifetimeDuration = unmountTime - startTime.current;

      console.debug(`[${componentName}] Unmount Metrics:`, {
        'Total Lifetime': `${lifetimeDuration.toFixed(2)}ms`,
        'Final Render Count': metrics.current.rerenders,
      });
    };
  });

  return metrics.current;
} 