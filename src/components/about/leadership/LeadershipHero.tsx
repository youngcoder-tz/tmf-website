"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function LeadershipHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] bg-slate-50 dark:bg-[#0B0F17] flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-200 dark:bg-slate-900/50 -skew-x-12 transform origin-top-right z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
