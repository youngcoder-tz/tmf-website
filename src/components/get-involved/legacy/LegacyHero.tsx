"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LegacyHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Slow Parallax for a "Cinematic" feel
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 md:pt-50  pb-30 flex items-center justify-center overflow-hidden bg-[#1c1917]"
    >
      {/* 1. BACKGROUND IMAGE with Golden Hour Overlay */}
      <motion.div
        style={{ scale: scaleImage }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={data.bg_image}
          alt="Legacy of Nature"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Warm Overlay to make it feel like "History" */}
        <div className="absolute inset-0 bg-linear-to-b from-[#1c1917]/80 via-[#1c1917]/40 to-[#1c1917]" />
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay" />
      </motion.div>

      {/* 2. CENTERED CONTENT */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-500/30 bg-amber-950/30 backdrop-blur-md text-amber-200 text-sm font-serif italic tracking-wider mb-8"
        >
          <ScrollText className="w-4 h-4" />
          {data.badge}
        </motion.div>

        {/* Headline - Serif for Gravitas */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-6xl font-serif text-white mb-8 leading-[1.1] drop-shadow-2xl"
        >
          {data.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed font-light font-serif max-w-2xl mx-auto"
        >
          {data.subheadline}
        </motion.p>
      </motion.div>

      {/* 3. SCROLL HINT (Golden Quote) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 text-center px-4"
      >
        <p className="text-amber-500/60 font-serif italic text-sm md:text-base mb-4">
          "{data.quote}"
        </p>
        <ChevronDown className="w-6 h-6 text-white/20 mx-auto animate-bounce" />
      </motion.div>
    </section>
  );
}
