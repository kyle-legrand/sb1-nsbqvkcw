import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 py-10">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Dive into our comprehensive documentation to learn everything about Holy Mackerel.
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Getting Started */}
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">Getting Started</h2>
            <p className="mt-2 text-muted-foreground">
              Learn how to get started with Holy Mackerel's powerful features.
            </p>
            <Link href="#" className="mt-4 text-sm text-muted-foreground hover:text-foreground">
              Read more →
            </Link>
          </div>
          
          {/* API Reference */}
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">API Reference</h2>
            <p className="mt-2 text-muted-foreground">
              Explore our ocean-themed API endpoints and documentation.
            </p>
            <Link href="/docs/api" className="mt-4 text-sm text-muted-foreground hover:text-foreground">
              View API Documentation →
            </Link>
          </div>
          
          {/* Best Practices */}
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold">Best Practices</h2>
            <p className="mt-2 text-muted-foreground">
              Discover best practices for using Holy Mackerel effectively.
            </p>
            <Link href="#" className="mt-4 text-sm text-muted-foreground hover:text-foreground">
              Learn more →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 