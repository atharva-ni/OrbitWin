"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, Cpu, Rocket } from "lucide-react";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
  fadeUp,
  SectionDivider,
  TextReveal,
} from "@/components/scroll-animations";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Deep Analysis",
    description:
      "We audit your current operations, identify bottlenecks, and map out your growth opportunities.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Build & Deploy",
    description:
      "Our team builds your custom digital presence and deploys AI systems tailored to your workflow.",
  },
  {
    icon: Cpu,
    step: "03",
    title: "Automate Operations",
    description:
      "Connect AI agents to handle calls, messages, and lead management so nothing falls through the cracks.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Scale Growth",
    description:
      "With systems running autonomously, we optimize and scale. More revenue, less overhead.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Animated connecting line progress
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <section id="process" className="relative overflow-hidden py-32 px-6" ref={sectionRef}>
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </motion.div>

      <SectionDivider />

      <div className="relative mx-auto mt-16 max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <TextReveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              How It Works
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              From zero to automated in weeks.
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A proven four-step process that transforms how your business
              operates.
            </p>
          </TextReveal>
        </ScrollReveal>

        {/* Steps with animated connecting line */}
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Animated connecting line (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-border/30 lg:block" />
          <motion.div
            style={{ scaleX: lineProgress }}
            className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px origin-left bg-gradient-to-r from-primary via-accent to-primary lg:block"
          />

          <StaggerReveal className="contents">
            {steps.map((step, i) => (
              <StaggerItem key={step.title} variants={fadeUp}>
                <div className="group relative">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20"
                      >
                        <step.icon className="h-5 w-5 text-primary" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                      </motion.div>
                      <span className="text-xs font-bold tracking-widest text-muted-foreground">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
