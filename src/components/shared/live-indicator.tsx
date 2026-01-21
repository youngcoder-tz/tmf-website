// components/ui/live-indicator.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Radio, Clock, Users, TrendingUp, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface LiveIndicatorProps {
  eventName: string;
  time: string;
  link: string;
  viewers?: number;
  duration?: number; // in minutes
  speaker?: string;
}

export function LiveIndicator({
  eventName,
  time,
  link,
  viewers = 127,
  duration = 60,
  speaker = "Expert Panel",
}: LiveIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [countdown, setCountdown] = useState(duration * 60); // in seconds

  // Simulate live status (would be API-driven in production)
  useEffect(() => {
    // Check if current time matches event time
    const eventTime = new Date(time);
    const now = new Date();
    const isEventLive = now >= eventTime;
    setIsLive(isEventLive);

    // Countdown for upcoming events
    if (!isEventLive) {
      const diff = Math.floor((eventTime.getTime() - now.getTime()) / 1000);
      setCountdown(diff > 0 ? diff : 0);
    }

    // Auto-hide after event duration
    if (isEventLive) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration * 60 * 1000);
      return () => clearTimeout(timer);
    }
  }, [time, duration]);

  // Format countdown
  const formatCountdown = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m ${secs}s`;
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-20 left-1/2 -translate-x-1/2 z-40"
      >
        <div
          className={cn(
            "relative rounded-full shadow-2xl border backdrop-blur-lg",
            isLive
              ? "bg-linear-to-r from-red-600/90 to-rose-600/90 border-red-700"
              : "bg-linear-to-r from-blue-600/90 to-purple-600/90 border-blue-700"
          )}
        >
          <div className="flex items-center gap-4 px-6 py-3">
            {/* Live/Upcoming Badge */}
            <div className="flex items-center gap-2">
              <div className="relative">
                {isLive ? (
                  <>
                    <div className="absolute inset-0 animate-ping bg-red-500 rounded-full" />
                    <Radio className="h-5 w-5 text-white relative z-10" />
                  </>
                ) : (
                  <Clock className="h-5 w-5 text-white" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-white/90">
                  {isLive ? "LIVE NOW" : "UPCOMING"}
                </span>
                <span className="text-[10px] text-white/70">
                  {isLive ? "• Live" : `In ${formatCountdown(countdown)}`}
                </span>
              </div>
            </div>

            {/* Event Info */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-white truncate">
                {eventName}
              </span>
              <span className="text-xs text-white/80">
                {speaker} • {time}
              </span>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center gap-4">
              {isLive && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-white/80" />
                  <span className="text-sm font-medium text-white">
                    {viewers.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-white/80" />
                <span className="text-sm font-medium text-white">
                  {duration} min
                </span>
              </div>
            </div>

            {/* Action Button */}
            <Button
              size="sm"
              className={cn(
                "font-medium",
                isLive
                  ? "bg-white text-red-600 hover:bg-white/90"
                  : "bg-white text-blue-600 hover:bg-white/90"
              )}
              asChild
            >
              <Link href={link}>{isLive ? "Join Now" : "Remind Me"}</Link>
            </Button>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-white hover:bg-white/20"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Live Progress Bar */}
          {isLive && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
              <motion.div
                className="h-full bg-linear-to-r from-yellow-400 to-orange-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration * 60, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Variant for multiple events
export function LiveEventsCarousel() {
  const [currentEvent, setCurrentEvent] = useState(0);

  const events = [
    {
      id: 1,
      eventName: "Digital Security Workshop",
      time: "Today, 2:00 PM EAT",
      link: "/events/digital-security-workshop",
      viewers: 254,
      duration: 90,
      speaker: "Sarah Johnson",
    },
    {
      id: 2,
      eventName: "Climate Journalism Panel",
      time: "Tomorrow, 10:00 AM EAT",
      link: "/events/climate-journalism",
      viewers: 189,
      duration: 60,
      speaker: "Dr. Michael Chen",
    },
    {
      id: 3,
      eventName: "Media Literacy Webinar",
      time: "Friday, 3:00 PM EAT",
      link: "/events/media-literacy",
      viewers: 312,
      duration: 75,
      speaker: "Lisa Rodriguez",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40">
      <LiveIndicator {...events[currentEvent]} />
      <div className="flex justify-center gap-2 mt-2">
        {events.map((_, idx) => (
          <Button
            key={idx}
            className={cn(
              "h-1.5 rounded-full transition-all",
              idx === currentEvent ? "w-6 bg-blue-500" : "w-1.5 bg-gray-400/50"
            )}
            onClick={() => setCurrentEvent(idx)}
          />
        ))}
      </div>
    </div>
  );
}
