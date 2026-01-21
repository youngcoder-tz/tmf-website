"use client";

import React from "react";
import { Code2 } from "lucide-react";

export function HackathonTimeline({ data }: { data: any }) {
  return (
    <section className="py-24 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-12 px-4 py-2 bg-purple-900/20 border border-purple-500/50 rounded-full text-purple-400 text-xs font-mono font-bold uppercase">
          <Code2 className="w-4 h-4" /> Next Event: Media Hack 2025
        </div>

        <div className="relative border-l-2 border-purple-900 ml-3 md:ml-0 space-y-12">
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className="relative pl-12 md:pl-0 md:flex md:gap-12 items-center group"
            >
              {/* Time (Left on Desktop) */}
              <div className="md:w-1/2 md:text-right">
                <span className="text-4xl font-black text-purple-600/50 group-hover:text-purple-500 transition-colors font-mono">
                  {item.time}
                </span>
              </div>

              {/* Center Dot */}
              <div className="absolute left-[-5px] top-3 md:left-1/2 md:-translate-x-[5px] w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7]" />

              {/* Content (Right on Desktop) */}
              <div className="md:w-1/2">
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.event}
                </h4>
                <p className="text-slate-400 text-sm max-w-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
