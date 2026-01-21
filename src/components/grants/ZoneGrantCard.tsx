"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ZoneGrantCard({ program }: { program: any }) {
  const isColorCard = program.type === "color_card";

  // COLOR THEMES for Text Cards (Soft Pastels like Zone UI)
  const themeStyles: any = {
    orange: "bg-[#FFF4E5] text-slate-900 border-orange-100", // Soft Orange
    blue: "bg-[#EEF2FF] text-slate-900 border-blue-100", // Soft Blue
    purple: "bg-[#F3E8FF] text-slate-900 border-purple-100", // Soft Purple
  };
  const theme = themeStyles[program.color_theme] || themeStyles.orange;

  // 1. COLORED TEXT CARD (Like "Blockchain" in screenshot)
  if (isColorCard) {
    return (
      <Link href={`/grants/${program.slug}`} className="group block h-full">
        <div
          className={cn(
            "h-full p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col",
            theme
          )}
        >
          {/* Date Badge */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-60 mb-4">
            <Calendar className="w-4 h-4" />
            {program.deadline}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold font-heading mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
            {program.title}
          </h3>

          {/* Excerpt */}
          <p className="text-base opacity-80 mb-8 leading-relaxed">
            {program.excerpt}
          </p>

          {/* Footer: Partner */}
          <div className="mt-auto flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center font-bold text-xs">
              TMF
            </div>
            <span className="text-sm font-bold opacity-70">
              {program.amount}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // 2. IMAGE CARD (Standard)
  return (
    <Link href={`/grants/${program.slug}`} className="group block h-full">
      <div className="h-full bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
        {/* Image Area */}
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Floating Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-3 py-1 text-xs uppercase tracking-wide">
              {program.category}
            </Badge>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            <span>{program.deadline}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{program.amount}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition-colors">
            {program.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-500 text-sm line-clamp-2 mb-6">
            {program.excerpt}
          </p>

          {/* Partner Footer */}
          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-3">
            <img
              src={program.partner.avatar}
              alt="Partner"
              className="w-8 h-8 rounded-full object-contain bg-slate-50 p-1"
            />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-slate-400 font-bold">
                Supported By
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                {program.partner.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
