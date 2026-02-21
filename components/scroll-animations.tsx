"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// --- Reusable animation variants (kept for StaggerItem compatibility) ---

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ---  Hook: scroll-progress driven values for an element ---

type AnimationType = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "fadeUp";

function useScrollAnimation(
  scrollYProgress: MotionValue<number>,
  type: AnimationType,
  delay: number = 0
) {
  // Map delay to a sub-range of the scroll progress
  // delay=0 → animate between [0, 0.6], delay=0.3 → animate between [0.3, 0.9]
  const start = Math.min(delay, 0.6);
  const end = Math.min(start + 0.6, 1);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  const y = useTransform(
    scrollYProgress,
    [start, end],
    type === "fadeUp" ? [40, 0] : type === "fadeDown" ? [-30, 0] : [0, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [start, end],
    type === "fadeLeft" ? [-50, 0] : type === "fadeRight" ? [50, 0] : [0, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    type === "scaleIn" ? [0.85, 1] : [1, 1]
  );

  return { opacity, y, x, scale };
}

function variantsToType(variants?: Variants): AnimationType {
  if (!variants) return "fadeUp";
  const hidden = variants.hidden as Record<string, unknown> | undefined;
  if (!hidden) return "fadeUp";
  if (typeof hidden.x === "number" && hidden.x < 0) return "fadeLeft";
  if (typeof hidden.x === "number" && hidden.x > 0) return "fadeRight";
  if (typeof hidden.y === "number" && hidden.y < 0) return "fadeDown";
  if (typeof hidden.scale === "number") return "scaleIn";
  return "fadeUp";
}

// --- Reusable wrapper components ---

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function ScrollReveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 40%"],
  });

  const type = variantsToType(variants);
  const { opacity, y, x, scale } = useScrollAnimation(
    scrollYProgress,
    type,
    delay
  );

  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, x, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  fast?: boolean;
  once?: boolean;
  amount?: number;
}

export function StaggerReveal({
  children,
  className,
  fast = false,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 25%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className}
    >
      <StaggerContent scrollYProgress={scrollYProgress} fast={fast}>
        {children}
      </StaggerContent>
    </motion.div>
  );
}

// Helper to stagger children based on scroll progress
function StaggerContent({
  children,
  scrollYProgress,
  fast,
}: {
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
  fast: boolean;
}) {
  const childArray = Array.isArray(children) ? children : [children];
  const staggerGap = fast ? 0.06 : 0.1;

  return (
    <>
      {childArray.map((child, i) => {
        const startAt = 0.15 + i * staggerGap;
        const endAt = Math.min(startAt + 0.4, 1);
        return (
          <StaggerChild
            key={i}
            scrollYProgress={scrollYProgress}
            start={startAt}
            end={endAt}
          >
            {child}
          </StaggerChild>
        );
      })}
    </>
  );
}

function StaggerChild({
  children,
  scrollYProgress,
  start,
  end,
}: {
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [30, 0]);

  return (
    <motion.div style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

// Individual stagger child item — now just a pass-through div
// (stagger timing is handled by StaggerReveal's scroll progress)
export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

// Text reveal line-by-line
export function TextReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 50%"],
  });

  const start = Math.min(delay, 0.5);
  const end = Math.min(start + 0.7, 1);

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [20, 0]);

  if (isMobile) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section divider with animated line
export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scaleX, transformOrigin: "center" }}
      className="mx-auto h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent"
    />
  );
}
