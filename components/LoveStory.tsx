"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

export default function LoveStory() {
  return (
    <section className="luxury-section marble-bg">
      <div className="section-inner max-w-3xl">
        <div className="mb-16 text-center">
          <p className="font-display text-xs tracking-[0.3em] text-dustyDark">
            OUR JOURNEY
          </p>

          <h2 className="script-title mt-3 text-6xl">
            Love Story
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[18px] top-0 h-full w-px bg-gold/40 md:left-1/2" />

          <div className="space-y-16">
            {weddingData.loveStory.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="relative grid grid-cols-[38px_1fr] gap-5 md:grid-cols-2 md:gap-16"
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white shadow-lg md:col-span-2 md:mx-auto">
                  <Heart size={14} fill="currentColor" />
                </div>

                <div
                  className={`glass-card p-6 ${
                    index % 2 === 0
                      ? "md:col-start-1 md:row-start-1 md:text-right"
                      : "md:col-start-2 md:row-start-1"
                  }`}
                >
                  <span className="text-xs tracking-[0.3em] text-gold">
                    {story.year}
                  </span>

                  <h3 className="mt-2 font-display text-2xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-dustyDark">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
