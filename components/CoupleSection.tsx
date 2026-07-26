"use client";

import { motion } from "framer-motion";
import FloralDecoration from "./FloralDecoration";
import { weddingData } from "@/lib/wedding-data";

export default function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section className="luxury-section marble-bg">
      <FloralDecoration />

      <div className="section-inner">
        <div className="mb-14 text-center">
          <p className="font-display text-xs tracking-[0.3em] text-dustyDark">
            THE BRIDE & GROOM
          </p>

          <h2 className="script-title mt-3 text-6xl">
            Two Souls, One Love
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mx-auto h-80 w-64 overflow-hidden rounded-[120px] border-4 border-white shadow-luxury">
              <img
                src={groom.photo}
                alt={groom.fullName}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="script-title mt-7 text-5xl">
              {groom.fullName}
            </h3>

            <p className="mt-4 text-sm leading-7 text-dustyDark">
              {groom.parents}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="mx-auto h-80 w-64 overflow-hidden rounded-[120px] border-4 border-white shadow-luxury">
              <img
                src={bride.photo}
                alt={bride.fullName}
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="script-title mt-7 text-5xl">
              {bride.fullName}
            </h3>

            <p className="mt-4 text-sm leading-7 text-dustyDark">
              {bride.parents}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
