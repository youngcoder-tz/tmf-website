"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radio, Tv, Newspaper, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Radio, Tv, Newspaper, Smartphone };

export function ChannelComparison({ data }: { data: any[] }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trust by Platform
          </h2>
          <p className="text-slate-500">
            How credibility varies across different media channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.map((channel, idx) => {
            const Icon = IconMap[channel.icon];
            // Dynamic Color based on score
            const isHigh = channel.score >= 70;
            const barColor = isHigh
              ? "bg-teal-500"
              : channel.score >= 50
                ? "bg-amber-500"
                : "bg-rose-500";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-[#0B0F17] border border-slate-100 dark:border-white/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {channel.name}
                    </h3>
                  </div>
                  <span className="text-3xl font-black text-slate-900 dark:text-white">
                    {channel.score}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${channel.score}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={cn("h-full rounded-full", barColor)}
                  />
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {channel.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
