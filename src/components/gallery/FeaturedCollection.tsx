// components/gallery/FeaturedCollection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
  Download,
  Share2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredCollections = [
  {
    id: 1,
    title: "Investigative Journalism Series",
    description:
      "Behind the scenes of groundbreaking investigations that exposed corruption and drove accountability across Tanzania.",
    type: "mixed",
    itemCount: 24,
    views: 125000,
    curator: "Tanzania Watchdog Network",
    color: "from-blue-500 to-cyan-500",
    coverImage:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&auto=format&fit=crop",
    items: [
      { type: "image", title: "Field Investigation", views: 12450 },
      { type: "video", title: "Undercover Footage", views: 18500 },
      { type: "image", title: "Document Analysis", views: 15600 },
      { type: "video", title: "Interview Process", views: 9200 },
    ],
  },
  {
    id: 2,
    title: "Women in Media Leadership",
    description:
      "Capturing the journey of female journalists as they develop leadership skills and transform media spaces.",
    type: "mixed",
    itemCount: 18,
    views: 89000,
    curator: "Sauti ya Wanawake Media",
    color: "from-pink-500 to-rose-500",
    coverImage:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&auto=format&fit=crop",
    items: [
      { type: "image", title: "Training Workshop", views: 23400 },
      { type: "video", title: "Leadership Panel", views: 16700 },
      { type: "image", title: "Mentorship Session", views: 11200 },
      { type: "video", title: "Success Stories", views: 15600 },
    ],
  },
  {
    id: 3,
    title: "Climate Change Documentary",
    description:
      "Visual documentation of climate impacts on coastal communities and conservation efforts.",
    type: "video",
    itemCount: 12,
    views: 210000,
    curator: "EcoMedia Tanzania",
    color: "from-emerald-500 to-green-500",
    coverImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop",
    items: [
      { type: "video", title: "Coastal Communities", views: 24500 },
      { type: "image", title: "Environmental Changes", views: 18700 },
      { type: "video", title: "Conservation Work", views: 13400 },
      { type: "image", title: "Community Interviews", views: 19800 },
    ],
  },
];

const FeaturedCollection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentCollection = featuredCollections[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCollections.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + featuredCollections.length) % featuredCollections.length,
    );
    setIsPlaying(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-1.5">
            <Star className="h-4 w-4 mr-2" />
            Featured Collections
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Curated Visual Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated collections that tell comprehensive
            stories of impact and transformation.
          </p>
        </div>

        <div className="relative">
          {/* Main Collection Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="grid lg:grid-cols-2">
              {/* Media Column */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={currentCollection.coverImage}
                  alt={currentCollection.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${currentCollection.color} opacity-40`}
                />

                {/* Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-10 w-10 text-white" />
                    ) : (
                      <Play className="h-10 w-10 text-white ml-1" />
                    )}
                  </Button>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {currentCollection.itemCount}
                      </div>
                      <div className="text-xs text-gray-300">Items</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {(currentCollection.views / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-300">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        {currentCollection.type === "mixed"
                          ? "Mixed"
                          : currentCollection.type}
                      </div>
                      <div className="text-xs text-gray-300">Type</div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </Button>
              </div>

              {/* Content Column */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      Collection #{currentIndex + 1}
                    </Badge>
                    <Badge variant="outline">
                      {currentCollection.type === "mixed"
                        ? "Photos & Videos"
                        : currentCollection.type}
                    </Badge>
                    {currentIndex === 0 && (
                      <Badge className="bg-emerald-500 text-white">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentCollection.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {currentCollection.description}
                  </p>
                </div>

                {/* Collection Items Preview */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Collection Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentCollection.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <div
                          className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                            item.type === "image"
                              ? "bg-blue-100 dark:bg-blue-900/30"
                              : "bg-purple-100 dark:bg-purple-900/30"
                          }`}
                        >
                          {item.type === "image" ? (
                            <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          ) : (
                            <Play className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm text-gray-900 dark:text-white">
                            {item.title}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {item.views.toLocaleString()} views
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curator Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Curated by
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {currentCollection.curator}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow Curator
                  </Button>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <Link
                      href={`/impact/gallery/collections/${currentCollection.id}`}
                    >
                      Explore Collection
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-5 w-5" />
                    Download All
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredCollections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                    : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { ImageIcon } from "lucide-react";

export default FeaturedCollection;
