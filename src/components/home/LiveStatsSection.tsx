"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import {
  Banknote,
  Users,
  Radio,
  Heart,
  ArrowRight,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- HELPERS ---
const IconMap: any = { Banknote, Users, Radio, Heart, Activity };

// --- SUB-COMPONENT: Animated Counter ---
const Counter = ({
  value,
  suffix,
  color,
}: {
  value: number;
  suffix: string;
  color: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: "easeOut" });
    }
  }, [inView, value, count]);

  // 🔥 Correct place for side effects
  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });

    return unsubscribe;
  }, [rounded]);

  const colorMap: Record<string, string> = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };

  return (
    <span
      className={cn(
        "text-5xl md:text-6xl font-bold font-heading tracking-tight",
        colorMap[color] || "text-white"
      )}
    >
      <motion.span ref={ref} />
      {suffix}
    </span>
  );
};
// --- MAIN COMPONENT ---
export function LiveStatsSection({ data }: { data: any }) {
  if (!data?.enabled) return null;

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* 1. ANIMATED BACKGROUND MESH */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-700" />

        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER ROW */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2 text-emerald-400">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Live System Metrics
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-2">
              {data.header.title}
            </h2>
            <p className="text-slate-400 max-w-lg">{data.header.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link href={data.header.cta_url}>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full transition-all group"
              >
                {data.header.cta_label}{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.metrics.map((metric: any, idx: number) => {
            const Icon = IconMap[metric.icon] || Activity;

            // Border Colors mapping
            const borderMap: any = {
              blue: "group-hover:border-blue-500/50",
              emerald: "group-hover:border-emerald-500/50",
              purple: "group-hover:border-purple-500/50",
              pink: "group-hover:border-pink-500/50",
            };

            // Background Glow mapping
            const glowMap: any = {
              blue: "bg-blue-500/10",
              emerald: "bg-emerald-500/10",
              purple: "bg-purple-500/10",
              pink: "bg-pink-500/10",
            };

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1",
                  borderMap[metric.color]
                )}
              >
                {/* Hover Glow Background */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    glowMap[metric.color]
                  )}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Bubble */}
                  <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Counter */}
                  <Counter
                    value={metric.value}
                    suffix={metric.suffix}
                    color={metric.color}
                  />

                  {/* Label */}
                  <p className="mt-2 text-sm font-medium text-slate-400 uppercase tracking-wide">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
