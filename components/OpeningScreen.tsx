"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { weddingData } from "@/lib/wedding-data";

interface OpeningScreenProps {
  guestName: string;
  onOpen: () => void;
}

export default function OpeningScreen({
  guestName,
  onOpen,
}: OpeningScreenProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: opening ? 0 : 1,
        scale: opening ? 1.08 : 1,
      }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5EF] ${
        opening ? "pointer-events-none" : ""
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.95),rgba(248,245,239,.75))]" />

      <img
        src="/decorations/floral-top-left.png"
        alt=""
        className="absolute left-0 top-0 w-44 opacity-90 md:w-72"
      />

      <img
        src="/decorations/floral-top-right.png"
        alt=""
        className="absolute right-0 top-0 w-44 scale-x-[-1] opacity-90 md:w-72"
      />

      <img
        src="/decorations/floral-bottom-left.png"
        alt=""
        className="absolute bottom-0 left-0 w-48 scale-y-[-1] opacity-90 md:w-80"
      />

      <img
        src="/decorations/floral-bottom-right.png"
        alt=""
        className="absolute bottom-0 right-0 w-48 scale-[-1] opacity-90 md:w-80"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-xs tracking-[0.35em] text-dustyDark"
        >
          THE WEDDING OF
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="script-title mt-4 text-7xl"
        >
          {weddingData.couple.groom.nickname}
          <span className="mx-2 text-4xl text-gold">&</span>
          {weddingData.couple.bride.nickname}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative mt-8 h-72 w-56 overflow-hidden rounded-[100px] border-[5px] border-white shadow-luxury"
        >
          <img
            src="/images/cover.jpg"
            alt="Yustifan dan Leta"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-7"
        >
          <p className="font-display text-sm text-dustyDark">
            Kepada Yth.
          </p>

          <p className="mt-1 font-display text-lg font-semibold">
            {guestName || "Tamu Undangan"}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={handleOpen}
          className="gold-button mt-7"
        >
          <Heart size={17} />
          Buka Undangan
        </motion.button>
      </div>
    </motion.div>
  );
}
