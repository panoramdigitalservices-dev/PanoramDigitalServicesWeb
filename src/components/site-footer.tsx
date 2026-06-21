import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import logo from "@/assets/panoram-logo-mark.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 px-4 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 shadow-elegant noise">
          <div className="absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-glow opacity-60 pointer-events-none" />
          <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="Panoram" className="h-10 w-10 drop-shadow-[0_0_14px_oklch(0.62_0.18_245/0.7)]" />
                <div className="font-display text-2xl font-bold">Panoram</div>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                We engineer digital dominance. Cinematic websites, intelligent systems, and growth marketing for brands that refuse average.
              </p>
              <div className="mt-6 flex gap-3">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/10">
                    <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol title="Solutions" links={[
              { label: "Web Development", to: "/" },
              { label: "POS Systems", to: "/" },
              { label: "Paid Ads", to: "/" },
              { label: "AI Chatbots", to: "/" },
            ]} />
            <FooterCol title="Company" links={[
              { label: "What we do", to: "/" },
              { label: "Community", to: "/community" },
              { label: "Blog", to: "/blog" },
              { label: "Book a Demo", to: "/contact" },
            ]} />
            <FooterCol title="Coming Soon" links={[
              { label: "Cloud & DevOps", to: "/" },
              { label: "Mobile Apps", to: "/" },
              { label: "ERP Systems", to: "/" },
              { label: "AI Consulting", to: "/" },
            ]} />
          </div>

          <div className="relative mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground font-mono uppercase tracking-wider">
            <div>© {new Date().getFullYear()} Panoram Digital Services. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span>Built for cinematic ambition</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-primary-glow">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-foreground/80 transition-colors hover:text-primary-glow">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
