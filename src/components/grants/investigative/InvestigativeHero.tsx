"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { FileSearch, ArrowDown, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InvestigativeHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Mouse Spotlight Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] bg-[#0A0A0A] overflow-hidden flex items-center pt-32 pb-20 group"
    >
      {/* 1. DYNAMIC BACKGROUND (Spotlight Reveal) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Texture (Paper Grain) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20" />

        {/* The "Redacted" Text Pattern (Hidden by default, revealed by spotlight) */}
        <div
          className="absolute inset-0 opacity-10 font-mono text-xs leading-loose text-justify p-8 overflow-hidden select-none"
          style={{ color: "#333" }}
        >
          {Array(100)
            .fill(
              "CONFIDENTIAL SOURCE VERIFIED // TMF GRANT 2025 // REDACTED // ",
            )
            .join("")}
        </div>

        {/* The Spotlight Overlay */}
        <motion.div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: useMotionTemplate`
                radial-gradient(
                  400px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.03),
                  transparent 80%
                )
              `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div style={{ y: yContent }}>
            {/* Badge */}
            <div className="flex items-center gap-4 mb-10">
              <div className="px-4 py-1.5 border border-amber-500/50 bg-amber-900/10 text-amber-500 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                {data.badge}
              </div>
              <div className="h-px w-20 bg-amber-500/20" />
              <span className="text-slate-500 text-xs font-mono">
                ENCRYPTED PROTOCOL V2.0
              </span>
            </div>

            {/* Headline (Serif + Mono Hybrid) */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tighter">
              The Investigative <br />
              <span className="font-mono text-4xl md:text-6xl text-slate-500 tracking-normal block mt-2 border-l-4 border-amber-500 pl-6">
                Grant Fund.
              </span>
            </h1>

            {/* Description with "Redacted" visual */}
            <div className="max-w-2xl mb-16">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                {data.subtitle}
              </p>
            </div>

            {/* Data Grid (The "File Stats") */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {data.stats.map((stat: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-[#0A0A0A] p-6 hover:bg-[#111] transition-colors group/stat cursor-default"
                >
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2 group-hover/stat:text-amber-500 transition-colors">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-mono text-white">{stat.value}</p>
                </div>
              ))}
              <div className="bg-amber-600 flex items-center justify-center cursor-pointer hover:bg-amber-500 transition-colors group/btn">
                <ArrowDown className="w-8 h-8 text-black group-hover/btn:translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
