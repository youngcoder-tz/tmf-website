"use client";

import React from "react";
import Link from "next/link";
import { Download, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedToolkit({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[3rem] bg-slate-900 dark:bg-black overflow-hidden shadow-2xl p-8 md:p-16 text-white">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Content */}
            <div>
              <Badge className="bg-amber-500 text-black border-0 font-bold px-4 py-1.5 mb-6 hover:bg-amber-400">
                {data.badge}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                {data.title}
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {data.description}
              </p>

              {/* Checklist */}
              <div className="space-y-3 mb-10">
                {data.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-bold text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={data.link}>
                <Button
                  size="lg"
                  className="rounded-xl h-14 px-8 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg"
                >
                  <Download className="mr-2 w-5 h-5" /> Download Toolkit
                </Button>
              </Link>
            </div>

            {/* Visual Mockup */}
            <div className="relative">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-amber-500 mb-1">
                        Updated For 2025
                      </p>
                      <p className="font-bold text-white">
                        Version 4.2 Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
