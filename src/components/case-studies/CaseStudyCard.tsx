// components/case-studies/CaseStudyCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  DollarSign,
  Target,
  TrendingUp,
  ExternalLink,
  Bookmark,
  Play,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CaseStudyCardProps {
  caseStudy: any;
  viewMode: "grid" | "list";
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  viewMode,
  index,
}) => {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
      >
        <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-64 relative h-64 md:h-auto">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} opacity-40`}
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0">
                  {caseStudy.status}
                </Badge>
                {caseStudy.featured && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    Featured
                  </Badge>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    {caseStudy.trending && (
                      <Badge
                        variant="outline"
                        className="border-emerald-500 text-emerald-600 dark:text-emerald-400"
                      >
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {caseStudy.region}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {caseStudy.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4" />$
                      {caseStudy.grantAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                {caseStudy.excerpt}
              </p>

              {/* Impact Score & Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {caseStudy.impactScore}%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Impact Score
                  </div>
                </div>
                <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {caseStudy.difficulty}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Difficulty
                  </div>
                </div>
                <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {caseStudy.readTime}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Read Time
                  </div>
                </div>
                <div className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {caseStudy.year}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Year
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags
                    .slice(0, 3)
                    .map((tag: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                </div>
                <Button asChild size="sm" className="rounded-full">
                  <Link href={`/impact/case-studies/${caseStudy.slug}`}>
                    Read Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Image with Gradient Overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} opacity-40`}
          />

          {/* Status Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0 shadow-lg">
              {caseStudy.status}
            </Badge>
            {caseStudy.featured && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                Featured
              </Badge>
            )}
          </div>

          {/* Impact Score */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 shadow-lg text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {caseStudy.impactScore}%
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Impact
              </div>
            </div>
          </div>

          {/* Video Play Button */}
          <div className="absolute bottom-4 right-4">
            <Button
              size="icon"
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/50"
            >
              <Play className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {caseStudy.organization}
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {caseStudy.category}
              </Badge>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
              {caseStudy.excerpt}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {caseStudy.region}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />$
                {caseStudy.grantAmount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Difficulty Indicator */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700 dark:text-gray-300">
                Project Difficulty
              </span>
              <span className="font-semibold">{caseStudy.difficulty}</span>
            </div>
            <Progress
              value={
                caseStudy.difficulty === "High"
                  ? 90
                  : caseStudy.difficulty === "Medium"
                    ? 60
                    : 30
              }
              className="h-2"
            />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { icon: Clock, value: caseStudy.duration, label: "Duration" },
              { icon: Users, value: "Team", label: "Team Project" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <metric.icon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {caseStudy.tags.slice(0, 2).map((tag: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button asChild size="sm" className="rounded-full">
              <Link href={`/impact/case-studies/${caseStudy.slug}`}>
                Read Analysis
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
