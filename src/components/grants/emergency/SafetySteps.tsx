"use client";

import React from "react";

export function SafetySteps({ data }: { data: any }) {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold mb-6">Security Protocol</h2>
            <p className="text-slate-400">
              We prioritize your physical and digital safety above reporting.
              Our disbursement process leaves minimal paper trails.
            </p>
          </div>

          <div className="md:w-2/3 space-y-8 border-l border-white/10 pl-12 relative">
            {data.map((step: any, idx: number) => (
              <div key={idx} className="relative">
                {/* Node */}
                <div className="absolute -left-[57px] top-1 w-6 h-6 rounded-full bg-black border-2 border-red-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
                  <span className="text-red-600 font-mono text-sm">
                    0{idx + 1}
                  </span>{" "}
                  {step.label}
                </h3>
                <p className="text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
