"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

type FullPartnersData = {
  enabled: boolean;
  metadata: {
    title: string;
    label: string;
  };
  settings: {
    speed: number;
    direction: string;
    pauseOnHover: boolean;
    gradientMask: boolean;
  };
  items: Partner[];
};

type SimplePartnersData = {
  title: string;
  logos: {
    name: string;
    logo: string;
    url?: string;
  }[];
};

interface PartnersProps {
  data?: FullPartnersData | SimplePartnersData;
}

export function PartnersMarquee({ data }: PartnersProps) {
  if (!data) return null;

  // 🔁 Normalize CMS data
  const normalized =
    "items" in data
      ? data
      : {
          enabled: true,
          metadata: {
            title: data.title,
            label: "TRUSTED BY GLOBAL INSTITUTIONS",
          },
          settings: {
            speed: 40,
            direction: "left",
            pauseOnHover: true,
            gradientMask: true,
          },
          items: data.logos.map((logo) => ({
            ...logo,
            url: logo.url || "#",
          })),
        };

  if (!normalized.enabled) return null;

  const { settings, items, metadata } = normalized;

  const scrollItems = [...items, ...items, ...items];

  return (
    <section className="relative w-full overflow-hidden z-20">
      {/* ================= HERO-MATCHING BACKGROUND ================= */}
      <div className="absolute inset-0">
        {/* LIGHT MODE BACKGROUND */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-slate-50 to-white dark:hidden" />

        {/* LIGHT MODE BLOOM */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-280 h-120 bg-blue-400/20 blur-[120px] rounded-full dark:hidden" />

        {/* DARK MODE BACKGROUND */}
        <div className="hidden dark:block absolute inset-0 bg-linear-to-b from-black via-slate-950 to-black" />

        {/* DARK MODE BLOOM */}
        <div className="hidden dark:block absolute -top-40 left-1/2 -translate-x-1/2 w-7xl h-160 bg-blue-500/15 blur-[140px] rounded-full" />

        {/* Shared cinematic noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-90 z-80 mix-blend-overlay pointer-events-none" />
      </div>

      {/* ================= LIQUID GLASS SURFACE ================= */}
      <div className="relative backdrop-blur-2xl bg-white/70 dark:bg-white/4  ">
        <div className="container mx-auto px-4 py-10">
          {/* Label */}
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400/70 mb-6">
            {metadata.label || "TRUSTED BY GLOBAL INSTITUTIONS"}
          </p>

          {/* ================= MARQUEE ================= */}
          <div className="relative flex w-full overflow-hidden">
            {/* Gradient Masks */}
            {settings.gradientMask && (
              <>
                <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-linear-to-r from-black/10  dark:from-black to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-linear-to-l from-black/10 dark:from-black to-transparent pointer-events-none" />
              </>
            )}

            {/* Track */}
            <div
              className={cn(
                "flex min-w-full shrink-0 items-center gap-10 md:gap-14 py-6",
                "animate-scroll",
                settings.pauseOnHover && "hover:paused",
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
                  href={partner.url ? partner.url : "#"}
                  className="group relative shrink-0 flex items-center justify-center"
                >
                  {/* Logo Glass Plate */}
                  <div
                    className={cn(
                      "relative w-32 h-14 md:w-40 md:h-18 p-4 rounded-xl flex items-center justify-center",
                      "bg-white/80 dark:bg-white/5",
                      "backdrop-blur-xl",
                      "border border-slate-200/60 dark:border-white/10",
                      "shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
                      "transition-all duration-500 group-hover:scale-110",
                    )}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={cn(
                        "w-full h-full object-contain transition-all duration-500",
                        "grayscale opacity-60 contrast-75",
                        "group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100",
                      )}
                    />

                    {/* Glass shine */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-t from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity dark:from-white/10" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
