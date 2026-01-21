"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function RoleBoard({ roles }: { roles: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Open Opportunities
          </h2>
          <p className="text-slate-500 text-lg">
            Current needs for the 2025 program cycle.
          </p>
        </div>

        <div className="space-y-4">
          {roles.map((role: any, idx: number) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                      {role.title}
                    </h3>
                    {role.urgency === "High" && (
                      <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-0 text-[10px] px-2 py-0.5">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                    <span className="text-teal-600 dark:text-teal-400">
                      {role.department}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {role.commitment}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {role.location}
                    </span>
                  </div>
                </div>

                <Button className="rounded-xl h-12 px-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all">
                  Apply Now
                </Button>
              </div>

              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-3xl">
                {role.desc}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5 text-xs font-bold text-slate-500 uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
