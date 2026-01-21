"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Info } from "lucide-react";

export function TrustHero({ data }: { data: any }) {
  // SVG Math for the Circle
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(data.score), 500);
    return () => clearTimeout(timer);
  }, [data.score]);

  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <section className="relative pt-32 pb-24 bg-[#0F172A] text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Context */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Info className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-serif">
              {data.title}
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
              {data.subtitle}
            </p>
          </div>

          {/* RIGHT: The Gauge Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full" />

              {/* SVG Gauge */}
              <svg className="w-full h-full transform -rotate-90">
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="transparent"
                  stroke="#1E293B"
                  strokeWidth="20"
                />
                {/* Progress Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="transparent"
                  stroke="#14B8A6"
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-[2s] ease-out"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">
                  {data.score}
                </span>
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full mt-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-bold text-sm">{data.trend} YoY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
