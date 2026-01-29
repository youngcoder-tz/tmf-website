"use client";

import React from "react";
import { MessageSquare, Lock, Globe, Key } from "lucide-react";

const IconMap: any = { MessageSquare, Lock, Globe, Key };

export function SecurityTools({ data }: { data: any }) {
  return (
    <section className="py-20 bg-[#050A0E] border-t border-cyan-900/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-mono text-cyan-500 mb-12 uppercase tracking-widest">
          [ Approved Toolset ]
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {data.map((tool: any, idx: number) => {
            const Icon = IconMap[tool.icon];
            return (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-white">{tool.name}</p>
                  <p className="text-xs text-slate-500 uppercase">
                    {tool.type}
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
