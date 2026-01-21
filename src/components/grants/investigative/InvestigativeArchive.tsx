"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function InvestigativeArchive({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Previously Funded
          </h2>
          <button className="text-amber-500 font-mono text-sm uppercase tracking-widest hover:underline decoration-amber-500 underline-offset-4">
            View Full Archive
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((story: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                  <span className="text-amber-500 font-mono text-xs">
                    {story.year}
                  </span>
                  <span className="text-slate-400 font-bold text-xs uppercase">
                    {story.outlet}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {story.title}
                </h3>
                <div className="inline-block px-2 py-1 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-wide rounded">
                  Impact: {story.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
