"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wifi, Map, Users } from "lucide-react";

export function CoverageMap({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#2A1F18] text-[#E7DFDA] overflow-hidden relative">
      {/* Background Topographic Lines */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Data List */}
          <div>
            <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs mb-6">
              <Map className="w-4 h-4" /> National Grid
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              {data.headline}
            </h2>

            <div className="space-y-6">
              {data.regions.map((region: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 border-b border-white/10 group hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{region.name}</span>
                  <div className="flex items-center gap-6">
                    <span className="text-orange-400 font-mono">
                      {region.stations} Stations
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
                      {region.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-orange-600/10 border border-orange-600/30 rounded-2xl flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm text-orange-200 uppercase tracking-widest font-bold">
                  Total Reach
                </p>
                <p className="text-4xl font-black text-white">
                  {data.total_audience}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Abstract Map Visualizer */}
          <div className="relative h-[600px] bg-[#1E1612] rounded-[3rem] border border-white/5 p-8 flex items-center justify-center shadow-2xl">
            {/* This simulates a map with "Signal Waves" */}
            <div className="relative w-full h-full">
              {/* Dar es Salaam Pulse */}
              <div className="absolute top-[40%] right-[10%]">
                <div className="w-4 h-4 bg-white rounded-full animate-ping absolute" />
                <div className="w-4 h-4 bg-orange-500 rounded-full relative" />
                <div className="absolute top-0 right-0 w-32 h-32 border border-orange-500/30 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
              </div>

              {/* Lake Zone Pulse */}
              <div className="absolute top-[20%] left-[20%]">
                <div className="w-4 h-4 bg-white rounded-full animate-ping delay-700 absolute" />
                <div className="w-4 h-4 bg-orange-500 rounded-full relative" />
                <div className="absolute top-0 left-0 w-48 h-48 border border-orange-500/30 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-50" />
              </div>

              {/* Southern Pulse */}
              <div className="absolute bottom-[30%] left-[40%]">
                <div className="w-4 h-4 bg-white rounded-full animate-ping delay-300 absolute" />
                <div className="w-4 h-4 bg-orange-500 rounded-full relative" />
              </div>

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <path
                  d="M120 150 Q 300 250 450 300"
                  stroke="#F97316"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
                <path
                  d="M450 300 Q 300 450 200 500"
                  stroke="#F97316"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            <div className="absolute bottom-8 right-8 text-xs font-mono text-orange-500 bg-black/50 px-4 py-2 rounded-full border border-orange-500/20">
              LIVE SIGNAL MONITORING
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
