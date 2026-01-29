"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Stamp } from "lucide-react";

export function FOIHero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[60vh] bg-blue-50 dark:bg-slate-900 pt-32 pb-20 border-b border-blue-200 dark:border-blue-900/30 overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-1 font-mono font-bold text-sm uppercase mb-8 tracking-tighter transform -rotate-2">
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-mono tracking-tighter">
            {data.title}
          </h1>

          <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto font-mono">
            {data.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-4 py-2 rounded text-xs font-mono text-slate-400">
            <Stamp className="w-4 h-4" />
            {data.law_ref}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
