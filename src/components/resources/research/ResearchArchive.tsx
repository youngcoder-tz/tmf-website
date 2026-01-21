"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- SUB-COMPONENT: The Dossier Card ---
const ReportCard = ({ report, index }: { report: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-0 md:gap-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-900"
    >
      {/* 1. Cover Image (Vertical A4 Ratio) */}
      <div className="relative w-full md:w-56 shrink-0 h-64 md:h-auto bg-slate-100">
        <img
          src={report.cover}
          alt={report.title}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors" />

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-slate-900 backdrop-blur-md border-0 text-xs font-bold shadow-sm">
            {report.type}
          </Badge>
        </div>
      </div>

      {/* 2. Content */}
      <div className="flex-1 p-8 md:pl-0 flex flex-col justify-center">
        <div className="mb-4">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {report.meta.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{report.meta.author}</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition-colors font-heading">
            {report.title}
          </h3>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm line-clamp-2 max-w-2xl">
            {report.abstract}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Button className="rounded-full h-12 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-slate-200 font-bold shadow-lg transition-all group/btn">
            <Download className="w-4 h-4 mr-2" /> Download PDF
          </Button>
          <Button
            variant="ghost"
            className="rounded-full h-12 px-6 text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-white/5 font-bold"
          >
            Read Abstract <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <span className="ml-auto text-xs font-bold text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
            {report.meta.size}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export function ResearchArchive({ data }: { data: any }) {
  const [activeTopic, setActiveTopic] = useState("All Topics");

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT: Sidebar Filters (3 Cols) */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 space-y-8">
              {/* Topics */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">
                  Filter by Topic
                </h4>
                <div className="space-y-1">
                  {data.filters.topics.map((topic: string) => (
                    <button
                      key={topic}
                      onClick={() => setActiveTopic(topic)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between",
                        activeTopic === topic
                          ? "bg-white dark:bg-white/10 text-blue-600 dark:text-white shadow-sm"
                          : "text-slate-500 hover:bg-white/50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white",
                      )}
                    >
                      {topic}
                      {activeTopic === topic && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Years */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">
                  Year
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.filters.years.map((year: string) => (
                    <button
                      key={year}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-500 hover:border-blue-500 hover:text-blue-500 transition-colors"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Report List (9 Cols) */}
          <div className="lg:col-span-9 space-y-6">
            {data.reports.map((report: any, idx: number) => (
              <ReportCard key={report.id} report={report} index={idx} />
            ))}

            {/* Pagination */}
            <div className="pt-12 text-center">
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 border-slate-300 dark:border-slate-700"
              >
                Load More Reports
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
