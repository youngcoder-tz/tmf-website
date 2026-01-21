"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function DonateHero({ data }: { data: any }) {
  const [frequency, setFrequency] = useState("Monthly");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  // Logic to determine active amount and impact text
  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;
  const impactText =
    data.donation_widget.impact_mapping[currentAmount || "custom"] ||
    data.donation_widget.impact_mapping["custom"];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden pt-32 pb-20">
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.hero.bg_image}
          alt="Journalists in field"
          fill
          priority
          className="object-cover opacity-20 mix-blend-overlay"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40" />
        {/* Rose Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN: Narrative & Trust */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Heart className="w-4 h-4 fill-current" />
              {data.hero.badge}
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Fuel the stories that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                change laws.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
              {data.hero.subheadline}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 border-t border-white/10 pt-8">
              {data.hero.trust_badges.map((badge: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm font-medium text-slate-400"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-500">
                    {idx === 0 ? (
                      <Lock className="w-4 h-4" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                  </div>
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Donation Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden">
              {/* Decorative Top Gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500" />

              {/* 1. Frequency Toggles */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-8">
                {data.donation_widget.frequencies.map((freq: string) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={cn(
                      "flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300",
                      frequency === freq
                        ? "bg-white dark:bg-slate-700 text-rose-600 shadow-sm"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
                    )}
                  >
                    {freq} {freq === "Monthly" && "❤️"}
                  </button>
                ))}
              </div>

              {/* 2. Amount Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {data.donation_widget.presets.map((preset: any) => (
                  <button
                    key={preset.amount}
                    onClick={() => {
                      setSelectedAmount(preset.amount);
                      setCustomAmount("");
                    }}
                    className={cn(
                      "relative h-20 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center",
                      selectedAmount === preset.amount && !customAmount
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-400"
                        : "border-slate-100 dark:border-slate-800 bg-transparent text-slate-600 dark:text-slate-300 hover:border-rose-200",
                    )}
                  >
                    <span className="text-2xl font-extrabold">
                      ${preset.amount}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">
                      {preset.label}
                    </span>

                    {/* Active Checkmark */}
                    {selectedAmount === preset.amount && !customAmount && (
                      <div className="absolute top-2 right-2 text-rose-500">
                        <CheckCircle2 className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* 3. Custom Amount */}
              <div className="relative mb-8">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="Other Amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="h-14 pl-8 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-lg font-bold focus-visible:ring-rose-500"
                />
              </div>

              {/* 4. Impact Statement (Dynamic) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAmount || "default"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-8 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-100 dark:border-rose-900/30 flex gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-rose-600 dark:text-rose-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-rose-600 dark:text-rose-400 mb-1">
                      Your Impact
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-snug">
                      {impactText}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 5. Donate Button */}
              <Button className="w-full h-16 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xl shadow-lg shadow-rose-600/30 transition-all hover:scale-[1.02]">
                Donate {currentAmount ? `$${currentAmount}` : ""} {frequency}{" "}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>

              <p className="text-center text-xs text-slate-400 mt-4 flex justify-center items-center gap-2">
                <Lock className="w-3 h-3" /> Secure SSL Payment powered by
                Stripe
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
