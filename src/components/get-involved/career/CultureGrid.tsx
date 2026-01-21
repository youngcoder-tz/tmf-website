"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Monitor, Heart, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Laptop, Monitor, Heart, Plane };

const CultureCard = ({ item, index }: { item: any; index: number }) => {
  const Icon = IconMap[item.icon];

  // Size Classes
  const sizeClasses: any = {
    small: "col-span-1",
    large: "col-span-1 md:col-span-2 row-span-2",
    wide: "col-span-1 md:col-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/5 p-8 overflow-hidden hover:shadow-2xl transition-all duration-300",
        sizeClasses[item.size],
      )}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="w-14 h-14 rounded-2xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Decorative Blob on Hover */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export function CultureGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            {data.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {data.benefits.map((item: any, idx: number) => (
            <CultureCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
