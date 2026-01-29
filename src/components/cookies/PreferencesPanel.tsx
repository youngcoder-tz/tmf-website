"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  BarChart2,
  Megaphone,
  Settings2,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch"; // Assuming you have a switch component, or we build one below

const IconMap: any = {
  ShieldCheck,
  BarChart: BarChart2,
  Megaphone,
  Settings: Settings2,
};

// Custom Switch Component for High-End Feel
const CustomToggle = ({ checked, onToggle, disabled }: any) => (
  <div
    onClick={() => !disabled && onToggle(!checked)}
    className={cn(
      "w-14 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 flex items-center",
      disabled
        ? "opacity-50 cursor-not-allowed bg-emerald-500"
        : checked
          ? "bg-blue-600"
          : "bg-slate-300 dark:bg-slate-700",
    )}
  >
    <motion.div
      layout
      className="bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center"
      animate={{ x: checked ? 24 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {disabled ? <Check className="w-3 h-3 text-emerald-600" /> : null}
    </motion.div>
  </div>
);

export function PreferencesPanel({ data }: { data: any }) {
  // Simple state management for demo
  const [prefs, setPrefs] = useState<any>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: true,
  });

  const toggle = (id: string) => {
    setPrefs((prev: any) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-50 dark:bg-[#0B0F19] rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 border-b border-slate-200 dark:border-white/5 bg-white dark:bg-[#0F1322]">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Consent Preferences
            </h2>
            <p className="text-slate-500">
              Manage your privacy settings for this session.
            </p>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-white/5">
            {data.map((category: any) => {
              const Icon = IconMap[category.icon];
              const isChecked = category.required || prefs[category.id];

              return (
                <div
                  key={category.id}
                  className="p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center group hover:bg-slate-100/50 dark:hover:bg-white/[0.02] transition-colors"
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                      isChecked
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-slate-100 text-slate-400 dark:bg-slate-800",
                    )}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      {category.required && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
                      {category.desc}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div className="shrink-0">
                    <CustomToggle
                      checked={isChecked}
                      disabled={category.required}
                      onToggle={() => toggle(category.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Save Bar */}
          <div className="p-8 md:p-12 bg-slate-100 dark:bg-[#0B0F19] flex justify-end">
            <button className="h-14 px-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-lg hover:scale-105 transition-all">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
