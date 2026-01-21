"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// --- DECORATION: DOT PATTERN (From Zone UI Screenshot) ---
const DotPattern = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -z-10 text-orange-200"
  >
    <pattern
      id="dot-pattern"
      x="0"
      y="0"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
    >
      <circle cx="2" cy="2" r="2" fill="currentColor" />
    </pattern>
    <rect width="200" height="200" fill="url(#dot-pattern)" />
  </svg>
);

export function AboutHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN: Typography (Massive & Bold) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Orange Badge */}
            <span className="inline-block text-orange-600 font-bold tracking-widest uppercase text-sm mb-6">
              {data.badge}
            </span>

            {/* Huge Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-extrabold max-w-2xl font-heading text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-wide">
              {data.headline.split(" ").map((word: string, i: number) => (
                <span
                  key={i}
                  className={
                    i === 1 ? "text-blue-600 inline-block" : "inline-block"
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Readable Subheadline */}
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              {data.subheadline}
            </p>

            {/* Zone UI Style Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-base font-bold shadow-lg shadow-slate-900/20 transition-transform hover:-translate-y-1"
              >
                {data.primary_btn}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-slate-200 text-slate-900 hover:bg-slate-50 text-base font-bold"
              >
                <PlayCircle className="w-5 h-5 mr-2 text-orange-500" />
                {data.secondary_btn}
              </Button>
            </div>

            {/* Quick Stats Row */}
            <div className="flex items-center gap-8 md:gap-12 border-t border-slate-100 dark:border-white/10 pt-8">
              {data.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Composed Image (The "Zone" Look) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-[80px] -z-10" />

            {/* Dot Pattern Decoration */}
            <div className="absolute -top-12 -right-12 z-0 hidden lg:block">
              <DotPattern />
            </div>

            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Main Large Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8  border-white dark:border-slate-800">
                <Image
                  src={data.images.main}
                  alt="TMF Team"
                  width={600}
                  height={450}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Secondary Floating Image (Asymmetrical Layout) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 -left-8 md:-left-12 w-48 md:w-64 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-slate-800"
              >
                <Image
                  src={data.images.secondary}
                  alt="Community Work"
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto"
                />
              </motion.div>

              {/* Floating Icon Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute top-10 -left-6 md:-left-10 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-xl z-20 border-4 border-white dark:border-slate-800"
              >
                15y
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
