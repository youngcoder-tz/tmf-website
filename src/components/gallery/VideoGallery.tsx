// components/gallery/VideoGallery.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      id: 1,
      title: "Women in Media Leadership Program",
      description:
        "Highlights from our leadership training for female journalists",
      duration: "3:45",
      views: 18500,
      likes: 956,
      thumbnail:
        "https://images.unsplash.com/photo-1544717305-99670f9c28f5?w=800&auto=format&fit=crop",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-woman-making-a-presentation-44461-large.mp4",
      category: "Training",
    },
    {
      id: 2,
      title: "Digital Innovation Lab Workshop",
      description:
        "Journalists learning digital storytelling tools and techniques",
      duration: "2:15",
      views: 9200,
      likes: 512,
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-developer-looking-at-code-while-sitting-on-a-chair-50928-large.mp4",
      category: "Technology",
    },
    {
      id: 3,
      title: "Social Justice Documentary",
      description: "Behind the scenes of our social justice documentary series",
      duration: "4:30",
      views: 15600,
      likes: 723,
      thumbnail:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-filmmaker-filming-with-a-camera-44466-large.mp4",
      category: "Documentary",
    },
  ];

  const currentVideo = videos[activeVideo];

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume / 100;
    }
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume / 100;
      } else {
        videoRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  return (
    <div className="mb-8 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Featured Videos
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevVideo}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextVideo}
            className="rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800">
        <div className="grid lg:grid-cols-3">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-black">
              <video
                ref={videoRef}
                src={currentVideo.video}
                className="w-full h-full object-cover"
                poster={currentVideo.thumbnail}
              />

              {/* Video Overlay Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white">
                      <h4 className="text-xl font-bold mb-2">
                        {currentVideo.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {currentVideo.views.toLocaleString()} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {currentVideo.duration}
                        </span>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
                          {currentVideo.category}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6 text-white" />
                      ) : (
                        <Play className="h-6 w-6 text-white ml-1" />
                      )}
                    </Button>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-gray-700 rounded-full mb-4">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: "45%" }}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={handlePlayPause}
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20"
                          onClick={toggleMute}
                        >
                          {isMuted ? (
                            <VolumeX className="h-5 w-5" />
                          ) : (
                            <Volume2 className="h-5 w-5" />
                          )}
                        </Button>
                        <Slider
                          value={[volume]}
                          onValueChange={handleVolumeChange}
                          max={100}
                          step={1}
                          className="w-24"
                        />
                      </div>
                      <div className="text-white text-sm">
                        02:15 / {currentVideo.duration}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={() => videoRef.current?.requestFullscreen()}
                    >
                      <Maximize2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="bg-gray-900/50 p-4">
            <h5 className="font-semibold text-white mb-4">Video Playlist</h5>
            <div className="space-y-3">
              {videos.map((video, idx) => (
                <button
                  key={video.id}
                  onClick={() => {
                    setActiveVideo(idx);
                    setIsPlaying(true);
                  }}
                  className={`flex items-start gap-3 p-3 rounded-lg w-full text-left transition-colors ${
                    idx === activeVideo
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                      : "hover:bg-gray-800/50"
                  }`}
                >
                  <div className="relative h-16 w-28 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white text-sm mb-1 line-clamp-2">
                      {video.title}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {video.likes.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Video Stats */}
            <div className="mt-6 p-4 rounded-lg bg-gray-800/30">
              <h6 className="font-semibold text-white mb-3">
                Video Statistics
              </h6>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {videos
                      .reduce((sum, v) => sum + v.views, 0)
                      .toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {videos
                      .reduce((sum, v) => sum + v.likes, 0)
                      .toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">Total Likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
