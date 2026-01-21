"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { quality: Target, viability: TrendingUp, reach: Users };

export function KPICategories({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((cat: any, idx: number) => {
            const Icon = IconMap[cat.id];

            // Color Themes
            const colors: any = {
              quality: "bg-indigo-500",
              viability: "bg-emerald-500",
              reach: "bg-amber-500",
            };
            const theme = colors[cat.id];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-white/5 flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg",
                      theme,
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 min-h-[3rem]">
                  {cat.desc}
                </p>

                {/* Metrics List */}
                <div className="mt-auto space-y-4">
                  {cat.metrics.map((metric: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50"
                    >
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {metric.label}
                      </span>
                      <div className="text-right">
                        <div className="font-bold text-slate-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div
                          className={cn(
                            "text-[10px] font-bold",
                            metric.change.includes("+")
                              ? "text-emerald-500"
                              : "text-slate-400",
                          )}
                        >
                          {metric.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
