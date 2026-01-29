"use client";

import React from "react";
import { motion } from "framer-motion";

export function HighlightsGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-black mb-4 text-emerald-400">
                {item.stat}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.label}</h4>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
