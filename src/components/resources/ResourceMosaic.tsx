"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, FileText, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const MosaicCard = ({ item, index }: { item: any; index: number }) => {
  // Styles based on 'size' prop
  const sizeClasses: any = {
    standard: "col-span-1 row-span-1",
    wide: "col-span-1 md:col-span-2 row-span-1",
    tall: "col-span-1 row-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",
        sizeClasses[item.size],
      )}
    >
      <Link href={item.download_link} className="flex flex-col h-full">
        {/* IMAGE AREA */}
        <div
          className={cn(
            "relative overflow-hidden",
            item.size === "tall" ? "h-3/5" : "h-64",
          )}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

          {/* Floating Badge */}
          <div className="absolute top-6 left-6">
            <Badge className="bg-white/90 text-slate-900 backdrop-blur-md border-0 px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-sm">
              {item.type}
            </Badge>
          </div>

          {/* Hover Action Button (Center) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <Download className="w-6 h-6 text-slate-900" />
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="p-8 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-amber-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Tech Specs Footer */}
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3" /> {item.stats.format}
              </span>
              <span>{item.stats.size}</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export function ResourceMosaic({ data }: { data: any }) {
  return (
    <section className="pb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item: any, idx: number) => (
            <MosaicCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
