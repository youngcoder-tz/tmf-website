"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cookie, Shield, Calendar } from "lucide-react";

export function CookiesHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-20 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-white/5">
      {/* Background Decor */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
            <Shield className="w-4 h-4 text-emerald-500" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight font-serif">
            {data.title}
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            {data.subtitle}
          </p>

          <div className="flex justify-center items-center gap-2 text-sm font-medium text-slate-400">
            <Calendar className="w-4 h-4" />
            Last Updated: {data.last_updated}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
