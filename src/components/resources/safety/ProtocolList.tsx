"use client";

import React from "react";
import { ShieldAlert, Smartphone, Gavel } from "lucide-react";

const IconMap: any = { Handcuffs: Gavel, Shield: ShieldAlert, Smartphone };

export function ProtocolList({ data }: { data: any }) {
  return (
    <section className="py-20 bg-[#292524]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-6">
          {data.map((proto: any, idx: number) => {
            const Icon = IconMap[proto.icon] || ShieldAlert;
            return (
              <div
                key={idx}
                className="bg-[#1C1917] border border-stone-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="p-6 md:p-8 flex items-center gap-6 border-b border-stone-800">
                  <div className="w-14 h-14 bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {proto.title}
                  </h3>
                </div>
                <div className="p-6 md:p-8 bg-black/20">
                  <ul className="space-y-4">
                    {proto.steps.map((step: string, i: number) => (
                      <li key={i} className="flex gap-4 text-stone-300">
                        <span className="text-orange-600 font-bold font-mono">
                          0{i + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
