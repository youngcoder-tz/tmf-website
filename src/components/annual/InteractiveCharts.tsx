// components/annual/InteractiveCharts.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InteractiveCharts: React.FC = () => {
  const [timeRange, setTimeRange] = useState("year");
  const [activeChart, setActiveChart] = useState("funding");

  const chartData = {
    funding: {
      title: "Funding Distribution",
      description: "Breakdown of grants by category",
      data: [
        { category: "Investigative", value: 35, color: "#3b82f6" },
        { category: "Community Media", value: 25, color: "#8b5cf6" },
        { category: "Digital Innovation", value: 20, color: "#ec4899" },
        { category: "Capacity Building", value: 15, color: "#10b981" },
        { category: "Emergency Support", value: 5, color: "#f59e0b" },
      ],
    },
    growth: {
      title: "Year-over-Year Growth",
      description: "Quarterly performance comparison",
      data: [
        { quarter: "Q1", current: 45, previous: 38 },
        { quarter: "Q2", current: 52, previous: 41 },
        { quarter: "Q3", current: 68, previous: 52 },
        { quarter: "Q4", current: 79, previous: 61 },
      ],
    },
    regional: {
      title: "Regional Impact",
      description: "Projects by region across Tanzania",
      data: [
        { region: "Dar es Salaam", projects: 28, funding: 850000 },
        { region: "Arusha", projects: 18, funding: 520000 },
        { region: "Mwanza", projects: 15, funding: 430000 },
        { region: "Dodoma", projects: 12, funding: 380000 },
        { region: "Zanzibar", projects: 10, funding: 320000 },
        { region: "Mbeya", projects: 8, funding: 250000 },
      ],
    },
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Data Visualization
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Interactive charts and graphs showing our impact metrics
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs
        value={activeChart}
        onValueChange={setActiveChart}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
        </TabsList>

        <TabsContent value="funding" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {chartData.funding.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {chartData.funding.description}
                  </p>

                  {/* Donut Chart */}
                  <div className="relative h-64 w-64 mx-auto">
                    {/* <svg viewBox="0 0 100 100" className="w-full h-full">
                      {chartData.funding.data.reduce(
                        (acc, item, index, arr) => {
                          const previousValue = acc;
                          const angle = (item.value / 100) * 360;

                          return (
                            <g key={index}>
                              <path
                                d={`
                                M 50,50
                                L ${50 + 40 * Math.cos((previousValue * Math.PI) / 180)},${50 + 40 * Math.sin((previousValue * Math.PI) / 180)}
                                A 40,40 0 ${angle > 180 ? 1 : 0},1 ${50 + 40 * Math.cos(((previousValue + angle) * Math.PI) / 180)},${50 + 40 * Math.sin(((previousValue + angle) * Math.PI) / 180)}
                                Z
                              `}
                                fill={item.color}
                                opacity="0.8"
                              />
                              {acc + angle}
                            </g>
                          );
                        },
                        0,
                      )}
                    </svg> */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          $2.4M
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Total Grants
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Breakdown by Category
                  </h4>
                  {chartData.funding.data.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-center gap-4">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">
                              {item.category}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {item.value}% of total
                            </div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          ${((2400000 * item.value) / 100).toLocaleString()}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growth" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {chartData.growth.title}
              </h3>

              {/* Bar Chart */}
              <div className="h-64 flex items-end justify-between gap-4">
                {chartData.growth.data.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="text-center mb-2">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.quarter}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        2024
                      </div>
                    </div>
                    <div className="relative w-full flex justify-center">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${item.current}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="w-3/4 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t-lg"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${item.previous}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        className="absolute w-3/4 bg-gradient-to-t from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 rounded-t-lg opacity-50"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.current}%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        vs {item.previous}% last year
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regional" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-800">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    {chartData.regional.title}
                  </h3>

                  {/* Regional Map Visualization */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg p-4">
                    {/* Simplified Tanzania Map with Points */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {chartData.regional.data.map((region, index) => {
                        const positions = [
                          { top: "30%", left: "70%" }, // Dar
                          { top: "15%", left: "40%" }, // Arusha
                          { top: "45%", left: "25%" }, // Mwanza
                          { top: "50%", left: "50%" }, // Dodoma
                          { top: "40%", left: "75%" }, // Zanzibar
                          { top: "75%", left: "40%" }, // Mbeya
                        ];

                        return (
                          <div
                            key={index}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={positions[index]}
                          >
                            <div className="relative group">
                              <div
                                className={`h-${Math.max(4, region.projects)} w-${Math.max(4, region.projects)} rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg`}
                              >
                                <span className="text-white text-xs font-bold">
                                  {region.projects}
                                </span>
                              </div>
                              <div className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white dark:bg-gray-900 rounded-lg px-3 py-2 shadow-xl border border-gray-200 dark:border-gray-800 whitespace-nowrap">
                                  <div className="font-semibold text-gray-900 dark:text-white">
                                    {region.region}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {region.projects} projects
                                  </div>
                                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    ${(region.funding / 1000).toFixed(0)}K
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Regional Performance
                  </h4>
                  {chartData.regional.data.map((region, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {region.region}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {region.projects} projects
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900 dark:text-white">
                          ${(region.funding / 1000).toFixed(0)}K
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          funding
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InteractiveCharts;
