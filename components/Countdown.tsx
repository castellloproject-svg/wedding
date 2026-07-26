"use client";

import { useEffect, useState } from "react";
import { weddingData } from "@/lib/wedding-data";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const calculateTime = (): TimeLeft => {
    const difference =
      new Date(weddingData.wedding.date).getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [time, setTime] = useState<TimeLeft>(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    ["Hari", time.days],
    ["Jam", time.hours],
    ["Menit", time.minutes],
    ["Detik", time.seconds],
  ];

  return (
    <section className="luxury-section bg-dustyDark">
      <div className="section-inner text-center">
        <p className="font-display text-xs tracking-[0.35em] text-white/70">
          COUNTING DOWN TO
        </p>

        <h2 className="script-title mt-4 text-6xl text-white">
          Our Special Day
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-2 md:gap-5">
          {items.map(([label, value]) => (
            <div
              key={label}
              className="glass-card border-white/20 bg-white/10 p-4 text-white"
            >
              <div className="font-display text-3xl md:text-5xl">
                {String(value).padStart(2, "0")}
              </div>

              <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/70 md:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
