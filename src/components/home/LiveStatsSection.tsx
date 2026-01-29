"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { Activity, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- IMPORT YOUR LOTTIE JSON FILES HERE ---
// For this example, I am assuming you have these JSON files in your project.
// If you don't, go to lottiefiles.com to download generic ones to test.
import animBanknote from "@/assets/lotties/rentya-pay-ownership.json";
import animUsers from "@/assets/lotties/Arabic Lottie - Users.json";
import animRadio from "@/assets/lotties/Business Partnership _ Contract _ Handshake.json";
import animHeart from "@/assets/lotties/trust animation.json";
import Lottie from "lottie-react";

// --- CONFIG ---
const LottieMap: any = {
  Banknote: animBanknote,
  Users: animUsers,
  Radio: animRadio,
  Heart: animHeart,
};

// --- SUB-COMPONENT: Smart Lottie Icon ---
const AnimatedIcon = ({
  animationData,
  isHovered,
}: {
  animationData: any;
  isHovered: boolean;
}) => {
  // If no animation data is found, return null or a fallback
  if (!animationData)
    return <div className="w-full h-full bg-slate-500/20 rounded-full" />;

  return (
    <Lottie
      loop
      animationData={animationData}
      className="drop-shadow-lg" // Adds depth to the SVG shape
    />
  );
};

// --- SUB-COMPONENT: Animated Counter (Unchanged) ---
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
  const rounded = useSpring(count, { stiffness: 40, damping: 25 });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 3, ease: "circOut" });
    }
  }, [inView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current)
        ref.current.textContent = Math.floor(latest).toLocaleString();
    });
    return unsubscribe;
  }, [rounded]);

  const colorMap: Record<string, string> = {
    blue: "text-blue-600 dark:text-blue-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
    purple: "text-purple-600 dark:text-purple-400",
    pink: "text-pink-600 dark:text-pink-400",
    orange: "text-orange-600 dark:text-orange-400",
  };

  return (
    <span
      className={cn(
        "text-3xl md:text-4xl  font-extrabold tracking-tighter tabular-nums",
        colorMap[color],
      )}
    >
      <motion.span ref={ref} />
      <span className="opacity-80 ml-0.5">{suffix}</span>
    </span>
  );
};

// --- SUB-COMPONENT: Stat Card (Updated for Lottie) ---
const StatCard = ({ metric, index }: { metric: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const animationData = LottieMap[metric.icon];

  // Cinematic Gradients for Icon Backgrounds
  const iconBgMap: Record<string, string> = {
    blue: "from-blue-500/10 to-blue-500/5 border-blue-200 dark:border-blue-500/20",
    emerald:
      "from-emerald-500/10 to-emerald-500/5 border-emerald-200 dark:border-emerald-500/20",
    purple:
      "from-purple-500/10 to-purple-500/5 border-purple-200 dark:border-purple-500/20",
    pink: "from-pink-500/10 to-pink-500/5 border-pink-200 dark:border-pink-500/20",
  };

  const activeBg = iconBgMap[metric.color] || iconBgMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full overflow-hidden rounded-[2rem] flex bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1">
        {/* Hover Gradient Overlay */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br",
            `from-${metric.color}-500 to-transparent`,
          )}
        />

        <div className="relative z-10 flex gap-4 items-start h-full justify-between">
          {/* LOTTIE ICON CONTAINER */}
          <div className="flex items-start justify-between ">
            <div
              className={cn(
                "flex items-center justify-center w-30 h-30 overflow-hidden p-0 rounded-2xl border bg-linear-to-br backdrop-blur-md shadow-sm transition-transform duration-500 group-hover:scale-105",
                activeBg,
              )}
            >
              <AnimatedIcon
                animationData={animationData}
                isHovered={isHovered}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Counter
              value={metric.value}
              suffix={metric.suffix}
              color={metric.color}
            />
            <h3 className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
              {metric.label}
            </h3>
            {metric.description && (
              <p className="text-xs md:text-[13px] text-slate-500 dark:text-slate-500 leading-relaxed">
                {metric.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export function LiveStatsSection({ data }: { data: any }) {
  if (!data?.enabled) return null;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] opacity-70 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        {/* --- Header Row --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 pb-4 border-b border-border ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2 text-emerald-400">
              <Activity className="w-5 h-5 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Live System Metrics
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2 font-heading leading-tight text-foreground/80">
              {data.header.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-lg">
              {data.header.subtitle}
            </p>
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
                className="border-white/20 text-slate-900 dark:text-white dark:border-white/20 hover:bg-white/10 hover:text-slate-500 cursor-pointer rounded-full transition-all group"
              >
                {data.header.cta_label}{" "}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.metrics.map((metric: any, idx: number) => (
            <StatCard key={metric.id} metric={metric} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
