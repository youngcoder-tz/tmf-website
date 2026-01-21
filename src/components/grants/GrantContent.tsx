"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export function GrantContent({ data }: { data: any }) {
  return (
    <div className="space-y-16">
      {/* 1. Description */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white mb-6">
          About this Grant
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {data.description}
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
          This initiative is part of our broader strategy to strengthen
          investigative capacity in East Africa. Successful applicants will not
          only receive funding but also mentorship from senior editors.
        </p>
      </div>

      {/* 2. Eligibility Grid (Zone Style Cards) */}
      <div>
        <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-8">
          Who Can Apply?
        </h3>
        <div className="grid gap-4">
          {data.eligibility.map((item: string, idx: number) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-white/5"
            >
              <div className="mt-1 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-slate-700 dark:text-slate-200 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Timeline (Horizontal Steps) */}
      <div>
        <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-8">
          Application Timeline
        </h3>
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-10 py-2">
          {data.timeline_steps.map((step: any, idx: number) => (
            <div key={idx} className="relative pl-8">
              {/* Dot */}
              <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {step.date}
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
