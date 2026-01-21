"use client";

import React from "react";
import { motion } from "framer-motion";

export function MentorshipTree({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-[#1F0212] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-[#2E0219] dark:text-pink-100 mb-16">
          {data.headline}
        </h2>

        <div className="relative h-[500px] w-full max-w-4xl mx-auto flex items-center justify-center">
          {/* Center Core */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute w-32 h-32 rounded-full bg-purple-600 flex items-center justify-center z-30 shadow-xl shadow-purple-600/30"
          >
            <div className="text-white font-bold">
              <div className="text-2xl">{data.nodes[0].count}</div>
              <div className="text-[10px] uppercase opacity-80">
                {data.nodes[0].role}
              </div>
            </div>
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute w-72 h-72 rounded-full border-2 border-dashed border-pink-400 dark:border-pink-500/30 z-20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#1F0212] px-4 py-1 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase tracking-widest">
              {data.nodes[1].role}
            </div>
          </motion.div>

          {/* Outer Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute w-[500px] h-[500px] rounded-full border border-rose-300 dark:border-rose-500/20 bg-rose-50/50 dark:bg-rose-900/10 z-10"
          >
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-600 dark:text-rose-300 font-serif italic text-lg">
              "{data.description}"
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
