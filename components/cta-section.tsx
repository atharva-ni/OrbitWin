"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  ScrollReveal,
  scaleIn,
  SectionDivider,
  TextReveal,
} from "@/components/scroll-animations";

function ScrollLine({
  initial,
  className,
  delayOffset = 0,
}: {
  initial: Record<string, number>;
  className: string;
  delayOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 50%"],
  });

  const start = Math.min(delayOffset, 0.4);
  const end = Math.min(start + 0.6, 1);

  const scaleVal = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  );

  const style = "scaleY" in initial
    ? { scaleY: scaleVal, transformOrigin: initial.scaleY === 0 ? "top" : "bottom" }
    : { scaleX: scaleVal, transformOrigin: initial.scaleX === 0 ? "left" : "right" };

  return (
    <motion.div
      ref={ref}
      style={style}
      className={className}
    />
  );
}

export function CtaSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="cta" className="relative overflow-hidden py-32 px-6" ref={sectionRef}>
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[150px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </motion.div>

      <SectionDivider />

      <ScrollReveal variants={scaleIn} className="relative mx-auto mt-16 max-w-3xl text-center">
        <div className="relative rounded-3xl border border-border bg-card/80 p-12 backdrop-blur-sm sm:p-16">
          {/* Corner accents — scroll-linked */}
          <ScrollLine
            initial={{ scaleY: 0 }}
            delayOffset={0.2}
            className="absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-primary/30 to-transparent"
          />
          <ScrollLine
            initial={{ scaleX: 0 }}
            delayOffset={0.2}
            className="absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-primary/30 to-transparent"
          />
          <ScrollLine
            initial={{ scaleY: 0 }}
            delayOffset={0.35}
            className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-primary/30 to-transparent"
          />
          <ScrollLine
            initial={{ scaleX: 0 }}
            delayOffset={0.35}
            className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-primary/30 to-transparent"
          />

          <ScrollReveal variants={scaleIn} delay={0.2}>
            <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </ScrollReveal>

          <TextReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to automate
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your growth?
              </span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Book a free strategy call. We&apos;ll show you exactly how AI can
              transform your business in 30 days.
            </p>
          </TextReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10">Book Free Strategy Call</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />
              </a>
            </div>
          </ScrollReveal>

          <TextReveal delay={0.4}>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required. Free 30-minute consultation.
            </p>
          </TextReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}
