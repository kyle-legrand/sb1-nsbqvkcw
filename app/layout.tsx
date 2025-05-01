import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { cn } from '@/lib/utils';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';
import { sendWebVitals } from '@/lib/vitals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MahiFlow - Fish Health Monitoring Platform',
  description: 'Monitor fish activity and health with our lightweight tracking device.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== 'undefined') {
    // Report Core Web Vitals
    onCLS(sendWebVitals);
    onFID(sendWebVitals);
    onLCP(sendWebVitals);
    onFCP(sendWebVitals);
    onTTFB(sendWebVitals);
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        "min-h-screen bg-background font-sans antialiased"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}