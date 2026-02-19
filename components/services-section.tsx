"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Search,
  MessageCircle,
  Phone,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
  fadeUp,
  SectionDivider,
  TextReveal,
} from "@/components/scroll-animations";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-converting websites engineered for performance, SEO, and lead generation. Not templates. Fully custom, blazingly fast.",
    tag: "Development",
    glowColor: "59, 130, 246",
  },
  {
    icon: Search,
    title: "Google Optimization",
    description:
      "Dominate local search results. We optimize your Google Business presence so customers find you first, every time.",
    tag: "Discovery",
    glowColor: "34, 197, 94",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "AI-powered WhatsApp agents that qualify leads, book appointments, answer FAQs, and handle support instantly, 24/7.",
    tag: "Messaging",
    glowColor: "37, 211, 102",
  },
  {
    icon: Phone,
    title: "AI Call Bots",
    description:
      "Never miss a call again. AI voice agents handle inbound calls, answer questions, and route leads intelligently.",
    tag: "Voice AI",
    glowColor: "147, 112, 219",
  },
  {
    icon: Workflow,
    title: "CRM Automation",
    description:
      "Automated pipelines, smart follow-ups, and intelligent workflows that eliminate manual work and close deals faster.",
    tag: "Operations",
    glowColor: "59, 130, 246",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 25,
  });

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(500px circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(${service.glowColor}, 0.07), transparent 60%)`
  );

  function handleMouse(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative cursor-default overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 ${
        index === 0 ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, rgba(${service.glowColor}, 0.15), transparent 50%, rgba(${service.glowColor}, 0.08))`,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />

      <div className="relative p-8">
        <div className="absolute right-6 top-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-5 w-5" style={{ color: `rgb(${service.glowColor})` }} />
        </div>

        <span
          className="mb-3 inline-block text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: `rgba(${service.glowColor}, 0.7)` }}
        >
          {service.tag}
        </span>

        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/50 transition-all duration-500 group-hover:border-transparent group-hover:shadow-lg"
        >
          <service.icon className="h-5 w-5 text-foreground" />
        </motion.div>

        <h3 className="mb-3 text-xl font-bold text-foreground">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/4 blur-[150px]" />

      <SectionDivider />

      <div className="relative mx-auto mt-16 max-w-7xl">
        <ScrollReveal className="mb-20 text-center">
          <TextReveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Platform
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Five systems. One platform.
            </h2>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every tool your business needs to capture, convert, and retain
              customers, all powered by AI and working together seamlessly.
            </p>
          </TextReveal>
        </ScrollReveal>

        <StaggerReveal className="grid gap-4 [perspective:1200px] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <StaggerItem key={service.title} variants={fadeUp}>
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
