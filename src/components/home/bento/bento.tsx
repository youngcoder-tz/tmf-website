"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Lock,
  FileText,
  ArrowUpRight,
} from "lucide-react";

// --- MOCK DATA ---
const IMPACT_DATA = {
  activeZones: 54,
  journalistsProtected: "12.4K",
  legalWins: 186,
  storiesSaved: "850+",
  featuredStory: {
    title: "The Water Crisis Report",
    author: "Elena M. & Team",
    location: "South America",
    image:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1969&auto=format&fit=crop",
  },
};

// --- ANIMATION VARIANTS ---
const containerVar = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ImpactBentoGrid = () => {
  return (
    <section className="py-24 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-4"
          >
            <TrendingUp className="w-3 h-3" />
            Real-World Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white mb-6"
          >
            Measuring the weight of{" "}
            <span className="italic text-blue-600 dark:text-blue-400">
              truth
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            From legal victories in high courts to digital shields in conflict
            zones, our infrastructure works silently to keep the presses
            running.
          </motion.p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-auto lg:grid-rows-2 gap-6 h-auto lg:h-[600px]"
        >
          {/* CARD 1: GLOBAL PRESENCE MAP (Large: 2x2) */}
          <motion.div
            variants={itemVar}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10"
          >
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10 dark:opacity-20 dark:invert" />

            {/* Radar Pings (CSS Animation) */}
            <div className="absolute top-[30%] left-[25%]">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            <div className="absolute top-[45%] right-[30%] delay-700">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animation-delay-500"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
            </div>
            <div className="absolute bottom-[35%] right-[20%]">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animation-delay-1000"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Active Zones
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                We currently operate networks in{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  {IMPACT_DATA.activeZones} countries
                </span>
                , providing real-time extraction routes and legal counsel.
              </p>
            </div>
          </motion.div>

          {/* CARD 2: TOTAL PROTECTED (1x1) */}
          <motion.div
            variants={itemVar}
            className="relative p-6 rounded-3xl bg-blue-600 text-white flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />

            <div className="flex justify-between items-start">
              <ShieldCheck className="w-8 h-8 opacity-80" />
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-500 px-2 py-1 rounded">
                YTD
              </span>
            </div>

            <div>
              <div className="text-4xl font-bold mb-1">
                {IMPACT_DATA.journalistsProtected}
              </div>
              <div className="text-blue-100 text-sm font-medium">
                Journalists Shielded
              </div>
            </div>
          </motion.div>

          {/* CARD 3: FEATURED STORY (Vertical 1x2) */}
          <motion.div
            variants={itemVar}
            className="md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-slate-900 z-0" />
            <img
              src={IMPACT_DATA.featuredStory.image}
              alt="Featured Report"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />

            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
              <div className="mb-auto pt-2 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-slate-900" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Featured Case
                </span>
                <h3 className="text-2xl font-serif text-white leading-tight">
                  {IMPACT_DATA.featuredStory.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-300 text-sm border-t border-white/10 pt-3 mt-2">
                  <Users className="w-4 h-4" />
                  <span>{IMPACT_DATA.featuredStory.author}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: LEGAL WINS (1x1) */}
          <motion.div
            variants={itemVar}
            className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex flex-col justify-between group hover:border-blue-400/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-500 mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1 group-hover:translate-x-1 transition-transform">
                {IMPACT_DATA.legalWins}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Successful Defenses
              </div>
            </div>
          </motion.div>

          {/* CARD 5: DIGITAL SECURITY (1x1) */}
          <motion.div
            variants={itemVar}
            className="p-6 rounded-3xl bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-white/10 flex flex-col justify-between text-white relative overflow-hidden"
          >
            {/* Matrix-like background effect */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#4ade80 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            ></div>

            <div className="flex justify-between items-start z-10">
              <Lock className="w-6 h-6 text-green-400" />
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>

            <div className="z-10">
              <div className="text-lg font-mono font-bold text-green-400 mb-1">
                AES-256
              </div>
              <div className="text-xs text-slate-400">Encryption Standard</div>
              <div className="mt-2 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-green-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactBentoGrid;
