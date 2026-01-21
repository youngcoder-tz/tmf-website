"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResearchSidebar({ filters, activeFilters, setFilter }: any) {
  return (
    <div className="sticky top-32">
      <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5">
        {/* Year Filter */}
        <div className="mb-8">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
            Publication Year
          </h4>
          <div className="space-y-2">
            {filters.years.map((year: string) => (
              <div
                key={year}
                onClick={() => setFilter("year", year)}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all",
                  activeFilters.year === year
                    ? "bg-white shadow-sm text-blue-600 font-bold dark:bg-white/10 dark:text-white"
                    : "text-slate-500 hover:bg-white/50 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white",
                )}
              >
                <span>{year}</span>
                {activeFilters.year === year && <Check className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Topic Filter */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
            Research Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {filters.topics.map((topic: string) => (
              <button
                key={topic}
                onClick={() => setFilter("topic", topic)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-bold border transition-all",
                  activeFilters.topic === topic
                    ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900"
                    : "bg-transparent text-slate-500 border-slate-200 hover:border-slate-400 dark:border-white/10 dark:text-slate-400",
                )}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
