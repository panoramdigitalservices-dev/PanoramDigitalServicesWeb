import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { Reveal } from "@/components/cinematic";
import { ArrowRight, Calendar } from "lucide-react";
import webImg from "@/assets/service-web.jpg";
import marketingImg from "@/assets/service-marketing.jpg";
import aiImg from "@/assets/service-ai.jpg";
import posImg from "@/assets/service-pos.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import mobileImg from "@/assets/service-mobile.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Panoram Digital Services" },
      { name: "description", content: "Field notes, playbooks and cinematic case studies from the Panoram team." },
      { property: "og:title", content: "Panoram Blog" },
      { property: "og:description", content: "Field notes, playbooks and case studies." },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { title: "The cinematic web: why static sites are dying", cat: "Web", date: "May 24, 2026", img: webImg, excerpt: "Motion isn't decoration anymore. It's the new minimum bar for premium brand sites." },
  { title: "Engineering a 7.3x ROAS in 90 days", cat: "Paid Ads", date: "May 12, 2026", img: marketingImg, excerpt: "Inside the funnel system we built for Helix Studio — and the math behind it." },
  { title: "AI chatbots that actually qualify", cat: "AI", date: "Apr 28, 2026", img: aiImg, excerpt: "Most bots deflect. Ours convert. Here's the prompt architecture we use in production." },
  { title: "POS systems that double as growth tools", cat: "POS", date: "Apr 14, 2026", img: posImg, excerpt: "How modern point-of-sale becomes the most underrated CRM in your business." },
  { title: "Designing for cloud resilience from day one", cat: "Cloud", date: "Apr 2, 2026", img: cloudImg, excerpt: "A practical checklist for shipping production cloud architecture that won't surprise you at 3am." },
  { title: "Native vs cross-platform in 2026", cat: "Mobile", date: "Mar 19, 2026", img: mobileImg, excerpt: "The trade-offs founders keep getting wrong — and how we decide on every Panoram project." },
];

function Blog() {
  return (
    <Layout>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Field notes</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight max-w-4xl">
              Playbooks from the <span className="text-gradient-brand">edge of digital.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-foreground/75 leading-relaxed">
              No fluff posts. Just the systems, numbers and decisions behind the work we ship.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-strong shadow-elegant hover-lift">
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary-glow">{p.cat}</div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <Calendar className="h-3 w-3" /> {p.date}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70 flex-1">{p.excerpt}</p>
                    <Link to="/blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-glow">
                      Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
