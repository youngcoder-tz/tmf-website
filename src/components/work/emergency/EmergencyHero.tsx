"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, Phone, Lock, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] bg-[#1a0505] overflow-hidden flex items-center pt-32 pb-20 text-white"
    >
      {/* 1. BACKGROUND (Dark & Moody) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bg_image}
          alt="Crisis Reporting"
          fill
          className="object-cover opacity-20 mix-blend-overlay grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0505] via-[#1a0505]/90 to-transparent" />

        {/* Warning Pulse */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: The Message */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/50 bg-red-900/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldAlert className="w-4 h-4 fill-current animate-pulse" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[0.95] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-red-100/70 mb-10 leading-relaxed max-w-xl font-light">
              {data.subtitle}
            </p>

            {/* Emergency Hotline Card */}
            <div className="p-6 rounded-2xl bg-red-950/50 border border-red-900/50 backdrop-blur-sm max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    24/7 Crisis Hotline
                  </p>
                  <p className="text-xl font-mono font-bold text-white">
                    {data.emergency_hotline}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 text-xs font-medium text-red-300/60">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <EyeOff className="w-3 h-3" /> Anonymous
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Visual / Action */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-96 border-l border-b border-red-900/30">
              <div className="absolute bottom-8 left-8">
                <div className="text-6xl font-black text-white/5">SOS</div>
                <div className="text-lg text-red-500 font-bold mt-2">
                  Do not suffer in silence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
