import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { GlowCursor, Scanlines } from "./hero-fx";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden cursor-none-md">
      {/* Ambient cinematic background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 bg-glow opacity-40 animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[600px] bg-glow opacity-30 animate-float" />
      </div>
      <GlowCursor />
      <Scanlines />
      <SiteNav />
      <main className="relative pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}

