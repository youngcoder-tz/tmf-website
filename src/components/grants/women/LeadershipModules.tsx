"use client";

import React from "react";
import { Briefcase, PenTool, Smartphone, Users } from "lucide-react";

const IconMap: any = { Briefcase, PenTool, Smartphone, Users };

export function LeadershipModules({ data }: { data: any }) {
  return (
    <section className="py-24 bg-pink-50 dark:bg-[#2E0219]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-[#2E0219] dark:text-white mb-12 text-center">
          Core Modules
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item: any, idx: number) => {
            const Icon = IconMap[item.icon];
            return (
              <div
                key={idx}
                className="bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-pink-100 dark:border-white/10 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/40 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2E0219] dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-pink-200/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
