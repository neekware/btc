import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
