"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Github, Terminal } from "lucide-react";

export function OpenSourceRepos({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0D1117] border-t border-[#30363D]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="w-8 h-8 text-[#58A6FF]" />
          <h2 className="text-3xl font-bold text-white font-mono">
            Open Source Contributions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((repo: any, idx: number) => (
            <div
              key={idx}
              className="p-6 bg-[#161B22] border border-[#30363D] rounded-xl hover:border-[#58A6FF] transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[#58A6FF] font-bold">
                  <Github className="w-4 h-4" />
                  <span className="text-sm hover:underline">{repo.name}</span>
                </div>
                <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">
                  Public
                </span>
              </div>

              <p className="text-slate-400 text-sm mb-6 h-16 line-clamp-3">
                {repo.desc}
              </p>

              <div className="flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span>{repo.lang}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-[#58A6FF]">
                  <Star className="w-4 h-4" />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1 hover:text-[#58A6FF]">
                  <GitFork className="w-4 h-4" />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
