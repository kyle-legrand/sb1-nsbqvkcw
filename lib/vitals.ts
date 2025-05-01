import { CLSMetric, FCPMetric, FIDMetric, LCPMetric, TTFBMetric } from 'web-vitals';

export type WebVitalsMetric = CLSMetric | FCPMetric | FIDMetric | LCPMetric | TTFBMetric;

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed() {
  if (!navigator.connection) return '';
  
  // @ts-ignore - Connection API types are not yet standardized
  const connection = navigator.connection;
  
  if (!connection) return '';
  if (connection.saveData) return 'saveData';
  if (connection.effectiveType) return connection.effectiveType;
  
  return '';
}

export function sendWebVitals(metric: WebVitalsMetric) {
  // You can replace this with your own analytics service
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!analyticsId) {
    console.log('Web Vitals', metric);
    return;
  }

  const body = {
    dsn: analyticsId,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
    // Add additional data as needed
    device_memory: (navigator as any).deviceMemory || '',
    hardware_concurrency: navigator.hardwareConcurrency || '',
    // Custom thresholds based on your application's requirements
    threshold: getThreshold(metric.name),
    // Whether the value is within acceptable threshold
    status: getStatus(metric),
  };

  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else {
    fetch(vitalsUrl, {
      body: blob,
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
    });
  }
}

function getThreshold(metricName: string): number {
  switch (metricName) {
    case 'CLS':
      return 0.1; // Good CLS threshold
    case 'FID':
      return 100; // Good FID threshold (in milliseconds)
    case 'LCP':
      return 2500; // Good LCP threshold (in milliseconds)
    case 'FCP':
      return 1800; // Good FCP threshold (in milliseconds)
    case 'TTFB':
      return 800; // Good TTFB threshold (in milliseconds)
    default:
      return 0;
  }
}

function getStatus(metric: WebVitalsMetric): 'good' | 'needs-improvement' | 'poor' {
  const value = metric.value;
  const thresholds = {
    CLS: { good: 0.1, poor: 0.25 },
    FID: { good: 100, poor: 300 },
    LCP: { good: 2500, poor: 4000 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
  };

  const metricThresholds = thresholds[metric.name as keyof typeof thresholds];
  if (!metricThresholds) return 'needs-improvement';

  if (value <= metricThresholds.good) return 'good';
  if (value <= metricThresholds.poor) return 'needs-improvement';
  return 'poor';
} 