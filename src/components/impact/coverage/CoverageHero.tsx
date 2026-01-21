"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export function CoverageHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-20 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-8">
            <Newspaper className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight font-serif">
            {data.title}
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed">
            {data.subtitle}
          </p>

          {/* Logo Wall */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {data.featured_logos.map((logo: string, idx: number) => (
              <img
                key={idx}
                src={logo}
                alt="Media Partner"
                className="h-8 md:h-10 object-contain"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
