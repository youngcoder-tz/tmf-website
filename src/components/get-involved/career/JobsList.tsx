"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function JobsList({ jobs }: { jobs: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0B0F19]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Open Positions
          </h2>
          <span className="text-slate-500 font-bold">
            {jobs.length} Roles Available
          </span>
        </div>

        <div className="space-y-4">
          {jobs.map((job: any, idx: number) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-violet-500/50 dark:hover:border-violet-500/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {job.title}
                  </h3>
                  {job.type === "Internship" && (
                    <Badge className="bg-lime-400 text-black border-0 hover:bg-lime-300">
                      Intern
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white font-bold">
                    {job.department}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {job.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" /> {job.salary}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-wrap gap-2 justify-end max-w-[200px]">
                  {job.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-[10px] uppercase font-bold text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State / Pitch */}
        <div className="mt-16 text-center bg-violet-900/10 dark:bg-violet-900/20 rounded-[2rem] p-12 border border-violet-500/20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Don't see your role?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            We are always looking for talented people. Send us your portfolio.
          </p>
          <Button
            variant="outline"
            className="rounded-xl border-violet-500 text-violet-600 dark:text-violet-400 hover:bg-violet-500 hover:text-white"
          >
            Email Talent Team
          </Button>
        </div>
      </div>
    </section>
  );
}
