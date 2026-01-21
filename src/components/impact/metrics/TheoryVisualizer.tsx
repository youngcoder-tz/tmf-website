"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function TheoryVisualizer({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-[#0B0F17] border-y border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Our Theory of Change
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 z-0" />

          {data.map((step: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-slate-50 dark:bg-slate-800 border-4 border-white dark:border-[#0B0F17] shadow-xl flex flex-col items-center justify-center mb-6 group hover:-translate-y-2 transition-transform duration-300">
                <span className="text-xs font-bold text-teal-500">Step</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  {step.step}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {step.label}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[150px]">
                {step.desc}
              </p>

              {/* Mobile Arrow */}
              {idx !== data.length - 1 && (
                <ArrowRight className="md:hidden w-6 h-6 text-slate-300 mt-8 rotate-90" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
