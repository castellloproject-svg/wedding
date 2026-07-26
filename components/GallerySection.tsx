"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="luxury-section bg-white">
      <div className="section-inner">
        <div className="mb-12 text-center">
          <p className="font-display text-xs tracking-[0.3em] text-dustyDark">
            OUR MOMENTS
          </p>

          <h2 className="script-title mt-3 text-6xl">
            Beautiful Memories
          </h2>
        </div>

        <div className="gallery-masonry">
          {weddingData.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="gallery-item"
              onClick={() => setSelected(image)}
            >
              <img
                src={image}
                alt={`Wedding gallery ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-5"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>

            <motion.img
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              src={selected}
              alt="Gallery preview"
              className="max-h-[90vh] max-w-full rounded-2xl object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
