"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  MapPin,
  Banknote,
  Users,
  ArrowRight,
  Download,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const IconMap: any = { Clock, MapPin, Banknote, Users };

export function FellowshipHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] bg-[#020617] overflow-hidden pt-32 pb-20 flex items-center"
    >
      {/* 1. BACKGROUND TEXTURE (Academic/Royal) */}
      <div className="absolute inset-0 z-0">
        {/* Gold sheen for prestige */}
        <div className="absolute top-0 right-0 w-200 h-200 bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-blue-900/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT: The Pitch (7 Cols) */}
          <motion.div style={{ y: yContent }} className="lg:col-span-7">
            {/* Status Badge */}
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {data.program_status}
              </Badge>
              <span className="text-slate-400 text-sm font-serif italic border-l border-white/10 pl-4">
                {data.cohort}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl max-w-175 text-white mb-6 leading-[1.05] tracking-tight font-serif">
              {data.headline}
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Button className="h-14 px-8 rounded-full bg-green-500 text-black font-bold hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] text-lg">
                {data.cta_primary}
              </Button>

              <div className="flex items-center gap-3 text-yellow-100/80 text-sm font-medium border-l border-white/20 pl-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider opacity-70">
                    Next Intake
                  </span>
                  <span>{data.next_intake}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The "Spec Sheet" (5 Cols) */}
          <motion.div style={{ y: yImage }} className="lg:col-span-5 relative">
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50">
              <div className="aspect-[4/5] relative">
                <Image
                  src={data.image}
                  alt="Fellowship Workshop"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                {/* THE SPECS CARD (Floating inside the image) */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg">
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    {data.key_details.map((detail: any, idx: number) => {
                      const Icon = IconMap[detail.icon];
                      return (
                        <div key={idx} className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                            <Icon className="w-3 h-3" /> {detail.label}
                          </div>
                          <span className="text-white font-bold text-sm md:text-base leading-tight">
                            {detail.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/30 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
