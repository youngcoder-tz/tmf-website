// components/case-studies/InsightsGrid.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Lightbulb,
  BarChart3,
  Download,
  ExternalLink,
  BookOpen,
  Share2,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const InsightsGrid: React.FC = () => {
  const insights = [
    {
      title: "Key Success Factors Analysis",
      description: "What makes some projects 3x more successful than others?",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      type: "Research",
      readTime: "8 min",
      downloads: 428,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "ROI of Investigative Journalism",
      description:
        "How every $1 invested in investigative reporting returns $12 in public value.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
      type: "Analysis",
      readTime: "12 min",
      downloads: 312,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Community Engagement Best Practices",
      description:
        "Proven strategies for meaningful community participation in media projects.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
      type: "Guide",
      readTime: "10 min",
      downloads: 567,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Digital Innovation Case Studies",
      description:
        "How technology is transforming media impact measurement in Tanzania.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      type: "Innovation",
      readTime: "15 min",
      downloads: 289,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const resources = [
    {
      title: "Case Study Template",
      description:
        "Download our comprehensive case study template for your projects.",
      icon: Download,
      format: "PDF",
      size: "2.4 MB",
      downloads: 1245,
    },
    {
      title: "Impact Measurement Toolkit",
      description:
        "Tools and frameworks for measuring media impact effectively.",
      icon: BarChart3,
      format: "ZIP",
      size: "8.7 MB",
      downloads: 892,
    },
    {
      title: "Success Stories Database",
      description:
        "Access our complete database of success stories and outcomes.",
      icon: BookOpen,
      format: "Excel",
      size: "3.2 MB",
      downloads: 567,
    },
  ];

  return (
    <div className="mt-12 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Insights & Resources
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Additional resources and analysis based on our case studies
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/resources">
            View All Resources
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Insights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${insight.color} opacity-40`}
                />
                <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0">
                  {insight.type}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {insight.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {insight.readTime} read
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {insight.downloads} downloads
                  </span>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Read Analysis
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Resources Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Practical Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Downloadable tools and templates for your projects
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <resource.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="outline">{resource.format}</Badge>
                </div>

                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>{resource.size}</span>
                  <span>{resource.downloads.toLocaleString()} downloads</span>
                </div>

                <Button size="sm" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="text-center py-8">
        <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Apply for funding and support to implement impactful media
              projects in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Apply for Grant
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsGrid;
