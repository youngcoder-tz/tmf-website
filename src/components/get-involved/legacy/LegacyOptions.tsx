"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scroll, Landmark, HeartHandshake, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Scroll, Landmark, HeartHandshake };

const OptionCard = ({ option, index }: { option: any; index: number }) => {
  const Icon = IconMap[option.icon] || Scroll;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      className="group relative h-112.5 bg-white dark:bg-[#2A2622] rounded-t-full rounded-b-[2rem] p-8 flex flex-col items-center text-center shadow-xl border border-stone-100 dark:border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* 1. DECORATIVE TOP ARCH (Gold) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-amber-500 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* 2. ICON (Floating) */}
      <div className="mt-12 mb-8 relative">
        <div className="w-20 h-20 rounded-full bg-[#FAF9F6] dark:bg-[#1C1917] border border-amber-100 dark:border-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-500 z-10 relative group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-8 h-8 stroke-[1.5]" />
        </div>
        {/* Glow behind icon */}
        <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* 3. CONTENT */}
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-2xl font-serif text-stone-900 dark:text-stone-100 mb-4 group-hover:text-amber-600 transition-colors">
          {option.title}
        </h3>

        <p className="text-stone-500 dark:text-stone-400 font-serif leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">
          {option.desc}
        </p>

        {/* 4. ACTION (Reveals at bottom) */}
        <div className="mt-auto pt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-900 dark:text-white border-b border-amber-500 pb-1">
            Learn More <ArrowRight className="ml-2 w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Background Texture on Hover */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-500" />
    </motion.div>
  );
};

export function LegacyOptions({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#F5F5F4] dark:bg-[#151412]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            Planned Giving Methods
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 dark:text-white">
            Choose Your Path
          </h2>
        </div>

        {/* The "Monument" Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((option: any, idx: number) => (
            <OptionCard key={idx} option={option} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
