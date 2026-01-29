"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

export function TestimonialHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] bg-white dark:bg-[#0B0F19] overflow-hidden flex items-center pt-32 pb-20 border-b border-slate-100 dark:border-white/5"
    >
      {/* Background Doodles */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.02]">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 Q 50 50 100 0" stroke="currentColor" fill="none" />
          <path d="M0 100 Q 50 50 100 100" stroke="currentColor" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div style={{ y: yContent }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-500/20">
            <MessageCircle className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-serif">
            {data.title}
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {data.subtitle}
          </p>

          <div className="flex justify-center items-center gap-2 text-yellow-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
            <span className="text-slate-900 dark:text-white font-bold ml-2 text-lg">
              {data.rating}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
