import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      {/* Eyebrow label above the main heading */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">{subtitle}</p>
      )}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    // Simple wrapper used to fade sections into view.
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
