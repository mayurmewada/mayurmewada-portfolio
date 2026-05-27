import { motion, useScroll, useTransform, useSpring, MotionStyle } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  /** Pixel travel across the element's scroll window. Negative moves up. */
  offset?: number;
  className?: string;
  style?: MotionStyle;
};

/**
 * Wraps children in a scroll-linked translateY based on the element's position
 * within the viewport. More visible than window-scroll parallax.
 */
export function Parallax({ children, offset = -120, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Track how much this element has moved through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Map 0..1 progress into a simple up/down translate value.
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-offset, offset]), {
    stiffness: 80,
    damping: 22,
    mass: 0.4,
  });

  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  );
}
