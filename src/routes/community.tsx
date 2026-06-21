import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { Reveal, TiltImage } from "@/components/cinematic";
import { Users, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import marketingImg from "@/assets/service-marketing.jpg";
import aiImg from "@/assets/service-ai.jpg";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Panoram Digital Services" },
      { name: "description", content: "Join the Panoram community: founders, marketers and builders scaling brands with cinematic digital craft." },
      { property: "og:title", content: "Panoram Community" },
      { property: "og:description", content: "Founders, marketers and builders scaling together." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <Layout>
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Community</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight max-w-4xl">
              A circle of <span className="text-gradient-brand">operators</span> building what's next.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-foreground/75 leading-relaxed">
              Private discussions, monthly cinematic sessions, and a network of founders, marketers and engineers shipping the future of brands.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Users, title: "1,200+ Members", desc: "Founders, CMOs and senior operators across 18 countries." },
              { icon: MessageCircle, title: "Private Discussions", desc: "Daily strategy threads, playbooks and live AMAs with the Panoram team." },
              { icon: Calendar, title: "Monthly Cinematic Sessions", desc: "Deep-dives on growth, AI, and brand systems — recorded and timeless." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl glass-strong p-8 shadow-elegant hover-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] font-bold leading-tight">
                  Apply to join the <span className="text-gradient-brand">inner circle.</span>
                </h2>
                <p className="mt-4 text-foreground/70 max-w-md">
                  Membership is curated. Tell us about your brand and what you're building — we read every application.
                </p>
                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-500 ease-cinematic hover:scale-[1.03]"
                >
                  Request invitation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <TiltImage src={aiImg} alt="Community" className="h-[360px] glow-ring" />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
