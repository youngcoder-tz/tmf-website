"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sprout, TreeDeciduous, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

// Icon Map for stages
const IconMap: any = {
  "Year 1": Sprout,
  "Year 10": TreeDeciduous,
  "Year 50": Landmark,
};

export function LegacyTimeline({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // The "Growing" Line Height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 bg-[#FAF9F6] dark:bg-[#1C1917] relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-[#292524] dark:text-[#E7E5E4] mb-6">
            {data.headline}
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          {/* 1. The "Stem" (Background Guide) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 dark:bg-stone-800 -translate-x-1/2" />

          {/* 2. The "Sap" (Animated Fill) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-0.75 bg-linear-to-b from-amber-400 via-amber-600 to-amber-800 -translate-x-1/2 origin-top"
          />

          {/* 3. The Nodes */}
          <div className="space-y-24">
            {data.steps.map((step: any, idx: number) => {
              const Icon = IconMap[step.year] || Sprout;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center",
                    isEven ? "md:flex-row-reverse" : "",
                  )}
                >
                  {/* Content Card (Half Width) */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-16">
                    <div
                      className={cn(
                        "bg-white dark:bg-[#292524] p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-xl border-t-4 border-amber-500 relative group transition-transform hover:-translate-y-2",
                        isEven
                          ? "rounded-tl-none rounded-br-none"
                          : "rounded-tr-none rounded-bl-none",
                      )}
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">
                        {step.year}
                      </span>
                      <h3 className="text-2xl font-serif text-stone-800 dark:text-stone-100 mb-3">
                        {step.label}
                      </h3>
                      <p className="text-stone-500 dark:text-stone-400 font-serif leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node (Icon) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#FAF9F6] dark:bg-[#1C1917] border-4 border-white dark:border-stone-800 shadow-lg flex items-center justify-center z-20">
                      <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-400">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer for the other side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
