"use client";

import React from "react";
import { motion } from "framer-motion";
import { RadioTower, Mic2, TrendingUp } from "lucide-react";

const IconMap: any = { RadioTower, Mic2, TrendingUp };

export function SupportPillars({ data }: { data: any }) {
  return (
    <section className="py-24 bg-[#F5F2EF] dark:bg-[#2A1F18]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#3F2E23] dark:text-[#E7DFDA]">
            Our Support Model
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item: any, idx: number) => {
            const Icon = IconMap[item.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 rounded-[2rem] bg-white dark:bg-[#3F2E23] border border-[#D6C5BC]/50 dark:border-white/5 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#FAF6F3] dark:bg-black/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#3F2E23] dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-[#8C7B73] dark:text-[#D6C5BC] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
