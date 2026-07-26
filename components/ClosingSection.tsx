"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5EF] px-6 py-24">
      <img
        src="/decorations/floral-top-left.png"
        alt=""
        className="absolute left-0 top-0 w-52"
      />

      <img
        src="/decorations/floral-top-right.png"
        alt=""
        className="absolute right-0 top-0 w-52 scale-x-[-1]"
      />

      <img
        src="/decorations/floral-bottom-left.png"
        alt=""
        className="absolute bottom-0 left-0 w-60 scale-y-[-1]"
      />

      <img
        src="/decorations/floral-bottom-right.png"
        alt=""
        className="absolute bottom-0 right-0 w-60 scale-[-1]"
      />

      <div className="relative z-10 max-w-xl text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="font-display text-lg leading-9 text-dustyDark"
        >
          Merupakan suatu kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan
          doa restu di hari bahagia kami.
        </motion.p>

        <div className="gold-line" />

        <h2 className="script-title text-7xl">
          Yustifan
          <span className="mx-3 text-gold">&</span>
          Leta
        </h2>

        <p className="mt-6 font-display text-xs tracking-[0.35em] text-dustyDark">
          THANK YOU
        </p>

        <img
          src="/decorations/peacock.png"
          alt=""
          className="mx-auto mt-10 w-64 animate-float"
        />
      </div>
    </section>
  );
}
