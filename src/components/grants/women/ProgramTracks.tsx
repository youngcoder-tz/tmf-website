"use client";

import React from "react";
import { Crown, Camera, Shield, ArrowUpRight } from "lucide-react";

const IconMap: any = { Crown, Camera, ShieldHeart: Shield };

export function ProgramTracks({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-[#1F0212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#2E0219] dark:text-pink-100">
            Three Paths to Leadership
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((track: any, idx: number) => {
            const Icon = IconMap[track.icon];
            return (
              <div
                key={idx}
                className="group p-8 rounded-[2.5rem] bg-pink-50 dark:bg-[#2E0219] border border-pink-100 dark:border-pink-500/10 hover:border-pink-500/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-16 h-16 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-6 shadow-sm relative z-10">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-[#2E0219] dark:text-white mb-3">
                    {track.title}
                  </h3>
                  <p className="text-slate-600 dark:text-pink-200/60 leading-relaxed mb-8 min-h-[4rem]">
                    {track.desc}
                  </p>

                  <div className="pt-6 border-t border-pink-200 dark:border-white/5 flex justify-between items-center">
                    <span className="font-mono text-sm font-bold text-pink-600 dark:text-pink-400">
                      {track.grant}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
