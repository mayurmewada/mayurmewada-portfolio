import { Briefcase } from "lucide-react";
import { FadeIn, SectionHeader } from "./Section";

const workHistory = [
  {
    role: "Software Engineer",
    company: "Nvizion Solutions Inc",
    period: "Jun 2024 – Present",
    bullets: [
      "Built scalable content-driven and commerce-focused frontend experiences",
      "Integrated multiple APIs and backend systems",
      "Developed reusable UI components",
      "Implemented role-based rendering and session sync",
      "Maintained code quality and performance",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Koolmind Technolab LLP",
    period: "Mar 2022 – May 2024",
    bullets: [
      "Built responsive React.js interfaces",
      "API integration",
      "UI bug fixing",
      "Performance optimization",
      "Reusable component architecture",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Where I've <span className="gradient-text">shipped</span>
            </>
          }
        />
        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/40 to-transparent md:left-1/2 md:-translate-x-px" />
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <FadeIn key={job.company} delay={index * 0.1}>
                {/* Alternate left/right cards by flipping layout on every other row. */}
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                >
                  {/* dot */}
                  <div className="absolute left-4 top-6 z-10 grid h-3 w-3 -translate-x-1/2 place-items-center md:left-1/2">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_20px_rgba(167,139,250,0.7)]" />
                  </div>
                  <div
                    className={`pl-10 md:pl-0 ${index % 2 === 1 ? "md:[direction:ltr] md:col-start-2 md:pl-10" : "md:pr-10 md:text-right"}`}
                  >
                    <div className="glass gradient-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(167,139,250,0.4)]">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-muted-foreground">
                        <Briefcase className="h-3 w-3" /> {job.period}
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        {job.role}
                      </h3>
                      <div className="text-sm gradient-text font-medium">
                        {job.company}
                      </div>
                      <ul
                        className={`mt-4 space-y-2 text-sm text-muted-foreground ${index % 2 === 1 ? "md:[direction:ltr]" : ""}`}
                      >
                        {job.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-left"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
