"use client";

import React from "react";
import { motion } from "framer-motion";

export function PedagogySection({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-serif">
            {data.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {data.steps.map((step: any, idx: number) => (
            <div key={idx} className="relative text-center group">
              {/* Connector Line */}
              {idx !== data.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-slate-200 dark:bg-slate-800 -z-10" />
              )}

              <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-900 border-4 border-white dark:border-slate-800 shadow-xl rounded-full flex items-center justify-center text-xl font-black text-blue-600 mb-6 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
                {step.step}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
