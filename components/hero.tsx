"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Animated gradient glow behind hero text */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary blur-[180px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.1, 0.04],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute right-1/4 top-1/2 h-[500px] w-[500px] rounded-full bg-accent blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.65_0.15_180)] blur-[160px]"
        />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Horizontal beam line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-0 top-1/2 h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      {/* Vertical beam line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-primary/10 to-transparent"
      />

      {/* Floating orbs */}
      {[
        { left: "10%", top: "20%", size: 6, delay: 0 },
        { left: "85%", top: "30%", size: 4, delay: 1.5 },
        { left: "15%", top: "70%", size: 5, delay: 3 },
        { left: "90%", top: "65%", size: 3, delay: 2 },
        { left: "50%", top: "15%", size: 4, delay: 4 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          className="pointer-events-none absolute rounded-full bg-primary"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            boxShadow: `0 0 ${orb.size * 4}px ${orb.size}px rgba(59, 130, 246, 0.3)`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium tracking-wide text-primary">
              Backed by Y Combinator W25
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            AI that runs
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-[oklch(0.65_0.18_270)] to-accent bg-clip-text text-transparent">
                your business
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 h-px w-full origin-left bg-gradient-to-r from-primary via-accent to-transparent"
              />
            </span>
          </h1>
        </motion.div>

        {/* Subhead */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Deploy intelligent agents that answer calls, automate conversations,
            and capture every lead. Your entire operation, running on autopilot.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#cta"
              className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">Start Free Trial</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              Explore Platform
            </a>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mt-24">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {["Acme Corp", "Globex", "Umbrella", "Stark Industries", "Wayne Ent."].map(
                (name) => (
                  <span key={name} className="text-sm font-semibold tracking-wide text-muted-foreground/30">
                    {name}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
