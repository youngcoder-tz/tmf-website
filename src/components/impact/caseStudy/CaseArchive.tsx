"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CaseCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row h-auto md:h-80 bg-white dark:bg-[#131826] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500"
    >
      {/* 1. IMAGE (Cinematic Aspect Ratio) */}
      <div className="w-full md:w-5/12 relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        {/* Category Badge Overlay */}
        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {item.category}
        </div>
      </div>

      {/* 2. CONTENT */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative">
        {/* Location Tag */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          <MapPin className="w-4 h-4 text-purple-500" />
          {item.location}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed line-clamp-2">
          {item.summary}
        </p>

        {/* Footer: Impact & Action */}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Outcome
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {item.impact}
              </p>
            </div>
          </div>

          <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function CaseArchive({ data }: { data: any }) {
  const [activeFilter, setActiveFilter] = useState("All Stories");

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0F17]">
      <div className="container mx-auto px-4">
        {/* Filter Bar */}
        <div className="flex justify-center mb-16 overflow-x-auto hide-scrollbar">
          <div className="inline-flex bg-white dark:bg-[#131826] p-1.5 rounded-full border border-slate-200 dark:border-white/5 shadow-sm">
            {data.filters.map((filter: string) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                  activeFilter === filter
                    ? "bg-slate-900 text-white dark:bg-purple-600 shadow-md"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {data.cases.map((item: any, idx: number) => (
            <CaseCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="h-14 px-10 rounded-full border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-white/5 font-bold"
          >
            Load More Investigations
          </Button>
        </div>
      </div>
    </section>
  );
}
