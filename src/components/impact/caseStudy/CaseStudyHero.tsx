"use client";

import React from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export function CaseStudyHero({ data }: { data: any }) {
  return (
    <section className="relative pt-40 pb-24 bg-[#F8FAFC] dark:bg-[#0B0F17] overflow-hidden">
      {/* Background Texture (Paper Grain) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply dark:mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 font-serif italic mb-6">
            <BookOpen className="w-4 h-4" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white mb-8 leading-tight">
            {data.title}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            {data.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
