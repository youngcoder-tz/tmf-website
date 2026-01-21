"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

interface PartnersProps {
  data: {
    enabled: boolean;
    metadata: {
      title: string;
      label: string;
    };
    settings: {
      speed: number;
      direction: "left" | "right";
      pauseOnHover: boolean;
      gradientMask: boolean;
    };
    items: Partner[];
  };
}

export function PartnersMarquee({ data }: PartnersProps) {
  if (!data || !data.enabled) return null;

  const { settings, items, metadata } = data;

  // We duplicate items to ensure seamless infinite scrolling
  const scrollItems = [...items, ...items, ...items];

  return (
    <section className="relative w-full py-10 border-y border-slate-100 dark:border-white/5 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm overflow-hidden z-20">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          {metadata.label || "TRUSTED BY GLOBAL INSTITUTIONS"}
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Gradient Masks (Left & Right Fade) */}
        {settings.gradientMask && (
          <>
            <div className="absolute top-0 left-0 z-10 h-full w-24 md:w-48 bg-linear-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 z-10 h-full w-24 md:w-48 bg-linear-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />
          </>
        )}

        {/* The Moving Track */}
        <div
          className={cn(
            "flex min-w-full shrink-0 gap-16 md:gap-24 items-center py-4",
            "animate-scroll", // We will define this keyframe in tailwind config or globals
            settings.pauseOnHover && "hover:[animation-play-state:paused]"
          )}
          style={{
            animationDuration: `${settings.speed || 40}s`,
            animationDirection:
              settings.direction === "right" ? "reverse" : "normal",
          }}
        >
          {scrollItems.map((partner, idx) => (
            <Link
              key={`${partner.name}-${idx}`}
              href={partner.url}
              className="relative group shrink-0 flex items-center justify-center"
            >
              <div className="relative w-32 h-12 md:w-40 md:h-14">
                {/* Image */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={cn(
                    "w-full h-full object-contain transition-all duration-500",
                    "grayscale opacity-50 contrast-75", // Default state: Clean, Grey, Subtle
                    "group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-110" // Hover: Colored, Pop
                  )}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
