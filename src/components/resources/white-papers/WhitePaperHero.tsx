"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Quote } from "lucide-react";

export function WhitePaperHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotatePaper = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] bg-[#F9F8F6] dark:bg-[#0F0F0F] flex items-center pt-32 pb-20 overflow-hidden border-b border-stone-200 dark:border-white/5"
    >
      {/* 1. Subtle Paper Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 dark:opacity-5 mix-blend-multiply dark:mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Typography */}
          <motion.div style={{ y: yContent }} className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-stone-300 dark:border-white/10 bg-white/50 dark:bg-white/5 text-stone-500 dark:text-stone-400 text-xs font-serif uppercase tracking-widest backdrop-blur-sm">
              <FileText className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-[#1C1917] dark:text-[#E7E5E4] mb-8 leading-[1.05] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-12">
              {data.subtitle}
            </p>

            <div className="flex items-center gap-6">
              <div className="text-4xl font-bold text-[#1C1917] dark:text-white font-serif">
                {data.total_citations}
              </div>
              <div className="text-xs font-bold text-stone-400 uppercase tracking-widest max-w-[100px] leading-tight">
                Academic Citations Globally
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Abstract Visual (Floating Sheets) */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            {/* Back Sheet */}
            <motion.div
              style={{ rotate: -5, y: 20 }}
              className="absolute w-80 h-[450px] bg-white dark:bg-[#1A1A1A] shadow-xl border border-stone-200 dark:border-white/5 rounded-sm"
            />
            {/* Middle Sheet */}
            <motion.div
              style={{ rotate: 2, y: 10 }}
              className="absolute w-80 h-[450px] bg-white dark:bg-[#1A1A1A] shadow-xl border border-stone-200 dark:border-white/5 rounded-sm flex items-center justify-center"
            >
              <div className="w-2/3 space-y-4 opacity-10">
                <div className="h-2 bg-black rounded full" />
                <div className="h-2 bg-black rounded full" />
                <div className="h-2 bg-black rounded w-1/2" />
              </div>
            </motion.div>
            {/* Front Sheet (Hero) */}
            <motion.div
              style={{ rotate: rotatePaper }}
              className="absolute w-80 h-[450px] bg-white dark:bg-[#1A1A1A] shadow-2xl border border-stone-200 dark:border-white/5 rounded-sm p-8 flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-stone-200" />
              <div className="space-y-4">
                <div className="h-1 bg-stone-100 dark:bg-white/5 w-full" />
                <div className="h-1 bg-stone-100 dark:bg-white/5 w-full" />
                <div className="h-1 bg-stone-100 dark:bg-white/5 w-full" />
                <div className="h-1 bg-stone-100 dark:bg-white/5 w-2/3" />
              </div>
              <div className="text-right">
                <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-white/10 inline-block" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
