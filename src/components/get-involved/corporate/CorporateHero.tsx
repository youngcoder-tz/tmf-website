"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CorporateHero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#0B1120] overflow-hidden pt-32 pb-20">
      {/* 1. LUXURY BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Gold sheen */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
        {/* Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: The Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight font-serif">
              {data.title}
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg border-l-2 border-amber-500/50 pl-6">
              {data.subtitle}
            </p>

            <div className="flex gap-4">
              <Button className="h-14 px-8 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
                Download Sponsorship Deck
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: The Visual Anchor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl">
              <Image
                src={data.image}
                alt="Corporate Partnership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />

              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                  Impact ROI
                </p>
                <p className="text-white text-lg font-medium">
                  "Partnering with TMF elevated our CSR profile and connected us
                  with key policymakers."
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-amber-500/30 rounded-full animate-spin-slow hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
