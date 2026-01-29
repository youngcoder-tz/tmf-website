"use client";

import React from "react";

export function AwardList({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#140A00] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Other Honors</h3>
        </div>

        <div className="space-y-2">
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="flex items-center gap-6 mb-2 sm:mb-0">
                <span className="text-yellow-500/50 font-mono font-bold">
                  {item.year}
                </span>
                <span className="text-lg font-bold text-white">
                  {item.title}
                </span>
              </div>
              <span className="text-sm text-slate-400 uppercase tracking-wider text-right">
                {item.org}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
