"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, ArrowRight } from "lucide-react";

export function ExecTeam({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 border-l-4 border-blue-600 pl-6">
          Executive Management
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {data.map((exec: any, idx: number) => (
            <div
              key={idx}
              className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="h-72 w-full relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={exec.image}
                  alt={exec.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{exec.name}</h3>
                  <p className="text-blue-400 font-bold uppercase text-xs tracking-wider">
                    {exec.role}
                  </p>
                </div>
              </div>

              {/* Bio Content */}
              <div className="p-8">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-sm">
                  {exec.bio}
                </p>

                <a
                  href={exec.linkedin}
                  className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> Connect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
