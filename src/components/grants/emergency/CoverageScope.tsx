"use client";

import React from "react";
import {
  Scale,
  HeartPulse,
  Laptop,
  Home,
  Gavel,
  ShieldAlert,
} from "lucide-react";

// FIX: Added 'Gavel' to the map to match the JSON data.
const IconMap: any = {
  Scale,
  HeartPulse,
  Laptop,
  Home,
  Gavel,
};

export function CoverageScope({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0F0F0F]">
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
            // FIX: Add a fallback || ShieldAlert to prevent crashes if icon name is wrong
            const Icon = IconMap[item.icon] || ShieldAlert;

            return (
              <div
                key={idx}
                className="bg-[#141414] border border-white/5 p-8 rounded-[2rem] hover:border-red-900/50 transition-colors group"
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
