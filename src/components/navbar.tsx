"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  Home,
  Menu,
  MousePointer,
  Search,
  Settings,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/clicks", label: "Clicks", icon: MousePointer },
  { href: "/text-inputs", label: "Text Inputs", icon: FileText },
  { href: "/search", label: "Search", icon: Search },
  { href: "/forms", label: "Forms", icon: FileText },
  { href: "/dropdowns", label: "Dropdowns", icon: FileText },
  { href: "/checkboxes", label: "Checkboxes", icon: FileText },
  { href: "/radio-buttons", label: "Radio", icon: FileText },
  { href: "/sliders", label: "Sliders", icon: FileText },
  { href: "/interactions", label: "Interactions", icon: FileText },
  { href: "/navigation", label: "Navigation", icon: FileText },
  { href: "/hover", label: "Hover", icon: FileText },
  { href: "/focus", label: "Focus", icon: FileText },
  { href: "/scroll", label: "Scroll", icon: FileText },
  { href: "/form-submit", label: "Form Submit", icon: FileText },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileLink
                href="/"
                className="flex items-center gap-2"
                onOpenChange={setOpen}
              >
                <Settings className="animate-spin-gentle text-primary h-4 w-4" />
                <span className="font-bold dark:brightness-150">
                  ehAye<span className="align-super text-xs">™</span> Engine
                  (bTc)
                </span>
              </MobileLink>
              <div className="my-4 h-[calc(100vh-8rem)] overflow-y-auto pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setOpen}
                      className="text-foreground/60 hover:text-foreground"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </MobileLink>
                  ))}
                  <div className="mt-4 border-t pt-4">
                    <MobileLink
                      href="/about"
                      onOpenChange={setOpen}
                      className="text-foreground font-medium"
                    >
                      About
                    </MobileLink>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Settings className="animate-spin-gentle text-primary hidden h-5 w-5 md:block" />
            <span className="gradient-text font-bold dark:brightness-150">
              ehAye<span className="align-super text-xs">™</span> Engine (bTc)
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-foreground/60 hover:text-foreground text-sm font-medium transition-colors"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(
        "hover:text-foreground/80 flex items-center transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}
