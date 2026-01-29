"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function MentorCarousel({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-serif">
            Meet Our Experts
          </h2>
          <p className="text-slate-500">Learn from the best in the industry.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((mentor: any, idx: number) => (
            <div key={idx} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-900/30 group-hover:border-purple-500 transition-colors duration-500">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {mentor.name}
              </h3>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">
                {mentor.specialty}
              </p>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">
                {mentor.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
