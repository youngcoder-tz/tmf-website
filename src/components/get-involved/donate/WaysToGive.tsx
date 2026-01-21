"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  HeartHandshake,
  Megaphone,
  Bitcoin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IconMap: any = { Briefcase, HeartHandshake, Megaphone, Bitcoin };

const OptionCard = ({ option, index }: { option: any; index: number }) => {
  const Icon = IconMap[option.icon] || Briefcase;

  // Zone UI Color Themes
  const colors: any = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    rose: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white",
    orange:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white",
    emerald:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-white/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        {/* Icon Bubble */}
        <div
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300",
            colors[option.color],
          )}
        >
          <Icon className="w-8 h-8" />
        </div>

        {/* Arrow (Reveals on Hover) */}
        <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        {option.title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 min-h-[3rem]">
        {option.desc}
      </p>

      {/* <Link href={option.link} className="block">
        <Button
          variant="outline"
          className="w-full rounded-xl h-12 border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-white/10 font-bold"
        >
          {option.cta}
        </Button>
      </Link> */}
    </motion.div>
  );
};

export function WaysToGive({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            {data.headline}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            {data.subheadline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.options.map((option: any, idx: number) => (
            <OptionCard key={idx} option={option} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
