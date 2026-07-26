"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

export default function QuoteSection() {
  return (
    <section className="luxury-section bg-white">
      <div className="section-inner max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Quote className="mx-auto text-gold" size={35} />

          <p className="mt-8 font-display text-lg italic leading-9 text-dustyDark md:text-xl">
            “{weddingData.quote.text}”
          </p>

          <div className="gold-line" />

          <p className="font-display text-sm tracking-widest">
            {weddingData.quote.source}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
