// components/annual/SuccessStoriesCarousel.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Quote,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const successStories = [
  {
    id: 1,
    title: "Exposing the Infrastructure Scandal",
    journalist: "Jamal Hassan",
    organization: "Tanzania Watchdog Network",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-group-of-people-in-a-journalism-class-44471-large.mp4",
    quote:
      "TMF's support gave us the courage to pursue truth without fear of consequences.",
    impact:
      "Led to recovery of $2.3M in misappropriated funds and suspension of 3 officials",
    stats: {
      reach: "1.2M",
      shares: "45K",
      duration: "8 months",
    },
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Empowering Women Journalists",
    journalist: "Amina Juma",
    organization: "Sauti ya Wanawake Media",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-making-a-presentation-44461-large.mp4",
    quote:
      "This program transformed my career and gave me the confidence to lead.",
    impact:
      "28 female journalists promoted to senior positions within 12 months",
    stats: {
      reach: "850K",
      shares: "32K",
      duration: "18 months",
    },
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 3,
    title: "Climate Change Documentary",
    journalist: "Samuel Mwita",
    organization: "EcoMedia Tanzania",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-man-in-the-ocean-44463-large.mp4",
    quote:
      "Our documentary changed the conversation about coastal conservation.",
    impact: "Influenced new environmental policies in Zanzibar",
    stats: {
      reach: "2.1M",
      shares: "68K",
      duration: "10 months",
    },
    color: "from-emerald-500/20 to-green-500/20",
  },
];

const SuccessStoriesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentStory = successStories[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + successStories.length) % successStories.length,
    );
    setIsPlaying(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Real stories of impact from journalists and communities across
            Tanzania
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/impact/grantees">
            View All Stories
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="relative">
        {/* Main Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="grid lg:grid-cols-2">
              {/* Media Section */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={currentStory.image}
                  alt={currentStory.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${currentStory.color}`}
                />

                {/* Video Controls */}
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
                    {Object.entries(currentStory.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {value}
                        </div>
                        <div className="text-xs text-gray-300 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
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

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    Featured Story #{currentIndex + 1}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {currentStory.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      {currentStory.journalist}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="h-4 w-4" />
                      {currentStory.organization}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/30">
                  <Quote className="absolute top-4 left-4 h-6 w-6 text-blue-300 dark:text-blue-700" />
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4 pl-8">
                    "{currentStory.quote}"
                  </p>
                  <div className="pl-8">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {currentStory.journalist}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {currentStory.organization}
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Key Impact
                  </h4>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {currentStory.impact}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <Button asChild className="flex-1">
                    <Link href={`/impact/stories/${currentStory.id}`}>
                      Read Full Story
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/apply">Apply for Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {successStories.map((_, idx) => (
            <Button
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
  );
};

export default SuccessStoriesCarousel;
