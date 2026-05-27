import { motion } from "framer-motion";
import { ArrowUpRight, Lock, MessageCircle, ShoppingBag } from "lucide-react";
import { SectionHeader } from "./Section";
import { Parallax } from "./Parallax";

const projectList = [
  {
    icon: MessageCircle,
    title: "Real-Time Chat Application",
    tech: ["Next.js", "React.js", "Socket.IO", "MongoDB"],
    features: [
      "Authentication",
      "One-to-one messaging",
      "End-to-end encryption",
      "Responsive UI",
    ],
    accent: "from-violet-500 to-fuchsia-500",
    mock: (
      <div className="space-y-2">
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-sm bg-white/10 px-3 py-1.5 text-[11px]">
            Hey! 👋
          </div>
        </div>
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-sm bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1.5 text-[11px] text-background">
            Yo, encrypted?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-sm bg-white/10 px-3 py-1.5 text-[11px] flex items-center gap-1">
            <Lock className="h-3 w-3" /> end-to-end
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: ShoppingBag,
    title: "B2C E-commerce Website",
    tech: ["React.js", "Redux Toolkit", "Express.js", "MongoDB"],
    features: [
      "Product listing",
      "Product detail",
      "Cart & Checkout",
      "Payments",
      "Admin panel",
    ],
    accent: "from-cyan-500 to-emerald-500",
    mock: (
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/5"
          />
        ))}
      </div>
    ),
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Things I've <span className="gradient-text">built</span>
            </>
          }
          subtitle="Selected personal projects that push my craft forward."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projectList.map((project, index) => (
            <Parallax key={project.title} offset={index % 2 === 0 ? -90 : 90}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass gradient-border group relative overflow-hidden rounded-3xl p-6 transition-shadow hover:shadow-[0_30px_80px_-20px_rgba(167,139,250,0.45)]"
              >
                <div
                  className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                />

                {/* mock browser */}
                <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                      mayur.dev/{project.title.toLowerCase().split(" ")[0]}
                    </div>
                  </div>
                  {/* This is a small mock UI, just for visual flavor. */}
                  <div className="min-h-[140px] p-4">{project.mock}</div>
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${project.accent}`}
                      >
                        <project.icon className="h-4 w-4 text-background" />
                      </div>
                      <h3 className="font-display text-lg font-semibold">
                        {project.title}
                      </h3>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 transition-all group-hover:border-violet-400/50 group-hover:bg-white/10">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>

                <ul className="relative mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
