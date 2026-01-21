"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VolunteerHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleCard = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] bg-[#0F172A] overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* 1. TECH BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14B8A61a_1px,transparent_1px),linear-gradient(to_bottom,#14B8A61a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: The Pitch */}
          <motion.div style={{ y: yContent }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Briefcase className="w-4 h-4" />
              {data.badge}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              {data.title}
            </h1>

            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg font-light">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 rounded-full bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-all shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                Join the Corps
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 rounded-full border-slate-700 text-white hover:bg-white/5 hover:border-white transition-all"
              >
                View Open Roles
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: The "ID Card" Visual */}
          <div className="relative perspective-1000 flex justify-center">
            <motion.div
              style={{ scale: scaleCard }}
              className="relative w-[350px] aspect-[3/4] bg-slate-800 rounded-3xl border border-white/10 shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-700"
            >
              {/* Photo */}
              <div className="h-2/3 relative">
                <Image
                  src={data.image}
                  alt="Volunteer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              </div>

              {/* ID Details */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
                    Active Member
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Expert Network
                </h3>
                <p className="text-slate-400 text-sm">Valid until 2026</p>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold">{data.stat.value}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
