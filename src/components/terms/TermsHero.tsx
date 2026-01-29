"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Printer, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TermsHero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Scale className="w-4 h-4" />
            {data.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {data.title}
          </h1>

          <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" />
              Effective: {data.effective_date}
            </div>

            <Button
              variant="ghost"
              className="text-blue-600 dark:text-blue-400 hover:bg-blue-50"
            >
              <Printer className="w-4 h-4 mr-2" /> Print Agreement
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
