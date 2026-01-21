// components/ui/announcement-bar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  X,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type AnnouncementVariant =
  | "default"
  | "info"
  | "success"
  | "warning"
  | "urgent";

interface AnnouncementBarProps {
  message: string;
  link?: string;
  cta?: string;
  variant?: AnnouncementVariant;
  closable?: boolean;
  autoCloseAfter?: number; // in seconds
}

const variantConfig = {
  default: {
    icon: Info,
    bg: "bg-gradient-to-r from-blue-600 to-blue-700",
    iconColor: "text-blue-200",
  },
  info: {
    icon: Info,
    bg: "bg-gradient-to-r from-blue-600 to-cyan-600",
    iconColor: "text-blue-200",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-gradient-to-r from-emerald-600 to-green-600",
    iconColor: "text-emerald-200",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-gradient-to-r from-amber-600 to-orange-600",
    iconColor: "text-amber-200",
  },
  urgent: {
    icon: AlertTriangle,
    bg: "bg-gradient-to-r from-red-600 to-rose-600 animate-pulse",
    iconColor: "text-red-200",
  },
} as const;

export function AnnouncementBar({
  message,
  link,
  cta = "Learn more",
  variant = "default",
  closable = true,
  autoCloseAfter,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = variantConfig[variant].icon;

  // Auto close functionality
  useState(() => {
    if (autoCloseAfter) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, autoCloseAfter * 1000);
      return () => clearTimeout(timer);
    }
  });

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "relative z-50 w-full",
        variantConfig[variant].bg,
        "text-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Icon
              className={cn(
                "h-4 w-4 shrink-0",
                variantConfig[variant].iconColor
              )}
            />
            <div className="flex items-center gap-4 flex-1">
              <span className="text-sm font-medium truncate">{message}</span>

              {link && (
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "hidden sm:inline-flex text-sm h-7 px-3",
                    variant === "urgent"
                      ? "bg-white/20 hover:bg-white/30 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                  asChild
                >
                  <Link href={link}>
                    {cta}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Countdown for auto-close */}
          {autoCloseAfter && (
            <div className="hidden md:flex items-center gap-2 mr-4">
              <Clock className="h-3 w-3 opacity-80" />
              <span className="text-xs opacity-80">
                Auto-closes in {autoCloseAfter}s
              </span>
            </div>
          )}

          {/* Close button */}
          {closable && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-6 w-6 ml-2 shrink-0",
                variant === "urgent" ? "hover:bg-white/30" : "hover:bg-white/20"
              )}
              onClick={() => setIsVisible(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Progress bar for auto-close */}
      {autoCloseAfter && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/30 overflow-hidden">
          <div
            className="h-full bg-white/60 transition-all duration-1000 ease-linear"
            style={{
              width: isVisible ? "100%" : "0%",
              transition: `width ${autoCloseAfter}s linear`,
            }}
          />
        </div>
      )}
    </div>
  );
}

// Example usage variations
export function EmergencyAnnouncement() {
  return (
    <AnnouncementBar
      message="🚨 Emergency Support Fund Now Open for Journalists in Crisis Zones"
      link="/grants/emergency-support"
      cta="Apply Now"
      variant="urgent"
      closable={false}
    />
  );
}

export function TrainingAnnouncement() {
  return (
    <AnnouncementBar
      message="🎓 Digital Security Workshop: Join our free training this Thursday"
      link="/events/digital-security-workshop"
      cta="Register Now"
      variant="info"
      autoCloseAfter={30}
    />
  );
}

export function SuccessAnnouncement() {
  return (
    <AnnouncementBar
      message="✅ 2023 Impact Report Published: See how we supported 500+ journalists"
      link="/impact/annual"
      cta="Read Report"
      variant="success"
    />
  );
}
