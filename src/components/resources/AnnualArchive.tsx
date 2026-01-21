"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ReportCard = ({ report, index }: { report: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row gap-0 md:gap-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* 1. The "Book Cover" */}
      <div className="relative w-full md:w-64 h-64 md:h-auto bg-slate-200 shrink-0 overflow-hidden">
        <img
          src={report.cover}
          alt={`${report.year} Annual Report`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Year Badge Overlay */}
        <div className="absolute top-0 left-0 bg-slate-900 text-white px-6 py-3 rounded-br-2xl font-bold text-xl shadow-lg z-10">
          {report.year}
        </div>
        <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-emerald-900/0 transition-colors" />
      </div>

      {/* 2. Content & Downloads */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-heading">
          {report.theme}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
          {report.summary}
        </p>

        {/* Download Buttons Area */}
        <div className="flex flex-wrap gap-4">
          {report.assets.map((asset: any, i: number) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "outline"}
              className={cn(
                "rounded-xl h-12 font-bold transition-all",
                i === 0
                  ? "bg-slate-900 text-white hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400"
                  : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5",
              )}
            >
              <Download className="w-4 h-4 mr-2" />
              {asset.type}{" "}
              <span className="ml-2 text-xs opacity-60">({asset.size})</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Decorative Arrow */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0 hidden lg:block">
        <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
};

export function AnnualArchive({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="mb-16 flex items-end justify-between border-b border-slate-200 dark:border-white/10 pb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Report Archive
            </h2>
            <p className="text-slate-500">
              Publicly available documents from 2008 - Present.
            </p>
          </div>

          <Button
            variant="ghost"
            className="hidden md:flex text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
          >
            View All Years <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* List */}
        <div className="space-y-8">
          {data.reports.map((report: any, idx: number) => (
            <ReportCard key={report.year} report={report} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
