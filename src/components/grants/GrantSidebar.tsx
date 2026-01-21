"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  DollarSign,
  Clock,
  Share2,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function GrantSidebar({ data }: { data: any }) {
  return (
    <div className="sticky top-32 space-y-8">
      {/* 1. MAIN APPLICATION CARD (Dark Mode Anchor) */}
      <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
        {/* Decoration Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-colors duration-500" />

        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Grant Overview
          </h3>

          <div className="space-y-5 mb-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-slate-400 text-sm font-medium">Amount</span>
              <span className="text-lg font-bold text-emerald-400">
                {data.amount}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-slate-400 text-sm font-medium">
                Deadline
              </span>
              <span className="text-base font-bold text-orange-400">
                {data.deadline}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-slate-400 text-sm font-medium">
                Partner
              </span>
              <span className="text-base font-bold">{data.partner}</span>
            </div>
          </div>

          <Button className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-900/50 mb-3 transition-all hover:scale-[1.02]">
            Apply Now
          </Button>
          <div className="text-center">
            <Link
              href="#"
              className="text-xs text-slate-400 hover:text-white underline decoration-slate-600 underline-offset-4"
            >
              Download Guidelines (PDF)
            </Link>
          </div>
        </div>
      </div>

      {/* 2. PROGRAM OFFICER (The Human Element) */}
      {data.program_officer && (
        <div className="p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-lg flex items-center gap-4">
          <img
            src={data.program_officer.image}
            alt={data.program_officer.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 dark:border-slate-800"
          />
          <div className="flex-1">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">
              Questions?
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              {data.program_officer.name}
            </h4>
            <p className="text-xs text-slate-500">
              {data.program_officer.role}
            </p>
          </div>
          <Button
            size="icon"
            variant="outline"
            className="rounded-full w-10 h-10 border-slate-200 dark:border-slate-700"
          >
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* 3. RELATED OPPORTUNITIES (Mini List) */}
      {data.related_opportunities && (
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 px-2">
            Recent Opportunities
          </h4>
          <div className="space-y-3">
            {data.related_opportunities.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={`/grants/${item.slug}`}
                className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden relative bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div>
                  <Badge
                    variant="secondary"
                    className="mb-1 text-[10px] px-2 h-5 bg-white shadow-sm border-slate-100 dark:bg-slate-700 dark:border-slate-600"
                  >
                    {item.category}
                  </Badge>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h5>
                  <span className="text-[10px] text-slate-500 font-medium mt-1 block">
                    Deadline: {item.deadline}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/grants"
            className="mt-4 flex items-center justify-center text-sm font-bold text-blue-600 hover:underline"
          >
            View All Grants <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
