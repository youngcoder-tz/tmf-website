"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

export function AlumniSpotlight({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-20 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">
              Fellows in Leadership
            </h2>
            <p className="text-slate-400 text-lg">
              Our alumni lead 60% of Tanzania's major media houses.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((person: any, idx: number) => (
            <div
              key={idx}
              className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="h-64 relative">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {person.name}
                  </h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-500">
                    {person.fellowship_year}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />

                <p className="text-slate-300 italic mb-8 leading-relaxed text-sm">
                  "{person.quote}"
                </p>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
                    Current Role
                  </p>
                  <p className="text-white font-bold text-sm mb-4">
                    {person.current_role}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    {person.impact_stat}
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
