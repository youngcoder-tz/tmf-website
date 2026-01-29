"use client";

import React from "react";
import { FileText, Download, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TemplateGallery({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className="group relative bg-[#F8FAFC] dark:bg-[#0F172A] border-2 border-slate-200 dark:border-slate-800 p-8 rounded-xl hover:border-blue-500 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-[8px_8px_0px_rgba(59,130,246,0.2)] hover:-translate-y-1 hover:-translate-x-1 duration-200"
            >
              {/* File Tab Visual */}
              <div className="absolute top-[-14px] left-8 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border-t-2 border-l-2 border-r-2 border-blue-200 dark:border-blue-800 rounded-t-lg">
                {item.format}
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <FileText className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <span
                  className={cn(
                    "text-[10px] uppercase font-bold px-2 py-1 rounded border",
                    item.difficulty === "High"
                      ? "text-red-600 border-red-200 bg-red-50"
                      : item.difficulty === "Medium"
                        ? "text-orange-600 border-orange-200 bg-orange-50"
                        : "text-green-600 border-green-200 bg-green-50",
                  )}
                >
                  {item.difficulty} Complexity
                </span>
              </div>

              <h3 className="text-xl font-bold font-mono text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2 font-bold uppercase tracking-wide text-xs">
                Target: {item.target}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-8 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex gap-3">
                <Button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-mono font-bold rounded-lg border-2 border-transparent hover:bg-blue-600 hover:text-white">
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
                <Button
                  variant="outline"
                  className="px-3 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
