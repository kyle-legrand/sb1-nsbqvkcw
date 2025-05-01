import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className="font-bold">MahiFlow</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Monitor fish activity and health with our lightweight tracking device.
              Get real-time insights for better aquatic ecosystem management.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-1 lg:col-span-3">
            <nav className="flex flex-col gap-3">
              <h3 className="font-medium">Product</h3>
              <Link
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Changelog
              </Link>
            </nav>
            <nav className="flex flex-col gap-3">
              <h3 className="font-medium">Resources</h3>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Guides
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Support
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                API Reference
              </Link>
            </nav>
            <nav className="flex flex-col gap-3">
              <h3 className="font-medium">Company</h3>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MahiFlow, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}