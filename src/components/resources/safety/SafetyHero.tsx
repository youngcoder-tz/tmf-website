"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SafetyHero({ data }: { data: any }) {
  return (
    <section className="pt-32 pb-20 bg-[#1C1917] text-white border-b-4 border-orange-600">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-6 animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          {data.badge}
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-white">
          {data.title}
        </h1>

        <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-medium">
          {data.subtitle}
        </p>

        <Button className="h-16 px-10 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl shadow-[0_0_30px_rgba(234,88,12,0.4)]">
          <Download className="w-6 h-6 mr-3" /> {data.urgent_action}
        </Button>
      </div>
    </section>
  );
}
