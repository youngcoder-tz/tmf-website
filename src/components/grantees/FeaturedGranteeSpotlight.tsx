// components/grantees/FeaturedGranteeSpotlight.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Award,
  Users,
  Globe,
  TrendingUp,
  Quote,
  ExternalLink,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const featuredGrantees = [
  {
    id: 1,
    name: "Investigative Journalism Initiative",
    organization: "Tanzania Watchdog Network",
    image:
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-group-of-people-in-a-journalism-class-44471-large.mp4",
    description:
      "A groundbreaking investigation that exposed $2.3M in misappropriated public funds, leading to three government officials being held accountable.",
    achievements: [
      "Exposed major corruption in infrastructure projects",
      "Published 42 investigative reports",
      "Reached 1.2M+ readers",
      "Led to 8 policy changes",
    ],
    quote:
      "TMF's support gave us the resources and protection needed to pursue truth without fear.",
    author: "Jamal Hassan",
    role: "Lead Investigator",
    stats: {
      impactScore: 92,
      stories: 42,
      reach: 1250000,
      changes: 8,
    },
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Women in Media Leadership Program",
    organization: "Sauti ya Wanawake Media",
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&auto=format&fit=crop",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-making-a-presentation-44461-large.mp4",
    description:
      "Empowered 45 female journalists through advanced leadership training, resulting in 28 promotion to senior media positions.",
    achievements: [
      "Trained 45 female journalists",
      "Achieved 28 promotions",
      "Launched 15 new women-led media initiatives",
      "Increased gender parity by 40%",
    ],
    quote:
      "This program transformed my career and gave me the confidence to lead in a male-dominated industry.",
    author: "Amina Juma",
    role: "Program Graduate, Now News Director",
    stats: {
      impactScore: 88,
      stories: 28,
      reach: 850000,
      changes: 15,
    },
    color: "from-pink-500/20 to-rose-500/20",
  },
];

const FeaturedGranteeSpotlight: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentGrantee = featuredGrantees[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredGrantees.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredGrantees.length) % featuredGrantees.length,
    );
    setIsPlaying(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-1.5">
            <Award className="h-4 w-4 mr-2" />
            Featured Spotlight
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transformative Impact Stories
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how TMF grants are creating lasting change in communities
            across Tanzania
          </p>
        </div>

        <div className="relative">
          {/* Main Spotlight Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Column - Media */}
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={currentGrantee.image}
                  alt={currentGrantee.name}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${currentGrantee.color}`}
                />

                {/* Video Overlay */}
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
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                  <div className="flex items-center gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentGrantee.stats.impactScore}%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Impact Score
                      </div>
                    </div>
                    <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {currentGrantee.stats.stories}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Stories
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    Featured Story
                  </Badge>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge variant="outline" className="mb-3">
                      Spotlight #{currentIndex + 1}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {currentGrantee.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {currentGrantee.organization}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevSlide}
                      className="rounded-full"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextSlide}
                      className="rounded-full"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {currentGrantee.description}
                </p>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {currentGrantee.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800"
                      >
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-100 dark:border-blue-800/30">
                  <Quote className="absolute top-4 left-4 h-8 w-8 text-blue-300 dark:text-blue-700" />
                  <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4 pl-8">
                    "{currentGrantee.quote}"
                  </p>
                  <div className="pl-8">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {currentGrantee.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {currentGrantee.role}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex gap-4">
                  <Button asChild size="lg" className="flex-1">
                    <Link href={`/impact/grantees/${currentGrantee.id}`}>
                      Read Full Story
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/apply">Apply for Grant</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {featuredGrantees.map((_, idx) => (
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
    </section>
  );
};

export default FeaturedGranteeSpotlight;
