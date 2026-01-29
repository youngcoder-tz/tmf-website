"use client";

import React from "react";
import { School, Users, Newspaper, Check } from "lucide-react";

const IconMap: any = { School, Users, Newspaper };

export function CurriculumTracks({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#F5F2ED]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#1C1917]">
            Targeted Education
          </h2>
          <p className="text-stone-500">
            We tailor our curriculum for three distinct ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((track: any, idx: number) => {
            const Icon = IconMap[track.icon];
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-stone-100"
              >
                <div className="w-16 h-16 bg-[#F5F2ED] rounded-2xl flex items-center justify-center text-indigo-900 mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2 block">
                  {track.audience}
                </span>
                <h3 className="text-2xl font-bold text-[#1C1917] mb-4 font-serif">
                  {track.title}
                </h3>
                <p className="text-stone-500 mb-8 leading-relaxed text-sm h-16">
                  {track.desc}
                </p>

                <div className="space-y-3 pt-6 border-t border-stone-100">
                  {track.modules.map((mod: string, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium text-stone-700"
                    >
                      <Check className="w-4 h-4 text-green-500" />
                      {mod}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
