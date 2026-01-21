"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ResourceHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <section
      ref={containerRef}
      className="relative  flex items-center overflow-hidden pt-32 pb-24
                 bg-background/40"
    >
      {/* ───────────────── BACKGROUND ───────────────── */}
      <motion.div
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={data.bg_image}
          alt="Resources Background"
          fill
          priority
          className="object-cover grayscale opacity-100 dark:opacity-50"
        />

        {/* Theme-aware overlay */}
        <div
          className="
            absolute inset-0
            bg-linear-to-b
            from-background/70
            via-background/65
            to-background
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_40%,hsl(var(--background))_100%)]
          "
        />
      </motion.div>

      {/* ───────────────── DECORATIVE GLOWS ───────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="
            absolute -top-50 -right-50
            w-175 h-175
            bg-primary/20
            rounded-full blur-[140px]
          "
        />
        <div
          className="
            absolute -bottom-50 -left-50
            w-150 h-150
            bg-amber-500/20
            rounded-full blur-[120px]
          "
        />
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* ───────────────── CONTENT ───────────────── */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* ───── LEFT ───── */}
          <motion.div style={{ y: yText }} className="lg:col-span-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
                {data.tag}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="
                font-extrabold tracking-tight
                font-saira
                text-[clamp(2.0rem,6vw,4.4rem)]
                leading-[1.05]
                text-foreground
                mb-8
              "
            >
              {data.headline}
            </h1>

            {/* Description */}
            <p
              className="
                max-w-xl
                text-[clamp(1.05rem,1.3vw,1.35rem)]
                text-muted-foreground
                leading-relaxed
                mb-12
              "
            >
              {data.description}
            </p>

            {/* Search */}
            <div className="relative max-w-xl group">
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-linear-to-r from-primary to-amber-500
                  opacity-25 group-hover:opacity-40
                  blur transition-opacity
                "
              />

              <div
                className="
                  relative flex items-center gap-2
                  rounded-full p-2
                  bg-background/80 backdrop-blur-xl
                  border border-border
                  shadow-xl
                "
              >
                <div className="pl-4 text-muted-foreground">
                  <Search className="w-5 h-5" />
                </div>

                <Input
                  placeholder="Search resources, guides, docs..."
                  className="
                    border-0 bg-transparent h-12
                    text-base
                    focus-visible:ring-0
                  "
                />

                <button
                  className="
                    h-10 px-6
                    rounded-full
                    bg-primary text-primary-foreground
                    font-semibold text-sm
                    flex items-center gap-2
                    hover:scale-105 transition-transform
                  "
                >
                  Search <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ───── RIGHT ───── */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute top-12 right-10
                  w-64 h-80
                  rounded-3xl
                  bg-background/80 backdrop-blur-xl
                  border border-border
                  shadow-2xl
                  p-6
                "
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 mb-4" />
                <div className="h-4 w-3/4 bg-muted rounded mb-2" />
                <div className="h-4 w-1/2 bg-muted rounded" />
              </motion.div>

              {/* Stats Card */}
              <motion.div
                animate={{ y: [0, 24, 0], rotate: [0, -4, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="
                  absolute bottom-16 left-10
                  w-72 h-60
                  rounded-3xl
                  bg-background/90 backdrop-blur-xl
                  border border-border
                  shadow-2xl
                  flex items-center justify-center
                "
              >
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-primary mb-2">
                    150+
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Resources Available
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
