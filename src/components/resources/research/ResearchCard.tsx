"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ResearchCard({
  report,
  index,
}: {
  report: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-6 p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all duration-300"
    >
      {/* 1. Cover Thumbnail (A4 Ratio) */}
      <div className="relative w-full md:w-48 aspect-[3/4] shrink-0 rounded-2xl overflow-hidden bg-slate-100 shadow-md group-hover:shadow-lg transition-all">
        <img
          src={report.cover_image}
          alt={report.title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
        {/* PDF Overlay Icon */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
            <Download className="w-5 h-5 text-slate-900" />
          </div>
        </div>
      </div>

      {/* 2. Content */}
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="outline"
              className="border-blue-200 text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300"
            >
              {report.topic}
            </Badge>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {report.file_size}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-3 group-hover:text-blue-600 transition-colors">
            {report.title}
          </h3>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm line-clamp-3">
            {report.summary}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            {report.published}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-slate-400" />
            {report.author}
          </div>

          <div className="ml-auto">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-bold"
            >
              Read Abstract
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
