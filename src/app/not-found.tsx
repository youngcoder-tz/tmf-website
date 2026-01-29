"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4 bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* --- Background Radar & Particles --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Concentric Circles */}
        {[100, 175, 250].map((size, idx) => (
          <div
            key={idx}
            className={`absolute w-[${size}px] h-[${size}px] rounded-full border transition-colors duration-500
              ${idx === 0 ? "border-slate-300 dark:border-slate-700" : ""}
              ${idx === 1 ? "border-slate-400 dark:border-slate-800" : ""}
              ${idx === 2 ? "border-slate-500 dark:border-slate-900" : ""}
            `}
          />
        ))}

        {/* Scanning Line */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-[250px] h-[250px] origin-center"
        >
          <div className="w-full h-1/2 bg-gradient-to-l from-transparent to-blue-500/10 border-r border-blue-500/50" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* --- Glitchy 404 Text --- */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative inline-block mb-8"
        >
          <h1 className="text-[10rem] md:text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-slate-700 dark:from-blue-400 dark:to-slate-200 select-none">
            404
          </h1>
          <div className="absolute -top-4 -right-12 px-4 py-2 bg-red-600/10 dark:bg-red-900/20 border border-red-500/30 dark:border-red-400/30 rounded-full text-red-400 dark:text-red-300 font-mono text-xs font-bold uppercase tracking-widest rotate-12">
            Signal Lost
          </div>
        </motion.div>

        {/* --- Heading & Description --- */}
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-4">
          This story hasn&apos;t been written yet.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-md mx-auto leading-relaxed">
          The page you are looking for has been moved, deleted, or never
          existed. Let&apos;s get you back on track.
        </p>

        {/* --- Liquid Glass Recovery Panel --- */}
        <div className="bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-[2rem] shadow-2xl transition-colors duration-500">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Input
              placeholder="Search for grants, news, or resources..."
              className="h-14 pl-6 pr-14 rounded-xl bg-white/10 dark:bg-slate-800/40 border-white/20 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus-visible:ring-blue-500 transition-colors duration-300"
            />
            <div className="absolute right-2 top-2 bottom-2 w-12 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-300">
              <Search className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full h-14 justify-start pl-6 rounded-xl border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 text-slate-800 dark:text-white hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Home className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400" />
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full h-14 justify-start pl-6 rounded-xl border-white/10 dark:border-white/20 bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 text-slate-800 dark:text-white hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FileQuestion className="w-5 h-5 mr-3 text-orange-400 dark:text-orange-300" />
                Report Broken Link
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="mt-12 opacity-40">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Error Code: 404_PAGE_NOT_FOUND
          </p>
        </div>
      </div>
    </main>
  );
}
