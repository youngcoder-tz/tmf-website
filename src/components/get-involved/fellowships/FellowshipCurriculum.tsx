"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TimelineCard = ({ item, index }: { item: any; index: number }) => {
  // Color Themes
  const colors: any = {
    cyan: "bg-cyan-500",
    indigo: "bg-indigo-500",
    amber: "bg-amber-500",
  };
  const theme = colors[item.color];

  return (
    <div className="relative flex items-center justify-between md:justify-center">
      {/* Card (Alternates Left/Right) */}
      <div
        className={cn(
          "w-full md:w-5/12 p-8 rounded-[2rem] bg-[#0F172A] border border-white/5 relative z-10",
          index % 2 === 0 ? "md:mr-auto" : "md:ml-auto",
        )}
      >
        {/* Phase Badge */}
        <div className="flex justify-between items-start mb-6">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black",
              theme,
            )}
          >
            {item.phase}
          </span>
          <span className="text-slate-400 text-sm font-mono">
            {item.duration}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 font-serif">
          {item.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-6">{item.desc}</p>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          <MapPin className="w-4 h-4" />
          {item.location}
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020617] border-4 border-slate-700 z-20 hidden md:block" />
    </div>
  );
};

export function FellowshipCurriculum({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={containerRef} className="py-32 bg-[#020617] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-serif">
            The Roadmap
          </h2>
          <p className="text-xl text-slate-400">
            From concept to headline in 9 months.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

          {/* Progress Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500 via-indigo-500 to-amber-500 -translate-x-1/2 origin-top hidden md:block z-0"
          />

          <div className="space-y-16">
            {data.map((item: any, idx: number) => (
              <TimelineCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
