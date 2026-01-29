"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LiteracyHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#F5F2ED] overflow-hidden flex items-center pt-32 pb-20 border-b border-[#E6E0D5]"
    >
      {/* 1. PAPER TEXTURE OVERLAY */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60 mix-blend-multiply" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-900/10 bg-indigo-50/50 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
              <BookOpen className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-[#1C1917] mb-8 leading-[1] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-lg font-light font-sans">
              {data.subtitle}
            </p>

            <div className="flex gap-4">
              <Button className="h-14 px-8 rounded-full bg-[#1C1917] text-white font-bold hover:bg-indigo-700 transition-all shadow-xl">
                Request Curriculum
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-stone-300 text-[#1C1917] hover:bg-white hover:border-[#1C1917]"
              >
                Download Checklist
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Visual Metaphor (Magnifying Glass) */}
          <div className="relative flex justify-center">
            <motion.div
              style={{ scale: scaleImg }}
              className="relative w-full max-w-[500px] aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden border-[12px] border-white shadow-2xl z-10"
            >
              <Image
                src={data.image}
                alt="Education"
                fill
                className="object-cover sepia-[.2]"
              />
            </motion.div>

            {/* Floating Search Icon Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 z-20 bg-indigo-600 text-white p-8 rounded-[2rem] shadow-xl border-4 border-[#F5F2ED]"
            >
              <Search className="w-12 h-12" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
