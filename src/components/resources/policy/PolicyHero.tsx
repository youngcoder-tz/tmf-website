"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Landmark, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PolicyHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] bg-[#0F172A] overflow-hidden pt-32 pb-20 flex items-center border-b border-white/5"
    >
      {/* 1. BACKGROUND: Abstract Pillars */}
      <div className="absolute inset-0 z-0 flex justify-center gap-8 opacity-10 pointer-events-none">
        <div className="w-32 h-full bg-white/5 blur-3xl transform -skew-x-12" />
        <div className="w-32 h-full bg-white/5 blur-3xl transform -skew-x-12" />
        <div className="w-32 h-full bg-white/5 blur-3xl transform -skew-x-12" />
      </div>

      {/* Mesh Gradient */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-indigo-900/40 rounded-full blur-[120px] mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ y: yContent, opacity }} className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-8">
            <Landmark className="w-4 h-4" />
            {data.badge}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight font-serif">
            {data.title}
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light border-l-2 border-indigo-500 pl-6">
            {data.subtitle}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 max-w-xl">
            {/* {data.stats.map((stat: any, idx: number) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))} */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
