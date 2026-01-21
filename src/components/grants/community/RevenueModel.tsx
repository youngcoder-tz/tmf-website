"use client";

import React from "react";

export function RevenueModel({ data }: { data: any }) {
  return (
    <section className="py-20 bg-white dark:bg-[#1A120E] border-t border-[#3F2E23]/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Financial Sustainability
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
            Our goal is independence. We train stations to transition from 100%
            grant dependence to a diverse revenue mix within 3 years.
          </p>
          <div className="space-y-4">
            {data.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-16 text-right font-bold text-slate-900 dark:text-white">
                  {item.percent}%
                </div>
                <div className="flex-1 h-3 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <div className="w-32 text-sm text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wide">
                  {item.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Donut Chart Representation */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full border-[16px] border-orange-100 dark:border-white/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-black text-orange-600">3yr</div>
              <div className="text-xs uppercase font-bold text-slate-400">
                Target Plan
              </div>
            </div>
            {/* Decorative Segments */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#F97316"
                strokeWidth="10"
                strokeDasharray="70 100"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
