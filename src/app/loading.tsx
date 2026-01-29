import React from "react";
import { Loader2 } from "lucide-react";

// --- SUB-COMPONENT: Shimmer Effect ---
// This creates the "moving light" effect over the grey boxes
const Shimmer = ({ className }: { className?: string }) => (
  <div
    className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800 ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent" />
  </div>
);

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20">
      {/* 1. HERO SKELETON */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Skeleton */}
          <div className="space-y-6">
            {/* Badge */}
            <Shimmer className="h-8 w-32 rounded-full" />

            {/* Headline */}
            <div className="space-y-4">
              <Shimmer className="h-16 w-3/4 rounded-2xl" />
              <Shimmer className="h-16 w-1/2 rounded-2xl" />
            </div>

            {/* Subtitle */}
            <div className="space-y-3 pt-4">
              <Shimmer className="h-4 w-full rounded-md" />
              <Shimmer className="h-4 w-5/6 rounded-md" />
              <Shimmer className="h-4 w-4/6 rounded-md" />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Shimmer className="h-14 w-40 rounded-full" />
              <Shimmer className="h-14 w-40 rounded-full" />
            </div>
          </div>

          {/* Right: Image Skeleton */}
          <div className="hidden lg:block">
            <Shimmer className="w-full aspect-[4/3] rounded-[2.5rem]" />
          </div>
        </div>
      </div>

      {/* 2. GRID SKELETON (3 Cards) */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 space-y-4">
          <Shimmer className="h-4 w-24 rounded-full" />
          <Shimmer className="h-10 w-96 rounded-xl" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-[2rem] bg-white dark:bg-[#0F172A] border border-slate-100 dark:border-white/5 space-y-6"
            >
              {/* Icon */}
              <Shimmer className="h-14 w-14 rounded-2xl" />

              {/* Title */}
              <Shimmer className="h-8 w-2/3 rounded-lg" />

              {/* Lines */}
              <div className="space-y-2">
                <Shimmer className="h-3 w-full rounded" />
                <Shimmer className="h-3 w-full rounded" />
                <Shimmer className="h-3 w-4/5 rounded" />
              </div>

              {/* Button */}
              <Shimmer className="h-10 w-full rounded-xl mt-4" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. CENTER LOADER INDICATOR */}
      {/* This ensures the user knows something is happening even if they don't look at skeletons */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md p-3 rounded-full shadow-2xl border border-slate-200 dark:border-white/10 flex items-center gap-3">
          <Loader2 className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 pr-2">
            Loading...
          </span>
        </div>
      </div>

      {/* GLOBAL KEYFRAMES */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </main>
  );
}
