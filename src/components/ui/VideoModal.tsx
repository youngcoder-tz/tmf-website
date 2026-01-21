// src/components/ui/VideoModal.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Settings,
  Download,
  Share2,
  Clock,
  Captions,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
  poster?: string;
  autoPlay?: boolean;
  showControls?: boolean;
  className?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = "Impact Video",
  description = "Watch how we're making a difference",
  poster,
  autoPlay = true,
  showControls = true,
  className = "",
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Video state
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Handle volume change
  const handleVolumeChange = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.volume = value;
    setVolume(value);
    setIsMuted(value === 0);
  };

  // Handle progress click
  const handleProgressClick = (e: React.MouseEvent) => {
    if (!videoRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;

    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle playback rate change
  const handlePlaybackRateChange = (rate: number) => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  // Handle download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = title.toLowerCase().replace(/\s+/g, "-") + ".mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Error copying:", err));
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "Escape":
          e.preventDefault();
          if (isFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
          } else {
            onClose();
          }
          break;
        case "ArrowRight":
          e.preventDefault();
          if (videoRef.current) {
            videoRef.current.currentTime += 10;
          }
          break;
        case "ArrowLeft":
          e.preventDefault();
          if (videoRef.current) {
            videoRef.current.currentTime -= 10;
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          handleVolumeChange(Math.min(1, volume + 0.1));
          break;
        case "ArrowDown":
          e.preventDefault();
          handleVolumeChange(Math.max(0, volume - 0.1));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isPlaying, isMuted, volume, isFullscreen]);

  // Update time and duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs backdrop-grayscale"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className={cn(
              "relative w-full max-w-6xl bg-black rounded-2xl overflow-hidden shadow-2xl",
              className
            )}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-20 p-6 bg-linear-to-b from-black/80 via-black/40 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">{title}</h2>
                  <p className="text-gray-300 text-sm mt-1">{description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={onClose}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video">
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-white text-sm">Loading video...</p>
                  </div>
                </div>
              )}

              {/* Video element */}
              <video
                ref={videoRef}
                src={videoUrl}
                poster={poster}
                autoPlay={autoPlay}
                muted={isMuted}
                className="w-full h-full object-contain bg-black"
                onClick={togglePlay}
              />

              {/* Custom controls overlay */}
              {showControls && (
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-linear-to-t from-black/90 via-black/60 to-transparent">
                  {/* Progress bar */}
                  <div
                    ref={progressRef}
                    className="h-1.5 bg-gray-700 rounded-full mb-4 cursor-pointer group"
                    onClick={handleProgressClick}
                  >
                    <div
                      className="h-full bg-blue-500 rounded-full relative group-hover:bg-blue-400 transition-colors"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Play/Pause */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={togglePlay}
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5" />
                        )}
                      </Button>

                      {/* Volume */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20"
                          onClick={toggleMute}
                        >
                          {isMuted || volume === 0 ? (
                            <VolumeX className="h-5 w-5" />
                          ) : (
                            <Volume2 className="h-5 w-5" />
                          )}
                        </Button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={volume}
                          onChange={(e) =>
                            handleVolumeChange(parseFloat(e.target.value))
                          }
                          className="w-24 accent-blue-500"
                        />
                      </div>

                      {/* Time */}
                      <div className="text-white text-sm font-mono">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Playback rate */}
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white hover:bg-white/20"
                          onClick={() => setShowSettings(!showSettings)}
                        >
                          <Settings className="h-5 w-5" />
                        </Button>

                        {showSettings && (
                          <div className="absolute bottom-full right-0 mb-2 bg-gray-900 rounded-lg shadow-xl p-2 min-w-30">
                            <div className="text-xs text-gray-400 mb-2 px-2">
                              Playback Speed
                            </div>
                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                              <button
                                key={rate}
                                className={cn(
                                  "block w-full text-left px-2 py-1.5 text-sm rounded hover:bg-gray-800",
                                  playbackRate === rate
                                    ? "text-blue-400"
                                    : "text-white"
                                )}
                                onClick={() => handlePlaybackRateChange(rate)}
                              >
                                {rate}x {playbackRate === rate && "✓"}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Captions (placeholder) */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={() => alert("Captions coming soon!")}
                      >
                        <Captions className="h-5 w-5" />
                      </Button>

                      {/* Download */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={handleDownload}
                      >
                        <Download className="h-5 w-5" />
                      </Button>

                      {/* Share */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={handleShare}
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>

                      {/* Fullscreen */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/20"
                        onClick={toggleFullscreen}
                      >
                        {isFullscreen ? (
                          <Minimize2 className="h-5 w-5" />
                        ) : (
                          <Maximize2 className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Play button overlay when paused */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Keyboard shortcuts hint */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
              Press{" "}
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">Space</kbd> to
              play/pause •{" "}
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">F</kbd> for
              fullscreen •{" "}
              <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">ESC</kbd> to
              close
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Export as default for dynamic import
export default VideoModal;
