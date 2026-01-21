"use client";

import React from "react";
import { Users } from "lucide-react";

export function Demographics({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-100 dark:bg-[#1E293B]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-6 h-6 text-teal-500" />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            {data.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.groups.map((group: any, idx: number) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-lg border-t-4 border-teal-500"
            >
              <h4 className="text-lg font-bold text-slate-400 mb-2">
                {group.label}
              </h4>
              <div className="text-5xl font-black text-slate-900 dark:text-white mb-4">
                {group.score}
                <span className="text-lg text-teal-500 ml-1">/100</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                "{group.insight}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
