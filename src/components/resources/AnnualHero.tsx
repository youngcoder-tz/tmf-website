"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { CheckCircle2, PieChart } from "lucide-react";

export function AnnualHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation for the bar chart
  const barVariants: Variants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
              <CheckCircle2 className="w-4 h-4" />
              {data.hero.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.05]">
              {data.hero.title}
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
              {data.hero.subtitle}
            </p>

            {/* Quick Stats */}
            <div className="flex gap-12 border-t border-white/10 pt-8">
              {data.financial_highlights.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Financial Visualization Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <PieChart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {data.financial_highlights.title}
                </h3>
                <p className="text-sm text-slate-400">
                  Fiscal Year {data.hero.latest_year}
                </p>
              </div>
            </div>

            {/* Animated Bar Bars */}
            <div className="space-y-6">
              {data.financial_highlights.breakdown.map(
                (item: any, idx: number) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-200">{item.label}</span>
                      <span className="text-white">{item.percent}%</span>
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        custom={item.percent}
                        variants={barVariants}
                        initial="hidden"
                        animate="visible"
                        className={`h-full rounded-full ${
                          item.color === "emerald"
                            ? "bg-emerald-500"
                            : item.color === "blue"
                              ? "bg-blue-500"
                              : "bg-slate-500"
                        }`}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-500 text-center">
              *Audited by KPMG Tanzania. Full report available below.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
