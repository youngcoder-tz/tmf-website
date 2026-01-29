"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Info, Calendar, UserX } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = {
  1: UserX,
  2: Calendar,
  3: AlertTriangle,
  4: Info,
};

export function DisinfoDeconstruct({ data }: { data: any }) {
  const [activePoint, setActivePoint] = useState<number>(1);

  return (
    <section className="py-32 bg-[#1C1917] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            {data.headline}
          </h2>
          <p className="text-stone-400">{data.subheadline}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: The "Fake News" Artifact */}
          <div className="relative">
            {/* Fake Social Media Card */}
            <div className="bg-white text-black p-6 rounded-2xl shadow-2xl relative z-10 max-w-md mx-auto transform rotate-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-stone-300" />
                <div>
                  <div className="w-32 h-3 bg-stone-800 rounded mb-1" />
                  <div className="w-16 h-2 bg-stone-400 rounded" />
                </div>
              </div>
              <div className="h-48 bg-red-100 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-red-300 text-red-400 font-mono text-sm p-4 text-center">
                [MANIPULATED IMAGE]
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-stone-200 rounded" />
                <div className="w-full h-3 bg-stone-200 rounded" />
                <div className="w-2/3 h-3 bg-stone-200 rounded" />
              </div>

              {/* Hotspots */}
              {data.points.map((p: any) => (
                <button
                  key={p.id}
                  onClick={() => setActivePoint(p.id)}
                  className={cn(
                    "absolute w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 z-20 shadow-lg",
                    activePoint === p.id
                      ? "bg-indigo-600 text-white border-white scale-125"
                      : "bg-white text-indigo-600 border-indigo-600 hover:scale-110",
                  )}
                  style={{
                    top:
                      p.id === 1
                        ? "10%"
                        : p.id === 2
                          ? "15%"
                          : p.id === 3
                            ? "55%"
                            : "85%",
                    left:
                      p.id === 1
                        ? "85%"
                        : p.id === 2
                          ? "20%"
                          : p.id === 3
                            ? "50%"
                            : "10%",
                  }}
                >
                  {p.id}
                </button>
              ))}
            </div>

            {/* Decor */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />
          </div>

          {/* RIGHT: The Explanation */}
          <div>
            <div className="space-y-4">
              {data.points.map((p: any) => {
                const Icon = IconMap[p.id];
                const isActive = activePoint === p.id;

                return (
                  <motion.div
                    key={p.id}
                    initial={false}
                    animate={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(255,255,255,0)",
                      x: isActive ? 20 : 0,
                    }}
                    className="p-6 rounded-2xl cursor-pointer border border-transparent hover:border-white/10"
                    onClick={() => setActivePoint(p.id)}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                          isActive
                            ? "bg-indigo-600 text-white"
                            : "bg-white/5 text-stone-500",
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4
                          className={cn(
                            "text-xl font-bold mb-2",
                            isActive ? "text-white" : "text-stone-400",
                          )}
                        >
                          {p.label}
                        </h4>
                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="text-stone-300 leading-relaxed overflow-hidden"
                            >
                              {p.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
