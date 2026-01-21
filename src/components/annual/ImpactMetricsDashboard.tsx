// components/annual/ImpactMetricsDashboard.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Target,
  DollarSign,
  Users,
  Globe,
  Award,
  BookOpen,
  BarChart3,
  Calendar,
  MapPin,
  Zap,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "../ui/badge";

interface ImpactMetricsDashboardProps {
  stats: any;
}

const ImpactMetricsDashboard: React.FC<ImpactMetricsDashboardProps> = ({
  stats,
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const metrics = [
    {
      category: "Funding & Grants",
      icon: DollarSign,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      items: [
        {
          label: "Total Funding",
          value: `$${(stats.totalFunding / 1000000).toFixed(1)}M`,
          change: "+32%",
        },
        {
          label: "Average Grant Size",
          value: `$${stats.averageGrantSize.toLocaleString()}`,
          change: "+15%",
        },
        { label: "Total Grants", value: stats.totalGrants, change: "+24%" },
      ],
    },
    {
      category: "Reach & Impact",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      items: [
        {
          label: "Audience Reach",
          value: `${(stats.audienceReach / 1000000).toFixed(1)}M`,
          change: "+45%",
        },
        { label: "Media Outlets", value: stats.mediaOutlets, change: "+22%" },
        { label: "Policy Changes", value: "42", change: "+65%" },
      ],
    },
    {
      category: "Capacity Building",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      items: [
        { label: "Journalists Supported", value: "245", change: "+28%" },
        {
          label: "Training Sessions",
          value: stats.trainingSessions,
          change: "+38%",
        },
        {
          label: "Participants Trained",
          value: stats.participantsTrained.toLocaleString(),
          change: "+42%",
        },
      ],
    },
    {
      category: "Recognition",
      icon: Award,
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      items: [
        { label: "Awards Won", value: stats.awardsWon, change: "+55%" },
        {
          label: "Completed Projects",
          value: stats.completedProjects,
          change: "+18%",
        },
        {
          label: "Active Projects",
          value: stats.activeProjects,
          change: "+31%",
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Impact Metrics Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive performance indicators for {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Last updated:
          </span>
          <span className="font-medium">March 15, 2024</span>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="reach">Reach</TabsTrigger>
          <TabsTrigger value="capacity">Capacity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${category.bgColor}`}>
                        <category.icon
                          className={`h-6 w-6 ${category.color}`}
                        />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {item.label}
                            </span>
                            <Badge
                              className={
                                item.change.startsWith("+")
                                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                                  : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                              }
                            >
                              {item.change.startsWith("+") ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {item.change}
                            </Badge>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {item.value}
                          </div>
                          <Progress
                            value={Math.min(100, 20 + itemIndex * 30)}
                            className="h-1"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Other tabs would have detailed views */}
      </Tabs>

      {/* Impact Score Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Overall Impact Score
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                Based on 12 key performance indicators across funding
                efficiency, reach, capacity building, and recognition metrics.
              </p>
            </div>
            <div className="relative">
              <div className="h-48 w-48 relative">
                {/* Circular Progress */}
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.1)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset="283"
                    style={{
                      strokeDashoffset: `calc(283 - (283 * 94) / 100)`,
                      transition: "stroke-dashoffset 2s ease-in-out",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    94%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Impact Score
                  </div>
                  <Badge className="mt-2 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% from last year
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactMetricsDashboard;
