import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const snippets = [
  "const dev = () => 'Mayur';",
  '<Component className="glow" />',
  "useEffect(() => ship(), [])",
  "npm run build && deploy",
];

export function Hero() {
  const { scrollY } = useScroll();
  // Scroll range used for hero motion.
  const SCROLL_RANGE = 800;

  // Parallax for the main hero content.
  const heroContentY = useSpring(
    useTransform(scrollY, [0, SCROLL_RANGE], [0, 250]),
    {
      stiffness: 60,
      damping: 20,
    },
  );
  const heroContentOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroContentScale = useTransform(scrollY, [0, SCROLL_RANGE], [1, 0.85]);
  const chipNearY = useSpring(
    useTransform(scrollY, [0, SCROLL_RANGE], [0, -200]),
    {
      stiffness: 50,
      damping: 18,
    },
  );
  const chipFarY = useSpring(
    useTransform(scrollY, [0, SCROLL_RANGE], [0, -400]),
    {
      stiffness: 50,
      damping: 18,
    },
  );

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-32 pb-20"
    >
      {/* Floating code chips (desktop only). */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ y: chipNearY }}
      >
        {snippets.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.8 }}
            style={{
              top: `${15 + (i % 2) * 55}%`,
              left: i < 2 ? `${5 + i * 3}%` : "auto",
              right: i >= 2 ? `${5 + (i - 2) * 3}%` : "auto",
              y: i % 2 === 0 ? chipNearY : chipFarY,
            }}
            className="absolute glass rounded-lg px-3 py-2 font-mono text-xs text-muted-foreground"
          >
            {s}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        style={{
          y: heroContentY,
          opacity: heroContentOpacity,
          scale: heroContentScale,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-violet-400" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          Mayur <span className="gradient-text">Mewada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 text-base text-muted-foreground md:text-lg"
        >
          Frontend Engineer <span className="text-foreground/60">·</span>{" "}
          React.js / Next.js Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Frontend Engineer with{" "}
          <span className="text-foreground">3+ years</span> of experience
          building scalable, responsive, and performance-focused web
          applications using React.js and Next.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:shadow-[0_10px_40px_-10px_rgba(167,139,250,0.6)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass gradient-border inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-foreground transition-all hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="h-10 w-6 rounded-full border border-white/15 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="h-2 w-1 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400 mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
