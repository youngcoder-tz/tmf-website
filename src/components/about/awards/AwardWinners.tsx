"use client";

import React from "react";
import Image from "next/image";
import { Trophy, ArrowUpRight } from "lucide-react";

export function AwardWinners({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#0A0500] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-yellow-500 mb-16 text-center">
          Hall of Fame
        </h2>

        <div className="space-y-24">
          {data.map((winner: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center group"
            >
              {/* Image (Alternates) */}
              <div
                className={`w-full md:w-1/2 aspect-[4/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl ${idx % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <Image
                  src={winner.image}
                  alt={winner.project}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-lg">
                    <Trophy className="w-6 h-6 fill-current" />
                  </div>
                  <span className="text-4xl font-black text-white/20 group-hover:text-white/100 transition-colors">
                    {winner.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs block mb-4">
                  {winner.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  {winner.award}
                </h3>

                <div className="space-y-4 border-l-2 border-white/10 pl-6 mb-8">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                      Winning Project
                    </p>
                    <p className="text-xl font-bold text-white">
                      {winner.project}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">
                      Recipient
                    </p>
                    <p className="text-lg text-slate-300">{winner.winner}</p>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-bold text-yellow-500 hover:text-white transition-colors">
                  View Project <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
