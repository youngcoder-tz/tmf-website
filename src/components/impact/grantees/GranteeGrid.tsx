"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic, Newspaper, Video, BarChart2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: any = {
  Radio: Mic,
  Print: Newspaper,
  Multimedia: Video,
  "Data Viz": BarChart2,
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const Icon = IconMap[project.type] || Newspaper;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        {/* Top Tag */}
        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2">
          <Icon className="w-3 h-3" /> {project.type}
        </div>

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3 h-3" /> {project.region}
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 font-serif leading-tight">
            {project.title}
          </h3>

          {/* Impact Stat (Reveals on Hover) */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <div className="bg-emerald-500/20 border border-emerald-500/50 p-3 rounded-xl backdrop-blur-sm">
              <p className="text-emerald-300 text-xs font-bold uppercase mb-1">
                Real World Impact
              </p>
              <p className="text-white font-medium text-sm">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function GranteeGrid({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest Breakthroughs
          </h2>
          <p className="text-slate-500">
            Stories from the field that made headlines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((project: any, idx: number) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
