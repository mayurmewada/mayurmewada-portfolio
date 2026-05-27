import { motion } from "framer-motion";
import { Brain, Code, Server, Wrench } from "lucide-react";
import { SectionHeader } from "./Section";

const skillGroups = [
  {
    icon: Code,
    title: "Frontend",
    color: "from-violet-500 to-fuchsia-500",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "SCSS",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-cyan-500 to-blue-500",
    items: ["Node.js", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-emerald-500 to-cyan-500",
    items: ["Git", "CI/CD", "Docker", "Jira", "Figma"],
  },
  {
    icon: Brain,
    title: "AI",
    color: "from-fuchsia-500 to-violet-500",
    items: [
      "ChatGPT",
      "Prompt Engineering",
      "AI-assisted debugging",
      "Code generation",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Tools of the <span className="gradient-text">trade</span>
            </>
          }
          subtitle="A modern stack focused on speed, scalability, and a great developer experience."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              // Slight stagger makes cards feel softer on entry.
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass gradient-border group relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(167,139,250,0.4)]"
            >
              <div
                className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
              />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${group.color}`}
                  >
                    <group.icon className="h-5 w-5 text-background" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      // Small stagger per group and per item.
                      transition={{
                        delay: groupIndex * 0.05 + skillIndex * 0.03,
                      }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-foreground/90 transition-all hover:border-violet-400/40 hover:bg-white/10 hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
