"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Accessibility, Eye, Type, Volume2, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AccessHero({ data }: { data: any }) {
  const [fontSize, setFontSize] = useState("normal");
  const [contrast, setContrast] = useState("normal");

  return (
    <section className="relative min-h-[90vh] bg-white dark:bg-slate-950 flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/50 via-transparent to-transparent dark:from-yellow-900/10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-8 border border-yellow-200 dark:border-yellow-800">
              <Accessibility className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              {data.subtitle}
            </p>

            <div className="flex items-center gap-3 text-sm font-bold text-slate-900 dark:text-white">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              Current Status: {data.conformance}
            </div>
          </motion.div>

          {/* RIGHT: The "A11Y Sandbox" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-100 dark:bg-[#0B0F17] rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/10 shadow-2xl relative"
          >
            <div className="absolute top-6 right-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              Live Demo
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Preference Simulator
              </h3>

              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-slate-500 mb-3 flex items-center gap-2">
                    <Type className="w-4 h-4" /> Text Size
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setFontSize("normal")}
                      variant="outline"
                      className={cn(
                        "flex-1",
                        fontSize === "normal" &&
                          "bg-slate-900 text-white dark:bg-white dark:text-black",
                      )}
                    >
                      A
                    </Button>
                    <Button
                      onClick={() => setFontSize("large")}
                      variant="outline"
                      className={cn(
                        "flex-1 text-lg",
                        fontSize === "large" &&
                          "bg-slate-900 text-white dark:bg-white dark:text-black",
                      )}
                    >
                      A+
                    </Button>
                    <Button
                      onClick={() => setFontSize("xl")}
                      variant="outline"
                      className={cn(
                        "flex-1 text-xl",
                        fontSize === "xl" &&
                          "bg-slate-900 text-white dark:bg-white dark:text-black",
                      )}
                    >
                      A++
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500 mb-3 flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Contrast Mode
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setContrast("normal")}
                      variant="outline"
                      className={cn(
                        "flex-1",
                        contrast === "normal" &&
                          "bg-slate-900 text-white dark:bg-white dark:text-black",
                      )}
                    >
                      Default
                    </Button>
                    <Button
                      onClick={() => setContrast("high")}
                      variant="outline"
                      className={cn(
                        "flex-1 font-bold",
                        contrast === "high" &&
                          "bg-yellow-400 text-black border-black",
                      )}
                    >
                      High Contrast
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Preview Area */}
            <div
              className={cn(
                "p-6 rounded-xl transition-all duration-300 min-h-[150px]",
                contrast === "high"
                  ? "bg-black text-yellow-400 border-4 border-yellow-400"
                  : "bg-white text-slate-600 border border-slate-200",
              )}
            >
              <p
                className={cn(
                  "leading-relaxed transition-all duration-300",
                  fontSize === "normal"
                    ? "text-base"
                    : fontSize === "large"
                      ? "text-xl"
                      : "text-2xl font-bold",
                )}
              >
                "Access to information is a fundamental human right. Our
                technology adapts to your needs, not the other way around."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
