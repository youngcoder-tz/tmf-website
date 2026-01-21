"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DigitalHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#050A0F] overflow-hidden flex items-center pt-32 pb-20 border-b border-[#00FF94]/20"
    >
      {/* 1. CYBER BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF9408_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Horizontal Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_2px,transparent_4px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />

        {/* Glow Blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#00FF94]/10 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Terminal Text */}
          <motion.div style={{ y: yContent }} className="font-mono">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8 text-[#00FF94]">
              <div className="px-2 py-1 border border-[#00FF94] text-xs font-bold uppercase tracking-widest bg-[#00FF94]/10">
                {data.badge}
              </div>
              <div className="h-px w-12 bg-[#00FF94]/50" />
              <span className="text-xs">SYSTEM_READY</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[0.9] tracking-tight">
              Hack the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-emerald-600">
                Newsroom.
              </span>
            </h1>

            <p className="text-lg text-emerald-100/60 mb-12 leading-relaxed max-w-xl border-l border-[#00FF94]/30 pl-6">
              {data.subtitle}
            </p>

            {/* Command Line Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 bg-[#00FF94] text-black font-bold hover:bg-[#00CC76] transition-all shadow-[0_0_20px_rgba(0,255,148,0.4)] text-lg rounded-none clip-path-slant">
                {`> Initialize_Project`}
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 border-[#00FF94]/30 text-[#00FF94] hover:bg-[#00FF94]/10 font-bold rounded-none"
              >
                {`> View_Source`}
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: 3D Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-[#0A0F16] border border-[#00FF94]/20 p-6 rounded-lg shadow-2xl w-[450px] mx-auto transform rotate-y-12">
              {/* Mock Code Editor */}
              <div className="flex gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 font-mono text-xs md:text-sm">
                <p className="text-slate-500">{"// Importing TMF Modules"}</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">innovation</span> ={" "}
                  <span className="text-yellow-300">require</span>
                  ('freedom-of-speech');
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">funding</span> ={" "}
                  <span className="text-green-400">2000000</span>;
                </p>
                <br />
                <p>
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">accelerateMedia</span>() {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">if</span> (project.isViable){" "}
                  {"{"}
                </p>
                <p className="pl-8 text-[#00FF94]">return grant.approve();</p>
                <p className="pl-4">{"}"}</p>
                <p>{"}"}</p>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-12 top-12 bg-[#00FF94] text-black p-4 font-bold font-mono shadow-[0_0_30px_rgba(0,255,148,0.4)]">
                {data.stats[0].value} <br />{" "}
                <span className="text-[10px] uppercase">
                  {data.stats[0].label}
                </span>
              </div>
            </div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00FF94]/20 blur-[100px] rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
