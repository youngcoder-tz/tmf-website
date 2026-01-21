"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart, Trophy, Layout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const IconMap: any = { BarChart, Trophy, Layout, Users };

// --- DECORATION: The "Puzzle" Graphic (SVG) ---
const PuzzleGraphic = () => (
  <svg
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full max-w-125 mx-auto animate-float-slow"
  >
    <circle
      cx="250"
      cy="250"
      r="250"
      fill="#F8FAFC"
      className="dark:fill-slate-900"
    />
    {/* Orange Piece */}
    <path
      d="M250 50C250 50 350 50 350 150C350 250 250 250 250 250C250 250 150 250 150 150C150 50 250 50 250 50Z"
      fill="#F97316"
      className="opacity-90"
    />
    {/* Purple Piece */}
    <path
      d="M450 250C450 250 450 350 350 350C250 350 250 250 250 250C250 250 250 150 350 150C450 150 450 250 450 250Z"
      fill="#8B5CF6"
      className="opacity-90"
    />
    {/* Blue Piece */}
    <path
      d="M250 450C250 450 150 450 150 350C150 250 250 250 250 250C250 250 350 250 350 350C350 450 250 450 250 450Z"
      fill="#3B82F6"
      className="opacity-90"
    />
    {/* People Icons (Abstract) */}
    <circle cx="200" cy="180" r="15" fill="white" fillOpacity="0.5" />
    <circle cx="300" cy="320" r="15" fill="white" fillOpacity="0.5" />
    <circle cx="320" cy="200" r="20" fill="white" fillOpacity="0.5" />
  </svg>
);

export function ImpactModel({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* LEFT: The Graphic */}
          <div className="relative order-2 lg:order-1">
            <PuzzleGraphic />
            {/* Floating Decoration Dots */}
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-orange-400 animate-bounce" />
            <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-purple-400 animate-bounce delay-700" />
          </div>

          {/* RIGHT: Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
              {data.headline}
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              {data.description}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white dark:border-white dark:text-white font-bold transition-all"
            >
              {data.cta} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* BOTTOM: Circle Stats Grid (Zone UI Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.stats.map((stat: any, idx: number) => {
            const Icon = IconMap[stat.icon];
            // Color map for the circular backgrounds
            const bgColors: any = {
              orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30",
              purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30",
              yellow: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30",
              green: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30",
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div
                  className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                    bgColors[stat.color]
                  )}
                >
                  <Icon className="w-8 h-8" />
                </div>

                <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
