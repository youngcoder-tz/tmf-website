"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, FileText, CheckCircle2 } from "lucide-react";

export function PrivacyHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8 border border-emerald-200 dark:border-emerald-800">
            <Lock className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-serif">
            {data.title}
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {data.subtitle}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Version{" "}
              {data.version}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Last Updated: {data.last_updated}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
