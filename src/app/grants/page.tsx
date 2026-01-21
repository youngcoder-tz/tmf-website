"use client";

import React, { useState } from "react";
import { ZoneGrantCard } from "@/components/grants/ZoneGrantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Tag, ArrowRight } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function GrantsPage() {
  const data = siteContent.pages.grants_page;
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20">
      {/* HERO SECTION */}
      <div className="container mx-auto px-4 mb-16 text-center max-w-3xl">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">
          Opportunities
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          {data.hero.title}
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400">
          {data.hero.subtitle}
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: The Masonry Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-8">
              {data.programs.map((program: any) => (
                <ZoneGrantCard key={program.id} program={program} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-16 text-center">
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-bold"
              >
                Load More Opportunities
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar (4 cols) - Matches Zone UI Sidebar */}
          <div className="lg:col-span-4 space-y-12 sticky top-20 self-start pt-2">
            {/* 1. Search Widget */}
            <div className="bg-white dark:bg-slate-900 p-1 rounded-[1.5rem] shadow-sm border border-slate-100 dark:border-white/5 flex items-center">
              <Input
                placeholder="Search..."
                className="border-0 h-14 bg-transparent focus-visible:ring-0 text-base"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="pr-2">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* 2. Categories Widget */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Categories
              </h4>
              <div className="space-y-3">
                {data.sidebar.categories.map((cat: string) => (
                  <div
                    key={cat}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500 group-hover:scale-150 transition-transform" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Promo / Ad Card (Zone Style) */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

              <h4 className="text-2xl font-bold mb-4 relative z-10">
                {data.sidebar.promo.title}
              </h4>
              <p className="text-slate-300 mb-8 relative z-10 text-sm">
                {data.sidebar.promo.desc}
              </p>
              <Button className="w-full rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold h-12">
                {data.sidebar.promo.cta}
              </Button>
            </div>

            {/* 4. Tags Widget */}
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Popular Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.sidebar.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-slate-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
