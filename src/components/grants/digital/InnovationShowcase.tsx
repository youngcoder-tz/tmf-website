"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function InnovationShowcase({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#050A0F] border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
            /deployed_projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((project: any, idx: number) => (
            <div key={idx} className="group relative">
              {/* Image Screen */}
              <div className="relative aspect-video bg-slate-800 border-4 border-slate-700 rounded-xl overflow-hidden mb-6 group-hover:border-[#00FF94] transition-colors duration-500 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100" />
              </div>

              {/* Info */}
              <div className="flex justify-between items-start">
                <div>
                  <Badge
                    variant="outline"
                    className="border-[#00FF94] text-[#00FF94] mb-2 font-mono text-[10px]"
                  >
                    {project.tag}
                  </Badge>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400">{project.desc}</p>
                </div>
                <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#00FF94] hover:text-black hover:border-[#00FF94] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
