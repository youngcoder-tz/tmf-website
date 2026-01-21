"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, DollarSign, Clock, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- SUB-COMPONENT: Program Card ---
const ProgramCard = ({ program, index }: { program: any; index: number }) => {
  // Status Logic
  const statusConfig: any = {
    open: {
      color: "bg-emerald-500",
      text: "Open",
      border: "border-emerald-200",
    },
    closing_soon: {
      color: "bg-amber-500",
      text: "Closing Soon",
      border: "border-amber-200",
    }, // Changed red to amber for less "panic"
    upcoming: {
      color: "bg-blue-500",
      text: "Upcoming",
      border: "border-blue-200",
    },
  };
  const status = statusConfig[program.status] || statusConfig.open;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative flex flex-col h-full min-h-125 w-full md:w-95 shrink-0 rounded-[1.5rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2"
    >
      {/* 1. Image Header */}
      <div className="relative h-60 w-full overflow-hidden">
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20">
          <Badge
            className={cn(
              "text-white border-0 px-3 py-1 font-bold shadow-md backdrop-blur-md",
              status.color
            )}
          >
            {status.text}
          </Badge>
        </div>

        {/* Category Pill */}
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-sm">
            {program.category}
          </div>
        </div>

        {/* Image */}
        <Image
          fill
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />

        {/* Partner / Supported By (Trust Signal) */}
        {program.partner && (
          <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2 text-white/90">
            <span className="text-[10px] uppercase tracking-widest opacity-80">
              Supported by
            </span>
            <span className="text-xs font-bold">{program.partner}</span>
          </div>
        )}
      </div>

      {/* 2. Content Body */}
      <div className="flex flex-col flex-1 p-6 md:px-8 pt-2  relative">
        {/* Title */}
        <Link href={`/grants/${program.slug}`} className="block">
          <h3 className="text-xl font-bold font-serif mb-1 text-slate-900 dark:text-white mb- leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {program.title}
          </h3>
        </Link>

        {/* Description (The "Why") */}
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">
          {program.short_description}
        </p>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 gap-4  py-4 border-t border-slate-100 dark:border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
              Funding
            </span>
            <div className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-200">
              <DollarSign className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
              {program.amount}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
              Deadline
            </span>
            <div className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-200">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
              {program.deadline}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 ">
          {program.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-6 mt-">
          <Link href={`/grants/${program.slug}`} className="block w-full">
            <Button className="w-full h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all shadow-md group-hover:shadow-lg">
              {program.status === "upcoming" ? "View Details" : "Apply Now"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
export function ProgramShowcase({ data }: { data: any }) {
  if (!data?.enabled) return null;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/30 overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="outline"
                className="mb-4 border-blue-200 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300"
              >
                {data.header.badge}
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 dark:text-white mb-4">
                {data.header.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {data.header.description}
              </p>
            </motion.div>
          </div>

          <Link href={data.header.view_all_url}>
            <Button
              variant="ghost"
              className="group text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-base"
            >
              {data.header.view_all_label}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 px-4 overflow-x-auto pb-8 custom-scrollbar-hide">
          <div className="flex gap-6 w-max pb-4 px-2">
            {data.programs.map((program: any, idx: number) => (
              <ProgramCard key={program.id} program={program} index={idx} />
            ))}

            {/* "View All" Card */}
            <Link
              href={data.header.view_all_url}
              className="group flex flex-col items-center justify-center min-h-125 w-87.5 shrink-0 rounded-[1.5rem] border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-sm">
                <ArrowRight className="w-8 h-8" />
              </div>
              <span className="font-bold text-lg text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                View All Grants
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
