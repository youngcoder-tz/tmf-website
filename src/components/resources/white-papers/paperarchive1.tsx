"use client";

import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PaperArchive({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#F9F8F6] dark:bg-[#0B0F17]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16 flex items-end justify-between border-b border-stone-300 dark:border-white/10 pb-6">
          <h2 className="text-3xl font-serif text-[#1C1917] dark:text-white">
            Archive
          </h2>
          <div className="text-sm font-bold text-stone-500">
            Total: {data.length} Papers
          </div>
        </div>

        <div className="space-y-4">
          {data.map((paper: any, idx: number) => (
            <div
              key={idx}
              className="group flex flex-col md:flex-row gap-6 md:items-center p-8 bg-white dark:bg-[#121212] rounded-2xl border border-stone-200 dark:border-white/5 hover:shadow-xl hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300"
            >
              {/* Year Block */}
              <div className="w-20 shrink-0 text-stone-400 font-serif text-xl italic border-r border-stone-100 dark:border-white/5 pr-6 hidden md:block">
                {paper.year}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-4 h-4 text-stone-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    {paper.pages} • {paper.size}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1917] dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {paper.title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed max-w-2xl">
                  {paper.desc}
                </p>
              </div>

              {/* Action */}
              <div className="shrink-0 flex items-center justify-end">
                <Button
                  variant="ghost"
                  className="h-12 w-12 rounded-full border border-stone-200 dark:border-white/10 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
