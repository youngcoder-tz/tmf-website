"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, PieChart } from "lucide-react";

export function MetricsHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] bg-slate-50 dark:bg-slate-950 overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* Background: Abstract Graph */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 C 20 0 50 0 100 100 Z"
            fill="none"
            stroke="currentColor"
            className="text-teal-500"
            strokeWidth="0.5"
          />
          <path
            d="M0 100 C 30 20 70 20 100 100 Z"
            fill="none"
            stroke="currentColor"
            className="text-blue-500"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-widest mb-8">
              <TrendingUp className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
              {data.subtitle}
            </p>

            {/* Hero Stat */}
            <div className="inline-flex items-center gap-6 p-2 pr-8 bg-white dark:bg-slate-900 rounded-full shadow-2xl border border-slate-100 dark:border-white/5">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <PieChart className="w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {data.stat.value}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {data.stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
