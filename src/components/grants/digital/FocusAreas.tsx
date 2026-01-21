"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Shield, Box, Zap, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Cpu, Shield, Box, Zap };

export function FocusAreas({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#050A0F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Code className="w-12 h-12 text-[#00FF94] mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold text-white font-mono mb-4">
            Focus Areas
          </h2>
          <p className="text-slate-400">
            Technologies we are actively investing in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item: any, idx: number) => {
            const Icon = IconMap[item.icon] || Cpu;
            // Neon colors
            const glow =
              item.color === "green"
                ? "group-hover:border-[#00FF94] group-hover:shadow-[0_0_30px_rgba(0,255,148,0.2)]"
                : item.color === "cyan"
                  ? "group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  : "group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "group p-8 bg-[#0A0F16] border border-white/5 transition-all duration-300 relative overflow-hidden",
                  glow,
                )}
              >
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 mb-6 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover Scanline */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:animate-scan" />
              </motion.div>
            );
          })}
        </div>

        <style jsx global>{`
          @keyframes scan {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-scan {
            animation: scan 1s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
