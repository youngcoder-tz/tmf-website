"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Users,
  Activity,
  Map,
  ArrowUpRight,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Wallet, Users, Activity, Map };

const MiniChart = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1 h-12 w-24">
      {data.map((val, i) => (
        <div
          key={i}
          style={{ height: `${(val / max) * 100}%` }}
          className={cn(
            "flex-1 rounded-t-sm opacity-50 hover:opacity-100 transition-opacity",
            color === "purple" ? "bg-purple-500" : "bg-blue-500",
          )}
        />
      ))}
    </div>
  );
};

export function MetricGrid({ data }: { data: any }) {
  return (
    <section className="py-12 bg-[#0B0F17]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((kpi: any, idx: number) => {
            const Icon = IconMap[kpi.icon];
            const isUp = kpi.trend_direction === "up";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-[2rem] bg-[#131826] border border-white/5 hover:border-purple-500/30 transition-colors group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-purple-600 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg",
                      isUp
                        ? "text-emerald-400 bg-emerald-400/10"
                        : "text-slate-400 bg-slate-400/10",
                    )}
                  >
                    {isUp ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <Minus className="w-3 h-3" />
                    )}
                    {kpi.trend}
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                      {kpi.label}
                    </p>
                    <h3 className="text-3xl font-extrabold text-white">
                      {kpi.value}
                    </h3>
                  </div>

                  {/* CSS Sparkline */}
                  <MiniChart data={kpi.chart_data} color="purple" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
