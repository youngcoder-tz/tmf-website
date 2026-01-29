"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Star } from "lucide-react";

export function AwardsHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] bg-[#0A0500] overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. GOLD BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div style={{ y: yContent }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-900/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-yellow-900/20">
            <Award className="w-4 h-4 fill-current" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tight drop-shadow-2xl">
            {data.title}
          </h1>

          <p className="text-xl text-yellow-100/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {data.subtitle}
          </p>

          <div className="inline-block px-8 py-4 border-t border-b border-yellow-500/20">
            <span className="text-4xl font-bold text-yellow-500 font-serif block">
              {data.total_wins}
            </span>
            <span className="text-xs text-yellow-200/50 uppercase tracking-widest">
              Since 2008
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
