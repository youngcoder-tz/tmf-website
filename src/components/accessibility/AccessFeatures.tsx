"use client";

import React from "react";
import { AudioLines, Keyboard, Eye, BrainCircuit } from "lucide-react";

const IconMap: any = { Speech: AudioLines, Keyboard, Eye, Brain: BrainCircuit };

export function AccessFeatures({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineered for Inclusion
          </h2>
          <p className="text-slate-400">
            Our site goes beyond basic compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((feat: any, idx: number) => {
            const Icon = IconMap[feat.icon];
            return (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors hover:-translate-y-1 duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center text-black mb-6 shadow-lg shadow-yellow-500/20">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
