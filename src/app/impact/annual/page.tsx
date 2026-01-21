// app/impact/annual/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Download,
  Share2,
  Eye,
  TrendingUp,
  Users,
  Globe,
  Award,
  DollarSign,
  BookOpen,
  BarChart3,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Play,
  ExternalLink,
  Heart,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  FileText,
  PieChart,
  LineChart,
  Map,
  Filter,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AnnualReportHero from "@/components/annual/AnnualReportHero";
import ImpactMetricsDashboard from "@/components/annual/ImpactMetricsDashboard";
import ReportHighlights from "@/components/annual/ReportHighlights";
import InteractiveCharts from "@/components/annual/InteractiveCharts";
import SuccessStoriesCarousel from "@/components/annual/SuccessStoriesCarousel";
import RegionalImpactMap from "@/components/annual/RegionalImpactMap";
import DownloadSection from "@/components/annual/DownloadSection";

// Mock data
const annualReport = {
  year: 2024,
  title: "2024 Impact Report: Journalism That Transforms",
  subtitle:
    "A year of unprecedented growth and tangible change across Tanzania",
  theme: "Transformative Journalism",
  color: "from-blue-600 via-purple-600 to-pink-600",
  coverImage:
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&auto=format&fit=crop",
  highlights: [
    {
      title: "Record Funding Year",
      value: "$2.4M",
      change: "+32%",
      description: "Total grants disbursed",
      icon: DollarSign,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "Journalists Supported",
      value: "245",
      change: "+28%",
      description: "Across all programs",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Impact Stories Published",
      value: "1,842",
      change: "+45%",
      description: "Stories creating change",
      icon: BookOpen,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Policy Changes Influenced",
      value: "42",
      change: "+65%",
      description: "Through investigative work",
      icon: Target,
      color: "text-amber-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
    },
  ],
  stats: {
    totalGrants: 89,
    activeProjects: 56,
    completedProjects: 33,
    totalFunding: 2400000,
    averageGrantSize: 27000,
    regionsCovered: 12,
    mediaOutlets: 145,
    audienceReach: 18500000,
    awardsWon: 28,
    trainingSessions: 156,
    participantsTrained: 1245,
  },
};

const previousReports = [
  { year: 2023, title: "Building Resilient Media", downloads: 1284 },
  { year: 2022, title: "Truth in Times of Change", downloads: 986 },
  { year: 2021, title: "Voices of Progress", downloads: 754 },
  { year: 2020, title: "Journalism in Crisis", downloads: 1123 },
];

export default function AnnualReportPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [showFullReport, setShowFullReport] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
      {/* Hero Section */}
      <AnnualReportHero report={annualReport} />

      {/* Quick Navigation */}
      <div className="sticky top-20 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <ScrollArea className="w-full">
            <div className="flex items-center gap-1 py-4">
              {[
                { id: "overview", label: "Overview", icon: Eye },
                { id: "metrics", label: "Metrics", icon: BarChart3 },
                { id: "highlights", label: "Highlights", icon: Sparkles },
                { id: "regional", label: "Regional Impact", icon: Map },
                { id: "stories", label: "Success Stories", icon: BookOpen },
                { id: "charts", label: "Data & Charts", icon: PieChart },
                { id: "download", label: "Download", icon: Download },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => {
                    setActiveSection(item.id);
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full px-4 whitespace-nowrap"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Report Navigation */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-32 space-y-8">
              {/* Report Info Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Report
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      2024 Annual
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Published
                    </span>
                    <span className="font-medium">March 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Pages
                    </span>
                    <span className="font-medium">86</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Downloads
                    </span>
                    <span className="font-medium">1,284</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <Download className="mr-2 h-4 w-4" />
                    Download Full Report (PDF)
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Report
                  </Button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  Table of Contents
                </h3>
                <ScrollArea className="h-64">
                  <nav className="space-y-2">
                    {[
                      { title: "Executive Summary", page: 1 },
                      { title: "Year in Review", page: 5 },
                      { title: "Financial Overview", page: 12 },
                      { title: "Grant Programs", page: 18 },
                      { title: "Regional Impact", page: 27 },
                      { title: "Success Stories", page: 35 },
                      { title: "Capacity Building", page: 44 },
                      { title: "Media Innovation", page: 52 },
                      { title: "Policy Influence", page: 60 },
                      { title: "Looking Ahead", page: 72 },
                      { title: "Appendices", page: 78 },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 text-xs text-gray-500">
                            {index + 1}
                          </div>
                          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {item.page}
                        </span>
                      </a>
                    ))}
                  </nav>
                </ScrollArea>
              </div>

              {/* Previous Reports */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Previous Reports
                </h3>
                <div className="space-y-3">
                  {previousReports.map((report) => (
                    <Link
                      key={report.year}
                      href={`/impact/annual/${report.year}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {report.year} Report
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                          {report.title}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {report.downloads} downloads
                        </span>
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <Badge className="mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
                    <Sparkles className="h-3.5 w-3.5 mr-2" />
                    Year in Review
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Executive Summary
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    2024 marked a transformative year for Tanzania Media
                    Foundation, with record-breaking impact across all our
                    programs. We supported 245 journalists, funded 89 projects,
                    and reached over 18.5 million Tanzanians with stories that
                    drive change.
                  </p>
                </div>

                {/* Key Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {annualReport.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`p-3 rounded-lg ${highlight.bgColor}`}
                          >
                            <highlight.icon
                              className={`h-6 w-6 ${highlight.color}`}
                            />
                          </div>
                          <Badge
                            className={`${highlight.change.startsWith("+") ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
                          >
                            {highlight.change}
                          </Badge>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          {highlight.value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                          {highlight.title}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {highlight.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Impact Metrics Dashboard */}
            <section id="metrics" className="scroll-mt-24">
              <ImpactMetricsDashboard stats={annualReport.stats} />
            </section>

            {/* Interactive Charts */}
            <section id="charts" className="scroll-mt-24">
              <InteractiveCharts />
            </section>

            {/* Report Highlights */}
            <section id="highlights" className="scroll-mt-24">
              <ReportHighlights />
            </section>

            {/* Regional Impact */}
            <section id="regional" className="scroll-mt-24">
              <RegionalImpactMap />
            </section>

            {/* Success Stories */}
            <section id="stories" className="scroll-mt-24">
              <SuccessStoriesCarousel />
            </section>

            {/* Download Section */}
            <section id="download" className="scroll-mt-24">
              <DownloadSection />
            </section>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button className="rounded-full h-14 px-6 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Download className="mr-2 h-5 w-5" />
          Download Full Report
          <Badge className="ml-3 bg-white/20 text-white border-0">
            PDF 24MB
          </Badge>
        </Button>
      </motion.div>
    </div>
  );
}
