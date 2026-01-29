"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp } from "lucide-react";

export function FinancialHero({ data }: { data: any }) {
  const [score, setScore] = useState(0);

  // Animate the score count up
  useEffect(() => {
    setTimeout(() => setScore(data.efficiency_score), 500);
  }, [data.efficiency_score]);

  return (
    <section className="relative min-h-[85vh] bg-slate-50 dark:bg-[#0B0F17] pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.05]">
              {data.title}
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-light border-l-4 border-emerald-500 pl-6">
              {data.subtitle}
            </p>
          </div>

          {/* RIGHT: The "Efficiency Gauge" */}
          <div className="flex justify-center">
            <div className="relative w-[350px] h-[350px] bg-white dark:bg-slate-900 rounded-full shadow-[0_0_60px_rgba(16,185,129,0.15)] flex items-center justify-center border border-slate-100 dark:border-white/5">
              {/* Progress Circle SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 p-4">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="transparent"
                  stroke="#E2E8F0"
                  strokeWidth="20"
                  className="dark:stroke-slate-800"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  fill="transparent"
                  stroke="#10B981"
                  strokeWidth="20"
                  strokeDasharray="283%" // Approx circumference
                  strokeDashoffset="283%"
                  strokeLinecap="round"
                  animate={{ strokeDashoffset: `${283 - score * 2.83}%` }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>

              <div className="text-center relative z-10">
                <div className="text-7xl font-black text-slate-900 dark:text-white mb-2">
                  {score}%
                </div>
                <div className="text-emerald-500 font-bold text-sm uppercase tracking-widest">
                  Efficiency Rating
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Program vs Admin Spend
                </p>
              </div>

              {/* Decoration */}
              <div className="absolute top-0 right-0 p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-white/10 animate-bounce">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
