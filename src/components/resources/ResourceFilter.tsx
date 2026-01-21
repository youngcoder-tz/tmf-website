"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function ResourceFilter({ filters }: { filters: string[] }) {
  const [active, setActive] = useState("All Resources");

  return (
    <div className="sticky top-24 z-40 container mx-auto px-4 mb-16">
      <div className="bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-2 rounded-full shadow-lg max-w-4xl mx-auto flex overflow-x-auto hide-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300",
              active === filter
                ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
