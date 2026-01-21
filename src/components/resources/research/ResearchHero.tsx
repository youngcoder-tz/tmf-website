"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResearchHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scaleGraphic = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={containerRef}
      className="
        relative  flex items-center overflow-hidden
        pt-32 pb-24
        bg-background
      "
    >
      {/* ───────────────── BACKGROUND GRID ───────────────── */}
      <div className="absolute inset-0 z-0 opacity-[0.25] dark:opacity-[0.2]">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
                linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
            bg-size-[48px_48px]
          "
        />
      </div>

      {/* Soft background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="
            absolute -bottom-50 left-1/2 -translate-x-1/2
            w-225 h-100
            bg-primary/20
            blur-[140px]
          "
        />
      </div>

      {/* ───────────────── CONTENT ───────────────── */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* ───── LEFT CONTENT ───── */}
          <motion.div style={{ y: yContent }}>
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                bg-primary/10
                border border-primary/20
                text-primary
                text-xs font-semibold
                tracking-[0.25em] uppercase
                mb-8
              "
            >
              <BarChart3 className="w-4 h-4" />
              {data.badge}
            </div>

            {/* Title */}
            <h1
              className="
                font-extrabold tracking-tight
                text-[clamp(2.6rem,5.5vw,4.4rem)]
                leading-[1.08]
                text-foreground
                mb-6
              "
            >
              {data.title}
            </h1>

            {/* Subtitle */}
            <p
              className="
                max-w-xl
                text-[clamp(1.05rem,1.25vw,1.3rem)]
                text-muted-foreground
                leading-relaxed
                mb-12
              "
            >
              {data.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="
                  h-14 px-8 rounded-full
                  font-semibold
                "
              >
                Latest Report
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="
                  h-14 px-8 rounded-full
                  border-border
                "
              >
                Browse Archive
              </Button>
            </div>
          </motion.div>

          {/* ───── RIGHT VISUAL ───── */}
          <motion.div
            style={{ scale: scaleGraphic }}
            className="hidden lg:block relative h-105 w-full"
          >
            {/* Chart Bars */}
            <div className="absolute bottom-0 left-10 w-24 h-[40%] rounded-t-2xl bg-linear-to-t from-primary/80 to-primary shadow-lg" />
            <div className="absolute bottom-0 left-40 w-24 h-[70%] rounded-t-2xl bg-linear-to-t from-indigo-500 to-indigo-400 shadow-xl" />
            <div className="absolute bottom-0 left-72 w-24 h-[55%] rounded-t-2xl bg-linear-to-t from-cyan-500 to-cyan-400 shadow-lg" />

            {/* Floating Metric Card */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute top-[18%] right-6
                p-6 rounded-3xl
                bg-background/80 backdrop-blur-xl
                border border-border
                shadow-2xl
                w-65
              "
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Impact Metric
                </span>
              </div>

              <div className="text-4xl font-extrabold text-foreground mb-1">
                +124%
              </div>
              <div className="text-sm text-muted-foreground">
                Media Reach Growth
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
