"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radio, FileText, UserPlus, Trophy, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = {
  grant: Radio,
  story: FileText,
  user: UserPlus,
  milestone: Trophy,
};

export function LiveActivity({ feed, geo }: { feed: any; geo: any }) {
  return (
    <section className="py-12 bg-[#0B0F17]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT: LIVE FEED (1 Col) */}
          <div className="lg:col-span-1 p-8 rounded-[2.5rem] bg-[#131826] border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Live Activity
            </h3>

            <div className="space-y-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-white/5" />

              {feed.map((item: any, idx: number) => {
                const Icon = IconMap[item.type] || Activity;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#0B0F17] border border-white/10 flex items-center justify-center text-purple-400 z-10">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-bold text-slate-200">
                      {item.action}
                    </p>
                    <p className="text-xs text-slate-500 mb-1">{item.detail}</p>
                    <p className="text-[10px] text-purple-500 font-mono">
                      {item.time}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: GEOGRAPHIC DATA (2 Cols) */}
          <div className="lg:col-span-2 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#131826] to-[#0F0529] border border-white/5 relative overflow-hidden">
            {/* Background Map Decoration */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/4b/Tanzania_location_map.svg')] bg-cover bg-center mix-blend-overlay" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-8">
                {geo.headline}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {geo.regions.map((region: any, idx: number) => {
                  const colors: any = {
                    high: "bg-purple-500",
                    medium: "bg-blue-500",
                    low: "bg-slate-600",
                  };
                  const width: any = {
                    high: "w-full",
                    medium: "w-2/3",
                    low: "w-1/3",
                  };

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">
                        {region.name}
                      </p>
                      <p className="text-2xl font-bold text-white mb-3">
                        {region.count}
                      </p>

                      {/* Intensity Bar */}
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            colors[region.intensity],
                            width[region.intensity],
                          )}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
