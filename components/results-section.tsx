"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
  scaleIn,
  SectionDivider,
  TextReveal,
} from "@/components/scroll-animations";

const metrics = [
  {
    value: 3,
    suffix: "x",
    label: "More Leads",
    description: "Average increase in qualified leads within 90 days",
    color: "59, 130, 246",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Always On",
    description: "AI agents working around the clock, every day",
    color: "147, 112, 219",
  },
  {
    value: 50,
    suffix: "%",
    label: "Less Manual Work",
    description: "Reduction in repetitive tasks through automation",
    color: "34, 197, 94",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Client Rating",
    description: "Average satisfaction across 500+ businesses",
    color: "59, 130, 246",
  },
];

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }
    const duration = 1800;
    const steps = 50;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Number(current.toFixed(1)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {Number.isInteger(value) ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  );
}

function ScrollScaleIn({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 45%"],
  });

  const start = Math.min(0.1 + index * 0.08, 0.5);
  const end = Math.min(start + 0.5, 1);

  const scale = useTransform(scrollYProgress, [start, end], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
}

export function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="results" className="relative overflow-hidden py-32 px-6" ref={sectionRef}>
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      </motion.div>

      <SectionDivider />

      <div className="relative mx-auto mt-16 max-w-7xl" ref={ref}>
        <ScrollReveal className="mb-16 text-center">
          <TextReveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Results
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Numbers that speak for themselves.
            </h2>
          </TextReveal>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <StaggerItem key={metric.label} variants={scaleIn}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-[rgba(59,130,246,0.3)]">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(200px circle at 50% 30%, rgba(${metric.color}, 0.08), transparent 70%)`,
                  }}
                />
                <div className="relative">
                  <ScrollScaleIn index={i}>
                    <div className="mb-2 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                      <AnimatedNumber
                        value={metric.value}
                        suffix={metric.suffix}
                        inView={inView}
                      />
                    </div>
                  </ScrollScaleIn>
                  <div
                    className="mb-2 text-sm font-semibold"
                    style={{ color: `rgb(${metric.color})` }}
                  >
                    {metric.label}
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
