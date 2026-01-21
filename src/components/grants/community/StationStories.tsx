"use client";

import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export function StationStories({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white dark:bg-[#1E1612]">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#3F2E23] dark:text-white">
            Stories from the Field
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {data.map((story: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row gap-8 items-center bg-[#F5F2EF] dark:bg-[#2A1F18] p-6 rounded-[2rem]"
            >
              <div className="w-full lg:w-48 h-48 shrink-0 relative rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">
                  <MapPin className="w-4 h-4" /> {story.location}
                </div>
                <h3 className="text-2xl font-bold text-[#3F2E23] dark:text-white mb-3">
                  {story.name}
                </h3>
                <p className="text-[#8C7B73] dark:text-[#D6C5BC] italic leading-relaxed">
                  "{story.story}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
