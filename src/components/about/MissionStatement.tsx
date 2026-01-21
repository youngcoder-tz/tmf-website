"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// --- DECORATION: Zone Style Blob ---
const ZoneBlob = () => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30 text-blue-200 dark:text-blue-900/30"
  >
    <path
      fill="currentColor"
      d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,70.9,34.5C59.7,46.1,48.6,55.7,36.4,62.8C24.2,69.9,10.9,74.5,-2,78C-14.9,81.5,-29.4,83.9,-41.6,77.7C-53.8,71.5,-63.7,56.7,-70.7,41.9C-77.7,27.1,-81.8,12.3,-79.8,-1.7C-77.8,-15.7,-69.7,-28.9,-59.8,-39.8C-49.9,-50.7,-38.2,-59.3,-25.9,-67.2C-13.6,-75.1,-0.7,-82.3,13.2,-83.4C27.1,-84.5,41.2,-79.5,44.7,-76.4Z"
      transform="translate(100 100)"
    />
  </svg>
);

export function MissionStatement({ data }: { data: any }) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT: Sticky Illustration */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-32">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 aspect-4/4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={data.illustration}
                alt="Mission in Action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
            </div>
            {/* Decorative Blob Behind */}
            <ZoneBlob />
          </div>

          {/* RIGHT: The List */}
          <div className="order-1 lg:order-2">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif tracking-widest text-slate-900 dark:text-white mb-4">
                {data.headline}
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                {data.subheadline}
              </p>
            </div>

            <div className="space-y-12">
              {data.items.map((item: any, idx: number) => {
                // Color Logic for Zone UI
                const colors: any = {
                  orange: "text-orange-500",
                  purple: "text-purple-600",
                  blue: "text-blue-600",
                };
                const accentColor = colors[item.color] || colors.blue;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="relative pl-4 group"
                  >
                    {/* Big Background Number */}
                    <div className="absolute -top-6 -left-2 text-8xl font-black text-slate-200 dark:text-slate-800 -z-10 select-none opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.id}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 pt-4">
                      <h3
                        className={cn("text-2xl font-bold mb-3", accentColor)}
                      >
                        {item.title}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
