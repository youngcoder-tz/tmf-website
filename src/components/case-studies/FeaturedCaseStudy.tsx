// components/case-studies/FeaturedCaseStudy.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Award,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  MapPin,
  Target,
  CheckCircle,
  ExternalLink,
  BookOpen,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface FeaturedCaseStudyProps {
  caseStudy: any;
}

const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ caseStudy }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-1.5">
            <Award className="h-4 w-4 mr-2" />
            Featured Case Study
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            In-Depth Analysis: {caseStudy.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive breakdown of methodology, challenges, and outcomes
            from one of our most impactful projects.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
        >
          <div className="grid lg:grid-cols-2">
            {/* Media Column */}
            <div className="relative h-96 lg:h-auto">
              <Image
                src={caseStudy.featuredImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} opacity-40`}
              />

              {/* Video Controls */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-10 w-10 text-white" />
                  ) : (
                    <Play className="h-10 w-10 text-white ml-1" />
                  )}
                </Button>
              </div>

              {/* Metrics Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      label: "Impact Score",
                      value: `${caseStudy.impactScore}%`,
                      icon: TrendingUp,
                    },
                    {
                      label: "Grant Amount",
                      value: `$${(caseStudy.grantAmount / 1000).toFixed(0)}K`,
                      icon: DollarSign,
                    },
                    {
                      label: "Duration",
                      value: caseStudy.duration,
                      icon: Clock,
                    },
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <metric.icon className="h-5 w-5 text-white mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                    {caseStudy.category}
                  </Badge>
                  <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                    {caseStudy.subcategory}
                  </Badge>
                  {caseStudy.trending && (
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {caseStudy.excerpt}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Key Performance Indicators
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(caseStudy.metrics)
                    .slice(0, 4)
                    .map(([key, value]: [string, any], idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                      >
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {typeof value === "number" && value > 1000
                            ? `${(value / 1000).toFixed(1)}K`
                            : value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>Organization:</span>
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {caseStudy.organization}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Location:</span>
                  </div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {caseStudy.region}, Tanzania
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <Button asChild className="flex-1" size="lg">
                  <Link href={`/impact/case-studies/${caseStudy.slug}`}>
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Full Analysis
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/apply">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Apply Similar Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Methodology Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Methodology",
              description: caseStudy.methodology,
              icon: Target,
              color: "from-blue-500 to-cyan-500",
            },
            {
              title: "Challenges",
              description: caseStudy.challenges.join(", "),
              icon: Shield,
              color: "from-amber-500 to-orange-500",
            },
            {
              title: "Outcomes",
              description: `${caseStudy.outcomes.length} key achievements`,
              icon: CheckCircle,
              color: "from-emerald-500 to-green-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
