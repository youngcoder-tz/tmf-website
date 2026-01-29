"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MentorshipHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] bg-[#1E1B2E] overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image}
          alt="Mentoring"
          fill
          priority
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B2E] via-[#1E1B2E]/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8">
              <Users className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight font-serif">
              {data.title}
            </h1>
            <p className="text-xl text-purple-100/70 mb-12 leading-relaxed max-w-lg font-light">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 rounded-full bg-purple-500 text-white font-bold hover:bg-purple-600 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                Apply as Mentee
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-purple-400 text-purple-200 hover:bg-purple-500/10"
              >
                Become a Mentor
              </Button>
            </div>
          </motion.div>

          {/* Right: Abstract Stats Visual */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] w-80">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  A+
                </div>
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold -ml-6 border-4 border-[#1E1B2E]">
                  B+
                </div>
                <div className="text-white font-bold text-sm ml-2">
                  150+ Pairs
                </div>
              </div>
              {data.stats.map((stat: any, idx: number) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
