import { Code2, Layers, Rocket, Sparkles, Zap } from "lucide-react";
import { FadeIn, SectionHeader } from "./Section";
import { Parallax } from "./Parallax";

// Small highlight chips shown under the bio.
const aboutHighlights = [
  { icon: Rocket, label: "3+ Years Experience" },
  { icon: Layers, label: "API Integrations" },
  { icon: Code2, label: "Responsive UI" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: Sparkles, label: "AI-Assisted Development" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Crafting interfaces that{" "}
              <span className="gradient-text">scale</span>
            </>
          }
        />
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <Parallax offset={-80}>
              <div className="glass gradient-border relative aspect-square rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="font-mono text-xs text-muted-foreground">
                    <div>// portfolio.ts</div>
                    <div className="mt-2 text-foreground/80">
                      <span className="text-violet-400">const</span> engineer ={" "}
                      {`{`}
                    </div>
                    <div className="ml-4">
                      name: <span className="text-cyan-400">"Mayur"</span>,
                    </div>
                    <div className="ml-4">
                      stack: [<span className="text-cyan-400">"React"</span>,{" "}
                      <span className="text-cyan-400">"Next"</span>],
                    </div>
                    <div className="ml-4">
                      years: <span className="text-fuchsia-400">3</span>,
                    </div>
                    <div className="ml-4">
                      shipping: <span className="text-emerald-400">true</span>
                    </div>
                    <div>{`}`};</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="font-display text-3xl font-bold gradient-text">
                        3+
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        Years
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold gradient-text">
                        20+
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        Projects
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold gradient-text">
                        ∞
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        Curiosity
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Parallax offset={60}>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Passionate frontend engineer with experience building scalable
                  web applications, commerce-focused user interfaces, CMS-driven
                  pages, and reusable component systems.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  I care about pixel-perfect details, accessible interactions,
                  and shipping fast without breaking things. I work closely with
                  design and backend teams to turn complex flows into
                  delightful, performant products.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {aboutHighlights.map((highlight) => (
                    <div
                      key={highlight.label}
                      className="glass group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-foreground transition-all hover:scale-105 hover:bg-white/10"
                    >
                      <highlight.icon className="h-3.5 w-3.5 text-violet-400 transition-colors group-hover:text-cyan-400" />
                      {highlight.label}
                    </div>
                  ))}
                </div>
              </div>
            </Parallax>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
