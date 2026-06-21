import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Globe2, ShoppingBag, Megaphone, Bot, Cloud, Smartphone, Database, Sparkles,
  ArrowRight, Play, Zap, TrendingUp, Award, Users,
} from "lucide-react";
import { Layout } from "@/components/layout";
import { Reveal, Parallax, TiltImage, EASE } from "@/components/cinematic";
import { MovingGrid, ParticleField, OrbitalLogo } from "@/components/hero-fx";


import webImg from "@/assets/service-web.jpg";
import posImg from "@/assets/service-pos.jpg";
import marketingImg from "@/assets/service-marketing.jpg";
import aiImg from "@/assets/service-ai.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import mobileImg from "@/assets/service-mobile.jpg";
import logoMark from "@/assets/panoram-logo-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panoram Digital Services — We Don't Run Ads. We Build Digital Dominance." },
      { name: "description", content: "Cinematic websites, POS systems, paid ads and AI chatbots — engineered for brands ready to scale beyond average." },
      { property: "og:title", content: "Panoram Digital Services — Digital Dominance" },
      { property: "og:description", content: "Cinematic websites, POS systems, paid ads and AI — built to dominate." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Results />
      <Portfolio />
      <Testimonials />
      <FinalCta />
    </Layout>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative -mt-24 h-[110vh] w-full overflow-hidden">
      {/* Moving grid w/ parallax */}
      <motion.div style={{ y: gridY, scale: gridScale }} className="absolute inset-0">
        <MovingGrid />
      </motion.div>

      {/* Rising particle field */}
      <ParticleField count={70} />

      {/* Orbital logo (right side, behind text on mobile) */}
      <motion.div
        style={{ y: orbY }}
        className="absolute right-[-6%] top-1/2 -translate-y-1/2 h-[640px] w-[640px] opacity-60 lg:opacity-90 pointer-events-none"
      >
        <OrbitalLogo src={logoMark} />
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:justify-start lg:pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-glow lg:hidden"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
          Panoram Digital Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
          className="mt-6 lg:mt-16 font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-bold leading-[0.95] tracking-tight max-w-5xl my-0 py-[30px]"
        >
          We don't run&nbsp;{"\n"}
          We build{" "}
          <span className="text-gradient-brand animate-gradient-pan bg-[linear-gradient(110deg,oklch(0.78_0.16_235),oklch(0.34_0.14_258),oklch(0.78_0.16_235))]">
            digital dominance.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.9 }}
          className="mt-6 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed"
        >
          Cinematic websites, intelligent POS, performance marketing and AI — engineered into a single growth engine for brands that refuse to be average.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-500 ease-cinematic hover:scale-[1.03]"
          >
            <span className="relative z-10">Book a Strategy Call</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 ease-cinematic group-hover:translate-x-0" />
          </Link>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold transition-all duration-500 ease-cinematic hover:bg-primary/10"
          >
            <Play className="h-4 w-4 fill-current" />
            See Our Work
          </a>
        </motion.div>

        {/* floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.4 }}
          className="mt-16 hidden md:grid grid-cols-3 max-w-xl gap-6 font-mono text-xs uppercase tracking-wider text-muted-foreground"
        >
          {[
            ["120+", "Brands scaled"],
            ["8.4x", "Avg ROAS lift"],
            ["24/7", "AI support"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-3xl font-bold text-foreground">{v}</div>
              <div className="mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary-glow to-transparent" />
      </motion.div>
    </section>
  );
}


/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— What we do</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-tight tracking-tight">
              A studio of <span className="text-gradient-brand">strategists, engineers</span> and storytellers.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-lg">
              Panoram is a full-stack digital services company. We design and build websites, POS systems, AI chatbots and run performance campaigns that turn attention into revenue. One partner, one panoramic view of your growth.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              {[
                { icon: Zap, label: "Cinematic UX" },
                { icon: TrendingUp, label: "Growth-first" },
                { icon: Sparkles, label: "AI-native" },
                { icon: Award, label: "Premium craft" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl glass p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative h-[520px]">
          <Parallax speed={0.4}>
            <div className="absolute -right-6 top-0 h-[300px] w-[260px] rounded-2xl overflow-hidden shadow-elegant glow-ring">
              <img src={marketingImg} alt="Analytics" loading="lazy" className="h-full w-full object-cover animate-ken-burns" />
            </div>
          </Parallax>
          <Parallax speed={-0.3}>
            <div className="absolute left-0 top-32 h-[280px] w-[300px] rounded-2xl overflow-hidden shadow-elegant glow-ring">
              <img src={webImg} alt="Web" loading="lazy" className="h-full w-full object-cover animate-ken-burns" />
            </div>
          </Parallax>
          <Parallax speed={0.2}>
            <div className="absolute bottom-0 right-12 h-[260px] w-[240px] rounded-2xl overflow-hidden shadow-elegant glow-ring">
              <img src={aiImg} alt="AI" loading="lazy" className="h-full w-full object-cover animate-ken-burns" />
            </div>
          </Parallax>
          <div className="absolute inset-0 bg-glow opacity-40 pointer-events-none animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */
const SERVICES = [
  { icon: Globe2, title: "Website Development", desc: "Cinematic, conversion-engineered websites built to feel alive.", img: webImg },
  { icon: ShoppingBag, title: "POS Systems", desc: "Smart point-of-sale that runs your floor and your data.", img: posImg },
  { icon: Megaphone, title: "Digital Marketing", desc: "Paid ads, creative & funnels engineered for compounding ROAS.", img: marketingImg },
  { icon: Bot, title: "AI Chatbots", desc: "Always-on conversational AI that qualifies and converts.", img: aiImg },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Resilient cloud infrastructure & DevOps pipelines.", img: cloudImg, soon: true },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native & cross-platform apps with cinematic motion.", img: mobileImg, soon: true },
  { icon: Database, title: "ERP Systems", desc: "End-to-end enterprise systems unified into one source of truth.", img: cloudImg, soon: true },
  { icon: Sparkles, title: "AI Consulting & ML", desc: "Advanced AI strategy and machine learning integrations.", img: aiImg, soon: true },
];

function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Solutions</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-center font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight tracking-tight">
            Every layer of <span className="text-gradient-brand">your digital stack.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-center text-foreground/70 max-w-2xl mx-auto">
            From the first pixel a customer sees to the AI that closes them — Panoram owns the full motion.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
  const { icon: Icon, title, desc, img, soon } = service;
  return (
    <div className="group relative h-[340px] overflow-hidden rounded-2xl glass shadow-elegant hover-lift">
      <div className="absolute inset-0">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover opacity-40 transition-all duration-[1200ms] ease-cinematic group-hover:scale-110 group-hover:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/10" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
          {soon && (
            <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary-glow">soon</span>
          )}
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{desc}</p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary-glow opacity-0 -translate-x-2 transition-all duration-500 ease-cinematic group-hover:opacity-100 group-hover:translate-x-0">
            Learn more <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-glow to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

/* -------------------- RESULTS -------------------- */
function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={ref} className="relative my-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.video
          style={{ y: videoY, scale: videoScale }}
          className="h-full w-full object-cover opacity-30"
          src="/videos/hero-secondary.mp4"
          autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="text-center font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Results</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-center font-display text-[clamp(2rem,4.8vw,3.8rem)] font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            Numbers we're <span className="text-gradient-brand">obsessed with.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: "120+", l: "Brands scaled", icon: Users },
            { v: "8.4x", l: "Avg ROAS", icon: TrendingUp },
            { v: "$42M", l: "Revenue driven", icon: Award },
            { v: "98%", l: "Retention rate", icon: Sparkles },
          ].map(({ v, l, icon: Icon }, i) => (
            <Reveal key={l} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-2xl glass-strong p-7 shadow-elegant hover-lift">
                <Icon className="h-5 w-5 text-primary-glow" />
                <div className="mt-6 font-display text-5xl font-bold text-gradient-brand">{v}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                <div className="absolute -right-8 -top-8 h-32 w-32 bg-glow opacity-50" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PORTFOLIO -------------------- */
function Portfolio() {
  const items = [
    { title: "Nova Retail", category: "POS + Web", img: posImg },
    { title: "Helix Studio", category: "Brand + Web", img: webImg },
    { title: "Atlas Growth", category: "Paid Ads", img: marketingImg },
    { title: "Mira AI", category: "Chatbot + Web", img: aiImg },
  ];
  return (
    <section id="portfolio" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Selected work</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.8vw,3.8rem)] font-bold leading-tight tracking-tight max-w-3xl">
            Brands we've moved from <span className="text-gradient-brand">good to inevitable.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="group relative h-[420px] overflow-hidden rounded-3xl shadow-elegant cursor-pointer">
                <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-cinematic group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-700 group-hover:bg-primary/15" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-glow">{it.category}</div>
                  <h3 className="mt-2 font-display text-3xl font-bold">{it.title}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold opacity-0 -translate-y-2 transition-all duration-500 ease-cinematic group-hover:opacity-100 group-hover:translate-y-0">
                    View case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
function Testimonials() {
  const quotes = [
    { q: "Panoram rebuilt our entire funnel. ROAS went from 1.8x to 7.3x in 90 days.", who: "Sarah Chen", role: "CMO, Helix Studio" },
    { q: "The website doesn't feel like a website. It feels like a film. Our demo bookings 4x'd.", who: "Marcus Vega", role: "Founder, Atlas" },
    { q: "Their AI chatbot now handles 70% of our support. The team can finally focus on product.", who: "Priya Rao", role: "COO, Mira AI" },
  ];
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Voices</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-center font-display text-[clamp(2rem,4.8vw,3.6rem)] font-bold leading-tight tracking-tight max-w-3xl mx-auto">
            Founders who scaled <span className="text-gradient-brand">with us.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.who} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-2xl glass-strong p-8 shadow-elegant hover-lift">
                <div className="font-display text-6xl leading-none text-primary-glow/40">"</div>
                <p className="-mt-4 text-lg leading-relaxed text-foreground/90">{t.q}</p>
                <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-primary-foreground">
                    {t.who.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.who}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 h-40 w-40 bg-glow opacity-40 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCta() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 md:p-20 text-center shadow-elegant noise">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 bg-glow opacity-70 animate-pulse-glow pointer-events-none" />
          <Parallax speed={0.3}>
            <img src={logoMark} alt="" aria-hidden className="mx-auto h-16 w-16 drop-shadow-[0_0_30px_oklch(0.62_0.18_245/0.8)]" />
          </Parallax>
          <Reveal>
            <h2 className="relative mt-6 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
              Your brand deserves more than <br className="hidden md:block" />
              <span className="text-gradient-brand">average marketing.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="relative mt-6 max-w-xl mx-auto text-foreground/75">
              Let's build the digital engine your brand was meant to run on. One call. Zero fluff.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/contact"
              className="group relative mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-500 ease-cinematic hover:scale-[1.03]"
            >
              <span className="relative z-10">Book your strategy call</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 ease-cinematic group-hover:translate-x-0" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
