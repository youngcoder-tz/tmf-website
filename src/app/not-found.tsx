"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowRight, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#02040A] text-white flex items-center justify-center relative overflow-hidden p-4">
      {/* 1. BACKGROUND RADAR EFFECT */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        {/* Concentric Circles */}
        <div className="absolute border border-slate-700 w-100 h-100 rounded-full" />
        <div className="absolute border border-slate-800 w-175 h-175 rounded-full" />
        <div className="absolute border border-slate-900 w-250 h-250 rounded-full" />

        {/* Scanning Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-250 h-250 origin-center"
        >
          <div className="w-full h-1/2 bg-linear-to-l from-transparent to-blue-500/10 border-r border-blue-500/50" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* 2. GLITCHY 404 TEXT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative inline-block mb-8"
        >
          <h1 className="text-[12rem] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-white to-slate-800 select-none">
            404
          </h1>
          <div className="absolute -top-4 -right-12 px-4 py-2 bg-red-600/10 border border-red-500/50 rounded-full text-red-400 font-mono text-xs font-bold uppercase tracking-widest rotate-12">
            Signal Lost
          </div>
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          This story hasn&apos;t been written yet.
        </h2>

        <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          The page you are looking for has been moved, deleted, or never
          existed. Let&apos;s get you back on track.
        </p>

        {/* 3. RECOVERY TOOLS */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Input
              placeholder="Search for grants, news, or resources..."
              className="h-14 pl-6 pr-14 rounded-xl bg-black/40 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500"
            />
            <div className="absolute right-2 top-2 bottom-2 w-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
              <Search className="w-5 h-5" />
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full h-14 justify-start pl-6 rounded-xl border-white/5 bg-white/2 hover:bg-white/10 text-slate-300 hover:text-white"
              >
                <Home className="w-5 h-5 mr-3 text-blue-400" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full h-14 justify-start pl-6 rounded-xl border-white/5 bg-white/2 hover:bg-white/10 text-slate-300 hover:text-white"
              >
                <FileQuestion className="w-5 h-5 mr-3 text-orange-400" />
                Report Broken Link
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="mt-12 opacity-40">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
            Error Code: 404_PAGE_NOT_FOUND
          </p>
        </div>
      </div>
    </main>
  );
}
