// app/impact/grantees/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Award,
  Users,
  DollarSign,
  Globe,
  TrendingUp,
  Heart,
  BookOpen,
  ExternalLink,
  ChevronDown,
  BarChart3,
  Sparkles,
  Play,
  Eye,
  Download,
  Share2,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GranteeCard from "@/components/grantees/GranteeCard";
import FeaturedGranteeSpotlight from "@/components/grantees/FeaturedGranteeSpotlight";
// import ImpactMetrics from "@/components/grantees/ImpactMetrics";
import FilterPanel from "@/components/grantees/FilterPanel";
import MapVisualization from "@/components/grantees/MapVisualization";
// import StoriesGrid from "@/components/grantees/StoriesGrid";

// Mock data for grantees
const granteesData = [
  {
    id: 1,
    name: "Investigative Journalism Initiative",
    organization: "Tanzania Watchdog Network",
    category: "Investigative Journalism",
    location: "Dar es Salaam, Tanzania",
    region: "Coastal",
    amount: 45000,
    year: 2024,
    duration: "12 months",
    status: "Active",
    completion: 75,
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w-200&h=200&fit=crop",
    description:
      "Investigating corruption in public infrastructure projects across five regions.",
    impact: {
      stories: 42,
      reach: 1250000,
      changes: 8,
      awards: 3,
    },
    tags: ["Corruption", "Infrastructure", "Public Funds"],
    featured: true,
    trending: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Women in Media Leadership Program",
    organization: "Sauti ya Wanawake Media",
    category: "Gender Equality",
    location: "Arusha, Tanzania",
    region: "Northern",
    amount: 38000,
    year: 2024,
    duration: "18 months",
    status: "Active",
    completion: 60,
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w-200&h=200&fit=crop",
    description:
      "Empowering female journalists through leadership training and mentorship.",
    impact: {
      stories: 28,
      reach: 850000,
      changes: 15,
      awards: 2,
    },
    tags: ["Women Empowerment", "Leadership", "Training"],
    featured: true,
    trending: false,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    name: "Climate Change Reporting Initiative",
    organization: "EcoMedia Tanzania",
    category: "Environment",
    location: "Zanzibar",
    region: "Islands",
    amount: 32000,
    year: 2023,
    duration: "10 months",
    status: "Completed",
    completion: 100,
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?w-200&h=200&fit=crop",
    description:
      "Documenting climate change impacts on coastal communities in Zanzibar.",
    impact: {
      stories: 35,
      reach: 2100000,
      changes: 12,
      awards: 4,
    },
    tags: ["Climate Change", "Environment", "Coastal"],
    featured: false,
    trending: true,
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 4,
    name: "Digital Media Innovation Lab",
    organization: "TechMedia Hub Dar",
    category: "Digital Innovation",
    location: "Dar es Salaam",
    region: "Coastal",
    amount: 52000,
    year: 2024,
    duration: "24 months",
    status: "Active",
    completion: 40,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w-200&h=200&fit=crop",
    description:
      "Developing innovative digital storytelling tools for Tanzanian media.",
    impact: {
      stories: 18,
      reach: 950000,
      changes: 6,
      awards: 1,
    },
    tags: ["Digital", "Innovation", "Technology"],
    featured: true,
    trending: true,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 5,
    name: "Community Radio Expansion",
    organization: "Simba Community Radio",
    category: "Community Media",
    location: "Mwanza",
    region: "Lake Zone",
    amount: 28000,
    year: 2023,
    duration: "14 months",
    status: "Completed",
    completion: 100,
    image:
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-200&h=200&fit=crop",
    description:
      "Expanding community radio coverage to 15 remote villages around Lake Victoria.",
    impact: {
      stories: 156,
      reach: 350000,
      changes: 25,
      awards: 2,
    },
    tags: ["Community Radio", "Rural", "Local News"],
    featured: false,
    trending: false,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    name: "Health Journalism Fellowship",
    organization: "Tanzania Health Media Alliance",
    category: "Health",
    location: "Dodoma",
    region: "Central",
    amount: 41000,
    year: 2024,
    duration: "12 months",
    status: "Active",
    completion: 55,
    image:
      "https://images.unsplash.com/photo-1584467735871-8db9ac8d0916?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w-200&h=200&fit=crop",
    description:
      "Training journalists on accurate health reporting and pandemic coverage.",
    impact: {
      stories: 67,
      reach: 1800000,
      changes: 18,
      awards: 3,
    },
    tags: ["Health", "Pandemic", "Training"],
    featured: true,
    trending: true,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 7,
    name: "Youth Media Entrepreneurship",
    organization: "Youth Media Lab Tanzania",
    category: "Youth Development",
    location: "Mbeya",
    region: "Southern Highlands",
    amount: 35000,
    year: 2023,
    duration: "16 months",
    status: "Completed",
    completion: 100,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w-200&h=200&fit=crop",
    description:
      "Supporting young media entrepreneurs with seed funding and mentorship.",
    impact: {
      stories: 42,
      reach: 1200000,
      changes: 22,
      awards: 4,
    },
    tags: ["Youth", "Entrepreneurship", "Startups"],
    featured: false,
    trending: true,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 8,
    name: "Investigative Documentary Series",
    organization: "Tanzania Documentary Collective",
    category: "Documentary",
    location: "Tanga",
    region: "Coastal",
    amount: 56000,
    year: 2024,
    duration: "20 months",
    status: "Active",
    completion: 30,
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-200&h=200&fit=crop",
    description:
      "Producing a 6-part documentary series on social justice issues.",
    impact: {
      stories: 8,
      reach: 500000,
      changes: 4,
      awards: 0,
    },
    tags: ["Documentary", "Social Justice", "Film"],
    featured: true,
    trending: false,
    color: "from-cyan-500 to-blue-500",
  },
];

const regions = [
  "All",
  "Coastal",
  "Northern",
  "Islands",
  "Lake Zone",
  "Central",
  "Southern Highlands",
];
const categories = [
  "All",
  "Investigative Journalism",
  "Gender Equality",
  "Environment",
  "Digital Innovation",
  "Community Media",
  "Health",
  "Youth Development",
  "Documentary",
];
const years = ["All", "2024", "2023", "2022", "2021"];

export default function GranteesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");

  // Filter and sort grantees
  const filteredGrantees = useMemo(() => {
    return granteesData
      .filter((grantee) => {
        // Search filter
        const matchesSearch =
          searchQuery === "" ||
          grantee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          grantee.organization
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          grantee.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          grantee.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          );

        // Region filter
        const matchesRegion =
          selectedRegion === "All" || grantee.region === selectedRegion;

        // Category filter
        const matchesCategory =
          selectedCategory === "All" || grantee.category === selectedCategory;

        // Year filter
        const matchesYear =
          selectedYear === "All" || grantee.year.toString() === selectedYear;

        // Status filter
        const matchesStatus =
          statusFilter === "All" || grantee.status === statusFilter;

        // Featured filter
        const matchesFeatured = !showFeaturedOnly || grantee.featured;

        return (
          matchesSearch &&
          matchesRegion &&
          matchesCategory &&
          matchesYear &&
          matchesStatus &&
          matchesFeatured
        );
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "recent":
            return b.year - a.year;
          case "amount":
            return b.amount - a.amount;
          case "impact":
            return b.impact.reach - a.impact.reach;
          case "trending":
            return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
          default:
            return 0;
        }
      });
  }, [
    searchQuery,
    selectedRegion,
    selectedCategory,
    selectedYear,
    statusFilter,
    showFeaturedOnly,
    sortBy,
  ]);

  const stats = {
    total: granteesData.length,
    active: granteesData.filter((g) => g.status === "Active").length,
    completed: granteesData.filter((g) => g.status === "Completed").length,
    totalAmount: granteesData.reduce((sum, g) => sum + g.amount, 0),
    avgReach:
      Math.round(
        granteesData.reduce((sum, g) => sum + g.impact.reach, 0) /
          granteesData.length /
          1000,
      ) + "K",
    awards: granteesData.reduce((sum, g) => sum + g.impact.awards, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Grantee Showcase
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6">
                Stories of Impact
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Meet the courageous journalists and innovative media
                organizations driving change across Tanzania through
                TMF-supported initiatives.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {[
                {
                  label: "Total Grantees",
                  value: `${stats.total}+`,
                  icon: Users,
                  color: "text-blue-500",
                },
                {
                  label: "Active Projects",
                  value: stats.active,
                  icon: TrendingUp,
                  color: "text-emerald-500",
                },
                {
                  label: "Total Funding",
                  value: `$${(stats.totalAmount / 1000).toFixed(0)}K`,
                  icon: DollarSign,
                  color: "text-purple-500",
                },
                {
                  label: "Awards Won",
                  value: stats.awards,
                  icon: Award,
                  color: "text-amber-500",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50"
                >
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight */}
      <FeaturedGranteeSpotlight />

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1">
              <FilterPanel
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                showFeaturedOnly={showFeaturedOnly}
                setShowFeaturedOnly={setShowFeaturedOnly}
                regions={regions}
                categories={categories}
                years={years}
              />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Controls Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedCategory !== "All" ? selectedCategory : "All"}{" "}
                    Grantees
                    <span className="text-gray-500 dark:text-gray-400 text-base font-normal ml-2">
                      ({filteredGrantees.length} projects)
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Filtered by: {selectedRegion} • {selectedCategory} •{" "}
                    {selectedYear}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="amount">Largest Grant</SelectItem>
                      <SelectItem value="impact">Highest Impact</SelectItem>
                      <SelectItem value="trending">Trending Now</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                    {[
                      { mode: "grid", icon: "grid", label: "Grid" },
                      { mode: "list", icon: "list", label: "List" },
                      { mode: "map", icon: "map", label: "Map" },
                    ].map((view) => (
                      <Button
                        key={view.mode}
                        variant={viewMode === view.mode ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode(view.mode as any)}
                        className="rounded-md"
                      >
                        {view.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map View */}
              {viewMode === "map" && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <MapVisualization grantees={filteredGrantees} />
                </div>
              )}

              {/* Grantee Cards Grid */}
              <AnimatePresence mode="wait">
                {viewMode !== "map" && (
                  <motion.div
                    key={viewMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={
                      viewMode === "grid"
                        ? "grid md:grid-cols-2 gap-6"
                        : "space-y-4"
                    }
                  >
                    {filteredGrantees.length > 0 ? (
                      filteredGrantees.map((grantee, index) => (
                        <GranteeCard
                          key={grantee.id}
                          grantee={grantee}
                          viewMode={viewMode}
                          index={index}
                        />
                      ))
                    ) : (
                      <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                          <Search className="h-12 w-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          No matching grantees found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Try adjusting your filters or search terms
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Impact Metrics */}
              {/* <ImpactMetrics stats={stats} /> */}

              {/* Success Stories Grid */}
              {/* <StoriesGrid /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
