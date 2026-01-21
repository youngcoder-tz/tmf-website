"use client";

import React from "react";
import { Users, Award, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Users, Award, MapPin };

export function VolunteerPerks({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((perk: any, idx: number) => {
            const Icon = IconMap[perk.icon];
            return (
              <div
                key={idx}
                className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center shrink-0 text-teal-600 dark:text-teal-400">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
