"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExpenseBreakdown({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Financial Overview {data.year}
          </h2>
          <p className="text-slate-500">
            Total Managed Funds:{" "}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              {data.total}
            </span>
          </p>
        </div>

        <div className="space-y-6">
          {data.segments.map((segment: any, idx: number) => {
            const colors: any = {
              emerald: "bg-emerald-500",
              teal: "bg-teal-500",
              slate: "bg-slate-400",
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm"
              >
                {/* Label */}
                <div className="w-full md:w-1/4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {segment.label}
                  </h3>
                  <span className="text-2xl font-black text-slate-400 dark:text-slate-600">
                    {segment.value}%
                  </span>
                </div>

                {/* Bar Visual */}
                <div className="w-full md:w-1/2 h-6 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${segment.value}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className={cn(
                      "h-full rounded-full shadow-lg",
                      colors[segment.color],
                    )}
                  />
                </div>

                {/* Description */}
                <div className="w-full md:w-1/4 text-sm text-slate-500 dark:text-slate-400 leading-snug border-l border-slate-200 dark:border-white/10 pl-4">
                  {segment.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
