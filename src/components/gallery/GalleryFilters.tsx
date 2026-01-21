// components/gallery/GalleryFilters.tsx
"use client";

import React from "react";
import {
  Search,
  Filter,
  X,
  Sliders,
  ImageIcon,
  Video,
  TrendingUp,
} from "lucide-react";
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

interface GalleryFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  selectedLocation: string;
  setSelectedLocation: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  showFeaturedOnly: boolean;
  setShowFeaturedOnly: (value: boolean) => void;
  categories: string[];
  years: string[];
  locations: string[];
  types: string[];
  stats: any;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedYear,
  setSelectedYear,
  selectedLocation,
  setSelectedLocation,
  selectedType,
  setSelectedType,
  showFeaturedOnly,
  setShowFeaturedOnly,
  categories,
  years,
  locations,
  types,
  stats,
}) => {
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedYear("All");
    setSelectedLocation("All");
    setSelectedType("All");
    setShowFeaturedOnly(false);
  };

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategory !== "All" ||
    selectedYear !== "All" ||
    selectedLocation !== "All" ||
    selectedType !== "All" ||
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
              Refine media collection
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
          Search Media
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search by title, tags, photographer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Type Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Media Type
        </label>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {types.map((type) => (
              <SelectItem key={type} value={type}>
                <div className="flex items-center gap-2">
                  {type === "image" ? (
                    <ImageIcon className="h-4 w-4" />
                  ) : type === "video" ? (
                    <Video className="h-4 w-4" />
                  ) : null}
                  {type === "All"
                    ? "All Types"
                    : type === "image"
                      ? "Photos Only"
                      : "Videos Only"}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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

      {/* Location Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Location
        </label>
        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Featured Only Toggle */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 border border-blue-100 dark:border-blue-800/30">
        <div>
          <div className="font-medium text-gray-900 dark:text-white">
            Featured Only
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Show only featured media
          </div>
        </div>
        <Switch
          checked={showFeaturedOnly}
          onCheckedChange={setShowFeaturedOnly}
        />
      </div>

      {/* View Count Range */}
      <div className="space-y-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-gray-400" />
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              View Count Range
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              1K - 25K+ views
            </div>
          </div>
        </div>
        <Slider
          defaultValue={[1000, 25000]}
          max={25000}
          step={1000}
          className="mt-4"
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>1K</span>
          <span>12.5K</span>
          <span>25K+</span>
        </div>
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
            {selectedType !== "All" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedType === "image" ? "Photos" : "Videos"}
                <button onClick={() => setSelectedType("All")}>
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
          Gallery Statistics
        </h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Total Media
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.total}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Photos
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.images}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Videos
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.videos}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Total Views
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {(stats.totalViews / 1000).toFixed(0)}K
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Total Downloads
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              {stats.totalDownloads.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
