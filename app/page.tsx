"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import OpeningScreen from "@/components/OpeningScreen";
import HeroSection from "@/components/HeroSection";
import Countdown from "@/components/Countdown";
import CoupleSection from "@/components/CoupleSection";
import QuoteSection from "@/components/QuoteSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import LoveStory from "@/components/LoveStory";
import RSVPSection from "@/components/RSVPSection";
import WeddingGift from "@/components/WeddingGift";
import ClosingSection from "@/components/ClosingSection";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const guest = params.get("to");

    if (guest) {
      setGuestName(
        decodeURIComponent(guest)
      );
    }
  }, []);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <main className="min-h-screen overflow-hidden">
      {!opened && (
        <OpeningScreen
          guestName={guestName}
          onOpen={handleOpen}
        />
      )}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: opened ? 1 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className={
          opened
            ? "pointer-events-auto"
            : "pointer-events-none"
        }
      >
        <HeroSection />

        <Countdown />

        <CoupleSection />

        <QuoteSection />

        <EventSection />

        <GallerySection />

        <LoveStory />

        <RSVPSection />

        <WeddingGift />

        <ClosingSection />
      </motion.div>
    </main>
  );
}
