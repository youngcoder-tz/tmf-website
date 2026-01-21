"use client";

import React from "react";
import Image from "next/image";
import { Zap, RadioTower, Mic2 } from "lucide-react";

export function TechGallery({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#EBE5E0] dark:bg-[#201A16]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white font-bold mb-4">
            Infrastructure Upgrades
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Technical specifications of equipment provided to grantees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item: any, idx: number) => (
            <div
              key={idx}
              className="group bg-white dark:bg-[#2A1F18] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-64 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Tech Specs */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
                  {item.model}
                </p>

                <div className="mb-6 p-3 bg-slate-100 dark:bg-black/20 rounded-lg border border-slate-200 dark:border-white/5">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    <span className="font-bold">Spec:</span> {item.spec}
                  </p>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
