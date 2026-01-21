"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ToolkitsHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] bg-[#0F172A] overflow-hidden pt-32 pb-20 flex items-center"
    >
      {/* 1. BACKGROUND GRADIENT & MESH */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ scale }}
          className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-900/20 to-[#0F172A]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        {/* Floating Icons (Abstract Tools) */}
        <div className="absolute top-20 right-[10%] w-32 h-32 border-4 border-amber-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 left-[10%] w-20 h-20 bg-orange-500/10 rounded-xl rotate-12 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div style={{ y: yContent }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Wrench className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
            {data.title}
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {data.subtitle}
          </p>

          <div className="flex justify-center gap-4">
            <Button className="h-14 px-8 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
              Browse All Tools
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
