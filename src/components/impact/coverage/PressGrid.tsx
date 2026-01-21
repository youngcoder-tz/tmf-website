"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PressGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid gap-12">
          {data.map((article: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid md:grid-cols-12 gap-8 items-start border-b border-slate-200 dark:border-white/5 pb-12 last:border-0"
            >
              {/* 1. Meta (3 Cols) */}
              <div className="md:col-span-3 text-slate-500 dark:text-slate-400 text-sm font-medium pt-2">
                <span className="block text-slate-900 dark:text-white font-bold text-base mb-1">
                  {article.source}
                </span>
                <span>{article.date}</span>
              </div>

              {/* 2. Content (6 Cols) */}
              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-bold text-blue-600 dark:text-blue-400"
                >
                  Read Original Article{" "}
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* 3. Thumbnail (3 Cols) */}
              <div className="md:col-span-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
