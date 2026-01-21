"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StoriesHero({ data }: { data: any }) {
  return (
    <section className="relative min-h-[85vh] bg-black overflow-hidden flex items-center pt-32 pb-20">
      {/* 1. BACKGROUND (Blurred Video Still) */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.featured_video.thumbnail}
          alt="Hero"
          className="w-full h-full object-cover opacity-40 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/50 bg-red-900/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
              <Film className="w-4 h-4 fill-current" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              {data.title}
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {data.subtitle}
            </p>

            {/* Featured Video Card */}
            <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
              <img
                src={data.featured_video.thumbnail}
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center pl-1 shadow-[0_0_50px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {data.featured_video.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {data.featured_video.desc}
                </p>
              </div>
              <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-white">
                {data.featured_video.duration}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
