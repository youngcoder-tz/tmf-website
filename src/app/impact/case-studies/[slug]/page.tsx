// app/impact/case-studies/[slug]/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Download,
  Play,
  Clock,
  Users,
  DollarSign,
  MapPin,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileText,
  ExternalLink,
  Calendar,
  Award,
  Globe,
  Shield,
  Zap,
  Heart,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for individual case study
const caseStudy = {
  id: 1,
  title: "The Infrastructure Corruption Investigation",
  slug: "infrastructure-corruption-investigation",
  excerpt:
    "How investigative journalism recovered $2.3M in misappropriated public funds and led to accountability reforms across Tanzania's infrastructure sector.",
  category: "Investigative Journalism",
  subcategory: "Corruption",
  region: "Dar es Salaam",
  year: 2024,
  duration: "8 months",
  status: "Completed",
  impactScore: 95,
  difficulty: "High",
  grantAmount: 45000,
  readTime: "12 min",
  featuredImage:
    "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1600&auto=format&fit=crop",
  video:
    "https://assets.mixkit.co/videos/preview/mixkit-group-of-people-in-a-journalism-class-44471-large.mp4",
  tags: [
    "Corruption",
    "Infrastructure",
    "Public Funds",
    "Accountability",
    "Investigative",
    "Transparency",
  ],
  color: "from-blue-500 to-cyan-500",
  featured: true,
  trending: true,
  metrics: {
    audienceReach: 1250000,
    policyChanges: 8,
    fundsRecovered: 2300000,
    officialsHeldAccountable: 3,
    mediaCoverage: 42,
    awards: 3,
    legalCases: 5,
    communityEngagements: 28,
  },
  organization: "Tanzania Watchdog Network",
  journalist: "Jamal Hassan",
  teamMembers: 6,
  methodology: [
    "Data-driven investigation using public procurement databases",
    "Freedom of Information (FOI) requests for project documentation",
    "Undercover reporting at construction sites",
    "Expert interviews with engineers and accountants",
    "Legal review and fact-checking process",
  ],
  challenges: [
    "Threats and intimidation against journalists",
    "Limited access to government documents",
    "Legal obstacles and bureaucratic delays",
    "Safety concerns for whistleblowers",
    "Complex financial trail analysis",
  ],
  outcomes: [
    "Recovery of $2.3M in misappropriated public funds",
    "Suspension of 3 government officials pending investigation",
    "New transparency regulations for infrastructure projects",
    "Increased public awareness about project monitoring",
    "Strengthened whistleblower protection policies",
  ],
  timeline: [
    {
      month: "Month 1-2",
      activity: "Research & Planning",
      status: "Completed",
    },
    {
      month: "Month 3-4",
      activity: "Data Collection & FOI Requests",
      status: "Completed",
    },
    {
      month: "Month 5-6",
      activity: "Field Investigation & Interviews",
      status: "Completed",
    },
    {
      month: "Month 7",
      activity: "Analysis & Report Writing",
      status: "Completed",
    },
    {
      month: "Month 8",
      activity: "Publication & Impact Campaign",
      status: "Completed",
    },
  ],
  lessons: [
    "Early legal consultation prevents procedural obstacles",
    "Building relationships with trusted sources is crucial",
    "Multi-platform publishing maximizes reach and impact",
    "Regular safety assessments protect the team",
    "Collaboration with civic organizations amplifies effect",
  ],
  recommendations: [
    "Establish permanent oversight committees for major projects",
    "Implement real-time project tracking systems",
    "Strengthen whistleblower protection laws",
    "Increase budget transparency requirements",
    "Enhance journalist safety protocols",
  ],
};

export default function CaseStudyDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
      {/* Back Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Button variant="ghost" asChild>
              <Link href="/impact/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark
                  className={`h-5 w-5 ${isBookmarked ? "fill-blue-500 text-blue-500" : ""}`}
                />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Printer className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/impact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Impact
              </Link>
              <span>/</span>
              <Link
                href="/impact/case-studies"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white font-medium">
                {caseStudy.title}
              </span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Case Study
                    </Badge>
                    <Badge variant="outline">{caseStudy.category}</Badge>
                    {caseStudy.featured && (
                      <Badge className="bg-emerald-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                    {caseStudy.title}
                  </h1>

                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    {caseStudy.excerpt}
                  </p>
                </div>

                {/* Featured Image */}
                <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <Image
                    src={caseStudy.featuredImage}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${caseStudy.color} opacity-30`}
                  />
                  <Button className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Documentary
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      icon: TrendingUp,
                      label: "Impact Score",
                      value: `${caseStudy.impactScore}%`,
                    },
                    {
                      icon: DollarSign,
                      label: "Grant Amount",
                      value: `$${caseStudy.grantAmount.toLocaleString()}`,
                    },
                    {
                      icon: Clock,
                      label: "Duration",
                      value: caseStudy.duration,
                    },
                    {
                      icon: Users,
                      label: "Team Size",
                      value: caseStudy.teamMembers,
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 text-center"
                    >
                      <stat.icon className="h-6 w-6 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tabs Navigation */}
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="grid grid-cols-5 w-full">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="methodology">Methodology</TabsTrigger>
                    <TabsTrigger value="challenges">Challenges</TabsTrigger>
                    <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                    <TabsTrigger value="learnings">Learnings</TabsTrigger>
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Summary
                      </h3>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          This groundbreaking investigation exposed systemic
                          corruption in Tanzania's infrastructure sector,
                          revealing how $2.3M in public funds intended for road
                          construction and public building projects were
                          misappropriated through shell companies and inflated
                          contracts.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                          The 8-month investigation combined data journalism,
                          undercover reporting, and legal analysis to trace the
                          financial trail and identify responsible officials.
                          The findings were published across multiple platforms,
                          reaching over 1.2 million Tanzanians and sparking
                          national conversations about accountability and
                          transparency.
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Key Impact Metrics
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Object.entries(caseStudy.metrics).map(
                          ([key, value]: [string, any], idx) => (
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
                          ),
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Methodology Tab */}
                  <TabsContent value="methodology" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Research & Investigation Methodology
                      </h3>
                      <div className="space-y-4">
                        {caseStudy.methodology.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                          >
                            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold">
                                {idx + 1}
                              </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Project Timeline
                      </h4>
                      <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                        <div className="space-y-6">
                          {caseStudy.timeline.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6">
                              <div className="relative">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10 relative">
                                  <Calendar className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-gray-900 dark:text-white">
                                  {item.month}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 mt-1">
                                  {item.activity}
                                </div>
                                <Badge className="mt-2" variant="outline">
                                  {item.status}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Challenges Tab */}
                  <TabsContent value="challenges" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Challenges & Obstacles
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {caseStudy.challenges.map((challenge, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 border border-red-100 dark:border-red-800/30"
                          >
                            <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                Challenge #{idx + 1}
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                {challenge}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Solutions Implemented
                      </h4>
                      <div className="space-y-4">
                        {[
                          "Implemented secure communication protocols for the team",
                          "Engaged legal experts early in the process",
                          "Built relationships with trusted sources over time",
                          "Used encrypted storage for sensitive documents",
                          "Conducted regular safety assessments",
                        ].map((solution, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                          >
                            <CheckCircle className="h-5 w-5 text-emerald-500" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {solution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Outcomes Tab */}
                  <TabsContent value="outcomes" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Key Outcomes & Impact
                      </h3>
                      <div className="space-y-4">
                        {caseStudy.outcomes.map((outcome, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 border border-emerald-100 dark:border-emerald-800/30"
                          >
                            <Target className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                Outcome #{idx + 1}
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                {outcome}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Impact Visualization */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Impact Visualization
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            label: "Funds Recovered",
                            value: 100,
                            color: "from-emerald-500 to-green-500",
                          },
                          {
                            label: "Policy Changes",
                            value: 80,
                            color: "from-blue-500 to-cyan-500",
                          },
                          {
                            label: "Public Awareness",
                            value: 95,
                            color: "from-purple-500 to-pink-500",
                          },
                          {
                            label: "Accountability Actions",
                            value: 60,
                            color: "from-amber-500 to-orange-500",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-700 dark:text-gray-300">
                                {item.label}
                              </span>
                              <span className="font-semibold">
                                {item.value}%
                              </span>
                            </div>
                            <Progress
                              value={item.value}
                              className={`h-2 bg-gradient-to-r ${item.color}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* Learnings Tab */}
                  <TabsContent value="learnings" className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Key Learnings & Recommendations
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Lessons Learned
                          </h4>
                          <div className="space-y-3">
                            {caseStudy.lessons.map((lesson, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                              >
                                <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">
                                    {idx + 1}
                                  </span>
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">
                                  {lesson}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Policy Recommendations
                          </h4>
                          <div className="space-y-3">
                            {caseStudy.recommendations.map((rec, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border border-blue-100 dark:border-blue-800/30"
                              >
                                <FileText className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">
                                  {rec}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Organization
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {caseStudy.organization}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Lead Journalist
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {caseStudy.journalist}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Location
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {caseStudy.region}, Tanzania
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Project Year
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {caseStudy.year}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Status
                      </div>
                      <Badge
                        className={
                          caseStudy.status === "Completed"
                            ? "bg-emerald-500 text-white"
                            : "bg-blue-500 text-white"
                        }
                      >
                        {caseStudy.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                    Tags & Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                    Related Resources
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Full Investigation Report",
                        format: "PDF",
                        size: "4.2 MB",
                      },
                      {
                        title: "Data Analysis Spreadsheet",
                        format: "Excel",
                        size: "8.7 MB",
                      },
                      {
                        title: "Documentary Video",
                        format: "MP4",
                        size: "125 MB",
                      },
                      {
                        title: "Presentation Slides",
                        format: "PPT",
                        size: "12.4 MB",
                      },
                    ].map((resource, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">
                            {resource.title}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {resource.format} • {resource.size}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Similar Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
