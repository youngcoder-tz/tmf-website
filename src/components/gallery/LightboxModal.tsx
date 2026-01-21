// components/gallery/LightboxModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  ExternalLink,
  Info,
  Maximize2,
  Minimize2,
  Calendar,
  MapPin,
  User,
  Eye,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
}

const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        /* Previous image logic */
      }
      if (e.key === "ArrowRight") {
        /* Next image logic */
      }
      if (e.key === "f") setIsFullscreen(!isFullscreen);
      if (e.key === "i") setShowInfo(!showInfo);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isFullscreen, showInfo, onClose]);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Lightbox Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className={`relative z-10 bg-black rounded-xl overflow-hidden ${isFullscreen ? "w-screen h-screen rounded-none" : "w-full max-w-6xl mx-4 max-h-[90vh]"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Controls */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent z-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="text-white">
                  <h2 className="font-bold text-lg line-clamp-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-300">{item.photographer}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="text-white hover:bg-white/20"
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-5 w-5" />
                  ) : (
                    <Maximize2 className="h-5 w-5" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowInfo(!showInfo)}
                  className="text-white hover:bg-white/20"
                >
                  <Info className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div
              className={`relative ${isFullscreen ? "w-full h-full" : "w-full max-h-[70vh]"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-contain ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
                onLoadingComplete={() => setImageLoaded(true)}
                sizes="100vw"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
                </div>
              )}

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className="text-white hover:bg-white/20"
                  >
                    <Heart
                      className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </Button>
                  <span className="text-sm">{item.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">
                    {item.views.toLocaleString()} views
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span className="text-sm">
                    {item.downloads.toLocaleString()} downloads
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                >
                  <Download className="h-5 w-5" />
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                className="absolute top-0 right-0 bottom-0 w-96 bg-black/90 backdrop-blur-xl border-l border-gray-800 overflow-y-auto z-30"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      Media Details
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowInfo(false)}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Media Info */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>

                    {/* Story */}
                    {item.story && (
                      <div>
                        <h5 className="font-semibold text-white mb-2">
                          The Story
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.story}
                        </p>
                      </div>
                    )}

                    {/* Metadata */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          Photographer
                        </div>
                        <div className="text-white font-medium">
                          {item.photographer}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          Location
                        </div>
                        <div className="text-white font-medium flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Year</div>
                        <div className="text-white font-medium flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {item.year}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          Category
                        </div>
                        <div className="text-white font-medium">
                          {item.category}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          Resolution
                        </div>
                        <div className="text-white font-medium">
                          {item.resolution}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          License
                        </div>
                        <div className="text-white font-medium">
                          {item.license}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <h5 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Tags
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag: string, idx: number) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-gray-800 text-gray-300 border-gray-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-white">
                        Engagement Stats
                      </h5>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Views</span>
                          <span className="text-white">
                            {item.views.toLocaleString()}
                          </span>
                        </div>
                        <Progress
                          value={Math.min(100, (item.views / 25000) * 100)}
                          className="h-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Likes</span>
                          <span className="text-white">
                            {item.likes.toLocaleString()}
                          </span>
                        </div>
                        <Progress
                          value={Math.min(100, (item.likes / 1500) * 100)}
                          className="h-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Downloads</span>
                          <span className="text-white">
                            {item.downloads.toLocaleString()}
                          </span>
                        </div>
                        <Progress
                          value={Math.min(100, (item.downloads / 500) * 100)}
                          className="h-2"
                        />
                      </div>
                    </div>

                    {/* Download Options */}
                    <div>
                      <h5 className="font-semibold text-white mb-3">
                        Download Options
                      </h5>
                      <div className="grid grid-cols-2 gap-3">
                        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                          <Download className="mr-2 h-4 w-4" />
                          Small (Web)
                        </Button>
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                          <Download className="mr-2 h-4 w-4" />
                          Original
                        </Button>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        Available under {item.license} license
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gallery Progress */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm">1 of 12</span>
              <div className="flex items-center gap-1">
                {[...Array(12)].map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === 0
                        ? "w-4 bg-gradient-to-r from-blue-500 to-purple-500"
                        : "w-1 bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white text-sm">12</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LightboxModal;
