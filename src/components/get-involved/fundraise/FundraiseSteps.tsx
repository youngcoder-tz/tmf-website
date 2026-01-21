"use client";

import React from "react";

export function FundraiseSteps({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0B1120] border-y border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {data.map((step: any, idx: number) => (
            <div key={idx} className="text-center relative">
              {/* Connector Line */}
              {idx !== data.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-200 dark:bg-white/10 -z-10" />
              )}

              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-black text-orange-500 mx-auto mb-6 shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
