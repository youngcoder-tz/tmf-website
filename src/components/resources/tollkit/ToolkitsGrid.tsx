"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  FileText,
  Lock,
  Database,
  Mic,
  Eye,
  Download,
  ArrowRight,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const IconMap: any = { ShieldAlert, FileText, Lock, Database, Mic, Eye };

const ToolCard = ({ tool, index }: { tool: any; index: number }) => {
  const Icon = IconMap[tool.icon] || Package;

  // Dynamic Color Styles
  const colorStyles: any = {
    red: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-100 dark:border-red-900/50",
    blue: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-100 dark:border-blue-900/50",
    purple:
      "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 border-purple-100 dark:border-purple-900/50",
    emerald:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50",
    orange:
      "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-orange-100 dark:border-orange-900/50",
    slate:
      "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-100 dark:border-slate-700",
  };
  const theme = colorStyles[tool.color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-white/5 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Top Icon */}
      <div
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110",
          theme,
        )}
      >
        <Icon className="w-8 h-8" />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
          {tool.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[3rem]">
          {tool.desc}
        </p>
      </div>

      {/* Contents List (Visible) */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-6">
        <p className="text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">
          Includes:
        </p>
        <ul className="space-y-1">
          {tool.items.map((item: string, idx: number) => (
            <li
              key={idx}
              className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"
            >
              <div
                className={cn("w-1.5 h-1.5 rounded-full", theme.split(" ")[1])}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Action */}
      <div className="flex items-center justify-between mt-auto">
        <Badge
          variant="secondary"
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-500"
        >
          {tool.format}
        </Badge>
        <Button
          size="icon"
          className={cn(
            "rounded-full w-10 h-10 transition-colors",
            theme
              .replace("bg-", "hover:bg-")
              .replace(
                "text-",
                "text-white bg-slate-900 dark:bg-white dark:text-slate-900",
              ),
          )}
        >
          <Download className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export function ToolkitsGrid({ data }: { data: any }) {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white dark:bg-slate-900 p-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
            {["All", ...data.categories].map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeCat === cat
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.tools.map((tool: any, idx: number) => (
            <ToolCard key={tool.id} tool={tool} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
