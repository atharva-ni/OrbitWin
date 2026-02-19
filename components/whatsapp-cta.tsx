"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTooltipOpen(true), 4000);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {tooltipOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative rounded-xl border border-border bg-card p-4 shadow-2xl shadow-black/50"
          >
            <button
              onClick={() => setTooltipOpen(false)}
              className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
              aria-label="Close tooltip"
            >
              <X className="h-3.5 w-3.5" />
            </button>
            <p className="pr-4 text-sm font-medium text-foreground">
              Need help? Chat with us
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              We typically reply in under 5 min
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/30"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        {/* Ping animation */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />
      </motion.a>
    </div>
  );
}
