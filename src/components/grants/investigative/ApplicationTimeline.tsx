"use client";

import React from "react";
import { motion } from "framer-motion";

export function ApplicationTimeline({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#0A0A0A] text-white overflow-hidden relative">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-5xl font-serif mb-6">{data.headline}</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We maintain a firewall between our donors and our editorial
                decisions. Here is how we ensure neutrality.
              </p>
            </div>
          </div>

          {/* Right: The Steps */}
          <div className="lg:w-2/3">
            <div className="relative border-l border-white/20 pl-12 space-y-24 py-4">
              {data.steps.map((step: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute -left-[53px] top-2 w-5 h-5 bg-[#0A0A0A] border-2 border-amber-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  </div>

                  <span className="text-xs font-mono text-amber-500 mb-2 block">
                    STAGE {step.stage}
                  </span>
                  <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
