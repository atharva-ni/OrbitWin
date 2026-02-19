"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
  fadeUp,
  SectionDivider,
  TextReveal,
} from "@/components/scroll-animations";

const testimonials = [
  {
    quote:
      "OrbitWin completely transformed how we handle patient inquiries. Our no-show rate dropped by 40% in the first month.",
    author: "Dr. Sarah Chen",
    role: "Founder, Meridian Health Clinic",
    rating: 5,
    metric: "40% fewer no-shows",
  },
  {
    quote:
      "We went from missing 60% of our calls to capturing every single lead. Revenue is up 3x and we haven't hired anyone.",
    author: "Marcus Thompson",
    role: "Owner, Atlas Fabrication Co.",
    rating: 5,
    metric: "3x revenue increase",
  },
  {
    quote:
      "The WhatsApp automation alone paid for itself in week one. Our customers love the instant responses.",
    author: "Priya Patel",
    role: "Managing Director, Sapphire Consulting",
    rating: 5,
    metric: "ROI in 7 days",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-32 px-6" ref={sectionRef}>
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-accent/4 blur-[120px]" />
      </motion.div>

      <SectionDivider />

      <div className="relative mx-auto mt-16 max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <TextReveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Testimonials
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Loved by businesses everywhere.
            </h2>
          </TextReveal>
        </ScrollReveal>

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.author} variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-muted-foreground/20 transition-colors duration-300 group-hover:text-primary/20" />
                </div>
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground/90">
                  {`"${t.quote}"`}
                </blockquote>
                <div className="mb-4 rounded-lg bg-primary/5 px-3 py-2 transition-colors duration-300 group-hover:bg-primary/10">
                  <span className="text-xs font-semibold text-primary">{t.metric}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {t.author[0]}{t.author.split(" ")[1]?.[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {t.author}
                      </div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
