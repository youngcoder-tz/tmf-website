// components/annual/AnnualReportHero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Download, Share2, Eye, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AnnualReportHeroProps {
  report: any;
}

const AnnualReportHero: React.FC<AnnualReportHeroProps> = ({ report }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 pt-32 pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [null, "-100px", "100px"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="mb-6">
                <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-1.5 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Annual Impact Report
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                    {report.year}
                  </span>
                  <br />
                  <span className="text-gray-900 dark:text-white">
                    {report.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {report.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Report (PDF)
                </Button>
                <Button size="lg" variant="outline">
                  <Eye className="mr-2 h-5 w-5" />
                  Read Online
                </Button>
                <Button size="lg" variant="ghost">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Pages", value: "86" },
                  { label: "Projects", value: "89" },
                  { label: "Impact Score", value: "94%" },
                  { label: "Year", value: "2024" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900">
                <Image
                  src={report.coverImage}
                  alt={`${report.year} Annual Report Cover`}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${report.color} opacity-40`}
                />

                {/* Floating Elements on Cover */}
                <div className="absolute inset-0 p-8">
                  <div className="absolute top-8 left-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {report.year}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Impact Report
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                    <TrendingUp className="h-6 w-6 text-green-500 mb-2" />
                    <div className="font-bold text-gray-900 dark:text-white">
                      +45% Growth
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Year-over-year impact
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Scroll to explore
          </div>
          <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-transparent mx-auto" />
        </div>
      </motion.div>
    </section>
  );
};

export default AnnualReportHero;
