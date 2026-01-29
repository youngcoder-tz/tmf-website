"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Radio, Zap } from "lucide-react";

export function NetworkHero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[90vh] bg-[#02040A] overflow-hidden pt-32 pb-20 flex flex-col justify-center border-b border-cyan-900/30">
      {/* 1. INTERACTIVE MAP BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* World Map Silhouette (Inverted & Blue Tinted) */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
            filter:
              "invert(1) hue-rotate(180deg) sepia(1) saturate(5) hue-rotate(180deg)",
          }}
        />

        {/* ANIMATED NODES */}
        {data.map_nodes.map((node: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="absolute group cursor-pointer"
            style={{ top: `${node.y}%`, left: `${node.x}%` }}
          >
            {/* Pulse Ring */}
            {node.pulse && (
              <div className="absolute -inset-4 bg-cyan-500/30 rounded-full animate-ping" />
            )}
            {/* Center Dot */}
            <div className="relative w-4 h-4 bg-cyan-400 rounded-full border-2 border-white shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10 hover:scale-125 transition-transform" />

            {/* Tooltip */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-[#0A101F]/90 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-lg whitespace-nowrap hidden group-hover:block z-20">
              <span className="text-cyan-400 text-xs font-bold uppercase block">
                {node.city}
              </span>
              <span className="text-white text-[10px]">{node.role}</span>
            </div>
          </motion.div>
        ))}

        {/* CONNECTING LINES (CSS SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <motion.path
            d="M60% 65% Q 40% 40% 48% 25%" // Dar to London
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="opacity-50"
          />
          <motion.path
            d="M60% 65% Q 30% 60% 25% 35%" // Dar to DC
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="opacity-30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-lg shadow-cyan-900/20">
            <Globe2 className="w-4 h-4 animate-spin-slow" />
            {data.hero.badge}
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tight drop-shadow-2xl">
            {data.hero.title}
          </h1>

          <p className="text-xl text-cyan-100/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {data.hero.subtitle}
          </p>

          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-950/50 px-6 py-2 rounded-full border border-cyan-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {data.hero.active_connections}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
