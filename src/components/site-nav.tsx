import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import logo from "@/assets/panoram-logo-mark.png";

const SOLUTIONS = [
  { name: "Website Development", desc: "High-conversion, cinematic web experiences.", to: "/solutions/web" },
  { name: "POS Systems", desc: "Smart point-of-sale tailored to your business.", to: "/solutions/pos" },
  { name: "Digital Marketing", desc: "Paid ads & growth engineered to scale.", to: "/solutions/marketing" },
  { name: "AI Chatbots", desc: "Conversational AI that converts 24/7.", to: "/solutions/ai" },
  { name: "Cloud & DevOps", desc: "Coming soon — resilient cloud infrastructure.", to: "/solutions/cloud", soon: true },
  { name: "Mobile App Development", desc: "Coming soon — native & cross-platform apps.", to: "/solutions/mobile", soon: true },
];

export function SiteNav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate({ to: "/", hash: "about" });
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 ease-cinematic ${
          scrolled ? "glass-strong shadow-elegant" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <img src={logo} alt="Panoram" className="h-9 w-9 object-contain drop-shadow-[0_0_12px_oklch(0.62_0.18_245/0.6)]" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">PANORAM</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">digital services</span>
          </div>
        </Link>

        {/* Center nav (desktop) */}
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          <li>
            <a href="/#about" onClick={goAbout} className="nav-link">What we do</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpenSolutions(true)}
            onMouseLeave={() => setOpenSolutions(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Solutions <ChevronDown className="h-3.5 w-3.5 transition-transform" style={{ transform: openSolutions ? "rotate(180deg)" : undefined }} />
            </button>
            <AnimatePresence>
              {openSolutions && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full mt-3 w-[520px] -translate-x-1/2 glass-strong rounded-2xl p-3 shadow-elegant"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {SOLUTIONS.map((s) => (
                      <Link
                        key={s.name}
                        to="/"
                        hash="services"
                        className="group relative rounded-xl p-3 transition-colors hover:bg-primary/10"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold">{s.name}</span>
                          {s.soon && (
                            <span className="rounded-full bg-primary/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary-glow">soon</span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li><Link to="/community" className="nav-link">Community</Link></li>
          <li><Link to="/blog" className="nav-link">Blog</Link></li>
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="group relative hidden md:inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-500 ease-cinematic hover:scale-[1.03]"
          >
            <span className="relative z-10">Book a Demo</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/15 transition-transform duration-700 ease-cinematic" />
          </Link>
          <button onClick={() => setMobile((v) => !v)} className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-full border border-border">
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute left-4 right-4 top-[88px] glass-strong rounded-2xl p-4 shadow-elegant"
          >
            <div className="flex flex-col gap-1 text-sm">
              <a href="/#about" onClick={(e) => { goAbout(e); setMobile(false); }} className="rounded-lg px-3 py-2 hover:bg-primary/10">What we do</a>
              <Link to="/" hash="services" onClick={() => setMobile(false)} className="rounded-lg px-3 py-2 hover:bg-primary/10">Solutions</Link>
              <Link to="/community" onClick={() => setMobile(false)} className="rounded-lg px-3 py-2 hover:bg-primary/10">Community</Link>
              <Link to="/blog" onClick={() => setMobile(false)} className="rounded-lg px-3 py-2 hover:bg-primary/10">Blog</Link>
              <Link to="/contact" onClick={() => setMobile(false)} className="mt-2 rounded-full bg-gradient-brand px-3 py-2 text-center font-semibold text-primary-foreground">Book a Demo</Link>
              <button onClick={toggle} className="mt-1 rounded-lg px-3 py-2 text-left hover:bg-primary/10 inline-flex items-center gap-2">
                {theme === "dark" ? <><Sun className="h-4 w-4" /> Light mode</> : <><Moon className="h-4 w-4" /> Dark mode</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
