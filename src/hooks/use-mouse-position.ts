// src/hooks/use-mouse-position.ts
"use client";

import { useState, useEffect } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}

// src/utils/icon-map.ts
import * as LucideIcons from "lucide-react";

export const iconMap: Record<string, any> = {
  Newspaper: LucideIcons.Newspaper,
  Shield: LucideIcons.Shield,
  Globe: LucideIcons.Globe,
  Play: LucideIcons.Play,
  ArrowRight: LucideIcons.ArrowRight,
  ExternalLink: LucideIcons.ExternalLink,
  Download: LucideIcons.Download,
  ShieldCheck: LucideIcons.ShieldCheck,
  Users: LucideIcons.Users,
  Zap: LucideIcons.Zap,
  GraduationCap: LucideIcons.GraduationCap,
  Scale: LucideIcons.Scale,
  BarChart3: LucideIcons.BarChart3,
  Circle: LucideIcons.Circle,
  Award: LucideIcons.Award,
  TrendingUp: LucideIcons.TrendingUp,
  Phone: LucideIcons.Phone,
  AlertTriangle: LucideIcons.AlertTriangle,
  // Add all icons you need
};

export function getIconComponent(iconName: string) {
  return iconMap[iconName] || iconMap.Newspaper;
}
