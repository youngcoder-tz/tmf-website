"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function DirectorLetter({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#FAF9F6] dark:bg-[#1E1B18] text-[#1E1B18] dark:text-[#E7E5E4]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Portrait */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-t-full rounded-b-[200px] overflow-hidden border-8 border-white dark:border-white/5 shadow-2xl">
              <Image
                src={data.image}
                alt="Director"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 text-[10rem] text-slate-200 dark:text-white/5 font-serif z-0">
              ”
            </div>
          </div>

          {/* Letter */}
          <div className="md:col-span-7 relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
              {data.title}
            </h3>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8">
              {data.text}
            </p>

            <div className="border-t border-slate-200 dark:border-white/10 pt-8">
              {/* Signature Font simulation */}
              <p
                className="font-handwriting text-4xl mb-2 opacity-80"
                style={{ fontFamily: "cursive" }}
              >
                Ernest S.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest">
                {data.signature}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
