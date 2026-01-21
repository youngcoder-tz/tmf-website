"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

export function TechStackVisual({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#050A0F] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00FF9405_1px,transparent_1px),linear-gradient(to_bottom,#00FF9405_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
            {data.headline}
          </h2>
          <p className="text-slate-400">
            The architecture we help newsrooms build.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {data.layers.map((layer: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-[#00FF94]/20 bg-[#0A0F16] hover:bg-[#0F1621] transition-colors shadow-[0_0_15px_rgba(0,255,148,0.05)]"
            >
              <div className="w-32 shrink-0 text-right md:text-left">
                <span className="text-[#00FF94] font-mono text-sm font-bold uppercase tracking-wider">
                  {layer.layer}
                </span>
              </div>

              <div className="flex-1 flex flex-wrap gap-2 justify-center md:justify-start">
                {layer.tools.map((tool: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#00FF94]/10 border border-[#00FF94]/30 rounded-md text-white text-xs font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Layers className="w-5 h-5 text-slate-600 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
