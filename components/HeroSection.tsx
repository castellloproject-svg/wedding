"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import { weddingData } from "@/lib/wedding-data";

export default function HeroSection() {
  return (
    <section className="luxury-section marble-bg flex min-h-screen items-center justify-center">
      <FloralDecoration />

      <div className="section-inner text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs tracking-[0.35em] text-dustyDark"
        >
          {weddingData.wedding.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="script-title mt-5 text-7xl md:text-9xl"
        >
          Yustifan
          <span className="mx-3 text-gold">&</span>
          Leta
        </motion.h1>

        <div className="gold-line" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-display text-lg tracking-[0.25em]"
        >
          {weddingData.wedding.displayDate}
        </motion.p>

        <motion.a
          href="#event"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="outline-button mt-8"
        >
          <CalendarDays size={17} />
          Save The Date
        </motion.a>

        <img
          src="/decorations/peacock.png"
          alt=""
          className="mx-auto mt-12 w-64 animate-float md:w-80"
        />
      </div>
    </section>
  );
}
