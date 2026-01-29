"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SecurityHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#050A0E] overflow-hidden flex items-center pt-32 pb-20 border-b border-cyan-900/30"
    >
      {/* 1. MATRIX BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#00FFCC_1px,transparent_1px)] bg-[size:100%_4px]" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div style={{ y: yContent }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-900/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-8">
            <Shield className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight font-mono">
            {data.title}
          </h1>

          <p className="text-xl text-cyan-100/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          <div className="flex justify-center gap-6">
            <Button className="h-14 px-8 bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold rounded-none shadow-[0_0_20px_rgba(34,211,238,0.4)] clip-path-slant">
              Initialize Training
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono rounded-none"
            >
              Risk Audit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
