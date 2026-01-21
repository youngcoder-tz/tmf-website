"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrainingHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-blue-950 overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. ACADEMIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ scale: scaleImage }}
          className="relative w-full h-full"
        >
          <Image
            src={data.image}
            alt="Classroom"
            fill
            priority
            className="object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950 via-blue-950/80 to-blue-900/50" />
        </motion.div>
        {/* Geometric Overlays */}
        <div className="absolute top-0 right-0 w-150 h-150 border-40 border-white/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8">
              <GraduationCap className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.05] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-blue-200 mb-12 leading-relaxed max-w-lg font-light">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 rounded-full bg-white text-blue-950 font-bold hover:bg-blue-50 transition-all shadow-xl">
                Request Custom Training
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-blue-400 text-blue-100 hover:bg-blue-900 hover:border-white"
              >
                Download Syllabus
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Floating Stats Card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-orange-500 rounded-[2.5rem] blur-2xl opacity-20 transform rotate-6" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl">
              <div className="space-y-8">
                {data.stats.map((stat: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl group-hover:bg-yellow-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-blue-300 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
