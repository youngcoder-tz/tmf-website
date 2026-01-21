"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Calendar,
  Download,
  Lock,
  BarChart3,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon Map
const IconMap: any = {
  FileText,
  Shield,
  Calendar,
  Download,
  Lock,
  BarChart3,
  BookOpen,
};

const CategoryCard = ({ item, color }: { item: any; color: string }) => {
  const Icon = IconMap[item.icon] || FileText;

  // Theme Styles
  const isAmber = color === "amber";
  const hoverBorder = isAmber
    ? "hover:border-amber-500/50"
    : "hover:border-blue-500/50";
  const iconBg = isAmber
    ? "bg-amber-100 text-amber-600 dark:bg-amber-900/30"
    : "bg-blue-100 text-blue-600 dark:bg-blue-900/30";

  return (
    <Link href={item.href} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className={cn(
          "group h-full p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-300",
          hoverBorder,
        )}
      >
        <div className="flex justify-between items-start mb-6">
          <div
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
              iconBg,
            )}
          >
            <Icon className="w-7 h-7" />
          </div>
          <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
          {item.desc}
        </p>

        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-white/5 inline-block px-3 py-1 rounded-md">
          {item.count}
        </div>
      </motion.div>
    </Link>
  );
};

export function ResourceCategories({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {data.sections.map((section: any, idx: number) => (
            <div key={idx}>
              {/* Section Header */}
              <div className="mb-10 flex items-end gap-4">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-white/10 mb-2" />
              </div>
              <p className="text-lg text-slate-500 mb-8 -mt-6">
                {section.description}
              </p>

              {/* The Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {section.items.map((item: any, i: number) => (
                  <CategoryCard key={i} item={item} color={section.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
