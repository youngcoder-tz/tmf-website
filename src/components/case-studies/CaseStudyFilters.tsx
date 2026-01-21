// components/case-studies/CaseStudyFilters.tsx
"use client";

import React from "react";
import { Search, Filter, X, Sliders, Target, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface CaseStudyFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  selectedStatus: string;
  setSelectedStatus: (value: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (value: string) => void;
  showFeaturedOnly: boolean;
  setShowFeaturedOnly: (value: boolean) => void;
  categories: string[];
  regions: string[];
  years: string[];
  stats: any;
}

const CaseStudyFilters: React.FC<CaseStudyFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedYear,
  setSelectedYear,
  selectedStatus,
  setSelectedStatus,
  selectedDifficulty,
  setSelectedDifficulty,
  showFeaturedOnly,
  setShowFeaturedOnly,
  categories,
  regions,
  years,
  stats,
}) => {
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedRegion("All");
    setSelectedYear("All");
    setSelectedStatus("All");
    setSelectedDifficulty("All");
    setShowFeaturedOnly(false);
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedRegion !== "All" ||
    selectedYear !== "All" ||
    selectedStatus !== "All" ||
    selectedDifficulty !== "All" ||
    showFeaturedOnly;

  return (
    <div className="sticky top-24 space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <Filter className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Filters</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Refine case studies
            </p>
          </div>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {/* Search */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Search Case Studies
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by title, tags, organization..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Region Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Region
        </label>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Year Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Year
        </label>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Status Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Status
        </label>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Ongoing">Ongoing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Difficulty Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Difficulty Level
        </label>
        <Select
          value={selectedDifficulty}
          onValueChange={setSelectedDifficulty}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Levels</SelectItem>
            <SelectItem value="High">High Difficulty</SelectItem>
            <SelectItem value="Medium">Medium Difficulty</SelectItem>
            <SelectItem value="Low">Low Difficulty</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Impact Score Range */}
      <div className="space-y-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <Target className="h-5 w-5 text-gray-400" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              Impact Score Range
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              70% - 100%
            </div>
          </div>
        </div>
        <Slider defaultValue={[70, 100]} max={100} step={5} className="mt-4" />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>70%</span>
          <span>85%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Featured Only Toggle */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-100 dark:border-blue-800/30">
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            Featured Only
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Show only featured studies
          </div>
        </div>
        <Switch
          checked={showFeaturedOnly}
          onCheckedChange={setShowFeaturedOnly}
        />
      </div>

      {/* Active Filter Indicators */}
      {hasActiveFilters && (
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Active Filters:
          </div>
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: {searchQuery}
                <button onClick={() => setSearchQuery("")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedCategory !== "All" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedCategory}
                <button onClick={() => setSelectedCategory("All")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedRegion !== "All" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedRegion}
                <button onClick={() => setSelectedRegion("All")}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {showFeaturedOnly && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Featured Only
                <button onClick={() => setShowFeaturedOnly(false)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/30">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          Case Studies Overview
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Total Studies
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.total}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.completed}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Ongoing
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.ongoing}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Average Impact
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.averageImpact}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFilters;
