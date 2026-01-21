"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Image as ImageIcon } from "lucide-react";

export function GalleryHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative pt-40 pb-20 bg-black text-white overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-900 to-black z-0" />
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div style={{ y: yContent }}>
          <div className="inline-flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs mb-6">
            <Camera className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 tracking-tight">
            {data.title}
          </h1>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {data.subtitle}
          </p>

          {/* Stats Bar */}
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8">
            {data.stats.map((stat: string, idx: number) => (
              <span key={idx} className="text-sm font-bold text-slate-300">
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
