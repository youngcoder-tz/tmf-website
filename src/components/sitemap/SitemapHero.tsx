"use client";

import React from "react";
import { motion } from "framer-motion";
import { Map, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SitemapHero({
  data,
  searchTerm,
  setSearchTerm,
}: {
  data: any;
  searchTerm: string;
  setSearchTerm: (s: string) => void;
}) {
  return (
    <section className="relative pt-32 pb-20 bg-slate-50 dark:bg-[#0B0F19]">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
          <Map className="w-4 h-4" />
          {data.badge}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          {data.title}
        </h1>

        <p className="text-xl text-slate-500 mb-10">{data.subtitle}</p>

        {/* Search Filter */}
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <Input
            placeholder="Filter pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 rounded-full bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
