import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const { scrollY } = useScroll();

  // How far we map scroll for the background motion.
  const SCROLL_RANGE = 3000;

  // Smooth parallax for each layer. The numbers are tuned by feel, not science.
  const gridY = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, 600]), {
    stiffness: 60,
    damping: 20,
  });
  const gridScale = useTransform(scrollY, [0, SCROLL_RANGE], [1, 1.25]);
  const blob1Y = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, -700]), {
    stiffness: 50,
    damping: 18,
  });
  const blob1X = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, 200]), {
    stiffness: 50,
    damping: 18,
  });
  const blob2Y = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, -1100]), {
    stiffness: 50,
    damping: 18,
  });
  const blob2X = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, -250]), {
    stiffness: 50,
    damping: 18,
  });
  const blob3Y = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, -400]), {
    stiffness: 50,
    damping: 18,
  });
  const blob4Y = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, -900]), {
    stiffness: 50,
    damping: 18,
  });
  const starsY = useSpring(useTransform(scrollY, [0, SCROLL_RANGE], [0, -300]), {
    stiffness: 60,
    damping: 20,
  });

  // Mouse parallax keeps the background feeling alive.
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* moving grid */}
      <motion.div
        className="absolute inset-0 grid-bg opacity-40"
        style={{ y: gridY, scale: gridScale }}
      />

      {/* Starfield: simple pseudo-random layout using the index. */}
      <motion.div className="absolute inset-0" style={{ y: starsY }}>
        {Array.from({ length: 60 }).map((_, i) => {
          const top = (i * 53) % 100;
          const left = (i * 37) % 100;
          const size = (i % 3) + 1;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-white/40"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: size,
                height: size,
                opacity: 0.15 + ((i % 5) / 10),
              }}
            />
          );
        })}
      </motion.div>

      {/* gradient blobs with mouse + scroll parallax */}
      <motion.div
        className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-violet-600/25 blur-[120px] animate-float-slow"
        style={{
          y: blob1Y,
          x: blob1X,
          translateX: mouse.x * -40,
          translateY: mouse.y * -40,
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan-500/25 blur-[120px] animate-float"
        style={{
          y: blob2Y,
          x: blob2X,
          translateX: mouse.x * 60,
          translateY: mouse.y * 60,
        }}
      />
      <motion.div
        className="absolute top-[80%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/20 blur-[120px] animate-float-slow"
        style={{ y: blob3Y, translateX: mouse.x * -25 }}
      />
      <motion.div
        className="absolute top-[160%] -right-20 h-[34rem] w-[34rem] rounded-full bg-emerald-500/15 blur-[120px] animate-float"
        style={{ y: blob4Y, translateX: mouse.x * 30 }}
      />
      <motion.div
        className="absolute top-[240%] -left-20 h-[34rem] w-[34rem] rounded-full bg-blue-500/15 blur-[120px] animate-float-slow"
        style={{ y: blob4Y }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/80" />
    </div>
  );
}
