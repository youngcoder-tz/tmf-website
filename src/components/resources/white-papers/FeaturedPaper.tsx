"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedPaper({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="bg-[#1C1917] rounded-[3rem] text-white p-12 md:p-20 shadow-2xl relative overflow-hidden">
          {/* Background Mesh */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-800/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
            {/* Cover Image */}
            <div className="lg:col-span-5 relative group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 border-stone-600 bg-stone-800 transform group-hover:-translate-y-4 transition-transform duration-500">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">
                    {data.date}
                  </p>
                  <h3 className="text-xl font-serif leading-tight">
                    {data.title}
                  </h3>
                </div>
              </div>
              {/* Shadow */}
              <div className="absolute -bottom-8 left-4 right-4 h-4 bg-black/50 blur-xl group-hover:blur-2xl transition-all" />
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <Badge className="bg-stone-700 text-stone-200 border-0 px-4 py-1 mb-8 hover:bg-stone-600">
                {data.tag}
              </Badge>

              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                {data.title}
              </h2>

              <div className="flex items-center gap-4 mb-8 text-sm font-bold text-stone-400 uppercase tracking-widest border-b border-white/10 pb-8">
                <span>By {data.author}</span>
                <span className="w-1 h-1 rounded-full bg-stone-500" />
                <span>{data.citations} Citations</span>
              </div>

              <p className="text-lg text-stone-300 mb-10 leading-relaxed max-w-2xl font-light">
                "{data.abstract}"
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="h-14 px-8 rounded-full bg-white text-black font-bold hover:bg-stone-200">
                  <Download className="w-4 h-4 mr-2" /> Download PDF
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 rounded-full border-stone-600 text-stone-300 hover:text-white hover:bg-white/5 hover:border-white"
                >
                  <BookOpen className="w-4 h-4 mr-2" /> Read Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
