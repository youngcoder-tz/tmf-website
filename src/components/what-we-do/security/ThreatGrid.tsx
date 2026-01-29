"use client";

import React from "react";
import { Eye, HardDrive, UserX } from "lucide-react";

const IconMap: any = { Eye, HardDrive, UserX };

export function ThreatGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0A0F14]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-mono font-bold text-white mb-2">
            Threat Vector Analysis
          </h2>
          <p className="text-slate-500 font-mono text-sm">
            Common attack surfaces for media professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item: any, idx: number) => {
            const Icon = IconMap[item.icon];
            return (
              <div
                key={idx}
                className="bg-[#11161C] border border-cyan-900/30 p-8 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-900/20 rounded flex items-center justify-center text-cyan-500 mb-6 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-mono">
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
