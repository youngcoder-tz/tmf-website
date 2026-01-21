"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PartnerCard = ({ partner, index }: { partner: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* THE TOOLTIP (Pop-up) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ translateX: "-50%" }}
            className="absolute left-1/2 bottom-full mb-6 w-64 z-50 pointer-events-none"
          >
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white shadow-2xl p-4 border border-slate-700">
              {/* Background Aura for Tooltip */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-amber-600/20 opacity-50" />

              <div className="relative z-10">
                {/* Mini Cover Image */}
                <div className="h-24 w-full rounded-xl overflow-hidden mb-3 relative">
                  <img
                    src={partner.image}
                    className="object-cover w-full h-full opacity-80"
                    alt="Work"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Text */}
                <h4 className="font-bold text-sm mb-1 text-white">
                  {partner.name}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {/* Triangle Pointer */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900 rotate-45 border-r border-b border-slate-700" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* THE CARD ITSELF (Matches your screenshot) */}
      <motion.div
        whileHover={{ y: -5 }}
        className="relative h-28 w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-white/5 flex items-center justify-center p-8 transition-all duration-500 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 overflow-hidden"
      >
        {/* Hover Aura Gradient inside the card */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* The Logo */}
        <img
          src={partner.logo}
          alt={partner.name}
          className="relative z-10 w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      </motion.div>
    </div>
  );
};

export function PartnerLogos({ logos }: { logos: any[] }) {
  // If logos is just strings (old data), don't break.
  // Ideally, use the new object structure.
  const safeLogos = logos.map((l) =>
    typeof l === "string"
      ? {
          name: "Partner",
          logo: l,
          description: "Strategic Partner",
          image: "",
        }
      : l,
  );

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-[#0B1120] border-t border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
            Our Ecosystem
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            Trusted by Global Leaders
          </h3>
        </div>

        {/* THE GRID: Responsive, centered, wrapping */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {safeLogos.map((partner: any, idx: number) => (
            <PartnerCard key={idx} partner={partner} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
