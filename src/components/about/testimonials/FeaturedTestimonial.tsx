"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function FeaturedTestimonial({ data }: { data: any }) {
  return (
    <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-48 h-48 lg:w-64 lg:h-64 relative shrink-0 rounded-full border-4 border-white/20 p-2">
            <div className="w-full h-full relative rounded-full overflow-hidden bg-indigo-800">
              <Image
                src={data.image}
                alt="Speaker"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-3 rounded-full shadow-lg">
              <Quote className="w-6 h-6 fill-current" />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-6 opacity-90">
              "{data.text}"
            </h3>
            <p className="font-bold text-lg">{data.author.split(",")[0]}</p>
            <p className="text-indigo-300 text-sm uppercase tracking-wider">
              {data.author.split(",")[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
