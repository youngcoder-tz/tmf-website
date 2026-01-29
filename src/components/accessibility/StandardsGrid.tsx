"use client";

import React from "react";

export function StandardsGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col justify-center">
            <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm mb-4">
              WCAG 2.1 AA
            </span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
              The 4 Pillars of Accessibility
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We audit our code and content quarterly against the international
              standards set by the World Wide Web Consortium (W3C).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {data.map((std: any, idx: number) => (
              <div
                key={idx}
                className="p-6 bg-slate-50 dark:bg-[#0B0F19] rounded-2xl border border-slate-100 dark:border-white/5"
              >
                <div className="text-4xl font-black text-slate-200 dark:text-slate-800 mb-2">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {std.principle}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
