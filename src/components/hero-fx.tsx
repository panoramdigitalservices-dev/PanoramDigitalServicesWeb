import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/* -------- Glowing cursor + trailing orbit ring -------- */
export function GlowCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[oklch(0.78_0.16_235)] shadow-[0_0_18px_6px_oklch(0.78_0.16_235/0.7)] mix-blend-screen"
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[99] h-10 w-10 rounded-full border border-[oklch(0.78_0.16_235/0.6)] mix-blend-screen animate-cursor-orbit"
      />
    </>
  );
}

/* -------- Scanline CRT overlay -------- */
export function Scanlines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.18] mix-blend-overlay scanlines"
    />
  );
}

/* -------- Moving grid background -------- */
export function MovingGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.04_252)_85%)]" />
    </div>
  );
}

/* -------- Particle field rising -------- */
export function ParticleField({ count = 60 }: { count?: number }) {
  const [particles, setParticles] = useState<
    { left: number; size: number; delay: number; dur: number; drift: number; op: number }[]
  >([]);

  useEffect(() => {
    const arr = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      size: 1 + Math.random() * 3,
      delay: -Math.random() * 14,
      dur: 8 + Math.random() * 12,
      drift: (Math.random() - 0.5) * 60,
      op: 0.3 + Math.random() * 0.6,
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-10px] rounded-full bg-[oklch(0.78_0.16_235)] shadow-[0_0_8px_oklch(0.78_0.16_235/0.9)] animate-rise"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.op,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/* -------- Orbital rings around logo -------- */
export function OrbitalLogo({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[88%] w-[88%] rounded-full border border-[oklch(0.78_0.16_235/0.25)] animate-spin-slow" />
        <div className="absolute h-[68%] w-[68%] rounded-full border border-dashed border-[oklch(0.78_0.16_235/0.35)] animate-spin-reverse" />
        <div className="absolute h-[48%] w-[48%] rounded-full border border-[oklch(0.62_0.18_245/0.5)] animate-spin-slow" />
        {/* Orbit nodes */}
        <div className="absolute h-[88%] w-[88%] animate-spin-slow">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_235)] shadow-[0_0_18px_4px_oklch(0.78_0.16_235/0.8)]" />
        </div>
        <div className="absolute h-[68%] w-[68%] animate-spin-reverse">
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[oklch(0.62_0.18_245)] shadow-[0_0_14px_3px_oklch(0.62_0.18_245/0.8)]" />
        </div>
      </div>
      {/* Logo */}
      <motion.img
        src={src}
        alt="Panoram"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-[40%] w-[40%] object-contain drop-shadow-[0_0_40px_oklch(0.62_0.18_245/0.7)]"
      />
      {/* Center glow */}
      <div className="absolute h-32 w-32 rounded-full bg-[radial-gradient(circle,oklch(0.62_0.18_245/0.5),transparent_70%)] animate-pulse-glow" />
    </div>
  );
}

