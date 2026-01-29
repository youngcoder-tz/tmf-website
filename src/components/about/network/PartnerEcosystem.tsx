"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- SUB-COMPONENT: Strategic Card (Detailed) ---
const StrategicCard = ({ partner, index }: { partner: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15 }}
    className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
  >
    {/* Decoration Gradient */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors" />

    {/* Header */}
    <div className="flex justify-between items-start mb-8 relative z-10">
      <div className="h-12 w-32 relative grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100">
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-full w-full object-contain object-left"
        />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full bg-white dark:bg-slate-800">
        {partner.tier}
      </span>
    </div>

    {/* Project Focus */}
    <div className="flex-1 relative z-10">
      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {partner.project}
      </h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
        {partner.desc}
      </p>
    </div>

    {/* Footer Link */}
    <div className="pt-6 border-t border-slate-200 dark:border-white/5 relative z-10">
      <button className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-cyan-400 group-hover:underline decoration-2 underline-offset-4">
        View Impact Report <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

// --- SUB-COMPONENT: Logo Tile (Minimal) ---
const LogoTile = ({
  logo,
  name,
  index,
}: {
  logo: string;
  name: string;
  index: number;
}) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="h-32 flex items-center justify-center p-6 bg-white dark:bg-[#0B0F19] rounded-[1.5rem] border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all cursor-pointer relative group"
  >
    <img src={logo} alt={name} className="max-h-12 w-auto object-contain" />

    {/* Hover Tooltip */}
    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 text-white text-xs font-bold rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
      View Profile
    </div>
  </motion.div>
);

// --- MAIN COMPONENT ---
export function PartnerEcosystem({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* 1. SECTION HEADER */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            {data.headline}
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            {data.subheadline}
          </p>
        </div>

        {/* 2. FEATURED ALLIANCES (Grid) */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Strategic Alliances
            </span>
            <span className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.featured_alliances.map((partner: any, idx: number) => (
              <StrategicCard key={idx} partner={partner} index={idx} />
            ))}
          </div>
        </div>

        {/* 3. NETWORK DIRECTORY (List Layout) */}
        <div className="space-y-24">
          {data.network_directory.map((cat: any, idx: number) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-12 items-start border-t border-slate-100 dark:border-white/5 pt-12"
            >
              {/* Left: Text Info */}
              <div className="lg:col-span-4 sticky top-32">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {cat.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-lg">
                  {cat.desc}
                </p>
                <Button variant="outline" className="rounded-full group">
                  View Full List{" "}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Right: Logo Grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {cat.partners.map((partner: any, i: number) => (
                    <LogoTile
                      key={i}
                      logo={partner.logo}
                      name={partner.name}
                      index={i}
                    />
                  ))}

                  {/* "And More" Card */}
                  <div className="h-32 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[1.5rem] border border-dashed border-slate-300 dark:border-slate-700 text-slate-400">
                    <span className="text-2xl font-bold">+15</span>
                    <span className="text-xs font-bold uppercase tracking-wider">
                      More Partners
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
