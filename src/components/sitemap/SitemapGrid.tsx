"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

export function SitemapGrid({
  clusters,
  searchTerm,
}: {
  clusters: any[];
  searchTerm: string;
}) {
  // Filtering logic
  const filteredClusters = clusters
    .map((cluster) => ({
      ...cluster,
      links: cluster.links.filter(
        (link: any) =>
          link.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          link.url.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((cluster) => cluster.links.length > 0);

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {filteredClusters.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p>No pages match "{searchTerm}"</p>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredClusters.map((cluster, idx) => {
              const colors: any = {
                blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
                indigo: "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20",
                amber: "text-amber-600 bg-amber-50 dark:bg-amber-900/20",
                purple: "text-purple-600 bg-purple-50 dark:bg-purple-900/20",
                emerald:
                  "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20",
                slate: "text-slate-600 bg-slate-100 dark:bg-slate-800",
              };
              const theme = colors[cluster.color] || colors.slate;

              return (
                <div
                  key={idx}
                  className="break-inside-avoid rounded-[2rem] p-8 border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#0F1322] hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-white/5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        theme,
                      )}
                    >
                      <Folder className="w-6 h-6 fill-current opacity-80" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {cluster.title}
                    </h3>
                  </div>

                  {/* Link List */}
                  <ul className="space-y-3">
                    {cluster.links.map((link: any, i: number) => (
                      <li key={i}>
                        <Link
                          href={link.url}
                          className="group flex items-center justify-between p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 hover:shadow-sm transition-all"
                        >
                          <span className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {link.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
