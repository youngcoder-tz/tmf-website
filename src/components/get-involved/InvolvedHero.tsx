"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, PenTool, Briefcase, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Handshake, PenTool, Briefcase };

export function InvolvedHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-6 block">
              {data.hero.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              {data.hero.subtitle}
            </p>
          </motion.div>

          {/* RIGHT: Engagement Cards (Stacked) */}
          <div className="space-y-6">
            {data.engagement_cards.map((card: any, idx: number) => {
              const Icon = IconMap[card.icon];
              const colors: any = {
                blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                orange:
                  "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
                purple:
                  "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all cursor-pointer"
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                      colors[card.color],
                    )}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-snug">
                      {card.desc}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
