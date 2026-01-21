"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Scale,
  Scroll,
  FileSearch,
  Banknote,
  Download,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const IconMap: any = { Scale, Scroll, FileSearch, Banknote };

const BriefCard = ({ brief, index }: { brief: any; index: number }) => {
  const Icon = IconMap[brief.icon] || Scroll;

  // Status Color Logic
  const statusColors: any = {
    Enacted:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    "In Review":
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    Proposal:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    Ongoing:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-200 dark:border-white/5 p-8 hover:shadow-2xl transition-all duration-300 hover:border-indigo-500/30 dark:hover:border-indigo-500/30"
    >
      {/* Top Meta Row */}
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-white/5">
          <Icon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
        </div>
        <Badge
          variant="secondary"
          className={cn(
            "font-bold uppercase tracking-wider text-[10px] px-3 py-1",
            statusColors[brief.status],
          )}
        >
          {brief.status}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {brief.title}
      </h3>

      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
        {brief.summary}
      </p>

      {/* The "Key Recommendation" Box - The Advanced UX Feature */}
      <div className="bg-indigo-50 dark:bg-indigo-900/10 rounded-xl p-5 mb-8 border border-indigo-100 dark:border-indigo-500/10">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Key Recommendation
          </span>
        </div>
        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 italic">
          "{brief.recommendation}"
        </p>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
        <span className="text-xs font-bold text-slate-400">{brief.date}</span>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg text-slate-600 dark:text-slate-300"
          >
            Read Online
          </Button>
          <Button
            size="sm"
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-100 rounded-lg font-bold"
          >
            <Download className="w-4 h-4 mr-2" /> PDF
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export function PolicyGrid({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="mb-12 flex justify-between items-end">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Latest Briefs
          </h2>
          <div className="hidden md:flex gap-2">
            {["All", "Bills", "Regulations", "Reports"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-sm font-bold text-slate-500 hover:bg-white dark:hover:bg-white/5 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.briefs.map((brief: any, idx: number) => (
            <BriefCard key={brief.id} brief={brief} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
