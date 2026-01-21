// components/annual/ReportHighlights.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Zap,
  Target,
  Globe,
  Shield,
  TrendingUp,
  Users,
  BookOpen,
  ExternalLink,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ReportHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Investigative Journalism Breakthrough",
      description:
        "Uncovered $4.2M in public fund mismanagement, leading to 8 accountability actions.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
      category: "Impact",
      icon: Target,
      color: "from-red-500 to-pink-500",
      stats: { value: "8", label: "Accountability Actions" },
    },
    {
      title: "Digital Innovation Lab Launch",
      description:
        "Established Tanzania's first media innovation hub, training 45 journalists in digital skills.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      category: "Innovation",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      stats: { value: "45", label: "Journalists Trained" },
    },
    {
      title: "Women in Media Leadership",
      description:
        "Achieved 40% increase in female leadership roles across Tanzanian media.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&auto=format&fit=crop",
      category: "Equality",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      stats: { value: "40%", label: "Increase" },
    },
    {
      title: "Climate Change Reporting",
      description:
        "Produced award-winning documentary series on climate impacts in coastal communities.",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
      category: "Environment",
      icon: Globe,
      color: "from-emerald-500 to-green-500",
      stats: { value: "3", label: "Awards Won" },
    },
    {
      title: "Emergency Support Program",
      description:
        "Provided rapid response support to 12 journalists facing threats.",
      image:
        "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&auto=format&fit=crop",
      category: "Safety",
      icon: Shield,
      color: "from-amber-500 to-orange-500",
      stats: { value: "12", label: "Journalists Protected" },
    },
    {
      title: "Community Radio Expansion",
      description:
        "Extended reach to 15 remote villages, increasing listenership by 200%.",
      image:
        "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop",
      category: "Community",
      icon: BookOpen,
      color: "from-violet-500 to-purple-500",
      stats: { value: "200%", label: "Growth" },
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-1.5">
          <Award className="h-4 w-4 mr-2" />
          Key Highlights
        </Badge>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Notable Achievements & Breakthroughs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A selection of our most impactful initiatives and success stories from
          the past year
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${highlight.color} opacity-40`}
                />
                <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0">
                  {highlight.category}
                </Badge>
                <div className="absolute bottom-4 right-4">
                  <div className="text-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {highlight.stats.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {highlight.stats.label}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${highlight.color} opacity-20`}
                  >
                    <highlight.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {highlight.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {highlight.description}
                </p>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <Link href="#">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Achievement Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "28", label: "Awards & Recognitions", icon: Award },
              { value: "156", label: "Training Sessions", icon: BookOpen },
              { value: "1,245", label: "Participants Trained", icon: Users },
              { value: "+45%", label: "Overall Growth", icon: TrendingUp },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReportHighlights;
