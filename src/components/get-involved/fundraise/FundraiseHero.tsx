"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Megaphone, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FundraiseHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [3, -3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-orange-50 dark:bg-slate-950 overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. DYNAMIC BACKGROUND BLOB */}
      <div className="absolute top-0 right-0 w-[80%] h-[100%] bg-orange-500/10 dark:bg-orange-900/20 rounded-l-[10rem] -z-10 transform skew-x-[-12deg] translate-x-20" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
              <Megaphone className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[0.95] tracking-tight">
              Turn Passion into <br />
              <span className="text-orange-500">Power.</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-lg">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/30 text-lg">
                Start a Campaign
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-white font-bold hover:bg-white dark:hover:bg-white/5"
              >
                Download Toolkit
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: Visual Collage */}
          <div className="relative">
            {/* Main Image Card */}
            <motion.div
              style={{ rotate: rotateImg }}
              className="relative z-20 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl transform rotate-3"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={data.image}
                  alt="Community"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-sm uppercase tracking-wide">
                      Top Campaign
                    </span>
                  </div>
                  <p className="text-2xl font-bold">"Dar Charity Run"</p>
                  <p className="text-orange-300 font-bold">$12,450 Raised</p>
                </div>
              </div>
            </motion.div>

            {/* Decoration Elements */}
            <div className="absolute top-10 -right-10 w-24 h-24 bg-teal-400 rounded-full blur-2xl opacity-60 z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-60 z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
