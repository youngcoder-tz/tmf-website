"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CaseGrid({ data }: { data: any }) {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0F17]">
      <div className="container mx-auto px-4">
        <div className="space-y-12 max-w-5xl mx-auto">
          {data.map((study: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 lg:gap-12 border-b border-slate-100 dark:border-white/5 pb-12 last:border-0"
            >
              {/* Image (Thumbnail Style) */}
              <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-md">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 backdrop-blur-md border-0">
                  {study.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {study.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {study.read_time}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {study.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Key Stats Row */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {study.stats.map((stat: string, i: number) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-md text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2"
                    >
                      <BarChart className="w-3 h-3 text-emerald-500" />
                      {stat}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-blue-600 dark:text-blue-400 font-bold group/btn"
                  >
                    Read Case Study{" "}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
