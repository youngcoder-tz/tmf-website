"use client";

import React from "react";
import { Scale, HeartPulse, Camera, Home } from "lucide-react";

const IconMap: any = { Scale, HeartPulse, Camera, Home };

export function EligibilityGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What We Cover
          </h2>
          <p className="text-slate-500">
            Immediate assistance for threats related to your journalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item: any, idx: number) => {
            const Icon = IconMap[item.icon];
            return (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-red-500/20 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:bg-red-50 dark:group-hover:bg-red-900/20 transition-all mb-6 shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
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
