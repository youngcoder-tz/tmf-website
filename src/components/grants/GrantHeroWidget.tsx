"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Trophy, Users, AlertCircle } from "lucide-react";

export function GrantHeroWidget({ data }: { data: any }) {
  // Mock calculation for progress bar (e.g., days left)
  const progressValue = 75;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="hidden lg:block relative"
    >
      {/* 1. Background Glow (matches your blue theme) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[80px] rounded-full -z-10" />

      {/* 2. Glass Card */}
      <div className="rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
        {/* Header: Urgency */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-slate-300 font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-400" /> Time Remaining
            </span>
            <span className="text-white font-bold">5 Days</span>
          </div>
          {/* Custom Progress Bar */}
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full"
              style={{ width: `${progressValue}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-right">
            Closes Nov 30, 2024 @ Midnight EAT
          </p>
        </div>

        {/* Grid Stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* Stat 1 */}
          <div className="items-center p-3 rounded-2xl bg-white/5 border border-border/60 flex gap-2 hover:bg-white/10 transition-colors">
            <div className="w-11 h-11 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
              <Trophy className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase">
                Total Awards
              </p>
              <p className="text-xl font-bold ">10 Spots</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-3 items-center rounded-2xl bg-white/5 border flex gap-2 border-border/60 hover:bg-white/10 transition-colors">
            <div className="w-11 h-11 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase">
                Competition
              </p>
              <p className="text-xl font-bold ">Medium</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex items-start gap-3 p-3 rounded-xl bg-blue-900/20 border border-blue-500/20">
          <AlertCircle className="w-5 h-5 text-blue-400 shrink-0" />
          <p className="text-xs text-blue-200 leading-relaxed">
            <strong>Tip:</strong> Early submissions receive preliminary feedback
            if sent before Nov 25.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
