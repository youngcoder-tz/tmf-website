"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Cpu, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Users, Cpu, ShieldCheck };

const PillarCard = ({ item, index }: { item: any; index: number }) => {
  const Icon = IconMap[item.icon];

  // Color Themes
  const colors: any = {
    indigo:
      "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 group-hover:border-indigo-500/50",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:border-cyan-500/50",
    emerald:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-500/50",
  };
  const theme = colors[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-default"
    >
      {/* Icon Sphere */}
      <div
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center mb-8 border backdrop-blur-xl transition-transform group-hover:scale-110 duration-500",
          theme,
        )}
      >
        <Icon className="w-10 h-10 stroke-[1.5]" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 font-serif">
        {item.title}
      </h3>

      <p className="text-slate-400 text-lg leading-relaxed mb-8">{item.desc}</p>

      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">
        <span>Explore Module</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
};

export function ValuePillars({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-serif">
            {data.headline}
          </h2>
          <p className="text-xl text-slate-400 font-light">
            {data.subheadline}
          </p>
        </div>

        {/* The Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.pillars.map((item: any, idx: number) => (
            <PillarCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
