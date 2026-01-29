"use client";

import React from "react";
import { Users, FileText, Cpu, BarChart } from "lucide-react";

const IconMap: any = {
  Programmes: FileText,
  "Finance & Admin": Users,
  "Digital Lab": Cpu,
  "M&E": BarChart,
};

export function OrgStructure({ data }: { data: any }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0B0F17]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-12">
          {data.headline}
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {data.departments.map((dept: any, idx: number) => {
            const Icon = IconMap[dept.name];
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 shadow-xl mb-4 relative z-10">
                  <Icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-slate-900">
                    {dept.count}
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {dept.name}
                </h4>
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  {dept.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
