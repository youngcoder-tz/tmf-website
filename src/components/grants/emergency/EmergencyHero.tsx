"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyHero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[85vh] bg-[#1a0505] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* 1. BACKGROUND PULSE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/50 bg-red-900/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
            <ShieldAlert className="w-4 h-4 fill-current animate-pulse" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight leading-none">
            {data.title}
          </h1>

          <p className="text-xl text-red-100/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          {/* The "SOS" Card */}
          <div className="bg-[#2b0a0a] border border-red-500/30 p-8 rounded-[2rem] max-w-xl mx-auto shadow-[0_0_60px_rgba(220,38,38,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

            <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
              <div className="text-left">
                <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">
                  Encrypted Hotline
                </p>
                <p className="text-2xl font-mono font-bold text-white">
                  {data.emergency_contact}
                </p>
              </div>

              <Button className="h-14 px-8 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-lg shadow-lg">
                Apply for Support
              </Button>
            </div>

            <div className="mt-6 flex justify-center gap-6 text-xs text-red-400/60 font-mono">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3" /> E2E Encrypted
              </span>
              <span className="flex items-center gap-1">
                Response: {data.turnaround_time}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
