"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Eye, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedStory({ data }: { data: any }) {
  if (!data?.enabled) return null;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yCard = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* LEFT COLUMN: Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8 relative z-10"
          >
            {/* Animated Badge */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <Badge
                variant="secondary"
                className="bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 text-xs font-bold uppercase tracking-wider border-purple-100 dark:border-purple-800"
              >
                {data.badge}
              </Badge>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-[1.1] text-slate-900 dark:text-white">
              {data.headline}
            </h2>

            {/* Meta Data Row */}
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-100 dark:border-white/10 py-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{data.meta.read_time}</span>
              </div>
              <div className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{data.meta.views} views</span>
              </div>
              <div className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
              <div className="font-medium text-slate-900 dark:text-slate-200">
                By {data.meta.author}
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {data.excerpt}
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link href={data.cta.url}>
                <Button
                  size="lg"
                  className="group rounded-full h-14 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <BookOpen className="mr-2 w-4 h-4" />
                  {data.cta.label}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Parallax Visuals */}
          <div className="lg:w-1/2 w-full relative h-125 md:h-150 perspective-1000">
            {/* Main Image Container */}
            <motion.div
              style={{ y: yImage, rotate: rotate }}
              className="absolute inset-0 md:inset-x-8 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 z-0"
            >
              <Image
                src={data.image}
                alt={data.headline}
                fill
                className="object-cover scale-110" // Scaled up for internal parallax feel
              />
              {/* Gradient Overlay for Text readability if needed */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Quote Card */}
            <motion.div
              style={{ y: yCard }}
              className="absolute -bottom-6 left-0 md:-left-12 max-w-sm p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 shadow-xl z-10"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <Quote className="w-5 h-5 fill-current" />
              </div>

              <blockquote className="text-slate-800 dark:text-slate-200 font-serif italic text-lg leading-relaxed mb-3">
                "{data.quote.text}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                <span className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {data.quote.author}
                </span>
              </div>
            </motion.div>

            {/* Decorative Shape Behind */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
