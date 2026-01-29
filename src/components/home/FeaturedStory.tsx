"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Eye,
  Quote,
  Play,
  Share2,
  Heart,
  MapPin,
  Sparkles,
  Waves,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedStory({ data }: { data: any }) {
  if (!data?.enabled) return null;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Enhanced parallax effects
  const yImage = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yCard = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={containerRef}
      className="relative  overflow-hidden py-10 bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-950"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0">
        {/* Hero-matching gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-200 h-200 rounded-full blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-150 h-150 rounded-full blur-3xl"
          animate={{
            background: [
              "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        />

        {/* Scan line effect matching hero */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          animate={{ top: ["0%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(59,130,246,0.3), rgba(245,158,11,0.3), transparent)",
            filter: "blur(0.5px)",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59,130,246,0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(245,158,11,0.2) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              maskImage:
                "radial-gradient(ellipse 50% 50% at 50% 50%, black 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background:
                  i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#f59e0b",
                opacity: 0.2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, (Math.random() - 0.5) * 50, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Connection indicator to hero */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          viewport={{ once: true }}
          className="h-0.5 mx-auto mb-16 bg-linear-to-r from-transparent via-blue-500 to-transparent"
        />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* LEFT COLUMN: Enhanced Editorial Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 space-y-10 relative z-20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Enhanced Badge with animation */}
            <motion.div
              className="inline-flex items-center gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="relative"
                animate={isHovered ? { rotate: 10 } : { rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-3 h-3 rounded-full bg-linear-to-r from-blue-500 to-amber-500 shadow-lg shadow-blue-500/50" />
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-amber-500 blur-sm opacity-60" />
              </motion.div>
              <Badge
                variant="secondary"
                className="group bg-linear-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-md border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  animate={isHovered ? { x: 2 } : { x: 0 }}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  {data.badge}
                  <Sparkles className="w-3 h-3 text-amber-500" />
                </motion.span>
              </Badge>
            </motion.div>

            {/* Headline with gradient */}
            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl  font-serif  leading-[1.1] tracking-tight text-slate-900 dark:text-white"
              >
                <span className="relative">
                  {data.headline}
                  {/* Text glow effect */}
                  <span className="absolute -inset-1 blur-xl opacity-10 dark:opacity-25 bg-linear-to-r from-blue-600 via-purple-600 to-amber-600 -z-10" />
                </span>
              </motion.h2>
            </div>

            {/* Enhanced Meta Data Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-300 py-6 border-y border-slate-200/50 dark:border-white/10"
            >
              {/* Author with badge */}
              <motion.div
                className="flex items-center gap-3 p-3 rounded-xl bg-linear-to-r from-purple-50/50 to-transparent dark:from-purple-900/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {data.meta.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {data.meta.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {data.meta.role}
                  </div>
                </div>
              </motion.div>

              {/* Additional metrics */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span className="font-medium">{data.interactions.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">
                    {data.interactions.shares}
                  </span>
                </div>
              </div>

              {/* Views with live counter */}
              <motion.div
                className="sm:flex hidden  items-center gap-2 p-3 rounded-xl bg-linear-to-r from-amber-50/50 to-transparent dark:from-amber-900/20"
                whileHover={{ scale: 1.05 }}
              >
                <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="font-medium">{data.meta.views}</span>
                <motion.span
                  className="text-xs text-emerald-600 dark:text-emerald-400 font-bold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Excerpt with fade-in animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-amber-500 rounded-full" />
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed pl-6 font-light">
                {data.excerpt}
              </p>
            </motion.div>

            {/* Impact Stats Grid */}

            {/* Enhanced CTA with multiple options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-row md:gap-4 gap-2 pt-8"
            >
              <Link href={data.cta.url}>
                <Button className="group relative rounded-full md:h-14 h-12 md:px-6! overflow-hidden bg-linear-to-r from-green-500 via-emerald-500 to-purple-500 dark:from-green-600 dark:via-emerald-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-white/0 to-amber-500/0 group-hover:from-blue-500/20 group-hover:via-white/10 group-hover:to-amber-500/20 transition-all duration-500" />
                  <BookOpen className="md:mr-1 w-5 h-5" />
                  <span className="text-xs sm:text-sm">{data.cta.label}</span>

                  <ArrowRight className="md:ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="rounded-full md:h-14 h-12 md:px-6! border-2 group backdrop-blur-sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="md:mr-1 w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <span className="group-hover:text-blue-600 text-xs sm:text-sm dark:group-hover:text-blue-400">
                  Watch Documentary
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Cinematic Visual Experience */}
          <div className="lg:w-1/2 w-full relative h-125 md:h-150 lg:min-h-150 perspective-2000">
            {/* Main Image Container with enhanced effects */}
            <motion.div
              style={{ y: yImage, rotate: rotate, scale, opacity }}
              className="absolute inset-0 md:inset-x-8 rounded-3xl overflow-hidden shadow-2xl shadow-black/20 border-4 border-white/50 dark:border-white/10 z-10 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={data.image}
                  alt={data.headline}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Multi-layer gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-purple-600/10 to-amber-600/10 mix-blend-overlay" />

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent"
                animate={{
                  borderColor: [
                    "rgba(59,130,246,0.3)",
                    "rgba(139,92,246,0.3)",
                    "rgba(245,158,11,0.3)",
                    "rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Noise overlay */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
              />
            </motion.div>

            {/* Cinematic Quote Card */}
            <motion.div
              style={{ y: yCard }}
              className="absolute -bottom-6 left-0 md:-left-12 w-full max-w-70 md:max-w-sm p-8 rounded-2xl bg-linear-to-br from-white/95 to-white/80 dark:from-slate-900/50 dark:to-slate-700/50 backdrop-blur-xl border border-white/40 dark:border-border/10 shadow-2xl z-20"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Animated icon background */}
              <motion.div
                className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Quote className="w-7 h-7 fill-current" />
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-600 to-purple-600 blur-sm opacity-60" />
              </motion.div>

              {/* Quote content */}
              <div className="mb-6">
                <blockquote className="text-slate-800 dark:text-slate-200 font-serif italic text-base md:text-lg  leading-relaxed mb-4">
                  "{data.quote.text}"
                </blockquote>
                <div className="h-0.5 w-20 bg-linear-to-r from-blue-500 to-amber-500 rounded-full" />
              </div>

              {/* Author with enhanced styling */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-amber-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {data.quote.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {data.quote.role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative floating elements */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-linear-to-r from-amber-400/20 to-orange-400/20 blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <motion.div
              className="absolute bottom-20 -left-8 w-24 h-24 rounded-full bg-linear-to-r from-blue-400/15 to-purple-400/15 blur-2xl -z-10"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -15, 0],
                y: [0, 15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            />

            {/* Location pin */}
            <motion.div
              className="absolute top-8 right-8 md:right-16 p-3 rounded-xl bg-linear-to-br from-white/90 to-white/70 dark:from-slate-900/90 dark:to-slate-800/70 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg z-30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold">Kilombero Valley</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive timeline or related stories could go here */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-slate-200/50 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                More Impact Stories
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Discover other stories of transformation and resilience
              </p>
            </div>
            <Button
              variant="ghost"
              className="group text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              size="lg"
            >
              <Globe className="mr-2 w-5 h-5" />
              Explore Global Impact Map
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Ambient audio waveform */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 dark:opacity-40 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-2 bg-linear-to-t from-blue-500/40 to-amber-500/40 rounded-t-lg"
            style={{
              left: `${i * 1.25}%`,
              height: `${Math.sin(i * 0.2) * 15 + 8}px`,
            }}
            animate={{
              height: [
                `${Math.sin(i * 0.2) * 15 + 8}px`,
                `${Math.sin(i * 0.2 + Math.PI) * 25 + 15}px`,
                `${Math.sin(i * 0.2) * 15 + 8}px`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (i % 10) * 0.1,
            }}
          />
        ))}
      </div>
    </section>
  );
}
