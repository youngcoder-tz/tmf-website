"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function ReportHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden flex items-center justify-center text-white"
    >
      {/* 1. Video Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={data.video_bg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      </div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center container mx-auto px-4"
      >
        <div className="inline-block border border-white/30 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
          Annual Report
        </div>

        <h1 className="text-[12rem] md:text-[16rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0 select-none">
          {data.year}
        </h1>

        <h2 className="text-4xl md:text-6xl font-serif -mt-10 md:-mt-20 relative z-20 drop-shadow-2xl">
          {data.title}
        </h2>

        <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          {data.subtitle}
        </p>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
