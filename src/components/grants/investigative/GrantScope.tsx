"use client";

import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Scale, Gavel, Trees, Database, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = { Scale, Gavel, TreeDeciduous: Trees, Database };

export function GrantScope({ data }: { data: any }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-[#0F0F0F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/5 pb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Funding Tracks
          </h2>
          <p className="text-slate-500 font-mono text-sm">
            SELECT A DOMAIN TO VIEW DETAILS
          </p>
        </div>

        <LayoutGroup>
          <div className="grid md:grid-cols-2 gap-6">
            {data.map((track: any) => {
              const Icon = IconMap[track.icon];
              const isSelected = selectedId === track.id;

              return (
                <motion.div
                  layout
                  key={track.id}
                  onClick={() => setSelectedId(isSelected ? null : track.id)}
                  className={cn(
                    "relative p-8 rounded-[1rem] border cursor-pointer overflow-hidden transition-colors duration-500",
                    isSelected
                      ? "bg-slate-900 border-amber-500/50 col-span-1 md:col-span-2"
                      : "bg-[#1A1A1A] border-white/5 hover:border-white/10",
                  )}
                >
                  {/* Header Row */}
                  <motion.div
                    layout="position"
                    className="flex justify-between items-start mb-6"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                          isSelected
                            ? "bg-amber-500 text-black"
                            : "bg-white/5 text-slate-400",
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            "text-xl font-bold transition-colors",
                            isSelected ? "text-white" : "text-slate-300",
                          )}
                        >
                          {track.title}
                        </h3>
                        {isSelected && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-amber-500 font-mono uppercase tracking-wider"
                          >
                            Active Priority
                          </motion.span>
                        )}
                      </div>
                    </div>

                    <div className="text-slate-500">
                      {isSelected ? (
                        <X className="w-6 h-6" />
                      ) : (
                        <Plus className="w-6 h-6" />
                      )}
                    </div>
                  </motion.div>

                  {/* Content (Collapsible) */}
                  <div className="relative">
                    <motion.p
                      layout="position"
                      className={cn(
                        "text-slate-400 leading-relaxed max-w-2xl",
                        isSelected ? "text-lg" : "text-sm line-clamp-2",
                      )}
                    >
                      {track.desc}
                    </motion.p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
                      >
                        <div>
                          <span className="text-xs text-slate-500 font-bold uppercase block mb-1">
                            Grant Ceiling
                          </span>
                          <span className="text-xl font-mono text-white">
                            {track.budget}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-slate-500 font-bold uppercase block mb-1">
                            Risk Level
                          </span>
                          <span className="text-xl font-mono text-white">
                            High
                          </span>
                        </div>
                        <div className="col-span-2 flex justify-end items-center">
                          <button className="text-sm font-bold text-amber-500 uppercase tracking-widest hover:underline decoration-amber-500 underline-offset-4">
                            Download Guidelines
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
