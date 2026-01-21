"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Radio, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// CSS Audio Wave
const AudioWave = () => (
  <div className="flex gap-1 items-end h-16 opacity-50">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="w-2 bg-orange-400 rounded-t-sm"
        animate={{ height: ["20%", "80%", "30%"] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export function CommunityHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#3F2E23] overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. WARM BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bg_image}
          alt="Community Radio"
          fill
          className="object-cover opacity-30 mix-blend-overlay sepia-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3F2E23] via-[#3F2E23]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-orange-300 font-bold tracking-widest uppercase text-sm">
                {data.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[0.95] tracking-tight font-serif">
              {data.title}
            </h1>

            <p className="text-xl text-[#D6C5BC] mb-10 leading-relaxed max-w-xl font-light border-l-2 border-orange-500/50 pl-6">
              {data.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              {data.impact_stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button className="h-14 px-8 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 shadow-xl transition-all">
                Support a Station
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-xl border-[#D6C5BC]/30 text-[#D6C5BC] hover:bg-white/5 hover:text-white hover:border-white"
              >
                Apply for Grant
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Visual (Audio Viz) */}
          <div className="relative hidden lg:flex justify-end items-center h-[400px]">
            {/* Abstract Map Nodes */}
            <div className="relative w-full h-full">
              {/* Center Pulse */}
              <div className="absolute top-1/2 right-20 -translate-y-1/2 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute top-1/2 right-20 -translate-y-1/2 text-right">
                <div className="text-6xl font-bold text-white/10 mb-4">FM</div>
                <AudioWave />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
