// components/gallery/GalleryItem.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Heart,
  Eye,
  Download,
  Share2,
  MapPin,
  Calendar,
  User,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GalleryItemProps {
  item: any;
  viewMode: "grid" | "masonry";
  index: number;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  viewMode,
  index,
  onClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (viewMode === "masonry") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="break-inside-avoid mb-4"
      >
        <div
          className="group relative rounded-xl overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClick}
        >
          {/* Image/Video Thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.thumbnail || item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-20`}
            />

            {/* Video Play Button */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white fill-white" />
                </div>
              </div>
            )}

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0">
                {item.type === "image" ? "Photo" : "Video"}
              </Badge>
              {item.featured && (
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                  Featured
                </Badge>
              )}
            </div>

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}
            >
              <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2 mb-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {item.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3" />
                    {item.likes.toLocaleString()}
                  </span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div
        className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {/* Image/Video Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={item.thumbnail || item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30`}
          />

          {/* Video Play Button */}
          {item.type === "video" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-10 w-10 text-white fill-white" />
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-0 shadow-lg">
              {item.type === "image" ? "Photo" : "Video"}
            </Badge>
            {item.featured && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                Featured
              </Badge>
            )}
            {item.trending && (
              <Badge className="bg-gradient-to-r from-emerald-500 to-green-500 text-white border-0 shadow-lg">
                Trending
              </Badge>
            )}
          </div>

          {/* Duration for Videos */}
          {item.type === "video" && item.duration && (
            <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded-lg text-sm font-medium">
              {item.duration}
            </div>
          )}

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6`}
          >
            <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
            <p className="text-gray-200 mb-4 line-clamp-2">
              {item.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Calendar className="h-4 w-4" />
                {item.year}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                {item.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <User className="h-4 w-4" />
                {item.photographer}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Eye className="h-4 w-4" />
                {item.views.toLocaleString()}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {item.tags.slice(0, 2).map((tag: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                  />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                {item.photographer}
              </p>
            </div>
            <Badge variant="outline" className="text-xs">
              {item.category}
            </Badge>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {item.views.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" />
              {item.likes.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              {item.downloads.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
