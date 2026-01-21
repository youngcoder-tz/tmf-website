"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PartnershipTiers({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Partnership Levels
          </h2>
          <p className="text-slate-500 text-lg">
            Choose the engagement level that fits your CSR strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {data.tiers.map((tier: any, idx: number) => {
            const isPremium = tier.theme === "gold";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative p-8 rounded-[2.5rem] transition-all duration-300 hover:-translate-y-2",
                  isPremium
                    ? "bg-[#0B1120] text-white shadow-2xl shadow-amber-900/20 border border-amber-500/30 z-10 lg:scale-105"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-lg text-slate-900 dark:text-white",
                )}
              >
                {isPremium && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" /> Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3
                    className={cn(
                      "text-xl font-bold mb-2",
                      isPremium
                        ? "text-amber-400"
                        : "text-slate-900 dark:text-white",
                    )}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">
                      {tier.price}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        isPremium ? "text-slate-400" : "text-slate-500",
                      )}
                    >
                      / year
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-sm mt-4 leading-relaxed",
                      isPremium ? "text-slate-300" : "text-slate-500",
                    )}
                  >
                    {tier.desc}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-medium"
                    >
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          isPremium
                            ? "bg-amber-500 text-black"
                            : "bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-white",
                        )}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span
                        className={
                          isPremium
                            ? "text-slate-200"
                            : "text-slate-600 dark:text-slate-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full h-12 rounded-xl font-bold transition-all",
                    isPremium
                      ? "bg-amber-500 text-black hover:bg-amber-400"
                      : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black",
                  )}
                >
                  Inquire Now
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
