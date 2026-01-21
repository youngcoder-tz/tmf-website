"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EventsHero({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] bg-[#0F0529] overflow-hidden flex items-end pb-20 pt-32"
    >
      {/* 1. BACKGROUND IMAGE (Full Bleed) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ scale: scaleImg }}
          className="relative w-full h-full"
        >
          <Image
            src={data.image}
            alt="Flagship Event"
            fill
            priority
            className="object-cover opacity-60 mix-blend-overlay"
          />
          {/* Gradient Overlay for Text Pop */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F0529] via-[#0F0529]/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0F0529]/90 to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div style={{ y: yContent }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
              <Ticket className="w-4 h-4 fill-current" />
              {data.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-[0.95] tracking-tight drop-shadow-2xl">
              {data.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-light">
              {data.subtitle}
            </p>

            {/* The "Event Pass" Info Bar */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] max-w-3xl">
              {/* Date */}
              <div className="flex items-center gap-3 px-6 py-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-white/10">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Date
                  </p>
                  <p className="text-white font-bold">{data.date}</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 px-6 py-3 w-full md:w-auto border-b md:border-b-0 md:border-r border-white/10">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Time
                  </p>
                  <p className="text-white font-bold">{data.time}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 px-6 py-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-bold">{data.location}</p>
                </div>
              </div>

              {/* CTA */}
              <Button className="h-14 px-8 rounded-[1.5rem] bg-purple-600 text-white font-bold hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(147,51,234,0.4)] text-base whitespace-nowrap w-full md:w-auto">
                {data.cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
