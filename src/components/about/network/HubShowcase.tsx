"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, Activity } from "lucide-react";

export function HubShowcase({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#050A14]">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Regional Nodes
            </h2>
            <p className="text-slate-400">
              Our physical footprint across the continent.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((hub: any, idx: number) => (
            <div
              key={idx}
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={hub.image}
                alt={hub.city}
                fill
                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/60 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="inline-block px-3 py-1 bg-cyan-500 text-black text-xs font-bold uppercase rounded-md mb-4">
                  {hub.type}
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {hub.city}
                </h3>
                <p className="text-cyan-200/80 mb-6 font-mono text-sm">
                  {hub.focus}
                </p>

                {/* Mini Stats */}
                <div className="flex gap-4 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {hub.stats.map((stat: string, i: number) => (
                    <div
                      key={i}
                      className="text-xs font-bold text-slate-300 flex items-center gap-1"
                    >
                      <Activity className="w-3 h-3 text-cyan-500" /> {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
