"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function VideoGrid({ data }: { data: any }) {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <section className="py-24 bg-[#0B0F17] text-white">
      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {data.categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold border transition-all",
                activeCat === cat
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-slate-500 border-white/10 hover:border-white/30 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.videos.map((video: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-4 border border-white/5">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-bold">
                  {video.duration}
                </div>
              </div>

              {/* Meta */}
              <div className="px-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    {video.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" /> {video.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {video.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
