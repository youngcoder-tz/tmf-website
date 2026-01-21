// components/ui/loading-progress.tsx
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Loader2, Zap, Rocket, Sparkles } from "lucide-react";

export function LoadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [routeChanging, setRouteChanging] = useState(false);

  // Listen for route changes
  useEffect(() => {
    const handleStart = () => {
      setRouteChanging(true);
      setIsVisible(true);
      setProgress(10);
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        setRouteChanging(false);
        setProgress(0);
      }, 500);
    };

    const initialLoad = () => {
      setIsVisible(true);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 20;
        });
      }, 200);

      // return cleanup
      return () => clearInterval(interval);
    };

    handleStart();

    const cleanupInitialLoad = initialLoad();

    const completeTimer = setTimeout(() => {
      handleComplete();
    }, 1500);

    return () => {
      cleanupInitialLoad(); // ✅ call cleanup function
      clearTimeout(completeTimer); // ✅ real timeout
    };
  }, []);

  // Animation for completion
  useEffect(() => {
    if (progress === 100) {
      setIsComplete(true);
      const timer = setTimeout(() => setIsComplete(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-100">
      {/* Progress Bar */}
      <div className="relative h-1 bg-gray-100 dark:bg-gray-900 overflow-hidden">
        {/* Background shimmer */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-blue-500/20 to-transparent animate-shimmer" />

        {/* Progress indicator */}
        <div
          className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Moving highlight */}
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-linear-to-r from-transparent via-white/30 to-transparent animate-slide" />
        </div>

        {/* Completion animation */}
        {isComplete && (
          <div className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 animate-pulse" />
        )}
      </div>

      {/* Loading Indicator with Stats */}
      {routeChanging && progress < 100 && (
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full shadow-lg px-4 py-2 flex items-center gap-3 border border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
            {progress > 50 && (
              <Sparkles className="absolute -top-1 -right-1 h-2 w-2 text-purple-500 animate-ping" />
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {progress < 30 && "Loading resources..."}
              {progress >= 30 && progress < 60 && "Processing data..."}
              {progress >= 60 && progress < 90 && "Rendering content..."}
              {progress >= 90 && "Almost there..."}
            </div>

            <div className="flex items-center gap-2">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
                {Math.round(progress)}%
              </div>
              {progress > 70 && (
                <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                  <Zap className="h-3 w-3" />
                  <span>Fast</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Additional animation styles to add to globals.css
const extraStyles = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.animate-slide {
  animation: slide 1s infinite;
}
`;

// Simple Loading Spinner Variant
export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="text-center">
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-gray-200 dark:border-gray-800" />
          <div className="absolute top-0 left-0 h-20 w-20 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-8 w-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
          Loading Tanzania Media Foundation
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
          Strengthening independent journalism
        </p>
      </div>
    </div>
  );
}

// Skeleton Loading Variant
export function SkeletonLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-3 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Content Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((col) => (
            <div key={col} className="space-y-4">
              {[1, 2, 3, 4].map((row) => (
                <div key={row} className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Skeleton */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
