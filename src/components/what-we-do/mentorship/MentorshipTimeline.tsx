"use client";

import React from "react";

export function MentorshipTimeline({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#151221] border-y border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-16 dark:text-white">
          The 6-Month Roadmap
        </h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-[2px] bg-slate-200 dark:bg-white/10 -z-10" />

          {data.map((step: any, idx: number) => (
            <div key={idx} className="text-center relative">
              <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-6 ring-4 ring-white dark:ring-[#151221]" />
              <p className="text-xs font-bold uppercase text-purple-500 mb-2">
                {step.month}
              </p>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
