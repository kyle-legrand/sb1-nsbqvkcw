import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 py-10">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Dive into our comprehensive documentation to learn everything about MahiFlow.
        </p>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Learn how to get started with MahiFlow's powerful features.
              </CardDescription>
            </CardHeader>
          </Card>
          
          {/* API Reference */}
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Explore our ocean-themed API endpoints and documentation.
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>
                Discover best practices for using MahiFlow effectively.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
} 