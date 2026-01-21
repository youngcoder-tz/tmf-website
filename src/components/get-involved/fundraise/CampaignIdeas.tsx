"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Monitor, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const IconMap: any = { Physical: Trophy, Social: Users, Digital: Monitor };

const IdeaCard = ({ idea, index }: { idea: any; index: number }) => {
  const Icon = IconMap[idea.category];

  // Difficulty Color
  const diffColor =
    idea.difficulty === "Easy"
      ? "bg-green-100 text-green-700"
      : idea.difficulty === "Medium"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image Header */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={idea.image}
          alt={idea.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className={cn("border-0 font-bold shadow-md", diffColor)}>
            {idea.difficulty}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 text-slate-900 dark:text-white group-hover:bg-orange-500 group-hover:text-white transition-colors">
          <Icon className="w-6 h-6" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          {idea.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          {idea.desc}
        </p>

        <button className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors uppercase tracking-wider">
          Start This <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export function CampaignIdeas({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Need Inspiration?
          </h2>
          <p className="text-xl text-slate-500">
            Choose a campaign style that fits your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((idea: any, idx: number) => (
            <IdeaCard key={idx} idea={idea} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
