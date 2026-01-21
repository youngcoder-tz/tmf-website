"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CareersHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[95vh] bg-[#0F0A1E] overflow-hidden pt-32 pb-20 flex items-center text-white"
    >
      {/* 1. BACKGROUND GLOWS (Violet/Lime) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4 fill-current" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[0.95] tracking-tight">
              Do the Best Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-lime-400">
                of Your Life.
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
              {data.subtitle}
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mb-10">
              {data.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-violet-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Button className="h-14 px-8 rounded-full bg-lime-400 text-black font-bold hover:bg-lime-300 transition-all shadow-[0_0_40px_rgba(163,230,53,0.4)] text-lg">
              View Open Roles
            </Button>
          </motion.div>

          {/* RIGHT: Visual (Team Grid) */}
          <motion.div
            style={{ y: yImage }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <Image
                src={data.image}
                alt="Team"
                fill
                className="object-cover"
              />

              {/* Floating Feedback Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl max-w-xs shadow-lg"
              >
                <div className="flex gap-1 text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-sm font-medium text-white italic">
                  "TMF gives you the autonomy to solve real problems. Best
                  culture I've been part of."
                </p>
                <p className="text-xs text-slate-300 mt-2 font-bold">
                  — Sarah, Senior Dev
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
