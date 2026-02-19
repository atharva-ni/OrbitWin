"use client";

import { Zap } from "lucide-react";
import {
  ScrollReveal,
  SectionDivider,
} from "@/components/scroll-animations";

const footerLinks = {
  Platform: [
    { label: "Web Platform", href: "#services" },
    { label: "Search Optimization", href: "#services" },
    { label: "Conversational AI", href: "#services" },
    { label: "Voice Agents", href: "#services" },
    { label: "Automation", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#cta" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Pricing", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 px-6 py-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="mb-4 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Zap className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold tracking-tight text-foreground">
                  OrbitWin
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                The AI infrastructure layer for modern businesses. Automate
                operations, capture every lead, and scale without limits.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { label: "X", href: "#" },
                  { label: "LI", href: "#" },
                  { label: "GH", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-xs font-bold text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <SectionDivider />

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} OrbitWin. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
