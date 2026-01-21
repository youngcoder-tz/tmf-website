"use client";

import React from "react";
import { Shield, Lock } from "lucide-react";

export function SafetyVault({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-[#1F0212] border-t border-pink-100 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="bg-[#2E0219] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Texture */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3 text-center md:text-left">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-lg shadow-pink-600/40">
                <Shield className="w-10 h-10 fill-current" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">
                {data.title}
              </h2>
              <p className="text-pink-200">
                We prioritize the physical and mental well-being of every
                fellow.
              </p>
            </div>

            <div className="md:w-2/3 grid gap-6">
              {data.features.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <Lock className="w-5 h-5 text-pink-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.label}</h4>
                    <p className="text-sm text-pink-200/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
