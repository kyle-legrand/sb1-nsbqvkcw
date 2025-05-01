import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <span className="font-bold">Holy Mackerel</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            Streamline your workflow with our powerful SaaS solution.
            Built for teams of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-1 lg:col-span-3">
          <nav className="flex flex-col gap-3">
            <h3 className="font-medium">Product</h3>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#"
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
              href="#"
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
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Holy Mackerel, Inc. All rights reserved.
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
    </footer>
  );
}