import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Reveal } from "@/components/cinematic";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Panoram Digital Services" },
      { name: "description", content: "Book a strategy call with the Panoram team. We'll show you exactly how to scale your brand." },
      { property: "og:title", content: "Book a Demo — Panoram" },
      { property: "og:description", content: "Book a strategy call with Panoram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-primary-glow">— Book a demo</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight">
                Let's build your <span className="text-gradient-brand">digital engine.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-foreground/75 leading-relaxed">
                Tell us about your brand. We'll come back within 24 hours with a 30-minute slot and a custom Loom walking through opportunities.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: "hello@panoram.digital" },
                { icon: Phone, label: "+1 (415) 555-0142" },
                { icon: MapPin, label: "Remote-first · HQ Colombo" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl glass">
                    <Icon className="h-4 w-4 text-primary-glow" />
                  </div>
                  <span className="text-foreground/85">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-10 shadow-elegant"
            >
              <div className="absolute -top-32 -right-16 h-64 w-64 bg-glow opacity-50 pointer-events-none" />
              {sent ? (
                <div className="relative flex flex-col items-center text-center py-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand shadow-glow">
                    <Check className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">We've got it.</h3>
                  <p className="mt-2 text-foreground/70 max-w-sm">The Panoram team will reach out within 24 hours with a slot and a custom Loom.</p>
                </div>
              ) : (
                <div className="relative space-y-5">
                  <Field label="Your name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Company" name="company" />
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">What can we help with?</label>
                    <textarea
                      name="message" rows={4} required
                      className="mt-2 w-full rounded-xl bg-background/50 border border-border px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60"
                      placeholder="Tell us about your brand and what you're trying to scale…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-500 ease-cinematic hover:scale-[1.02]"
                  >
                    Book my strategy call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type} name={name} required={required}
        className="mt-2 w-full rounded-xl bg-background/50 border border-border px-4 py-3 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
