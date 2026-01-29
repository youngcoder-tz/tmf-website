"use client";

import React from "react";

export function ImpactSpread({ data }: { data: any }) {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-indigo-800">
          {data.stats.map((stat: any, idx: number) => (
            <div key={idx} className="p-4">
              <div className="text-6xl font-black text-indigo-200 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
