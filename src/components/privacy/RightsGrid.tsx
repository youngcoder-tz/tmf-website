"use client";

import React from "react";
import { FileSearch, Trash2, Edit, ArrowRightLeft } from "lucide-react";

const IconMap: any = { FileSearch, Trash2, Edit, ArrowRightLeft };

export function RightsGrid({ data }: { data: any }) {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Your Rights
          </h2>
          <p className="text-slate-500">
            Under global data protection laws, you have specific powers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((right: any, idx: number) => {
            const Icon = IconMap[right.icon];
            return (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-[#0B0F19] border border-slate-100 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white mb-6 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {right.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {right.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
