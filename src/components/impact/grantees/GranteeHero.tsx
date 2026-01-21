"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Star } from "lucide-react";

export function GranteeHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[75vh] bg-[#0F0529] overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. BACKGROUND MOSAIC (Abstract) */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0529] via-[#0F0529]/80 to-transparent z-0" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div style={{ y: yContent, opacity }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            <Award className="w-4 h-4 fill-current" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.05] drop-shadow-2xl">
            {data.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            {data.subtitle}
          </p>

          {/* Floating Stats */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-bold">
              120+ Awards Won by Grantees
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
