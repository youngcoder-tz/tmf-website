"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

// --- SUB-COMPONENT: Timeline Node ---
const TimelineNode = ({
  item,
  index,
  isLast,
}: {
  item: any;
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const isEven = index % 2 === 0;

  // Color Mapping based on Zone UI screenshot
  const colorMap: any = {
    orange: "bg-orange-500 text-orange-600",
    purple: "bg-purple-600 text-purple-600",
    blue: "bg-blue-600 text-blue-600",
    green: "bg-emerald-500 text-emerald-600",
  };
  const dotColor = colorMap[item.color] || colorMap.blue;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex justify-between md:justify-center items-center w-full",
        !isLast && "mb-16 md:mb-24"
      )}
    >
      {/* 1. LEFT CONTENT (Only on Even indices for Desktop) */}
      <div className="w-[45%] hidden md:block text-right pr-12">
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span
              className={cn(
                "text-sm font-bold uppercase tracking-wider mb-2 block",
                dotColor.split(" ")[1]
              )}
            >
              {item.year}
            </span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {item.title}
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        )}
      </div>

      {/* 2. CENTER LINE & DOT */}
      <div className="relative flex flex-col items-center z-10">
        {/* The Colored Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 shadow-lg",
            dotColor.split(" ")[0]
          )}
        />
        {/* Year Label (Mobile Only) */}
        <div className="md:hidden absolute left-10 top-0">
          <span
            className={cn(
              "text-sm font-bold px-2 py-1 rounded-md bg-opacity-10",
              dotColor.replace("bg-", "bg-").replace("text-", "text-")
            )}
          >
            {item.year}
          </span>
        </div>
      </div>

      {/* 3. RIGHT CONTENT (Only on Odd indices for Desktop, Always for Mobile) */}
      <div
        className={cn("w-[calc(100%-40px)] md:w-[45%] pl-8 md:pl-12 text-left")}
      >
        {!isEven && (
          <motion.div // Desktop Odd
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <span
              className={cn(
                "text-sm font-bold uppercase tracking-wider mb-2 block",
                dotColor.split(" ")[1]
              )}
            >
              {item.year}
            </span>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {item.title}
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        )}

        {/* Mobile View (Always show content on right) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="md:hidden"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {item.title}
          </h3>
          <p className="text-slate-500 leading-relaxed">{item.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export function StoryTimeline({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        {/* Header (Centered & Bold) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            {data.header.title}
          </h2>
          <p className="text-xl text-slate-500">{data.header.subtitle}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Grey Line */}
          <div className="absolute left-2.75 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="py-10">
            {data.items.map((item: any, idx: number) => (
              <TimelineNode
                key={idx}
                item={item}
                index={idx}
                isLast={idx === data.items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
