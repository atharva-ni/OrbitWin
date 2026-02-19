"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import {
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  SectionDivider,
  TextReveal,
} from "@/components/scroll-animations";

export function SolutionSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 px-6">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </motion.div>

      <SectionDivider />

      <div className="relative mx-auto mt-16 max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-2xl">
            <TextReveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                The Solution
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                AI agents that never sleep, never miss, never forget.
              </h2>
            </TextReveal>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-24">
          {/* AI Bot responding */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variants={fadeLeft}>
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  AI responds in under 2 seconds
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Every call answered. Every message replied. Your AI agent handles
                  inquiries, qualifies leads, and books appointments instantly, even
                  at 3 AM on a Sunday.
                </p>
                <StaggerReveal className="mt-6 flex flex-col gap-3" fast>
                  {[
                    "Answers calls with natural voice AI",
                    "Responds on WhatsApp instantly",
                    "Books appointments automatically",
                    "Qualifies leads before handoff",
                  ].map((item) => (
                    <StaggerItem key={item} variants={fadeUp}>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            </ScrollReveal>

            {/* AI chat mockup */}
            <ScrollReveal variants={fadeRight} delay={0.2}>
              <div className="flex justify-center">
                <div className="w-80 rounded-3xl border border-primary/20 bg-card p-6 shadow-2xl shadow-primary/5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">OrbitWin Agent</p>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                        <p className="text-xs text-[#25D366]">Online</p>
                      </div>
                    </div>
                  </div>
                  <StaggerReveal className="flex flex-col gap-3">
                    {[
                      { from: "customer", msg: "Hi, do you have availability tomorrow?", time: "10:02 AM" },
                      { from: "bot", msg: "Hi! Yes, we have slots at 10 AM, 2 PM, and 4:30 PM tomorrow. Which works best for you?", time: "10:02 AM" },
                      { from: "customer", msg: "2 PM works", time: "10:03 AM" },
                      { from: "bot", msg: "You're booked for 2 PM tomorrow. I've sent a confirmation to your email. See you then!", time: "10:03 AM" },
                    ].map((chat, i) => (
                      <StaggerItem key={i} variants={fadeUp}>
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${chat.from === "customer"
                              ? "self-start bg-secondary"
                              : "self-end border border-primary/20 bg-primary/10"
                            }`}
                        >
                          <p className="text-sm text-foreground">{chat.msg}</p>
                          <div className="mt-1 flex items-center gap-1.5">
                            <p className="text-[10px] text-muted-foreground">{chat.time}</p>
                            {chat.from === "bot" && <Zap className="h-2.5 w-2.5 text-primary" />}
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                    <StaggerItem variants={scaleIn}>
                      <div className="mt-2 flex items-center gap-2 self-center rounded-full bg-primary/10 px-4 py-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary">Lead captured in 47 seconds</span>
                      </div>
                    </StaggerItem>
                  </StaggerReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Lead captured automatically */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variants={fadeLeft} delay={0.1} className="order-2 lg:order-1">
              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Lead Pipeline</p>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">Live</span>
                  </div>
                  <StaggerReveal fast>
                    {[
                      { name: "Sarah M.", status: "Appointment Booked", time: "Just now" },
                      { name: "James K.", status: "Follow-up Sent", time: "2m ago" },
                      { name: "Emily R.", status: "Quote Requested", time: "5m ago" },
                      { name: "David L.", status: "Payment Link Sent", time: "12m ago" },
                    ].map((lead) => (
                      <StaggerItem key={lead.name} variants={fadeUp}>
                        <div className="mb-3 flex items-center justify-between rounded-xl bg-secondary/50 p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                              {lead.name[0]}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{lead.name}</p>
                              <p className="text-xs text-primary">{lead.status}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[10px] text-muted-foreground">{lead.time}</span>
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerReveal>
                  <ScrollReveal variants={scaleIn} delay={0.5}>
                    <div className="mt-4 rounded-lg bg-primary/5 px-3 py-2 text-center">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">12 leads</span> auto-captured today
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight} className="order-1 lg:order-2">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Every lead captured, sorted, and followed up
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  No more spreadsheets. No more forgotten follow-ups. Your CRM updates
                  itself. Leads flow through your pipeline automatically, tagged,
                  scored, and nurtured without you lifting a finger.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
