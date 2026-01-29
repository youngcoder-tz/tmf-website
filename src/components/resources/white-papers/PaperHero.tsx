"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PaperHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const rotateShape = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] bg-[#FDFBF7] text-[#1C1917] overflow-hidden flex items-center pt-32 pb-20 border-b border-[#E6E0D5]"
    >
      {/* Background Texture: Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Typography */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 mb-8 border-b-2 border-black pb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                {data.badge}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.95] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-lg font-light font-sans italic border-l-4 border-black pl-6">
              "{data.subtitle}"
            </p>

            <div className="bg-white border border-stone-200 p-6 shadow-xl max-w-md relative group">
              <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <p className="text-xs font-bold text-stone-400 uppercase mb-2">
                Latest Publication
              </p>
              <h3 className="text-lg font-bold font-serif mb-1">
                {data.featured_paper.title}
              </h3>
              <p className="text-sm text-stone-500">
                By {data.featured_paper.author} • {data.featured_paper.date}
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Abstract Concept Visual */}
          <div className="relative flex justify-center">
            <motion.div
              style={{ rotate: rotateShape }}
              className="w-[400px] h-[400px] border-[1px] border-black rounded-full flex items-center justify-center relative"
            >
              <div className="w-[300px] h-[300px] border-[1px] border-black rounded-full flex items-center justify-center opacity-60">
                <div className="w-[200px] h-[200px] bg-black rounded-full opacity-10" />
              </div>
              {/* Floating Labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-[#FDFBF7] px-2 text-xs font-bold uppercase tracking-widest">
                Strategy
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-[#FDFBF7] px-2 text-xs font-bold uppercase tracking-widest">
                Policy
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 -rotate-90 bg-[#FDFBF7] px-2 text-xs font-bold uppercase tracking-widest">
                Ethics
              </div>
              <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rotate-90 bg-[#FDFBF7] px-2 text-xs font-bold uppercase tracking-widest">
                Tech
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
