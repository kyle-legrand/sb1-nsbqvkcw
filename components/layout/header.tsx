"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { rainbowTheme } from "@/lib/rainbow-theme";
import Image from "next/image";

// Custom throttle implementation
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const navItems = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "Resources",
    href: "#",
    children: [
      {
        title: "Documentation",
        href: "/docs",
        description: "Detailed guides and API references",
      },
      {
        title: "Blog",
        href: "#",
        description: "Latest news and articles",
      },
      {
        title: "Community",
        href: "#",
        description: "Join our growing community",
      },
    ],
  },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  React.useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [handleScroll]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-6 w-6">
                <Image
                  src="/mackerel.svg"
                  alt="MahiFlow Logo"
                  width={24}
                  height={24}
                  className="h-full w-full"
                  priority
                  data-testid="logo"
                />
              </div>
              <span className="font-bold">MahiFlow</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <ListItem
                              key={child.title}
                              title={child.title}
                              href={child.href}
                            >
                              {child.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                          )}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ModeToggle />
            <div className="hidden sm:flex sm:items-center sm:gap-4">
              <Button variant="outline" asChild>
                <Link href="#">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="#">Get Started</Link>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t py-4 md:hidden">
          <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" asChild className="justify-center">
                  <Link href="#" onClick={() => setIsOpen(false)}>Sign In</Link>
                </Button>
                <Button asChild className="justify-center">
                  <Link href="#" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.memo(React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}));
ListItem.displayName = "ListItem";