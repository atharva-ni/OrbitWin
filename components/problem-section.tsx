"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhoneMissed, Clock, MessageCircle, X } from "lucide-react";
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

export function ProblemSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 px-6">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-destructive/5 blur-[150px]" />
      </motion.div>

      <SectionDivider />

      <div className="relative mx-auto mt-16 max-w-7xl">
        <ScrollReveal>
          <div className="mb-20 max-w-2xl">
            <TextReveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-destructive">
                The Problem
              </p>
            </TextReveal>
            <TextReveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                {"Your business is bleeding revenue. Here's why."}
              </h2>
            </TextReveal>
          </div>
        </ScrollReveal>

        {/* Story cards with mockups */}
        <div className="flex flex-col gap-24">
          {/* Missed Call Animation */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variants={fadeLeft}>
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10">
                  <PhoneMissed className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Every missed call is a lost deal
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {"You're in a meeting. The phone rings. A potential customer, ready to buy. By the time you call back, they've already gone to your competitor."}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight} delay={0.2}>
              <div className="flex justify-center">
                <div className="w-72 rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">9:41 AM</span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                    </div>
                  </div>
                  <p className="mb-4 text-sm font-semibold text-foreground">Missed Calls</p>
                  <StaggerReveal fast>
                    {[
                      { name: "Sarah M.", time: "2 min ago" },
                      { name: "James K.", time: "14 min ago" },
                      { name: "Emily R.", time: "1 hr ago" },
                      { name: "David L.", time: "3 hrs ago" },
                    ].map((call) => (
                      <StaggerItem key={call.name} variants={fadeUp}>
                        <div className="mb-3 flex items-center justify-between rounded-xl bg-destructive/5 p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                              {call.name[0]}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{call.name}</p>
                              <p className="text-xs text-destructive">{call.time}</p>
                            </div>
                          </div>
                          <PhoneMissed className="h-4 w-4 text-destructive" />
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Manual WhatsApp Chat Mockup */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variants={fadeLeft} delay={0.1} className="order-2 lg:order-1">
              <div className="flex justify-center">
                <div className="w-80 rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-black/30">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#25D366]/20" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Customer Chat</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <StaggerReveal className="flex flex-col gap-3">
                    {[
                      { from: "customer", msg: "Hi, do you have availability tomorrow?", time: "10:02 AM" },
                      { from: "customer", msg: "Hello?", time: "10:47 AM" },
                      { from: "customer", msg: "Still waiting...", time: "11:30 AM" },
                      { from: "customer", msg: "Nvm going with someone else", time: "12:15 PM" },
                    ].map((chat, i) => (
                      <StaggerItem key={i} variants={fadeUp}>
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                            chat.from === "customer"
                              ? "self-start bg-secondary"
                              : "self-end bg-primary"
                          }`}
                        >
                          <p className="text-sm text-foreground">{chat.msg}</p>
                          <p className="mt-1 text-[10px] text-muted-foreground">{chat.time}</p>
                        </div>
                      </StaggerItem>
                    ))}
                    <StaggerItem variants={scaleIn}>
                      <div className="flex items-center gap-2 self-start rounded-full bg-secondary px-4 py-2">
                        <X className="h-3 w-3 text-destructive" />
                        <span className="text-xs text-muted-foreground">No reply sent</span>
                      </div>
                    </StaggerItem>
                  </StaggerReveal>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variants={fadeRight} className="order-1 lg:order-2">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Slow replies = lost customers
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {"Customers expect instant answers. When you take hours to respond on WhatsApp, they don't wait. They leave. And they don't come back."}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Manual work */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal variants={fadeLeft}>
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10">
                  <MessageCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Manual work is killing your scale
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Copy-pasting follow-ups, manually updating spreadsheets, sending reminders one by one. Your team spends 60% of their time on tasks a machine could handle in seconds.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variants={fadeRight} delay={0.15}>
              <div className="flex justify-center">
                <StaggerReveal className="grid w-full max-w-xs grid-cols-2 gap-3" fast>
                  {[
                    { label: "Hours on follow-ups", value: "4.5h/day" },
                    { label: "Leads forgotten", value: "38%" },
                    { label: "Manual data entry", value: "2.5h/day" },
                    { label: "Revenue leaked", value: "$12k/mo" },
                  ].map((stat) => (
                    <StaggerItem key={stat.label} variants={scaleIn}>
                      <div className="rounded-2xl border border-border bg-card p-5">
                        <p className="text-2xl font-bold text-destructive">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
