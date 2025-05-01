import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 py-10">
        <h1 className="text-4xl font-bold tracking-tight">API Reference</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our ocean-themed API endpoints and discover the power of our underwater services.
        </p>

        {/* Kraken API */}
        <section className="mt-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Kraken API</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">v1</span>
          </div>
          <p className="mt-2 text-muted-foreground">Manage your underwater infrastructure with our powerful Kraken API.</p>
          
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">GET</span>
                <code className="text-sm">/api/v1/kraken/tentacles</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-green-500 px-2 py-1 text-xs font-medium text-white">POST</span>
                <code className="text-sm">/api/v1/kraken/tentacles</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-yellow-500 px-2 py-1 text-xs font-medium text-white">PUT</span>
                <code className="text-sm">/api/v1/kraken/tentacles</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">DELETE</span>
                <code className="text-sm">/api/v1/kraken/tentacles</code>
              </div>
            </div>
          </div>
        </section>

        {/* Coral API */}
        <section className="mt-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Coral API</h2>
            <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800">v1</span>
          </div>
          <p className="mt-2 text-muted-foreground">Monitor and maintain coral reef systems with our specialized API.</p>
          
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">GET</span>
                <code className="text-sm">/api/v1/coral/reefs</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-green-500 px-2 py-1 text-xs font-medium text-white">POST</span>
                <code className="text-sm">/api/v1/coral/reefs</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-yellow-500 px-2 py-1 text-xs font-medium text-white">PUT</span>
                <code className="text-sm">/api/v1/coral/reefs</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">DELETE</span>
                <code className="text-sm">/api/v1/coral/reefs</code>
              </div>
            </div>
          </div>
        </section>

        {/* Plankton API */}
        <section className="mt-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold">Plankton API</h2>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">v1</span>
          </div>
          <p className="mt-2 text-muted-foreground">Track plankton populations and analyze their distribution.</p>
          
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">GET</span>
                <code className="text-sm">/api/v1/plankton/population</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-green-500 px-2 py-1 text-xs font-medium text-white">POST</span>
                <code className="text-sm">/api/v1/plankton/population</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-yellow-500 px-2 py-1 text-xs font-medium text-white">PUT</span>
                <code className="text-sm">/api/v1/plankton/population</code>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <span className="rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">DELETE</span>
                <code className="text-sm">/api/v1/plankton/population</code>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 