"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, Users, Server, Building2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Icon Map
const IconMap: any = { PenTool, Users, Server, Building: Building2 };

export function DonateImpact({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 1. SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            {data.headline}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            {data.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* 2. LEFT: ALLOCATION VISUALIZER (The "Capital Flow") */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-8">
              Fund Allocation Model
            </h3>

            {data.allocation.map((item: any, idx: number) => {
              const Icon = IconMap[item.icon];
              // Color mapping for bars
              const colors: any = {
                rose: "bg-rose-500 shadow-rose-500/30",
                orange: "bg-orange-500 shadow-orange-500/30",
                blue: "bg-blue-500 shadow-blue-500/30",
                slate: "bg-slate-500 shadow-slate-500/30",
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-extrabold text-xl">
                      {item.percentage}%
                    </span>
                  </div>

                  {/* Animated Bar */}
                  <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={cn(
                        "h-full rounded-full shadow-lg",
                        colors[item.color],
                      )}
                    />
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-6 flex items-center gap-2 text-sm text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
              <CheckCircle2 className="w-5 h-5" />
              Audited annually by KPMG. 100% Tax Deductible.
            </div>
          </div>

          {/* 3. RIGHT: TANGIBLE RESULTS (The "Cards") */}
          <div className="grid gap-6">
            {data.tangible_results.map((card: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-40 rounded-[2rem] overflow-hidden flex items-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-default"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-20 group-hover:opacity-100"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 pl-8 pr-4">
                  <div className="flex items-end gap-3 mb-1">
                    <span className="text-4xl font-extrabold text-white group-hover:text-rose-400 transition-colors">
                      {card.stat}
                    </span>
                    <span className="text-lg font-bold text-slate-300 uppercase tracking-wider mb-1">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm font-medium group-hover:text-white/90 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
