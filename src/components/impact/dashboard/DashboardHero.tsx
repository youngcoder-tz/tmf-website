"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Wifi } from "lucide-react";

export function DashboardHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-16 bg-[#0B0F17] overflow-hidden border-b border-white/5">
      {/* 1. ANIMATED GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8B5CF61a_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF61a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-150 h-150 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-4 h-4" />
              {data.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-light">
              {data.subtitle}
            </p>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase text-slate-500 tracking-widest">
                System Status
              </span>
              <span className="text-sm font-bold text-white flex items-center gap-2">
                {data.last_updated}{" "}
                <Wifi className="w-3 h-3 text-emerald-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
