"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WomenHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#2E0219] overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. BACKGROUND GRADIENT */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#4A0428] to-[#1F0212]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Copy */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/50 bg-pink-900/20 text-pink-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4 fill-current" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-pink-100/70 mb-12 leading-relaxed max-w-lg font-light">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 rounded-full bg-pink-600 text-white font-bold hover:bg-pink-500 transition-all shadow-xl shadow-pink-900/50">
                Apply for Fellowship
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Magazine Cover Image */}
          <div className="relative">
            <motion.div
              style={{ scale: scaleImage }}
              className="relative aspect-[3/4] rounded-t-full rounded-b-[10rem] overflow-hidden border-4 border-pink-500/20 shadow-2xl"
            >
              <Image
                src={data.image}
                alt="Women in Media"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E0219]/90 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Stat Card */}
            <div className="absolute bottom-12 -left-8 md:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl max-w-xs shadow-lg">
              <p className="text-3xl font-bold text-white mb-1">45%</p>
              <p className="text-pink-200 text-sm">
                of our total grants go to women-led projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
