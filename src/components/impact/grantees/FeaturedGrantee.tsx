"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedGrantee({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* LEFT: Image */}
            <div className="relative min-h-[400px] lg:min-h-[600px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent lg:hidden" />
            </div>

            {/* RIGHT: Content */}
            <div className="p-10 lg:p-16 flex flex-col justify-center relative">
              {/* Decorative Quote Mark */}
              <Quote className="absolute top-10 right-10 w-20 h-20 text-white/5 rotate-180" />

              <Badge className="w-fit bg-yellow-500 text-black font-bold border-0 mb-6 hover:bg-yellow-400">
                {data.badge}
              </Badge>

              <h2 className="text-4xl md:text-5xl font-serif mb-2 leading-tight">
                {data.title}
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-wider text-sm mb-8">
                By {data.author} — {data.media_house}
              </p>

              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs font-bold uppercase text-red-400 mb-2">
                    The Challenge
                  </h4>
                  <p className="text-slate-300 leading-relaxed border-l-2 border-red-500/50 pl-4">
                    {data.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-emerald-400 mb-2">
                    The Outcome
                  </h4>
                  <p className="text-slate-300 leading-relaxed border-l-2 border-emerald-500/50 pl-4">
                    {data.outcome}
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-fit rounded-full border-white/20 text-white hover:bg-white hover:text-black font-bold h-12 px-8 group"
              >
                Read Full Case Study{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
