"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EventCard = ({ event, index }: { event: any; index: number }) => {
  // Status Colors
  const statusColors: any = {
    Open: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
    Waitlist:
      "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400",
    "Invite Only":
      "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
    "Sold Out":
      "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col md:flex-row bg-white dark:bg-[#1E1B2E] rounded-[2rem] border border-slate-100 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300"
    >
      {/* 1. DATE COLUMN (The "Stub") */}
      <div className="w-full md:w-48 bg-slate-50 dark:bg-[#151221] flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5 relative">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
          {event.date.month}
        </span>
        <span className="text-5xl font-black text-slate-900 dark:text-white mb-2">
          {event.date.day}
        </span>
        <span className="text-xs font-bold text-purple-500 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
          {event.time.split(" ")[0]}
        </span>

        {/* Decoration Circles (Ticket Holes) */}
        <div className="absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 hidden md:block" />
        <div className="absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 hidden md:block" />
      </div>

      {/* 2. CONTENT COLUMN */}
      <div className="flex-1 p-8 flex flex-col justify-center">
        <div className="flex flex-wrap gap-3 mb-4">
          <Badge
            variant="outline"
            className="border-slate-200 dark:border-white/10 text-slate-500"
          >
            {event.category}
          </Badge>
          <Badge
            className={cn("border-0 font-bold", statusColors[event.status])}
          >
            {event.status}
          </Badge>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors">
          {event.title}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6">
          <MapPin className="w-4 h-4" />
          {event.location}
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-white/5">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {event.price}
          </span>
          <Button
            variant="ghost"
            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-bold group/btn"
          >
            Reserve Seat{" "}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* 3. IMAGE COLUMN (Desktop Only) */}
      <div className="hidden lg:block w-64 relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors" />
      </div>
    </motion.div>
  );
};

export function EventGrid({ data }: { data: any }) {
  const [activeCat, setActiveCat] = useState("All Events");

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {data.categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold transition-all border border-transparent",
                activeCat === cat
                  ? "bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {data.upcoming_events.map((event: any, idx: number) => (
            <EventCard key={event.id} event={event} index={idx} />
          ))}
        </div>

        {/* Empty State (if needed logic added) */}
        <div className="mt-16 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 h-12 border-slate-300 dark:border-slate-700"
          >
            View Past Events Archive
          </Button>
        </div>
      </div>
    </section>
  );
}
