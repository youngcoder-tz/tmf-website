// components/grantees/GranteeCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Eye,
  ExternalLink,
  Users,
  Award,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";

interface GranteeCardProps {
  grantee: any;
  viewMode: "grid" | "list";
  index: number;
}

const GranteeCard: React.FC<GranteeCardProps> = ({
  grantee,
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
        <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image */}
            <div className="md:w-48 h-48 relative rounded-xl overflow-hidden">
              <Image
                src={grantee.image}
                alt={grantee.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${grantee.color} opacity-20`}
              />
              <Badge className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0 shadow-lg">
                {grantee.status}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {grantee.name}
                    </h3>
                    {grantee.featured && (
                      <Badge
                        variant="outline"
                        className="border-blue-500 text-blue-600 dark:text-blue-400"
                      >
                        Featured
                      </Badge>
                    )}
                    {grantee.trending && (
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
                      {grantee.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {grantee.year}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4" />$
                      {grantee.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                {grantee.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  {
                    icon: Eye,
                    label: "Reach",
                    value: `${(grantee.impact.reach / 1000).toFixed(0)}K`,
                  },
                  {
                    icon: Users,
                    label: "Stories",
                    value: grantee.impact.stories,
                  },
                  {
                    icon: CheckCircle,
                    label: "Changes",
                    value: grantee.impact.changes,
                  },
                  {
                    icon: Award,
                    label: "Awards",
                    value: grantee.impact.awards,
                  },
                ].map((metric, idx) => (
                  <div
                    key={idx}
                    className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                  >
                    <metric.icon className="h-5 w-5 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {grantee.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/impact/grantees/${grantee.id}`}>
                    View Details
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
            src={grantee.image}
            alt={grantee.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${grantee.color} opacity-40`}
          />

          {/* Status Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0 shadow-lg">
              {grantee.status}
            </Badge>
            {grantee.featured && (
              <Badge className="bg-blue-500 text-white border-0 shadow-lg">
                Featured
              </Badge>
            )}
          </div>

          {/* Organization Logo */}
          <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-900 overflow-hidden shadow-xl">
            <Image
              src={grantee.logo}
              alt={grantee.organization}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {grantee.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {grantee.organization}
                </p>
              </div>
              <Badge variant="outline" className="text-xs">
                {grantee.category}
              </Badge>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
              {grantee.description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {grantee.region}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />$
                {grantee.amount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Progress Bar for Active Projects */}
          {grantee.status === "Active" && (
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700 dark:text-gray-300">
                  Progress
                </span>
                <span className="font-semibold">{grantee.completion}%</span>
              </div>
              {/* <Progress value={grantee.completion} className="h-2" /> */}
            </div>
          )}

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              {
                icon: Eye,
                value: `${(grantee.impact.reach / 1000).toFixed(0)}K`,
                label: "Reach",
              },
              { icon: Award, value: grantee.impact.awards, label: "Awards" },
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
              {grantee.tags.slice(0, 2).map((tag: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button asChild size="sm" className="rounded-full">
              <Link href={`/impact/grantees/${grantee.id}`}>
                View Story
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GranteeCard;
