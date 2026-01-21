"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSearch, Scale, Lightbulb, Users2 } from "lucide-react";

// --- HELPERS ---
const IconMap: any = { FileSearch, Scale, Lightbulb, Users2 };

// --- SUB-COMPONENT: Value Card ---
const ValueCard = ({ item, index }: { item: any; index: number }) => {
  const Icon = IconMap[item.icon] || FileSearch;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Icon (Orange Outline Style) */}
      <div className="mb-6 inline-block">
        <Icon className="w-12 h-12 text-orange-500 stroke-[1.5]" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
        {item.desc}
      </p>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export function CoreValues({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              {data.headline}
            </h2>
          </div>
          <div>
            <p className="text-xl text-slate-500 leading-relaxed border-l-4 border-orange-500 pl-6">
              {data.subheadline}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item: any, idx: number) => (
            <ValueCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
