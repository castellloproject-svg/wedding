"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import FloralDecoration from "./FloralDecoration";
import { weddingData } from "@/lib/wedding-data";

export default function EventSection() {
  const events = [
    weddingData.events.akad,
    weddingData.events.reception,
  ];

  return (
    <section id="event" className="luxury-section marble-bg">
      <FloralDecoration />

      <div className="section-inner">
        <div className="text-center">
          <p className="font-display text-xs tracking-[0.3em] text-dustyDark">
            SAVE THE DATE
          </p>

          <h2 className="script-title mt-3 text-6xl">
            Wedding Events
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="glass-card p-7 text-center"
            >
              <h3 className="font-display text-2xl">
                {event.title}
              </h3>

              <div className="gold-line" />

              <div className="space-y-4 text-sm text-dustyDark">
                <div className="flex items-center justify-center gap-3">
                  <Calendar size={17} className="text-gold" />
                  {event.day}, {event.date}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <Clock size={17} className="text-gold" />
                  {event.time}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <MapPin size={17} className="text-gold" />
                  {event.location}
                </div>

                <p className="leading-6">
                  {event.address}
                </p>
              </div>

              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button mt-7"
              >
                <MapPin size={17} />
                Lihat Lokasi
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
